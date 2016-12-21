var EventEmitter = require('EventEmitter');

export default class Route {
  constructor(screenInstanceId) {
    this.emitter = new EventEmitter();
    this.screenInstanceId = screenInstanceId;
  }
}
