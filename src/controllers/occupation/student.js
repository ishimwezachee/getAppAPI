import Validation from '../../validations/validation';
import StudentInformationModel from "../../models/occupation/student";

// create a class that holds all the logics for the student;

class StudentInformationControllers{
    // methods to create;
    static createStudentInformation(req,res){
        const {
            school,
            country,
            province,
            district,
            street
        }= req.body;
        // validate the data from the req.body;

        const validationObject = {
            school,
            country,
            province,
            district,
            street
        };
     // logic
     const { error } = Validation.studentInformationValidation(validationObject);
    if(error){
        res.status(400).json({
            status:400,
            error:`issue with the input ${error}`
        });
    }else{
        // create the student information 
        const createdStudentInformation = StudentInformationModel.createStudentInformation(validationObject);
        res.status(201).json({
            status:201,
            data:createdStudentInformation
        })
    }

    }

    // view specific student information 
    static viewSpecificStudentInformation(req,res){
        const studentInfoId = Number(req.params.studentInfoId);
        // check if the info exists
        const oneStudentInformation = StudentInformationModel.findOne(studentInfoId);
        if(oneStudentInformation){
            res.status(200).json({
                status:200,
                data:oneStudentInformation
            })
        }else{
            res.status(404).json({
                status:404,
                message:"data was not found"
            })
        }
    }
  // view all student information
    static viewAllStudentInformation(req,res){
        const studentInformation = StudentInformationModel.findAllStudentInformation();
        res.status(200).json({
            status:200,
            data:studentInformation
        })
    }
}

export default  StudentInformationControllers;