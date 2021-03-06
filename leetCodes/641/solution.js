/**
 * @param {number} k
 */
const MyCircularDeque = function (k) {
  this._arr = new Array(k)
  this._head = 0
  this._tail = 0
  this._cnt = 0
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull())
    return false
  this._head = this._head - 1
  if (this._head === -1)
    this._head = this._arr.length - 1
  this._arr[this._head] = value
  this._cnt += 1
  return true
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull())
    return false
  this._arr[this._tail] = value
  this._tail += 1
  if (this._tail === this._arr.length)
    this._tail = 0
  this._cnt += 1
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty())
    return false
  this._head = (this._head + 1) % this._arr.length
  this._cnt -= 1
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty())
    return false
  this._tail = (this._tail - 1 + this._arr.length) % this._arr.length
  this._cnt -= 1
  return true
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty())
    return -1
  return this._arr[this._head]
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty())
    return -1
  return this._arr[(this._tail - 1 + this._arr.length) % this._arr.length]
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this._cnt === 0
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this._cnt === this._arr.length
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
