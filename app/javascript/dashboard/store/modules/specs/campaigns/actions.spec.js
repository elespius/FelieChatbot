import axios from 'axios';
import campaignStoreModule from '../../campaigns';
import * as types from '../../../mutation-types';
import campaignList from './fixtures';

const commit = jest.fn();
global.axios = axios;
jest.mock('axios');
const { actions } = campaignStoreModule;

describe('#actions', () => {
  describe('#create', () => {
    it('sends correct actions if API is success', async () => {
      axios.post.mockResolvedValue({ data: campaignList[0] });
      await actions.create({ commit }, campaignList[0]);
      expect(commit.mock.calls).toEqual([
        [types.default.SET_CAMPAIGN_UI_FLAG, { isCreating: true }],
        [types.default.ADD_CAMPAIGN, campaignList[0]],
        [types.default.SET_CAMPAIGN_UI_FLAG, { isCreating: false }],
      ]);
    });
    it('sends correct actions if API is error', async () => {
      axios.post.mockRejectedValue({ message: 'Incorrect header' });
      await expect(actions.create({ commit })).rejects.toThrow(Error);
      expect(commit.mock.calls).toEqual([
        [types.default.SET_CAMPAIGN_UI_FLAG, { isCreating: true }],
        [types.default.SET_CAMPAIGN_UI_FLAG, { isCreating: false }],
      ]);
    });
  });
});
