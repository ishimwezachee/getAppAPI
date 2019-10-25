// creeate the class for the data;

class PersonalInfoModel{
    constructor(){
        // created the attribute;
        this.personalInformations=[
            {
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
        },
        {
            id:2,
            firstName:"ishimwe",
            middleName:"kaline",
            surName:"mucyo",
            birthDate:456,
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
            email:"kaline@gmail.com",
            jobEmail:"company@gmail.com",
            primaryNumber:67890,
            secondaryNumber:7890,
        }
    ]
            
    }
    // create the methods;
         // create personal information method;
         createPersonalInformation (information){
        const newPersonaInformation = {
        id:this.personalInformations.length + 1,
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
};

             this.personalInformations.push(newPersonaInformation);
             return newPersonaInformation;
         }

        // find one 
         findOne(id){
             return this.personalInformations.find(info => info.id === id );
         }
   // find all 
          findAllPersonalInformation(){
              return this.personalInformations;
          }

        // update: martialStatus
        updatingMartialStatusMethod(id,martialStatus) {
            const fullPersonalInformation = this.findOne(id);
            const index = this.personalInformations.indexOf(fullPersonalInformation);
            this.personalInformations[index].martialStatus = martialStatus;
            return this.personalInformations[index];
        }
         //update province
        updatingProvinceMethod(id,province) {
            const fullPersonalInformation = this.findOne(id);
            const index = this.personalInformations.indexOf(fullPersonalInformation);
            this.personalInformations[index].province = province
            return this.personalInformations[index];
        } 
       //update district
        updatingDistrictMethod(id,district) {
            const fullPersonalInformation = this.findOne(id);
            const index = this.personalInformations.indexOf(fullPersonalInformation);
            this.personalInformations[index].district = district
            return this.personalInformations[index];
        }
        //update sector
        updatingSectorMethod(id,sector) {
            const fullPersonalInformation = this.findOne(id);
            const index = this.personalInformations.indexOf(fullPersonalInformation);
            this.personalInformations[index].sector =sector
            return this.personalInformations[index];
        }
       //update cell
        updatingCellMethod(id,cell) {
            const fullPersonalInformation = this.findOne(id);
            const index = this.personalInformations.indexOf(fullPersonalInformation);
            this.personalInformations[index].cell = cell
            return this.personalInformations[index];
        }
        // update village
        updatingvillageMethod(id,village) {
            const fullPersonalInformation = this.findOne(id);
            const index = this.personalInformations.indexOf(fullPersonalInformation);
            this.personalInformations[index].village = village
            return this.personalInformations[index];
        }
      // update email
        updatingEmailMethod(id,email) {
            const fullPersonalInformation = this.findOne(id);
            const index = this.personalInformations.indexOf(fullPersonalInformation);
            this.personalInformations[index].email = email;
            return this.personalInformations[index];
        }
    //update jobbEmail
        updatingJobEmailEmail(id,jobEmail) {
            const fullPersonalInformation = this.findOne(id);
            const index = this.personalInformations.indexOf(fullPersonalInformation);
            this.personalInformations[index].jobEmail = jobEmail
            return this.personalInformations[index];
        }


         deletePersonalInformation(fullPersonalInformation){
            const index = this.personalInformations.indexOf(fullPersonalInformation);
            return this.personalInformations.splice(index,1);
         }
      
}

export default new PersonalInfoModel();