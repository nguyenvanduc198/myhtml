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

// Define a Teacher class which has constructor similar as person
// There are 1 new method which is:
// calculateExperience() -> get the age and minus 22. If age < 22 then experience isi 0
// showInfo() -> show a text including name and age and experience

class Teacher extends Person {
    constructor(name, dob) {
        super(name, dob);
        this.calculateExperience();
    }

    calculateExperience() {
        if (this.age - 22 > 0) {
            this.experience = this.age - 22;
            return;
        }
        this.experience = 0;
    }

    showInfo() {
        console.log(
            `This is teacher ${this.name}, ${this.age} years old and has ${this.experience} years of experiences`
        );
    }
}
