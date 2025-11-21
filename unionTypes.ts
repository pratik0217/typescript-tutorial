console.log("");
console.log("--- Union type ---");

let name:string | undefined = "Sanika";
console.log(name);

const familyName = (father:string, mother:string, wife:string|undefined|boolean):unknown => {
    if(father === "string") {
        return `FatherName : ${father}`;
    }

    if(mother === "string") {
        return `MotherName : ${mother}`;
    }

    if(wife === true) {
        return `WifeName : ${wife}`;
    } else {
        return "not Married now";
    }
}

console.log(familyName("Nandkumar","Shaila",false));