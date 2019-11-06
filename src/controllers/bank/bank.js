import Validation from "../../validations/validation";
import BankModel from "../../models/bank/bank";

// class to hold all the logics 

class BankController{
    static createBankName(req,res){
        const { bankName } = req.body;
        const validationObject = {
            bankName
        }
        // check on the error;
        const { error }= Validation.createBankNameValidation(validationObject);
        if(error){
            res.status(400).json({
                status:400,
                error:"issue with the input "
            })
        }else{// create bankName
         const createdBankName = BankModel.createBankName(validationObject);
         res.status(201).json({
             status:201,
             data:createdBankName
         })
        }
    }
    // get one 
    static viewSpecificBankName(req,res){
        const bankId = Number(req.params.bankId);
        const OneBankName = BankModel.findOne(bankId);
        if(OneBankName){
            res.status(200).json({
                status:200,
                data:OneBankName
            })
        }else{
            res.status(404).json({
                status:404,
                message:"data was not found"
            })
        }
    }

    // get all 
    static viewAllBankName(req,res){
        const AllBankName = BankModel.findAllBanks();
        res.status(200).json({
            status:200,
            data:AllBankName
        })
    }

    // update bankName;
    static updateBankName(req,res){
        const { bankName } = req.body;
        const bankId = Number(req.params.bankId);
        const validationObject = { bankId,bankName }
        // check the error 
         const { error } = Validation.updateBankNameValidation(validationObject);
         if(error){
             res.status(400).json({
                 status:400,
                 error:"issue with the input "
             })
         }else{// update 
            const BankNameExit = BankModel.findOne(bankId);
            if(BankNameExit){
                const updatedBankName = BankModel.UpdateBankNameMethod(bankId,bankName);
                res.status(200).json({
                    status:200,
                    data:updatedBankName
                })
            }else{
                res.status(404).json({
                    status:404,
                    data:"data was not found "
                })
            }
             
         }
    }

    // delete bankName ;
    static deleteBankName(req,res){
        const bankId = Number(req.params.bankId);
        const bankNameExist = BankModel.findOne(bankId);
        if(bankNameExist){// delete
        const deletedBankName = BankModel.deleteBank(bankNameExist);
        res.status(200).json(deletedBankName)
        }
    }
}


export default BankController;