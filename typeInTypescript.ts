console.log("");
console.log("--- Type in Typescript ---");

type nameData = {name:string}
type phoneNumData = {phoneNum:number}

type getData = nameData & phoneNumData;

const data:getData = {
    name:"Pratik Jadhav",
    phoneNum:7038302915
}  

console.log(data.name)