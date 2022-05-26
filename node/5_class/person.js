class Person{
    constructor(name,age){
        this.name = name;
        this.myage = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.myage}`);
    }
}

module.exports = Person;