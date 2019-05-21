let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];




class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    let dateVariable = new Date(year, 0);
    let variableYear = dateVariable.getFullYear();
    let startYear = this.startDate.getFullYear();
    return variableYear - startYear;
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    verticalBlocks = this.beginningLocation.vertical - this.endingLocation.vertical;
    horizontalStart = eastWest.indexof(this.beginningLocation.horizontal);
    horizontalEnd = eastWest.indexof(this.endingLocation.horizontal);
    horizontalBlocks = horizontalStart - horizontalEnd;
    return verticalBlocks + horizontalBlocks;
  }
}
