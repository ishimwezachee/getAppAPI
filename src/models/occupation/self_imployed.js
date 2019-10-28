// class for self_imployed 

class SelfEmployeeInformationModel{
  constructor(req,res){
    this.SelfEmployeeInformations = [
      {
        id:1,
        businessType:"trade",
        businessName:'Nyirangarama',
        tinNumber:567890,
        country:"rwanda",
        province:"kigali",
        district:"kabale",
        street:"kg68790"
      },
      {
          id:2,
          businessType:"agriculture",
          businessName:'gasatya',
          tinNumber:5677890,
          country:"kenya",
          province:"east",
          district:"kabale",
          street:"kg687980"
        },
        {
          id:3,
          businessType:"restaurant",
          businessName:'ryoherwa',
          tinNumber:56788890,
          country:"burundi",
          province:"kigali",
          district:"kangula",
          street:"kg68790"
        }

  ]
  }

  //create the methods for the self_imployed;

 createSelfEmployeeInformation(information){
   const newSelfEmployeeInformation={
    id:this.SelfEmployeeInformations.length +1,
    businessType:information.businessType,
    businessName:information.businessName,
    tinNumber:information.tinNumber,
    country:information.country,
    province:information.province,
    district:information.district,
    street:information.street
   };

   this.SelfEmployeeInformations.push(newSelfImployeeInformation);
   return newSelfEmployeeInformation
 }
 // get one
findOne(id){
  return this.SelfEmployeeInformations.find( info => info.id === id);
}
// get all 
 findAllSelfEmployeeInformation(){
   return this.SelfEmployeeInformations
 }

}


 export default new SelfEmployeeInformationModel();