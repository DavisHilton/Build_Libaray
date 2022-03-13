 //step 1
class Media { 
  constructor(title) {             //stept 2 we don't add ischeckedout or ratings as
                                   //perameters bc we hard coded values to them
    this._title = title;           
    this._isCheckedOut = false;   //step 3 : We use ._value to differate
    this._ratings = [];          // the constructor value from get/set method name
  }
  get title() {                  //step 4
    return this._title;          //get allows you to get what yo put for new 
  }                             // intance of an object
  get isCheckedOut() {          // Thiis is an intance:
    return this._isCheckedOut;  //   let person = new Person("Jane Doe", false);
  }
  get ratinges() {
    return this._ratings;
  }
  set isCheckedOut(value) {      //step 5
    this._isCheckedOut = value;  // set allows you to set/change what you put 
  }                              // for new intance of an object

  toggleCheckOutStatus() { 
    this.isCheckedOut = !this.isCheckedOut;   //step 6
  }                                           //will toggle this if checked out 
                                             // or checked in.(use "!" for not)
                          // based off the get not costructor that why " _" not used
  getAverageRatings() {    
    let ratingsSum = this._ratings.reduce(                  //step 7
      (accumulator, ratings) => accumulator + ratings);    //use .reduce()
    
    return ratingsSum / this._ratings.length; //retruns avg of rating sum(dn't forget "_")
  }
addRating (value){                     //step 8
 this.ratinges.push(value);           // add new value to ratings array
                                     // don't use setter bc want to add to
                                    // rating not change/replace it.
  }
};

class Book extends Media{                        //step 9  BOOK sub class
    constructor (author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }

    get author(){
      return this._author;
    }

    get pages(){
      return this._pages;
    }

}

class Moive extends Media{                        //step 14 BOOK MOIVE class
  constructor (director, title, runtime){
    super(title);
    this._director = director;
    this._runTime = runtime;
}

get director(){
  return this._director;
}

get runTime(){
  return this._runTime;
}


}

class CD extends Media{                        //step 25 CD sub class
  constructor (artist, title){
    super(title);
    this._artist= artist; 
}

get artist(){
  return this._artist;
}


}


//Create a Book intance (step 15)
console.log("================================")
console.log("===    BOOK instance         ===")
console.log("================================")

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything', 544 );
console.log(historyOfEverything);

historyOfEverything.toggleCheckOutStatus();                        // step 17   true for book checked out 
console.log(historyOfEverything.isCheckedOut);                     // (it was initally set to false)  
//Want to get the ratings avg so add 3 of them and get avg.
// need to add to rating array 1st then get avg.
historyOfEverything.addRating(4);                       // step 18 list or ratings
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRatings());     //step 19 average rating


console.log("================================")
console.log("===    Movie instance        ===")
console.log("================================")

let speed = new Moive('Jan de Bont','Speed', 116);        // step 20
console.log(speed);  
                                                         
speed.toggleCheckOutStatus();                           // step 21  true for moive checked out 
console.log(speed.isCheckedOut);                        // (it was initally set to false)

speed.addRating(1);                                    // step 22-23 add to rating array/list
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRatings());               //step 24 get averge by calling




console.log("================================")
console.log("===    CD instance           ===")
console.log("================================")
