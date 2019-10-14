import Validation from "../validations/validation";
import EmployeeInformationModel from "../models/employee";

class EmployeeInformationControllers{
    // method to create the imployee information 
    static createEmployeeInformation(req,res){
        const{
            position,
            country,
            province,
            district,
            street
          }= req.body;

        const validationObject = {
            position,
            country,
            province,
            district,
            street
        }
    // check for the error 

    const { error } = Validation.employeeInformationValidation(validationObject);
    if(error){
        res.status(400).json({
            status:400,
            error:`issue with the input ${error}`
        })
    }else{
        // create the employee information ;
        const CreatedEmployeeInformation = EmployeeInformationModel.createEmployeeInformation(validationObject)
        res.status(201).json({
            status:201,
            data:CreatedEmployeeInformation
        })
    }

    }
}

export default EmployeeInformationControllers;