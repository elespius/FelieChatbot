import teamsAPI from '../teams';
import ApiClient from '../ApiClient';

describe('#TeamsAPI', () => {
  it('creates correct instance', () => {
    expect(teamsAPI).toBeInstanceOf(ApiClient);
    expect(teamsAPI).toHaveProperty('get');
    expect(teamsAPI).toHaveProperty('show');
    expect(teamsAPI).toHaveProperty('create');
    expect(teamsAPI).toHaveProperty('update');
    expect(teamsAPI).toHaveProperty('delete');
    expect(teamsAPI).toHaveProperty('getAgents');
    expect(teamsAPI).toHaveProperty('addAgents');
    expect(teamsAPI).toHaveProperty('updateAgents');
  });
  describe('API calls', context => {
    it('#getAgents', () => {
      teamsAPI.getAgents({ teamId: 1 });
      expect(axios.get).toHaveBeenCalledWith('/api/v1/teams/1/team_members');
    });

    it('#addAgents', () => {
      teamsAPI.addAgents({ teamId: 1, agentsList: { user_ids: [1, 10, 21] } });
      expect(axios.post).toHaveBeenCalledWith('/api/v1/teams/1/team_members', {
        user_ids: { user_ids: [1, 10, 21] },
      });
    });

    it('#updateAgents', () => {
      const agentsList = { user_ids: [1, 10, 21] };
      teamsAPI.updateAgents({
        teamId: 1,
        agentsList,
      });
      expect(axios.patch).toHaveBeenCalledWith('/api/v1/teams/1/team_members', {
        user_ids: agentsList,
      });
    });
  });
});
