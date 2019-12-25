class MyStorage {
  constructor() {
    this.prefix = "pro_";
    this.storage = window.localStorage;
  }

  // exp/秒，默认 60 * 60 * 24 = 1 天
  set(key, value, exp = 60 * 60 * 24) {
    const timestamp = Date.now();
    const data = JSON.stringify({ value, exp, timestamp });
    const prefixKey = this.prefix + key;
    this.storage.setItem(prefixKey, data);
  }

  get(key) {
    const prefixKey = this.prefix + key;
    let data = this.storage.getItem(prefixKey);
    if (!data) {
      return false;
    }
    data = JSON.parse(data);
    const exp = data.exp * 1000;
    const { timestamp } = data;
    const { value } = data;
    const dataNow = Date.now();
    if (dataNow > timestamp + exp) {
      this.delete(key);
      return false;
    }
    return value;
  }

  delete(key) {
    const prefixKey = this.prefix + key;
    this.storage.removeItem(prefixKey);
  }
}

export default MyStorage;
