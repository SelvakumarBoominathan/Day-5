// Write a “person” class to hold all the details.

class Person {

  constructor(name, age, city) {
    this.person_name = name;
    this.person_age = age;
    this.person_city = city;
  }

  person_Work(position, YOE, company) {
    return ({
      name: `${this.person_name}`,
      position: position,
      experience: `${YOE} Years`,
      company: company
    })
  }

  person_education(degree, YOP) {
    return ({ Degree: degree, year_of_passedout: YOP })
  }

  Details(position) {
    console.log(`Name: ${this.person_name}, Age: ${this.person_age}, City: ${this.person_city}, position: ${position}`);
  }

}

const person_1 = new Person("Vijay", 26, "Trichy");
console.log(person_1)

console.log(person_1.person_Work("MTS", 4, "TCS"));

console.log(person_1.person_education("Mechanical Engineering", 2020));

person_1.Details("MTS");





