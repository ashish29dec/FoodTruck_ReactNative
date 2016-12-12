class PropRegistry {
  constructor() {
    this.registry = {};
  }

  save(screenInstanceId = '', passProps = {}) {
    this.registry[screenInstanceId] = passProps;
  }

  load(screenInstanceId = '') {
    return this.registry[screenInstanceId] || {};
  }
}

export default new PropRegistry();
