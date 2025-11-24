console.log("");
console.log("Getter & Setter in Typescript!");
class empInfo {
    empName = "pratikjadhav";
    empEmial = "@excellentminds.com";
    get employeeName() {
        return "emp_" + this.empName;
    }
    set employeeEmail(val) {
        console.log("emp_" + val + this.empEmial);
    }
}
let employeeInfo = new empInfo();
console.log(employeeInfo.employeeName);
employeeInfo.employeeEmail = "sanikajadhav";
export {};
