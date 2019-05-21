
class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    let dateVariable = new Date(year, 0);
    // let variableYear = year.getFullYear();
    // let startYear = this.startDate.getFullYear();
    return dateVariable - this.startDate;
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
}
