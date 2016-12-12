var EventEmitter = require('EventEmitter');

export default class AppModeRoute {
  constructor(screenInstanceId) {
    this.emitter = new EventEmitter();
    this.screenInstanceId = screenInstanceId;
  }
}
