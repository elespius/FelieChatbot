function specHelper() {
  beforeEach(() => {
    this.originalAxios = window.axios;
    this.axiosMock = {
      post: jest.fn(() => Promise.resolve()),
      get: jest.fn(() => Promise.resolve()),
      patch: jest.fn(() => Promise.resolve()),
    };
    window.axios = this.axiosMock;
  });

  afterEach(() => {
    window.axios = this.originalAxios;
  });
}
// https://stackoverflow.com/a/59344023/3901856
const sharedWrapper = describe('sharedWrapper', () => {});
export default function apiSpecHelper(skillName, testFn) {
  return describe(skillName, function configureContext() {
    function Context() {}
    Context.prototype = sharedWrapper.ctx;
    this.ctx = new Context();
    specHelper.call(this);
    testFn.call(this, this);
  });
}
