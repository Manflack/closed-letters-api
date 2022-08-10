export default class NotValidData extends Error {
    constructor(message: string) {
      super(message);
      Object.setPrototypeOf(this, NotValidData.prototype)
    }
  }