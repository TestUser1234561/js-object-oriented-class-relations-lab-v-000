let store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    this.t = [];
    this.p = [];
    store.drivers.push(this)
  }
  trips() {
    return this.t
  }

  passengers() {
    return this.p
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.t = [];
    this.d = [];
    this.id = ++passengerId;
    store.passengers.push(this)
  }

  trips() {
    return this.t
  }

  drivers() {
    return this.d
  }
}

class Trip {
  constructor(driver, passenger) {
    this.name = name;
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.d = driver;
    this.p = passenger;
    driver.t.push(this);
    driver.p.push(passenger);
    passenger.t.push(this);
    passenger.d.push(driver);
    store.trips.push(this)
  }

  driver() {
    return this.d
  }

  passenger() {
    return this.p
  }
}
