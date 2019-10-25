// create the class to hold all owners imployee information 
class EmployeeInformationModel{
    constructor(req,res){
        this.employeeInformations = [
            {
                id:1,
                position:"manager",
                country:"rwanda",
                province:"southern",
                district:"gasabo",
                street:"kg7899"
            },
            {
                id:2,
                position:"ceo",
                country:"rwanda",
                province:"west",
                district:"rwamagana",
                street:"kg789jhk9"
            },
            {
                id:3,
                position:"manager",
                country:"kenya",
                province:"south",
                district:"kacyiro",
                street:"kg787899"
            }
        ]
    }
    // method to create the product
    createEmployeeInformation(information){
        const newEmployeeInformation = {
            id:this.employeeInformations.length + 1,
            position:information.position,
            country:information.country,
            province:information.province,
            district:information.district,
            street:information.street
        };
        this.employeeInformations.push(newEmployeeInformation);
        return newEmployeeInformation;
    }
    // get one 
    findOne(id){
        return this.employeeInformations.find(info => info.id === id);
    }
    // fetch all 
    findAllEmployeeInformations(){
        return this.employeeInformations;
    }
}

export default new EmployeeInformationModel();