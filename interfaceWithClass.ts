console.log("")
console.log("Interface with Class");

// Define Interface
interface collegeDatatype {
    studentData():void;
    teacherData():void;
    departmentData():void;
}

class CollegeData implements collegeDatatype {
    studentData(): void {
        console.log(["Pratik Jadhav","Suyash Awate","Prajyot Patil","Kunal Pol"]);
    }

    teacherData(): void {
        console.log(["Nitin Mane","Khandu Shelar","Chede Madam"]);
    }

    departmentData(): void {
        console.log(["Computer Science","Information Technology","Civil Engineering", "Mechanical Engineering"]);
    }
}

let data = new CollegeData();
data.studentData();
data.departmentData();
data.teacherData();