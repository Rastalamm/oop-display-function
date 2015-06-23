function Vehicle(driver,topSpeed){
  this.driver = driver;
  this.topSpeed = 55;
}

function Car(){
  Vehicle.call(this);
  this.driver = 'Judah';
  this.topSpeed = 133;
}

Car.prototype = Object.create(Vehicle.prototype,{
  constructor : {
    value : Vehicle
  }
})

function Truck(){
  Vehicle.call(this,driver,move);
  this.driver = 'Billy';
  this.topSpeed = 73;
}

Truck.prototype = Object.create(Vehicle.prototype,{
  constructor : {
    value : Vehicle
  }
})

function Minivan(){
  Vehicle.call(this);
  this.driver = 'Milky';
  this.topSpeed = 110;
}

Minivan.prototype = Object.create(Vehicle.protytype,{
  constructor : {
    value : Vehicle
  }
})

function returnVehicleType(theTypeOfVehicle){


  switch(theTypeOfVehicle.toLowerCase()){
    case 'car' :
      return new Car();
      break;

    case 'truck' :
      return new Truck();
      break;

    case 'minivan' :
      return new Minivan();
      break;

    default :
      return 'That vehicle is not recognized';
      break;
  }
}