class Vehicle{
  constructor(driver, topSpeed){
    this._driver = driver;
    this._topSpeed = topSpeed;
  }

  get driver(){
    return this._driver;
  }
  set driver(driver){
    this._driver = driver;
  }

  get topSpeed(){
    return this._topSpeed;
  }

  set topSpeed(topSpeed){
    this._topSpeed = topSpeed
  }

}

class Car extends Vehicle{
  constructor(driver, topSpeed){
    super(drive, topSpeed)
  }
}

class Truck extends Vehicle{
  constructor(driver, topSpeed){
    super(drive, topSpeed)
  }
}

class Minivan extends Vehicle{
  constructor(driver, topSpeed){
    super(driver, topSpeed)
  }
}

function returnVehicleType(theTypeOfVehicle){

  if(typeof theTypeOfVehicle !== 'string'){
    throw new TypeError('Needs to be word in strgin format');
  }

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