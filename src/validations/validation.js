import Joi from 'joi';
class Validation {

 static SignUpValidation(validationObject){
    const schema = Joi.object().keys({
        firstName:Joi.string().min(3).max(15).required(),
        surName:Joi.string().min(3).max(15).required(),
        telephone:Joi.number().required(),
        email:Joi.string().email().required(),
        nationality:Joi.string().min(7).max(15).required(),
        category:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
}

   static loginValidation(validationObject){
       const schema = {
        telephone:Joi.number().required(),
       };
       return Joi.validate(validationObject,schema);
   }


   static userInformationValidation(validationObject){
       const schema = Joi.object().keys({
        firstName:Joi.string().min(3).max(15).required(),
        middleName:Joi.string().min(3).max(15).required(),
        surName:Joi.string().min(3).max(15).required(),
        birthDate:Joi.number().required(),
        birthPlace:Joi.string().min(3).max(15).required(),
        nationality:Joi.string().min(3).max(15).required(),
        sex:Joi.string().min(3).max(15).required(),
        nationalId:Joi.number().required(),
        martialStatus:Joi.string().min(3).max(15).required(),
        country:Joi.string().min(3).max(15).required(),
        province:Joi.string().min(3).max(15).required(),
        district:Joi.string().min(3).max(15).required(),
        sector:Joi.string().min(3).max(15).required(),
        cell:Joi.string().min(3).max(15).required(),
        village:Joi.string().min(3).max(15).required(),
        email:Joi.string().email().required(),
        jobEmail:Joi.string().email().required(),
        primaryNumber:Joi.number().required(),
        secondaryNumber:Joi.number().required(),
        father_firstName:Joi.string().min(3).max(15).required(),
        father_surName:Joi.string().min(3).max(15).required(),
        mother_firstName:Joi.string().min(3).max(15).required(),
        mother_surName:Joi.string().min(3).max(15).required(),
        spouse_firstName:Joi.string().min(3).max(15).required(),
        spouse_middleName:Joi.string().min(3).max(15).required(),
        spouse_surName:Joi.string().min(3).max(15).required(),
        spouseId:Joi.number().required(),
        telephone:Joi.number().required(),
        childrenNumber:Joi.number().required(),
        dependency:Joi.string().min(3).max(15).required(),
        occuption:Joi.array().items(),
        insuranceType:Joi.array().items(),
        bankInformation:Joi.array().items(),
        assets:Joi.array().items(),
        socialMedia:Joi.array().items()

       });
       return Joi.validate(validationObject,schema)
   }
 
   static viewSpecificUserinfoValidation(validationObject){
    const schema = {
        userInformationId:Joi.number().required(),
    };
    return Joi.validate(validationObject,schema);
   }

}


 export default Validation ;