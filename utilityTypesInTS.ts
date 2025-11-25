console.log("");
console.log("---! Utility Types");
interface DYPU {
    collegeName:string;
    department:string;
    acadmicFee:number;
    courseYears:number;
    year:number|string;
}

const DYPEngineering:Required<DYPU> = {
    collegeName:"D.Y. Patil School of Engineering & Technology",
    department:"Computer Science Engineering",
    acadmicFee: 135000,
    courseYears:4,
    year:"Completed Degree"
}
DYPEngineering.department = "Mechanical Engineering";
console.log(DYPEngineering.department)

const DYPPharmacy:Partial<DYPU> = {
    collegeName:"D.Y. Patil School of Pharmacy",
    acadmicFee: 175000,
    courseYears:4,
    year:4
}
console.log(`Partial : ${DYPPharmacy.acadmicFee}`); 


const DYPBCA:Readonly<DYPU> = {
    collegeName:"D.Y. Patil School of Computer Application",
    department:'phy',
    acadmicFee: 90000,
    courseYears:3,
    year:3
}
// DYPBCA.acadmicFee = 50000; // Not change the value of readOnly time just checking value
console.log(`ReadOnly : ${DYPBCA.acadmicFee}`); 

const DYPBCA2:Pick<DYPU,'collegeName'|'acadmicFee'|'courseYears'|'year'> = {
    collegeName:"D.Y. Patil School of Computer Application",
    acadmicFee: 120000,
    courseYears:3,
    year:3
}
console.log(`Pick : ${DYPBCA.collegeName}`);

const DYPBCA3:Omit<DYPU,'department'> = {
    collegeName:"D.Y. Patil School of Computer Application",
    acadmicFee: 90000,
    courseYears:3,
    year:3
}

console.log(`Omit : ${DYPBCA3.courseYears}`); 

type APIStatus = 'Loading'| 'Error'|'Pending'|'Success';

let APICall:Exclude<APIStatus,'Pending'>= "Success";
APICall="Error";

let APICall2:Extract<APIStatus,'Error'|'Success'>= "Error";

type randomType = string | number | bigint | null | undefined | symbol;
let randomData:NonNullable<randomType>= "Pratik Jadhav";

console.log(randomData);

// Reacord
type companyRole = "Admin" | "User" | "Guest";
let altusSolution:Record<companyRole, string> = {
    Admin:"Pratik Jadhav",
    User:"Suyash Awate",
    Guest:"Prajyot Patil"
}

console.log(altusSolution.User);