/**
 * Queue
 */
class Queue {
  constructor() {
      this.dataStore = [];
      this.queueSize = 0;
  }

  enqueue(ele) {
      this.dataStore[this.queueSize++] = ele;
  }

  dequeue() {
      --this.queueSize;
      return this.dataStore.shift();
  }

  front() {
      return this.dataStore[0];
  }

  back() {
      return this.dataStore[this.queueSize-1];
  }

  toString() {
      let retStr = '';
      for(let i = 0, len = this.queueSize; i < len; i++) {
          retStr += this.dataStore[i] + '\n';
      }
  }

  isEmpty() {
      return this.queueSize === 0;
  }
}

module.exports = Queue;