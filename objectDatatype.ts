console.log("");
console.log("Object & Nested Object datatype ");

// Declare object & Nested Object
const employeeData:{
    companyName:string, 
    empId:number, name:string, 
    role:string, 
    salary:number, 
    address: {
        street:string, 
        landmark:string, 
        pincode:number|undefined}
    }={
    companyName: "Excellent Mind",
    empId:25,
    name:"Pratik Jadhav",
    role: "React Frontend Developer",
    salary:200000,
    address:{
        street:"Shri Datta Housing Society",
        landmark:"Morewasti",
        pincode:411062
    }
}

console.log(employeeData.name);
console.log(employeeData.address.landmark);

// If did not knows how many key have in object then use this method.
const studentData:{[key:string]:string|number|undefined|boolean}={
    name:"Suyash Awate"
}

console.log(studentData);
console.log(studentData.phone=8767453425);
console.log(studentData.address="Pune");
console.log(studentData.pincode);
console.log(studentData.nowStudnet=false);