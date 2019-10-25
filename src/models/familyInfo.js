// class for family information 

class FamilyInformationModel{
    constructor(req,res){
        this.familyInformations =[

            {
                id:1,
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
                dependency:"fanance"
        },
        {
            id:2,
            father_firstName:"mucyo",
            father_surName:"hakiza",
            mother_firstName:'Rubanda',
            mother_surName:"adeline",
            spouse_firstName:"mukuza",
            spouse_middleName:"david",
            spouse_surName:'maluwa',
            spouseId:7689045890,
            telephone:8675690,
            childrenNumber:6557890,
            dependency:"fanance"
    }
        ]
    };
  // created the method for ccreating family information 
  createFamilyInformation(information){
    const newFamilyInformation ={
    id:this.familyInformations.length + 1,
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
    dependency:information.dependency
    };
    this.familyInformations.push(newFamilyInfromation);
    return newFamilyInformation
  };

  // get one 
  findOne(id){
      return this.familyInformations.find(info => info.id === id);
  }
 // fetch all 
 findAllFamilyInformations(){
     return this.familyInformations
 };

 // update :telephone
 updatingTelephoneMethod(id,telephone){
     const fullFamilyInformation = this.findOne(id);
     const index = this.familyInformations.indexOf(fullFamilyInformation)
     this.familyInformations[index].telephone = telephone;
     return this.familyInformations
 }
   // updating childrenNumber
 updatingChildrenNumberMethod(id,childrenNumber){
    const fullFamilyInformation = this.findOne(id);
    const index =  this.familyInformations.indexOf(fullFamilyInformation)
    this.familyInformations[index].childrenNumber = childrenNumber;
    return this.familyInformations
}
 // updating  dependency
updatingDependencyMethod(id,dependency){
    const fullFamilyInformation = this.findOne(id);
    const index =  this.familyInformations.indexOf(fullFamilyInformation)
    this.familyInformations[index].dependency = dependency;
    return this.familyInformations
};

// delete family Information 
  deleteFamilyInformationMethod(familyInformation){
      const index = this.familyInformations.indexOf(familyInformation);
          return this.familyInformations.splice(index,1);
     
  }

}

export default new FamilyInformationModel();