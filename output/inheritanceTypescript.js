class Parent {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
// Child class inherits Parent
class Child extends Parent {
    age;
    constructor(name, age) {
        super(name); // call parent constructor
        this.age = age;
    }
    showAge() {
        console.log(`I am ${this.age} years old`);
    }
}
const c = new Child("Pratik", 25);
c.greet(); // Hello, my name is Pratik
c.showAge(); // I am 25 years old
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}
const d = new Dog();
d.speak(); // Dog barks
export {};
