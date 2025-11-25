console.log("--- Namespace ---");

namespace HeadAdmin {
    export class AdminList {
        login() {
            console.log("successfully, Login admin");
        }
    }
    export function adminListPerson(name:string[]) {
        console.log("Admin list person!");
        
        for(let i=0;i<name.length; i++) {
                console.log(i,name[i]);
        }
        console.log(`Total person of Admin List : ${name.length}`)
    }
}

const CompanyAdmin = new HeadAdmin.AdminList();
CompanyAdmin.login();

const adminList = HeadAdmin.adminListPerson(["Pratik Jadhav","Suyash Awate","Kunal Pol","Suyash Awate"]);