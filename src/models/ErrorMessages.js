export default class ErrorMessages {
  constructor() {
    this.messages = [];
    this.lastCount = 0;
  }
  getCount() {
    return this.messages.length;
  }
  setCount() {
    console.log(this.lastCount, this.getCount());
    this.lastCount = this.getCount();
  }
  push(message) {
    this.messages.push(message);
  }

  // isNewMessage() {
  //   if (this.messages.length > this.lastMessagesLength) {
  //     return true;
  //   }
  //   return false;
  // },
  // isNewMessage(newMessage, popupTrigger) {
  //   if (newMessage) {
  //     this.lastMessagesLength = this.messages.length;
  //     // this.popupTriggers.errorsTrigger = true;
  //     popupTrigger = true;
  //   }
  // },
}
