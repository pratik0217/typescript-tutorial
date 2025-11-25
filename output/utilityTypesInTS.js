console.log("");
console.log("---! Utility Types");
const DYPEngineering = {
    collegeName: "D.Y. Patil School of Engineering & Technology",
    department: "Computer Science Engineering",
    acadmicFee: 135000,
    courseYears: 4,
    year: "Completed Degree"
};
DYPEngineering.department = "Mechanical Engineering";
console.log(DYPEngineering.department);
const DYPPharmacy = {
    collegeName: "D.Y. Patil School of Pharmacy",
    acadmicFee: 175000,
    courseYears: 4,
    year: 4
};
console.log(`Partial : ${DYPPharmacy.acadmicFee}`);
const DYPBCA = {
    collegeName: "D.Y. Patil School of Computer Application",
    department: 'phy',
    acadmicFee: 90000,
    courseYears: 3,
    year: 3
};
// DYPBCA.acadmicFee = 50000; // Not change the value of readOnly time just checking value
console.log(`ReadOnly : ${DYPBCA.acadmicFee}`);
const DYPBCA2 = {
    collegeName: "D.Y. Patil School of Computer Application",
    acadmicFee: 120000,
    courseYears: 3,
    year: 3
};
console.log(`Pick : ${DYPBCA.collegeName}`);
const DYPBCA3 = {
    collegeName: "D.Y. Patil School of Computer Application",
    acadmicFee: 90000,
    courseYears: 3,
    year: 3
};
console.log(`Omit : ${DYPBCA3.courseYears}`);
let APICall = "Success";
APICall = "Error";
let APICall2 = "Error";
let randomData = "Pratik Jadhav";
console.log(randomData);
let altusSolution = {
    Admin: "Pratik Jadhav",
    User: "Suyash Awate",
    Guest: "Prajyot Patil"
};
console.log(altusSolution.User);
export {};
