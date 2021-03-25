class Person {
    // default value defined in the argument
    constructor(name ='Anonymous', age='0'){
        //this refers to the class instance
        this.name= name;
        this.age = age;
    } //no comma
    //method is not implicitedly called in each instance
    //needs to be explicitedly called
    getGreeting() {
        // return 'Hi! I am '+ this.name + '!';
        // Template strings using back ticks``
        // can inject values or functions inside the string
        // with $ ... no need to concatenate with +
        return`Hi I am ${this.name}!`
    }
    //method will override parent method of same name
    getDescription(){
       return `${this.name} is ${this.age} year(s) old.`  
    }
}

class Student extends Person {
    constructor (name, age, major){
        //super calls the parent constructor function with default data
        super(name, age);
        this.major = major;

    }
    hasMajor() {
        // double not returns true from a string if it has a value
        return !!this.major
    }
    getDescription(){
        // let because description value can change
        let description = super.getDescription();
        if (this.hasMajor()) {
            //+= same as description = deascription + string
            description += ` Their major is ${this.major}.`

        }
        return description
    }

}

class Traveller extends Person{
    constructor (name, age, location){
    super(name, age);
    this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getDescription(){
        // let because description value can change
        let description = super.getDescription();
        if (this.hasLocation()) {
            //+= same as description = deascription + string
            description += ` Their location is ${this.location}.`

        }
        return description
    }

}

const me = new Traveller('Roger Graham', 53, 'Tampere');
// console.log(me.getGreeting());
console.log(me.getDescription());
//no argument provided so default value returned
const other = new Traveller();
// console.log(other.getGreeting());
console.log(other.getDescription());
