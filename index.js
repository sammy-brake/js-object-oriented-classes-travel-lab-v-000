
class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    let dateVariable = new Date(year, 0);
    variableYear = year.getYear();
    startYear = this.startDate.getYear();
    return variableYear - startYear;
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
}
