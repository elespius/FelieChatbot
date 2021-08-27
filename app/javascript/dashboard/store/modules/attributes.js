import * as MutationHelpers from 'shared/helpers/vuex/mutationHelpers';
import types from '../mutation-types';
import AttributeAPI from '../../api/custom_attribute_definitions';

export const state = {
  records: [],
  uiFlags: {
    isFetching: false,
    isCreating: false,
  },
};

export const getters = {
  getUIFlags(_state) {
    return _state.uiFlags;
  },
  getAttributes: _state => attributeType => {
    return _state.records.filter(
      record => record.attribute_type === attributeType
    );
  },
};

export const actions = {
  get: async function getAttributes({ commit }) {
    commit(types.SET_CUSTOM_ATTRIBUTES_UI_FLAG, { isFetching: true });
    try {
      const response = await AttributeAPI.get();
      commit(types.SET_CUSTOM_ATTRIBUTES, response.data);
    } catch (error) {
      // Ignore error
    } finally {
      commit(types.SET_CUSTOM_ATTRIBUTES_UI_FLAG, { isFetching: false });
    }
  },
  create: async function createAttribute({ commit }, attributeObj) {
    commit(types.SET_CUSTOM_ATTRIBUTES_UI_FLAG, { isCreating: true });
    try {
      const response = await AttributeAPI.create(attributeObj);
      commit(types.ADD_CUSTOM_ATTRIBUTES, response.data);
    } catch (error) {
      throw new Error(error);
    } finally {
      commit(types.SET_CUSTOM_ATTRIBUTES_UI_FLAG, { isCreating: false });
    }
  },
  update: async ({ commit }, { id, ...updateObj }) => {
    commit(types.SET_CUSTOM_ATTRIBUTES_UI_FLAG, { isUpdating: true });
    try {
      const response = await AttributeAPI.update(id, updateObj);
      commit(types.EDIT_CUSTOM_ATTRIBUTES, response.data);
    } catch (error) {
      throw new Error(error);
    } finally {
      commit(types.SET_CUSTOM_ATTRIBUTES_UI_FLAG, { isUpdating: false });
    }
  },
  delete: async ({ commit }, id) => {
    commit(types.SET_CUSTOM_ATTRIBUTES_UI_FLAG, { isDeleting: true });
    try {
      await AttributeAPI.delete(id);
      commit(types.DELETE_CUSTOM_ATTRIBUTES, id);
    } catch (error) {
      throw new Error(error);
    } finally {
      commit(types.SET_CUSTOM_ATTRIBUTES_UI_FLAG, { isDeleting: false });
    }
  },
};

export const mutations = {
  [types.SET_CUSTOM_ATTRIBUTES_UI_FLAG](_state, data) {
    _state.uiFlags = {
      ..._state.uiFlags,
      ...data,
    };
  },

  [types.ADD_CUSTOM_ATTRIBUTES]: MutationHelpers.create,
  [types.SET_CUSTOM_ATTRIBUTES]: MutationHelpers.set,
  [types.EDIT_CUSTOM_ATTRIBUTES]: MutationHelpers.update,
  [types.DELETE_CUSTOM_ATTRIBUTES]: MutationHelpers.destroy,
};

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations,
};
