import { reactive } from "vue";

export default class ErrorMessages {
  static messages = reactive([]);
  static lastCount = reactive({ value: 0 });

  constructor() {}

  static getCount() {
    return this.messages.length;
  }
  static setCount() {
    this.lastCount.value = this.getCount();
  }
  static push(message) {
    this.messages.push(message);
  }
  static confirm() {
    this.messages.splice(0);
    this.setCount();
  }
}
