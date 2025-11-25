console.log("");

// Typeof
function checkStrOrNum(userId:string|number) {
if(typeof userId === "string") {
    console.log(`userId declare in ${userId} String format`);
} else {
    console.log(`userId declare in ${userId} Number format`)
}
}

checkStrOrNum(25)

// instanceof -check type data
type collegeNum = {phone:number|string}

const college:collegeNum = {
    phone:7038302915
}

if(college.phone === "number") {
    console.log(`collegePhone Number declare in ${college.phone} number format`)
} else {
    console.log(`collegePhone Number declare in ${college.phone} string format`)
}

// Custom type
interface schoolData {
    email:null|string;
}

const school:schoolData = {
    email:"pratikjadhav1902@gmail.com"
}

console.log(school.email?`School email is here ${school.email}` : `School not have emailId(Null).`);