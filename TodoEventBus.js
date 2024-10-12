// 싱글톤 패턴 대신, 객체에 프로퍼티를 제공하는 방식으로 해결 (발행-구독 패턴)
export const TodoEventBus = {
  listeners: {},

  subscribe(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  },

  publish(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(data));
    }
  },
};
