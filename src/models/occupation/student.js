// create the class to hold all the student information;

class StudentInformationModel{
    constructor(res,req){
        this.studentInformations = [
            {
                id:1,
                school:"nyagatare",
                country:"rwanda",
                province:"north",
                district:"musanze",
                street:"kg678999"   
            },
            {
                id:2,
                school:"nyaruguru",
                country:"burundi",
                province:"north",
                district:"gadenke",
                street:"kg678999"   
            },
            {
                id:3,
                school:"gasasa",
                country:"Rwanda",
                province:"north",
                district:"kivugiza",
                street:"kg6999"   
            }
        ]
    };
    // create a method to create a student;

    createStudentInformation(information){
        const newStudentInformation ={
            id:this.studentInformations.length +1,
            school:information.school,
            country:information.country,
            province:information.province,
            district:information.district,
            street:information.street
        };
        this.studentInformations.push(newStudentInformation);
        return newStudentInformation
    }
    // get one 
    findOne(id){
        return this.studentInformations.find(info => info.id === id);
    }
    // fetch all 
    findAllStudentInformation(){
        return this.studentInformations
    }
   
    // update student school information
    updateStudentInformationSchool(id,school){
        const fullStudentInformation = this.findOne(id);
        const index = this.studentInformations.indexOf(fullStudentInformation);
        this.studentInformations[index].school = school;
        return this.studentInformations;
    }
    // update student province information
    updateStudentInformationProvince(id,province){
        const fullStudentInformation = this.findOne(id);
        const index = this.studentInformations.indexOf(fullStudentInformation);
        this.studentInformations[index].province = province;
        return this.studentInformations;
    }
    // update student district information
    updateStudentInformationDistrict(id,district){
        const fullStudentInformation = this.findOne(id);
        const index = this.studentInformations.indexOf(fullStudentInformation);
        this.studentInformations[index].district = district;
        return this.studentInformations;
    }
    
    // update student street information
    updateStudentInformationStreet(id,street){
        const fullStudentInformation = this.findOne(id);
        const index = this.studentInformations.indexOf(fullStudentInformation);
        this.studentInformations[index].street = street;
        return this.studentInformations;
    }
};

export default new StudentInformationModel();