console.log("");
console.log("Getter & Setter in Typescript!");

class empInfo {
    empName:string = "pratikjadhav";
    empEmial:string = "@excellentminds.com"

    get employeeName():string{
        return "emp_"+ this.empName;
    }

    set employeeEmail(val:string) {
        console.log("emp_"+ val +this.empEmial);
    }
}

let employeeInfo = new empInfo();
console.log(employeeInfo.employeeName);
employeeInfo.employeeEmail="sanikajadhav";
