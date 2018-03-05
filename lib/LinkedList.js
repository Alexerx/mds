/**
 * Linked list 链表
 */
class LLNode {
  constructor(ele) {
      this.element = ele;
      this.next = null;
  }

  equal(ele) {
      let a = this.element;
      let b = ele;

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
}


class LinkedList {
  constructor() {
      this.head = new LLNode('head');
  }

  head() {
      return this.head;
  }

  // 根据节点内容查找节点
  find(item) {
      let curNode = this.head;
      while(!curNode.equal(new LLNode(item))) {
          curNode = curNode.next;
      }
      return curNode;     // 找到返回结点，未找到返回null
  }

  // 在item节点后插入节点
  insert(newElement, item) {
      let newNode = new LLNode(newElement);
      let curNode = this.find(item);

      // 若无item节点，则在链表末尾插入
      if(!curNode) {
          curNode = this.head;
          while(curNode.next) {
              curNode = curNode.next
          }
      }

      newNode.next = curNode.next;
      curNode.next = newNode;
  }

  display() {
      let curNode = this.head;
      while(curNode.next) {
          console.log(curNode.next.element);
          curNode = curNode.next;
      }
  }

  // 查找元素的前一节点
  findPrev(item) {
      let curNode = this.head;
      while(curNode.next && !curNode.next.equal(new LLNode(item))) {
          curNode = curNode.next;
      }
      return curNode;
  }

  remove(item) {
      let preNode = this.findPrev(item);
      if(preNode.next) preNode.next = preNode.next.next;
  }
}

module.exports = exports = {
  LLNode,
  LinkedList,
}