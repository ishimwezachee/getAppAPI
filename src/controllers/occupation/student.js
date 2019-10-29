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

    // update student school information
    static UpdateStudentSchoolInformationOccupation(req,res){
        const { school } = req.body;
        const studentInfoId = Number(req.params.studentInfoId);
        const validationObject = { studentInfoId,school};

        // check for the error 
        const {error } = Validation.UpdateStudentSchoolInformationValidation(validationObject)
        if(error){
            res.status(400).json({
                status:400,
                error : " error was made with the in put "
            })
        }else{
            const fullStudentInformation = StudentInformationModel.findOne(studentInfoId)
            if(fullStudentInformation){
                const updatedStudentInfoSchool = StudentInformationModel.updateStudentInformationSchool(studentInfoId,school);
                res.status(201).json({
                    status:201,
                    data:updatedStudentInfoSchool
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }

    // update student province information
    static UpdateStudentProvinceInformationOccupation(req,res){
        const { province } = req.body;
        const studentInfoId = Number(req.params.studentInfoId);
        const validationObject = { studentInfoId,province};

        // check for the error 
        const {error } = Validation.UpdateStudentProvinceInformationValidation(validationObject)
        if(error){
            res.status(400).json({
                status:400,
                error : " error was made with the in put "
            })
        }else{
            const fullStudentInformation = StudentInformationModel.findOne(studentInfoId)
            if(fullStudentInformation){
                const updatedStudentInfoProvince = StudentInformationModel.updateStudentInformationProvince(studentInfoId,province);
                res.status(201).json({
                    status:201,
                    data:updatedStudentInfoProvince
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // update student district information
    static UpdateStudentDistrictInformationOccupation(req,res){
        const { district} = req.body;
        const studentInfoId = Number(req.params.studentInfoId);
        const validationObject = { studentInfoId,district};

        // check for the error 
        const {error } = Validation.UpdateStudentDistrictInformationValidation(validationObject)
        if(error){
            res.status(400).json({
                status:400,
                error : " error was made with the in put "
            })
        }else{
            const fullStudentInformation = StudentInformationModel.findOne(studentInfoId)
            if(fullStudentInformation){
                const updatedStudentInfoDistrict = StudentInformationModel.updateStudentInformationDistrict(studentInfoId,district);
                res.status(201).json({
                    status:201,
                    data:updatedStudentInfoDistrict
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
    // update student street information
    static UpdateStudentStreetInformationOccupation(req,res){
        const { street } = req.body;
        const studentInfoId = Number(req.params.studentInfoId);
        const validationObject = { studentInfoId,street};

        // check for the error 
        const {error } = Validation.UpdateStudentStreetInformationValidation(validationObject)
        if(error){
            res.status(400).json({
                status:400,
                error : " error was made with the in put "
            })
        }else{
            const fullStudentInformation = StudentInformationModel.findOne(studentInfoId)
            if(fullStudentInformation){
                const updatedStudentInfoStreet = StudentInformationModel.updateStudentInformationStreet(studentInfoId,street);
                res.status(201).json({
                    status:201,
                    data:updatedStudentInfoStreet
                })
            }else{
                res.status(404).json({
                    status:404,
                    message:"data was not found"
                })
            }
        }
    }
}

export default  StudentInformationControllers;