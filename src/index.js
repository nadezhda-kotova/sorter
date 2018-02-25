class Sorter {
  constructor() {
    this.array = [];
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

module.exports = Sorter;
