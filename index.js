let store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this)
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this)
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
    store.trips.push(this)
  }

  get driver() {
    return this.d
  }

  get passenger() {
    return this.p
  }
}
