import Validation from "../../validations/validation";
import EmployeeInformationModel from "../../models/occupation/employee";

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

        console.log(validationObject);
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
    // view a specific employee information 
    static viewSpecificEmployeeInformation(req,res){
        const employeeInfoId = Number(req.params.employeeInfoId);
        // check if the employee information exists 
         const OneEmployeeInformation = EmployeeInformationModel.findOne(employeeInfoId);
         if(OneEmployeeInformation){
         res.status(200).json({
             status:200,
             data:OneEmployeeInformation
         })
         }else{
             res.status(404).json({
                 status:404,
                 message:"data was not found"
             })
         }
    }
    // viewAll employee information
    static ViewAllEmployeeInformation(req,res){
        const employeeInformation = EmployeeInformationModel.findAllEmployeeInformations();
        res.status(200).json({
            status:200,
            data:employeeInformation
        });
    }
    
    // update employee Position inforamtion 
    static UpdateEmployeePositionInformation(req,res){
        const { position } = req.body;
        const employeeInfoId = Number(req.params.employeeInfoId);
        const validationObject = { employeeInfoId,position};

        // check for the error 
        const {error } = Validation.UpdateEmployeeInformationPosition(validationObject);
        if(error){
            res.status(400).json({
                status:400,
                error : " error was made with the in put "
            })
        }else{
            const fullEmployeeInformation = EmployeeInformationModel.findOne(employeeInfoId)
            if(fullEmployeeInformation){
                const updatedEmployeeInfoPosition = EmployeeInformationModel.updateEmployeeInformationPosition(employeeInfoId,position);
                res.status(201).json({
                    status:201,
                    data:updatedEmployeeInfoPosition
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

export default EmployeeInformationControllers;