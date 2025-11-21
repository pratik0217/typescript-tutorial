console.log("Array & tuple Datatype");

let frontendlang: string[] = ["React", "Javascript","HTML","CSS", "Tailwind CSS", "Typescript","Bootstrap"];

// console.log(frontendlang[2])
frontendlang.push("Anguler");

for(let i=0; i<frontendlang.length; i++) {
    console.log(i, frontendlang[i])
}
console.log("");

// This way also declare Array
let backendLang:Array<string> = ["Java", "Node.js","Next.js","MongoDB", "MySQL"];

for(let j=0; j<backendLang.length; j++) {
    console.log(j, backendLang[j])
}

console.log("");
console.log("Tuple Array datatype");

let tupleArray: [number, string, string, number] = [1,"Pratik Jadhav","Computer Science Engineering",7038302915];

tupleArray.push("Pune");

console.log(tupleArray);

for(let k=0; k<tupleArray.length; k++) {
    console.log(k, tupleArray[k])
}