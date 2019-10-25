// create a memory that holds the data;

 class OtherInsuranceInformationModel{
     constructor(){
         this.otherInsuranceInformations = [
             {
                 id:1,
                 insuranceCompany:"kira",
                 holder:"grace",
                 cardNumber:56454865,
                 IssueDate:34676,
                 InsuranceExpiracy:67467467,
                 InsuranceCoverage:"well",
                 email:"hello@gmail.com",
                 telephone:543345476
             },
             {
                id:2,
                insuranceCompany:"life",
                holder:"manuel",
                cardNumber:566454865,
                IssueDate:34655676,
                InsuranceExpiracy:67464677467,
                InsuranceCoverage:"success",
                email:"good@gmail.com",
                telephone:543345476
            },
            {
                id:3,
                insuranceCompany:"amaze",
                holder:"aline",
                cardNumber:5654865,
                IssueDate:3463476,
                InsuranceExpiracy:6767467,
                InsuranceCoverage:"cool",
                email:"yello@gmail.com",
                telephone:543345476
            }
         ]
     }
     //create the method ;
     createOtherInsuranceInformation(information){
         const newOtherInsuranceInformation = {
             id:this.otherInsuranceInformations.length + 1,
               insuranceCompany:information.insuranceCompany,
                holder:information.holder,
                cardNumber:information.cardNumber,
                issueDate:information.issueDate,
                insuranceExpiracy:information.insuranceExpiracy,
                insuranceCoverage:information.insuranceCoverage,
                email:information.email,
                telephone:information.telephone

         }
         this.otherInsuranceInformations.push(newOtherInsuranceInformation);
         return newOtherInsuranceInformation
     }
 };



 export default new OtherInsuranceInformationModel();