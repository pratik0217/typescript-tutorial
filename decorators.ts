function nameOfClass(constructor:Function) {
    console.log(constructor);
}

@nameOfClass
class CustomClass {
    name:string = "This is custom class";
}

let cm = new CustomClass();
console.log(cm.name);