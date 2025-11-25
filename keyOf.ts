type personT = {
    name:string;
    numberX:number
}

let personData:personT = {
    name:"Pratik jadhav",
    numberX:10,
}

type personX = keyof personT;
let personDataX:personX;
personDataX="name";
personDataX="numberX";
// personDataX="email";