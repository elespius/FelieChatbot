import Vue from 'vue';
import { getCampaigns } from 'widget/api/campaign';

const state = {
  records: [],
  uiFlags: {
    isError: false,
    hasFetched: false,
  },
};

export const getters = {
  getHasFetched: $state => $state.uiFlags.hasFetched,
  enabledCampaigns: $state =>
    $state.records.filter(campaign => campaign.enabled),
};

export const actions = {
  fetchCampaigns: async ({ commit }, websiteToken) => {
    try {
      const { data } = await getCampaigns(websiteToken);
      commit('setCampaigns', data);
      commit('setError', false);
      commit('setCampaigns', true);
    } catch (error) {
      commit('setError', true);
      commit('setHasFetched', true);
    }
  },
};

export const mutations = {
  setCampaigns($state, data) {
    Vue.set($state, 'records', data);
  },
  setError($state, value) {
    Vue.set($state.uiFlags, 'isError', value);
  },
  setHasFetched($state, value) {
    Vue.set($state.uiFlags, 'hasFetched', value);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
