/**
 * List
 */
class List {
  constructor() {
      this.listSize = 0;
      this.position = 0;
      this.listData = [];
  }

  static equal(a, b) {
      if((typeof a !== 'object') || (typeof b !== 'object')) {
          return a === b;
      }
      
      let aKeys = Object.keys(a);
      let bKeys = Object.keys(b);

      if(aKeys.length !== bKeys.length) return false;

      for(let i = 0, len = aKeys.length; i < len; i++) {
          if(aKeys[i] !== bKeys[i]) return false;

          if(!List.equal(a[aKeys[i]], b[bKeys[i]])) return false;
      }

      return true;
  }

  append(ele) {
      this.listData[this.listSize++] = ele;
  }

  find(ele) {
      for(let i = 0, len = this.listData.length; i < len; i++) {
          if(List.equal(this.listData[i], ele)) {
              return i;
          }
      }
      return -1;
  }

  remove(ele) {
      let index = this.find(ele);
      if(index > -1) {
          let rE = this.listData.splice(index, 1);
          --this.listSize;
          // 返回被删除元素
          return rE;
      }
      return false;
  }

  length() {
      return this.listSize;
  }

  toString() {
      return this.listData;
  }

  insert(ele, after) {
      after = after || this.listData[this.listSize-1];
      let insertIndex = this.find(after);
      if(insertIndex > -1) {
          this.listData.splice(insertIndex+1, 0, ele);
          ++this.listSize;
          return true;
      }
      return false;
  }

  clear() {
      delete this.listData;   // 删除属性
      this.listData = [];     // 重新定义
      this.listSize = this.position = 0;
  }

  contains(ele) {
      return !this.find(ele) === -1;
  }

  front() {
      this.position = 0;
  }

  end() {
      this.position = this.listSize - 1;
  }

  prev() {
      if(this.position > 0) --this.position;
  }

  next() {
      if(this.position < this.listSize - 1) ++this.position;
  }

  currentPosition() {
      return this.position;
  }

  moveTo(position) {
      this.position = this.position;
  }

  getElement() {
      return this.listData[this.position];
  }
}

module.exports = List;