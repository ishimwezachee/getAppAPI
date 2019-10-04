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

}


 export default Validation ;