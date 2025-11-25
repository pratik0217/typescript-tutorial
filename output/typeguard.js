console.log("");
// Typeof
function checkStrOrNum(userId) {
    if (typeof userId === "string") {
        console.log(`userId declare in ${userId} String format`);
    }
    else {
        console.log(`userId declare in ${userId} Number format`);
    }
}
checkStrOrNum(25);
const college = {
    phone: 7038302915
};
if (college.phone === "number") {
    console.log(`collegePhone Number declare in ${college.phone} number format`);
}
else {
    console.log(`collegePhone Number declare in ${college.phone} string format`);
}
const school = {
    email: "pratikjadhav1902@gmail.com"
};
console.log(school.email ? `School email is here ${school.email}` : `School not have emailId(Null).`);
export {};
