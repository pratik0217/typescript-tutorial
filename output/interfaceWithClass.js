console.log("");
console.log("Interface with Class");
class CollegeData {
    studentData() {
        console.log(["Pratik Jadhav", "Suyash Awate", "Prajyot Patil", "Kunal Pol"]);
    }
    teacherData() {
        console.log(["Nitin Mane", "Khandu Shelar", "Chede Madam"]);
    }
    departmentData() {
        console.log(["Computer Science", "Information Technology", "Civil Engineering", "Mechanical Engineering"]);
    }
}
let data = new CollegeData();
data.studentData();
data.departmentData();
data.teacherData();
export {};
