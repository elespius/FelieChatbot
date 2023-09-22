import integrationAPI from '../integrations';
import ApiClient from '../ApiClient';

describe('#integrationAPI', () => {
  it('creates correct instance', () => {
    expect(integrationAPI).toBeInstanceOf(ApiClient);
    expect(integrationAPI).toHaveProperty('get');
    expect(integrationAPI).toHaveProperty('show');
    expect(integrationAPI).toHaveProperty('create');
    expect(integrationAPI).toHaveProperty('update');
    expect(integrationAPI).toHaveProperty('delete');
    expect(integrationAPI).toHaveProperty('connectSlack');
    expect(integrationAPI).toHaveProperty('updateSlack');
    expect(integrationAPI).toHaveProperty('updateSlack');
    expect(integrationAPI).toHaveProperty('listAllSlackChannels');
    expect(integrationAPI).toHaveProperty('deleteHook');
  });
  describe('API calls', context => {
    it('#connectSlack', () => {
      const code = 'SDNFJNSDFNDSJN';
      integrationAPI.connectSlack(code);
      expect(axios.post).toHaveBeenCalledWith('/api/v1/integrations/slack', {
        code,
      });
    });

    it('#updateSlack', () => {
      const updateObj = { referenceId: 'SDFSDGSVE' };
      integrationAPI.updateSlack(updateObj);
      expect(axios.patch).toHaveBeenCalledWith('/api/v1/integrations/slack', {
        reference_id: updateObj.referenceId,
      });
    });

    it('#listAllSlackChannels', () => {
      integrationAPI.listAllSlackChannels();
      expect(axios.get).toHaveBeenCalledWith(
        '/api/v1/integrations/slack/list_all_channels'
      );
    });

    it('#delete', () => {
      integrationAPI.delete(2);
      expect(axios.delete).toHaveBeenCalledWith('/api/v1/integrations/2');
    });

    it('#createHook', () => {
      const hookData = {
        app_id: 'fullcontact',
        settings: { api_key: 'SDFSDGSVE' },
      };
      integrationAPI.createHook(hookData);
      expect(axios.post).toHaveBeenCalledWith(
        '/api/v1/integrations/hooks',
        hookData
      );
    });

    it('#deleteHook', () => {
      integrationAPI.deleteHook(2);
      expect(axios.delete).toHaveBeenCalledWith('/api/v1/integrations/hooks/2');
    });
  });
});
