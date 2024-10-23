import * as MutationHelpers from 'shared/helpers/vuex/mutationHelpers';
import types from '../mutation-types';
import CustomViewsAPI from '../../api/customViews';

const VIEW_TYPES = {
  CONVERSATION: 'conversation',
  CONTACT: 'contact',
};

const FILTER_KEYS = [VIEW_TYPES.CONVERSATION, VIEW_TYPES.CONTACT];

export const state = {
  records: [],
  // adding a new records array, this is added with
  // the next sidebar changes and will be used to
  // separate contact and conversation custom views
  // We can continue to use this in the future in favor of
  // the previous records array
  [VIEW_TYPES.CONVERSATION]: {
    records: [],
  },
  [VIEW_TYPES.CONTACT]: {
    records: [],
  },
  uiFlags: {
    isFetching: false,
    isCreating: false,
    isDeleting: false,
  },
  activeConversationFolder: null,
};

export const getters = {
  getUIFlags(_state) {
    return _state.uiFlags;
  },
  getCustomViews(_state) {
    return _state.records;
  },
  getCustomViewsByFilterType: _state => filterType => {
    return _state.records.filter(record => record.filter_type === filterType);
  },
  getConversationCustomViews(_state) {
    return _state[VIEW_TYPES.CONVERSATION].records;
  },
  getContactCustomViews(_state) {
    return _state[VIEW_TYPES.CONTACT].records;
  },
  getActiveConversationFolder(_state) {
    return _state.activeConversationFolder;
  },
};

export const actions = {
  get: async function getCustomViews({ commit }, filterType) {
    commit(types.SET_CUSTOM_VIEW_UI_FLAG, { isFetching: true });
    try {
      const response =
        await CustomViewsAPI.getCustomViewsByFilterType(filterType);
      commit(types.SET_CUSTOM_VIEW, { data: response.data, filterType });
    } catch (error) {
      // Ignore error
    } finally {
      commit(types.SET_CUSTOM_VIEW_UI_FLAG, { isFetching: false });
    }
  },
  create: async function createCustomViews({ commit }, obj) {
    commit(types.SET_CUSTOM_VIEW_UI_FLAG, { isCreating: true });
    try {
      const response = await CustomViewsAPI.create(obj);
      commit(types.ADD_CUSTOM_VIEW, {
        data: response.data,
        filterType: FILTER_KEYS[obj.filter_type],
      });
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      throw new Error(errorMessage);
    } finally {
      commit(types.SET_CUSTOM_VIEW_UI_FLAG, { isCreating: false });
    }
  },
  update: async function updateCustomViews({ commit }, obj) {
    commit(types.SET_CUSTOM_VIEW_UI_FLAG, { isCreating: true });
    try {
      const response = await CustomViewsAPI.update(obj.id, obj);
      commit(types.UPDATE_CUSTOM_VIEW, {
        data: response.data,
        filterType: FILTER_KEYS[obj.filter_type],
      });
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      throw new Error(errorMessage);
    } finally {
      commit(types.SET_CUSTOM_VIEW_UI_FLAG, { isCreating: false });
    }
  },
  delete: async ({ commit }, { id, filterType }) => {
    commit(types.SET_CUSTOM_VIEW_UI_FLAG, { isDeleting: true });
    try {
      await CustomViewsAPI.deleteCustomViews(id, filterType);
      commit(types.DELETE_CUSTOM_VIEW, { data: id, filterType });
    } catch (error) {
      throw new Error(error);
    } finally {
      commit(types.SET_CUSTOM_VIEW_UI_FLAG, { isDeleting: false });
    }
  },
  setActiveConversationFolder({ commit }, data) {
    commit(types.SET_ACTIVE_CONVERSATION_FOLDER, data);
  },
};

export const mutations = {
  [types.SET_CUSTOM_VIEW_UI_FLAG](_state, data) {
    _state.uiFlags = {
      ..._state.uiFlags,
      ...data,
    };
  },

  [types.ADD_CUSTOM_VIEW]: (_state, { data, filterType }) => {
    MutationHelpers.create(_state, data);
    MutationHelpers.create(_state[filterType], data);
  },
  [types.SET_CUSTOM_VIEW]: (_state, { data, filterType }) => {
    // legacy setting, where we using a single records array
    MutationHelpers.set(_state, data);
    MutationHelpers.set(_state[filterType], data);
  },
  [types.UPDATE_CUSTOM_VIEW]: (_state, { data, filterType }) => {
    MutationHelpers.update(_state, data);
    MutationHelpers.update(_state[filterType], data);
  },
  [types.DELETE_CUSTOM_VIEW]: (_state, { data, filterType }) => {
    MutationHelpers.destroy(_state, data);
    MutationHelpers.destroy(_state[filterType], data);
  },

  [types.SET_ACTIVE_CONVERSATION_FOLDER](_state, folder) {
    _state.activeConversationFolder = folder;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations,
};
