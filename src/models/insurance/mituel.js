// create a memory to hold all the data;

class MituelInformationModel{
    constructor(){
        this.mituelInfomations= [
            {
                id:1,
                holder:"divine",
                cardNumber:678978,
                issueDate:5678987,
                insuranceExpiracy:7890,
                insuranceCoverage:"liabirityCoverage",
            },
            {
                id:2,
                holder:"adeline",
                cardNumber:678978,
                issueDate:5678987,
                insuranceExpiracy:7890,
                insuranceCoverage:"liabirityCoverage"
            },
            {
                id:3,
                holder:"kaline",
                cardNumber:678978,
                issueDate:5678987,
                insuranceExpiracy:7890,
                insuranceCoverage:"liabirityCoverage"
            },
            {
                id:5,
                holder:"aliane",
                cardNumber:67896778,
                issueDate:567896787,
                insuranceExpiracy:7678890,
                insuranceCoverage:"liabirityCoverage",
            },
        ]
    }
    // creating the required methods 
    createMituelInformation(information){
        const newMituelInformation = {
            id:this.mituelInfomations.length +1,
            holder:information.holder,
            cardNumber:information.cardNumber,
            issueDate:information.issueDate,
            insuranceExpiracy:information.insuranceExpiracy,
            insuranceCoverage:information.insuranceCoverage
        }
        this.mituelInfomations.push(newMituelInformation);
        return newMituelInformation;
    }
 // get one 
  findOne(id){
      return this.mituelInfomations.find(info => info.id ===id)
  }

  // get all 
  findAllMituelInformation(){
      return this.mituelInfomations;
  }
   // update mituel information 
   // update cardNumber
   updateMituelInformationCardNumber(id,cardNumber){
       const fullMituelInformation = this.findOne(id);
       const index = this.mituelInfomations.indexOf(fullMituelInformation);
       this.mituelInfomations[index].cardNumber = cardNumber;
       return this.mituelInfomations;
   }
   // update issueDate
   updateMituelInformationIssueDate(id,issueDate){
    const fullMituelInformation = this.findOne(id);
    const index = this.mituelInfomations.indexOf(fullMituelInformation);
    this.mituelInfomations[index].issueDate = issueDate;
    return this.mituelInfomations;
}
   //update insuranceExpiracy
   updateMituelInformationInsuranceExpiracy(id,insuranceExpiracy){
    const fullMituelInformation = this.findOne(id);
    const index = this.mituelInfomations.indexOf(fullMituelInformation);
    this.mituelInfomations[index].insuranceExpiracy = insuranceExpiracy;
    return this.mituelInfomations;
}
   // update insuranceCoverage
   updateMituelInformationInsuranceCoverage(id,insuranceCoverage){
    const fullMituelInformation = this.findOne(id);
    const index = this.mituelInfomations.indexOf(fullMituelInformation);
    this.mituelInfomations[index].insuranceCoverage = insuranceCoverage;
    return this.mituelInfomations;
}
// delete mituel information 
deleteMituelInformation (information){
    const index = this.mituelInfomations.indexOf(information);
    return this.mituelInfomations.splice(index,1)
}
}

export default new MituelInformationModel();