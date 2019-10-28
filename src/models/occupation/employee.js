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

    // update the employee: position ,province,district , street
    updateEmployeeInformationPosition(id,position){
        const fullEmployeeInformation = this.findOne(id);
        const index = this.employeeInformations.indexOf(fullEmployeeInformation);
        this.employeeInformations[index].position = position ;
        return this.employeeInformations;
    }
    // update province employee information  
    updateEmployeeInformationProvince(id,province){
        const fullEmployeeInformation = this.findOne(id)
        const index = this.employeeInformations.indexOf(fullEmployeeInformation);
        this.employeeInformations[index].province = province
        return this.employeeInformations
    }
    // update district employee information  
    updateEmployeeInformationDistrict(id,district){
        const fullEmployeeInformation = this.findOne(id);
        const index = this.employeeInformations.indexOf(fullEmployeeInformation);
        this.employeeInformations[index].district = district;
        return this.employeeInformations;
    }
    // update street employee information  
    updateEmployeeInformationStreet(id,street){
        const fullEmployeeInformation = this.findOne(id);
        const index = this.employeeInformations.indexOf(fullEmployeeInformation);
        this.employeeInformations[index].street = street;
        return this.employeeInformations;
    }
}

export default new EmployeeInformationModel();