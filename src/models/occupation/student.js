// create the class to hold all the student information;

class StudentInformationModel{
    constructor(res,req){
        this.studentIformations = [
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
            id:this.studentIformations.length +1,
            school:information.school,
            country:information.country,
            province:information.province,
            district:information.district,
            street:information.street
        };
        this.studentIformations.push(newStudentInformation);
        return newStudentInformation
    }
    // get one 
    findOne(id){
        return this.studentIformations.find(info => info.id === id);
    }
    // fetch all 
    findAllStudentInformation(){
        return this.studentIformations
    }
};

export default new StudentInformationModel();