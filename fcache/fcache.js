export class cache {
  constructor() {
    this._memory = [];
  }

  addOne(dog) {
    this._memory.push(dog);
  }

  addMany(dogs) {
    this._memory = this._memory.concat([...dogs]);
  }

  getAll() {
    return this._memory;
  }
}

