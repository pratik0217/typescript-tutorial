console.log("--- Namespace ---");
var HeadAdmin;
(function (HeadAdmin) {
    class AdminList {
        login() {
            console.log("successfully, Login admin");
        }
    }
    HeadAdmin.AdminList = AdminList;
    function adminListPerson(name) {
        console.log("Admin list person!");
        for (let i = 0; i < name.length; i++) {
            console.log(i, name[i]);
        }
        console.log(`Total person of Admin List : ${name.length}`);
    }
    HeadAdmin.adminListPerson = adminListPerson;
})(HeadAdmin || (HeadAdmin = {}));
const CompanyAdmin = new HeadAdmin.AdminList();
CompanyAdmin.login();
const adminList = HeadAdmin.adminListPerson(["Pratik Jadhav", "Suyash Awate", "Kunal Pol", "Suyash Awate"]);
export {};
