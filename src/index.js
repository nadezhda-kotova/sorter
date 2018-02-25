class Sorter {
  constructor() {
    this.array = [];
    this._length = this.array.length;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var items = [];
    for (let i = 0; i <= indices.length; i++) {
      items.push(this.array[indices[i]]);
    }
    items.sort()
    indices.sort()
    for (let i = 0; i < indices.length; i++) {
      this.array[indices[i]] = items[i];
    }
  }

  setComparator(compareFunction) {
    compareFunction(a,b)
    {
      if (a == b)
      return 0;
      if  (a > b)
      return 1;
      else
      return -1;
    }
    reverseCompareFunction = (left, right) => right - left;
  sorter.setComparator(reverseCompareFunction);}
  

}

module.exports = Sorter;
