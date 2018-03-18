let store = { drivers: [] }
let id = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++id;
    store.drivers.push(this)
  }
}
