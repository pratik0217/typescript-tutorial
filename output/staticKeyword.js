console.log("---! Static Keyword in Typescript ---");
console.log("");
class Company {
    companyName = "Microsoft consulting Service";
    static favCompany(name) {
        console.log(name);
    }
}
console.log(Company.favCompany("Atus"));
let comp = new Company();
console.log(comp.companyName);
export {};
