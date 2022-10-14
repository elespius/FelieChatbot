/* global axios */
import ApiClient from '../ApiClient';

class PortalsAPI extends ApiClient {
  constructor() {
    super('portals', { accountScoped: true });
  }

  updatePortal({ portalSlug, portalObj }) {
    return axios.patch(`${this.url}/${portalSlug}`, portalObj);
  }

  deletePortal(portalSlug) {
    return axios.delete(`${this.url}/${portalSlug}`);
  }

}

export default PortalsAPI;
