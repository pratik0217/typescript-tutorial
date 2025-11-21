console.log("");
console.log("--- Interface ---");

interface collegeData {[key:string]:string | number | boolean | Array<string | number>}

// interface collegeData {
//     id:number,
//     name :string,
//     department:string,
//     phone :number,
//     address :string | Array<string>
// }


const touchingData:collegeData = {
    id:1,
    name : "Chide Madam",
    department: "Maths",
    phone : 7896541230,
    address : "Talegaon-Maval"
}
console.log(`Teacher Name : ${touchingData.name} and touching Subject : ${touchingData.department}.`);

const studentData:collegeData = {
    id:2,
    name : "Pratik Jadhav",
    department: "Computer science",
    phone : 7038302915,
    address : ["Street : Shri datt housing soc.","Landmark : Morewast","City : Pune", "Pincode : 411062"]
} 

console.log(studentData.address);