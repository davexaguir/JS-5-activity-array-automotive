//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car  extends VehicleModule {
    constructor(make, model, year, color, mileage) { 
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passengers = 0;
    this.numberOfWheels = 4; 
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
}


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
loadPassenger(num) {
    if (this.passenger < this.maximumPassenger) {
        if((num + this.passenger) <= this.maximumPassengers) {
            this.passenger = num;
            return this.passenger; 
        } else {
            console.log(this.model + " " + this.make + " not have enough space tot take all passengers.");

        }
    } else {
        console.log(this.model + " " + this.make + " is full");
    }
    }
}

start() {
    if (this.fuel > 0) {
        return this.started = true;
        console.log("engine has started.");
    } else {
        return this.started = false;
        console.log("no fuel.");
    }
}

scheduleService() {
    if (thiismileage > 30000) { 
        this.scheduleService = true
        return this.scheduleService;
    }
}



//TO DO: Creating Instances and Testing Them
let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)
//You can use the same instance "v" of the Vehicle class above for the base class.
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.scheduleService()

console.log(myCar)




//Create at least two new instances of the Car class and test them here:
