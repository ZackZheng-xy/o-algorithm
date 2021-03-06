/**
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  this._arr = new Array(k)
  this._head = 0
  this._tail = 0
  this._cnt = 0
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull())
    return false
  this._arr[this._tail] = value
  this._tail = (this._tail + 1) % this._arr.length
  this._cnt += 1
  return true
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty())
    return false
  this._head = (this._head + 1) % this._arr.length
  this._cnt -= 1
  return true
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty())
    return -1
  return this._arr[this._head]
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty())
    return -1
  // let ind = this._tail - 1
  // if(ind === -1) ind = this._arr.length - 1
  // return arr[ind]
  return this._arr[(this._tail - 1 + this._arr.length) % this._arr.length]
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this._cnt === 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this._cnt === this._arr.length
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
