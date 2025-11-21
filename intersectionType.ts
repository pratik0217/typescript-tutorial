console.log("");
console.log("--- IntersectionType ---");

type personNameData = {name:string}
type personAgeData = {age:number}

type personData = personNameData & personAgeData;

let getPersonData:personData = {name:"Pratik Nandkumar Jadhav", age:23}
console.log(getPersonData); 