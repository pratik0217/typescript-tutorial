console.log("");
console.log("-- Function Return type in Typescript! --");

let greet = ():string => {
    return "Weclome to the Typescript world";
}
let printGreet:string = greet();

let greetVoid = ():void => {
    
}

let printGreetVoid:string = greet();