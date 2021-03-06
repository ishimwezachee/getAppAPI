import Joi from 'joi';
class Validation {
    //SignUpValidation
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
    //loginValidation
   static loginValidation(validationObject){
       const schema = {
        telephone:Joi.number().required(),
       };
       return Joi.validate(validationObject,schema);
   }

      //userInformationValidation
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

       //personalInformationValidation
static personalInformationValidation(validationObject){
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
     secondaryNumber:Joi.number().required()
    });
    return Joi.validate(validationObject,schema)
}

         //familyInformationValidation
static familyInformationValidation(validationObject){
    const schema = Joi.object().keys({
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
    });
    return Joi.validate(validationObject,schema)
}
      
          //studentInformationValidation
static studentInformationValidation(validationObject){
    const schema = Joi.object().keys({
            school:Joi.string().min(3).max(15).required(),
            country:Joi.string().min(3).max(15).required(),
            province:Joi.string().min(3).max(15).required(),
            district:Joi.string().min(3).max(15).required(),
            street:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema)
}
       
    //employeeInformationValidation
static employeeInformationValidation(validationObject){
    const schema = Joi.object().keys({
        position:Joi.string().min(3).max(15).required(),
        country:Joi.string().min(3).max(15).required(),
        province:Joi.string().min(3).max(15).required(),
        district:Joi.string().min(3).max(15).required(),
        street:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema)
}
  //self_employeeInformationValidation
static self_employeeInformationValidation(validationObject){
    const schema = Joi.object().keys({
    businessType:Joi.string().min(3).max(15).required(),
    businessName:Joi.string().min(3).max(15).required(),
    tinNumber:Joi.number().required(),
    country:Joi.string().min(3).max(15).required(),
    province:Joi.string().min(3).max(15).required(),
    district:Joi.string().min(3).max(15).required(),
    street:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema)
}
   // OtherInformationValidation
static OtherInformationValidation(validationObject){
    const schema = Joi.object().keys({
        businessType:Joi.string().min(3).max(15).required(),
        businessName:Joi.string().min(3).max(15).required(),
        description:Joi.string().min(3).max(60).required(),
        country:Joi.string().min(3).max(15).required(),
        province:Joi.string().min(3).max(15).required(),
        district:Joi.string().min(3).max(15).required(),
        street:Joi.string().min(3).max(15).required(),
    });
    return Joi.validate(validationObject,schema)
}

  // MituelInformationValidation
  static MituelInformationValidation(validationObject){
    const schema = Joi.object().keys({
        holder:Joi.string().min(3).max(15).required(),
        cardNumber:Joi.number().required(),
        issueDate:Joi.number().required(),
        insuranceExpiracy:Joi.number().required(),
        insuranceCoverage:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema)
}
// RssblInformationValidation
static RssbInformationValidation(validationObject){
    const schema = Joi.object().keys({
        holder:Joi.string().min(3).max(15).required(),
        cardNumber:Joi.number().required(),
        issueDate:Joi.number().required(),
        insuranceExpiracy:Joi.number().required(),
        insuranceCoverage:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema)
}
 // RadiantInformationValidation
static radiantInformationValidation(validationObject){
    const schema = Joi.object().keys({
        holder:Joi.string().min(3).max(15).required(),
        cardNumber:Joi.number().required(),
        issueDate:Joi.number().required(),
        insuranceExpiracy:Joi.number().required(),
        insuranceCoverage:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema)
}
// RamaInformationValidation
static ramaInformationValidation(validationObject){
    const schema = Joi.object().keys({
        holder:Joi.string().min(3).max(15).required(),
        cardNumber:Joi.number().required(),
        issueDate:Joi.number().required(),
        insuranceExpiracy:Joi.number().required(),
        insuranceCoverage:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema)
}

//OtherInsuranceInformationValidation
static OtherInsuranceInformationValidation(validationObject){
    const schema = Joi.object().keys({
        insuranceCompany:Joi.string().min(3).max(15).required(),
        holder:Joi.string().min(3).max(15).required(),
        cardNumber:Joi.number().required(),
        issueDate:Joi.number().required(),
        insuranceExpiracy:Joi.number().required(),
        insuranceCoverage:Joi.number().required(),
        email:Joi.string().email().required(),
        telephone:Joi.number().required()
    });
    return Joi.validate(validationObject,schema)
}
   static viewSpecificUserinfoValidation(validationObject){
    const schema = {
        userInformationId:Joi.number().required(),
    };
    return Joi.validate(validationObject,schema);
   };

   static updateUserInformation(validationObject){
       const schema = {
        occuption:Joi.array().items(),
        userInformationId:Joi.number().required(),
       };
       return  Joi.validate(validationObject,schema);
   }

   // validate  updating martialStatus,province,district , sector , cell , village ,email , jobEmail , 
   static UpdatePersonalInformationMartialStatus(validationObject){
    const schema = Joi.object().keys({
    martialStatus:Joi.string().min(3).max(15).required(),
    personalInfoId:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
    // update province
   static UpdatePersonalInformationProvince(validationObject){
    const schema = Joi.object().keys({
        province:Joi.string().min(3).max(15).required(),
    personalInfoId:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
   //update district
   static UpdatePersonalInformationDistrict(validationObject){
    const schema = Joi.object().keys({
        district:Joi.string().min(3).max(15).required(),
    personalInfoId:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
   //update sector
   static UpdatePersonalInformationSector(validationObject){
    const schema = Joi.object().keys({
        sector:Joi.string().min(3).max(15).required(),
    personalInfoId:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
    //update cell
   static UpdatePersonalInformationCell(validationObject){
    const schema = Joi.object().keys({
        cell:Joi.string().min(3).max(15).required(),
    personalInfoId:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
   // update village
   static UpdatePersonalInformationVillage(validationObject){
    const schema = Joi.object().keys({
        village:Joi.string().min(3).max(15).required(),
    personalInfoId:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
   // update email
   static UpdatePersonalInformationEmail(validationObject){
    const schema = Joi.object().keys({
        email:Joi.string().email().required(),
    personalInfoId:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
  // update JobEmail
   static UpdatePersonalInformationJobEmail(validationObject){
    const schema = Joi.object().keys({
        JobEmail:Joi.string().email().required(),
    personalInfoId:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
                         // family information ;
    // update telephone
    static UpdateFamilyInformationTelephone(validationObject){
        const schema = Joi.object().keys({
            familyInfoId:Joi.number().required(),
            telephone:Joi.number().required()
        });
        return Joi.validate(validationObject,schema);
       }
      // childrenNumber
       static UpdateFamilyInformationChildrenNumber(validationObject){
        const schema = Joi.object().keys({
        childrenNumber:Joi.number().required(),
        familyInfoId:Joi.number().required()
        });
        return Joi.validate(validationObject,schema);
       }

       static UpdateFamilyInformationDependecy(validationObject){
        const schema = Joi.object().keys({
        dependency:Joi.string().min(3).max(15).required(),
        familyInfoId:Joi.number().required()
        });
        return Joi.validate(validationObject,schema);
       }

             // updating the insurance ,
// update the employee: position ,province,district , street
// updating employee position information 
  static UpdateEmployeeInformationPositionValidation(validationObject){
    const schema = Joi.object().keys({
        employeeInfoId:Joi.number().required(),
    position:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
   // updating employee province information 
   static UpdateEmployeeInformationProvinceValidation(validationObject){
    const schema = Joi.object().keys({
        employeeInfoId:Joi.number().required(),
    province:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
     // updating employee district information 
     static UpdateEmployeeInformationDistrictValidation(validationObject){
        const schema = Joi.object().keys({
            employeeInfoId:Joi.number().required(),
            district:Joi.string().min(3).max(15).required()
        });
        return Joi.validate(validationObject,schema);
       }
       // updating employee district information 
     static UpdateEmployeeInformationStreetValidation(validationObject){
        const schema = Joi.object().keys({
            employeeInfoId:Joi.number().required(),
            street:Joi.string().min(3).max(15).required()
        });
        return Joi.validate(validationObject,schema);
       }

       // update the self_employee: businessName,businessType ,province,district , street
// updating selfEmployee businessType information 
static UpdateSelfEmployeeInformationBusinessTypeValidation(validationObject){
    const schema = Joi.object().keys({
        selfEmployeeInfoId:Joi.number().required(),
        businessType:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
// updating selfEmployee businessName information 
static UpdateSelfEmployeeInformationBusinessNameValidation(validationObject){
    const schema = Joi.object().keys({
        selfEmployeeInfoId:Joi.number().required(),
        businessName:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
// updating selfEmployee province information 
static UpdateSelfEmployeeInformationProvinceValidation(validationObject){
    const schema = Joi.object().keys({
        selfEmployeeInfoId:Joi.number().required(),
        province:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
// updating selfEmployee District information 
static UpdateSelfEmployeeInformationDisrictValidation(validationObject){
    const schema = Joi.object().keys({
        selfEmployeeInfoId:Joi.number().required(),
        district:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
// updating selfEmployee street information 
static UpdateSelfEmployeeInformationStreetValidation(validationObject){
    const schema = Joi.object().keys({
        selfEmployeeInfoId:Joi.number().required(),
        street:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
   // validate the updated student school,province , district , street;
   // update student school
   static UpdateStudentSchoolInformationValidation(validationObject){
    const schema = Joi.object().keys({
        studentInfoId:Joi.number().required(),
        school:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
   // update student province
   static UpdateStudentProvinceInformationValidation(validationObject){
    const schema = Joi.object().keys({
        studentInfoId:Joi.number().required(),
        province:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
   // update student district
   static UpdateStudentDistrictInformationValidation(validationObject){
    const schema = Joi.object().keys({
        studentInfoId:Joi.number().required(),
        district:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
   // update student street
   static UpdateStudentStreetInformationValidation(validationObject){
    const schema = Joi.object().keys({
        studentInfoId:Joi.number().required(),
        street:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
// validate insurance mituel information :cardNumber,issueDate,insuranceExpiracy,insuranceCoverage
// validate mituel cardNumber information;
static UpdateMituelCardNumberInformationValidation(validationObject){
    const schema = Joi.object().keys({
        mituelInfoId:Joi.number().required(),
        cardNumber:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
// validate mituel issueDate information;
static UpdateMituelIssueDateInformationValidation(validationObject){
    const schema = Joi.object().keys({
        mituelInfoId:Joi.number().required(),
        issueDate:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
// validate mituel insuranceExpiracy information;
static UpdateMituelInsuranceExpiracyInformationValidation(validationObject){
    const schema = Joi.object().keys({
        mituelInfoId:Joi.number().required(),
        insuranceExpiracy:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
// validate mituel insuranceCoverage information;
static UpdateMituelInsuranceCoverageInformationValidation(validationObject){
    const schema = Joi.object().keys({
        mituelInfoId:Joi.number().required(),
        insuranceCoverage:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
   // validate insurance radiant information :cardNumber,issueDate,insuranceExpiracy,insuranceCoverage
// validate radiant cardNumber information;
static UpdateRadiantCardNumberInformationValidation(validationObject){
    const schema = Joi.object().keys({
        radiantInfoId:Joi.number().required(),
        cardNumber:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
// validate radiant InsuranceCoverage information;
static UpdatRadiantInsuranceCoverageInformationValidation(validationObject){
    const schema = Joi.object().keys({
        radiantInfoId:Joi.number().required(),
        insuranceCoverage:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
// validate radiant issueDate information;
static UpdateRadiantIssueDateInformationValidation(validationObject){
    const schema = Joi.object().keys({
        radiantInfoId:Joi.number().required(),
        issueDate:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
// validate radiant InsuranceExpiracy information;
static UpdateRadiantInsuranceExpiracyInformationValidation(validationObject){
    const schema = Joi.object().keys({
        radiantInfoId:Joi.number().required(),
        insuranceExpiracy:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }

   // update rama information 
// update rama cardNumber information
   static UpdateRamaCardNumberInformationValidation(validationObject){
    const schema = Joi.object().keys({
        ramaInfoId:Joi.number().required(),
        cardNumber:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
   // update rama issueDate information
   static UpdateRamaIssueDateInformationValidation(validationObject){
    const schema = Joi.object().keys({
        ramaInfoId:Joi.number().required(),
        issueDate:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
   // update rama insuranceExpiracy information
   static UpdateRamaInsuranceExpiracyInformationValidation(validationObject){
    const schema = Joi.object().keys({
        ramaInfoId:Joi.number().required(),
        insuranceExpiracy:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
   // update rama insuranceCoverage information
   static UpdateRamaInsuranceCoverageInformationValidation(validationObject){
    const schema = Joi.object().keys({
        ramaInfoId:Joi.number().required(),
        insuranceCoverage:Joi.string().min(3).max(15).required()
    });
    return Joi.validate(validationObject,schema);
   }
   // update rssb information
   // update cardNumber rssb Information
   static UpdateRssbCardNumberInformationValidation(validationObject){
    const schema = Joi.object().keys({
        rssbInfoId:Joi.number().required(),
        cardNumber:Joi.number().required()
    });
    return Joi.validate(validationObject,schema);
   }
    // update issueDate rssb Information
    static UpdateRssbIssueDateInformationValidation(validationObject){
        const schema = Joi.object().keys({
            rssbInfoId:Joi.number().required(),
            issueDate:Joi.number().required()
        });
        return Joi.validate(validationObject,schema);
       }
       // update insuranceExpiracy rssb Information
    static UpdateRssbInsuranceExpiracyInformationValidation(validationObject){
        const schema = Joi.object().keys({
            rssbInfoId:Joi.number().required(),
            insuranceExpiracy:Joi.number().required()
        });
        return Joi.validate(validationObject,schema);
       }
       // update insuranceCoverage rssb Information
    static UpdateRssbInsuranceCoverageInformationValidation(validationObject){
        const schema = Joi.object().keys({
            rssbInfoId:Joi.number().required(),
            insuranceCoverage:Joi.string().min(3).max(15).required()
        });
        return Joi.validate(validationObject,schema);
       }

         // bank 
         // create bank;
         static createBankNameValidation(validationObject){
            const schema = Joi.object().keys({
                bankName:Joi.string().min(3).max(15).required()
            });
            return Joi.validate(validationObject,schema);
           }
         // update bank;
         static updateBankNameValidation(validationObject){
            const schema = Joi.object().keys({
                bankId:Joi.number().required(),
                bankName:Joi.string().min(3).max(15).required()
            });
            return Joi.validate(validationObject,schema);
           }

}


 export default Validation ;
 