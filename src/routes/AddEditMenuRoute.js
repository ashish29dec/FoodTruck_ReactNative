var EventEmitter = require('EventEmitter');

export default class AddEditMenuRoute {
  constructor(screenInstanceId) {
    this.emitter = new EventEmitter();
    this.screenInstanceId = screenInstanceId;
  }
}
