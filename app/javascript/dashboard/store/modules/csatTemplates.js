import Vue from 'vue';
import * as MutationHelpers from 'shared/helpers/vuex/mutationHelpers';
import types from '../mutation-types';
import CsatTemplatesAPI from '../../api/csatTemplates';

export const state = {
  records: [],
  csat_template_enabled: false,
  inboxes_for_select: [],
  current_template_id: 0,
  current_template: {},
};

export const getters = {
  records(_state) {
    return _state.records;
  },
  csatTemplateEnabled(_state) {
    return _state.csat_template_enabled;
  },
  inboxesForSelect(_state) {
    return _state.inboxes_for_select;
  },
  getCurrentTemplateId(_state) {
    return _state.current_template_id;
  },
  getCurrentTemplate(_state) {
    return _state.current_template;
  },
};

export const actions = {
  get: async function get({ commit }) {
    const response = await CsatTemplatesAPI.get({ page: 1 });
    commit(types.SET_CSAT_TEMPLATES, response.data.payload);
  },
  create: async function create({ commit }, params) {
    try {
      const response = await CsatTemplatesAPI.create(params);
      commit(types.CREATE_CSAT_TEMPLATE, response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getStatus: async function getStatus({ commit }) {
    const response = await CsatTemplatesAPI.getStatus();
    commit(types.ENABLE_CSAT_TEMPLATES, response.data.status);
  },
  toggleSetting: async function toggleSetting({ commit }, status) {
    await CsatTemplatesAPI.toggleSetting(status);
    commit(types.ENABLE_CSAT_TEMPLATES, status);
  },
  getInboxes: async function getInboxes({ commit }) {
    const response = await CsatTemplatesAPI.getInboxes();
    commit(types.SET_CSAT_INBOXES, response.data.inboxes);
  },
  getCsatTemplate: async function getCsatTemplate({ commit }, id) {
    const response = await CsatTemplatesAPI.getTemplate(id);
    commit(types.SET_CURRENT_TEMPLATE_ID, id);
    commit(types.SET_CSAT_TEMPLATE, response.data.csat_template);
  },
  delete: async function deleteTemplate({ dispatch }, id) {
    const response = await CsatTemplatesAPI.delete(id);
    if (response.data.success) {
      dispatch('get');
    }
  },
};

export const mutations = {
  [types.ENABLE_CSAT_TEMPLATES]($state, status) {
    Vue.set($state, 'csat_template_enabled', status);
  },
  [types.SET_CSAT_INBOXES]($state, inboxes) {
    Vue.set($state, 'inboxes_for_select', inboxes);
  },
  [types.SET_CURRENT_TEMPLATE_ID]($state, id) {
    Vue.set($state, 'current_template_id', id);
  },
  [types.SET_CSAT_TEMPLATE]($state, template) {
    Vue.set($state, 'current_template', template);
  },

  [types.SET_CSAT_TEMPLATES]: MutationHelpers.set,
  [types.CREATE_CSAT_TEMPLATE]: MutationHelpers.create,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
