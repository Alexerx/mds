/**
 * Stack
 */
class Stack {
  constructor() {
      this.dataStore = [];
      this.top = 0;
  }

  push(ele) {
      this.dataStore[this.top++] = ele;
  }

  // 弹出顶端元素
  pop() {
      return this.dataStore[--this.top];
  }

  // 返回顶端元素
  peek() {
      return this.dataStore[this.top-1]
  }

  length() {
      return this.top;
  }

  clear() {
      delete this.dataStore;
      this.dataStore = [];
      this.top = 0;
  }
}

module.exports = Stack;