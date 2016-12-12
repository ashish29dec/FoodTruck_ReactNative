var EventEmitter = require('EventEmitter');

export default class SecondRoute {
  constructor(screenInstanceId) {
    this.emitter = new EventEmitter();
    this.screenInstanceId = screenInstanceId;
  }
}
