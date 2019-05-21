
class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = startDate;
  };

  startDate() {
    return new date(startDate);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
}
