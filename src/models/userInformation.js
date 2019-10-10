// create a class to hold all the data

class UserInformationModel{
    constructor(req,res){
        this.informations = [{
            id:1,
            firstName:"umurerwa",
            middleName:"alyse",
            surName:"divine",
            birthDate:57689980,
            birthPlace:"kigali",
            nationality:"rwandan",
            sex:"female",
            nationalId:657890,
            martialStatus:"sinle",
            country:"Rwanda",
            province:"north",
            district:"gasabo",
            sector:"remera",
            cell:"rugando",
            village:"gasasa",
            email:"divine@gmail.com",
            jobEmail:"limitless@gmail.com",
            primaryNumber:67890,
            secondaryNumber:7890,
            father_firstName:"kayigamba",
            father_surName:"mukiza",
            mother_firstName:'anna',
            mother_surName:"aline",
            spouse_firstName:"achille",
            spouse_middleName:"david",
            spouse_surName:'maluwa',
            spouseId:76890890,
            telephone:86790,
            childrenNumber:657890,
            dependency:"fanance",
            occupation:[{
                student:{
                    school:"nyagatare",
                    country:"rwanda",
                    province:"north",
                    district:"musanze",
                    street:"kg678999"
                },
                employement:{
                    company:"limitless",
                    country:"Rwanda",
                    province:"north",
                    district:"gasabo",
                    street:"kg7899"
                },
                self_employed:{
                    businessType:"trade",
                    businessName:'Nyirangarama',
                    tinNumber:567890,
                    country:"rwanda",
                    province:"kigali",
                    district:"kabale",
                    street:"kg68790"
                },
                other:{
                    businessType:"wholesale",
                    businessName:"limitless",
                    description:"changing people's lives",
                    country:"rwanda",
                    province:"north",
                    district:"mukinga",
                    street:"kg7890"
                }
            }],
            insuranceType:[{
                mituel:{
                    holder:"divine",
                    cardNumber:678978,
                    issueDate:5678987,
                    insuranceExpiracy:7890,
                    insuranceCoverage:["liabirityCoverage","comprehensiveInsurance"]
                },
                radiant:{
                    holder:"divine",
                    cardNumber:8790,
                    issueDate:678978,
                    insuranceExpiracy:45678
                },
                RAMA:{
                    holder:"divine",
                    cardNumber:678978,
                    issueDate:5678987,
                    insuranceExpiracy:7890,
                    insuranceCoverage:["liabirityCoverage","comprehensiveInsurance"]   
                },
                other:{
                    holder:"divine",
                    cardNumber:678978,
                    issueDate:5678987,
                    insuranceExpiracy:7890,
                    insuranceCoverage:["liabirityCoverage","comprehensiveInsurance"],
                    email:"divine@gmail.com",
                    telephone:56789,
                    country:"rwanda",
                    province:"north",
                    district:"gasabo",
                    street:"kg89",
                    website:"www.limitless.com"
                }
            }],

            bankInformation:[{
                haveAccount:"yes",
                bank:"bank of kigali"
            }],
            assets:[{
                    current:"food",
                    fixed:"car"
                }],
                socialMedia:['twitter','facebook','instragram','linkedIn','whatsup']
        }]
    }

 //create the methods to be used ;

 createUserInformation(information){
     const newUserInformation = {
         id:this.informations.length + 1,
         firstName:information.firstName,
         middleName:information.middleName,
         surName:information.surName,
         birthDate:information.birthDate,
         birthPlace:information.birthPlace,
         nationality:information.nationality,
         sex:information.sex,
         nationalId:information.nationalId,
         martialStatus:information.martialStatus,
         country:information.country,
         province:information.province,
         district:information.district,
         sector:information.sector,
         cell:information.cell,
         village:information.village,
         email:information.email,
         jobEmail:information.jobEmail,
         primaryNumber:information.primaryNumber,
         secondaryNumber:information.secondaryNumber,
         father_firstName:information.father_firstName,
         father_surName:information.father_surName,
         mother_firstName:information.mother_firstName,
         mother_surName:information.mother_surName,
         spouse_firstName:information.spouse_firstName,
         spouse_middleName:information.spouse_middleName,
         spouse_surName:information.spouse_surName,
         spouseId:information.spouseId,
         telephone:information.telephone,
         childrenNumber:information.childrenNumber,
         dependency:information.dependency,
         occuption:information.occupation,
         insuranceType:information.insuranceType,
         bankInformation: information.bankInformation,
         assets:information.assets,
         socialMedia:information.socialMedia

     };

  this.informations.push(newUserInformation);
     return newUserInformation;
 }
  // view all userInformation 
  findAllUserInformation(){
  return this.informations;
  }


};

export default new UserInformationModel();