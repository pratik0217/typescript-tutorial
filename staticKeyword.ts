console.log("---! Static Keyword in Typescript ---");
console.log("");

class Company {
    companyName:string = "Microsoft consulting Service"

    static favCompany(name:string):void { // static part of class not object when define static
        console.log(name);
    }
}

console.log(Company.favCompany("Atus")); 

let comp = new Company();
console.log(comp.companyName)