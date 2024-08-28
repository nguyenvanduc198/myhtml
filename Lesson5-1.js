// Define a Person class which has constructor receive 2 parameters name, date of birth as a string
// There are 2 methods which is:
// calculateAge() -> calculate age from dateOfBirth
// showInfo() -> show a text including name and age

class Person {
    constructor(name, dateOfBirth = "2000/1/1") {
        this.name = name;
        this.dob = new Date(dateOfBirth);
        this.calculateAge();
    }

    calculateAge() {
        this.age = new Date().getYear() - this.dob.getYear();
    }

    showInfo() {
        console.log(`This is ${this.name}, ${this.age} years old`);
    }
}
