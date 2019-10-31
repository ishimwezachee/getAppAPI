// create a memory to hold all the data 

class RadiantInformationModel{
    constructor(){
        this.radiantInformations = [
            {
                id:1,
                holder:"mucyo",
                cardNumber:567578,
                issueDate:634567,
                insuranceExpiracy:575586,
                insuraceCoverage:"full"
            },
            {
                id:2,
                holder:"gasana",
                cardNumber:5657578,
                issueDate:634545667,
                insuranceExpiracy:574365586,
                insuraceCoverage:"empty"
            },
            {
                id:3,
                holder:"harerImana",
                cardNumber:567554778,
                issueDate:63457367,
                insuranceExpiracy:57557386,
                insuraceCoverage:"meduim"
            }
        ]
    }

    // method to create the logics
     createRadiantInformation(information){
         const newRadiantInformation = {
             id:this.radiantInformations.length +1,
             holder:information.holder,
             cardNumber:information.cardNumber,
             issueDate:information.issueDate,
             insuranceExpiracy:information.insuranceExpiracy,
             insuranceCoverage:information.insuraceCoverage
             
         }

         this.radiantInformations.push(newRadiantInformation);
         return newRadiantInformation
     }
     // get one 
     findOne(id){
         return this.radiantInformations.find(info => info.id ===id);
     }
     // get all
     findAllRadiantInformation(){
         return this.radiantInformations;
     }

     // update cardNumber Information
     updateRadiantInformationCardNumber(id,cardNumber){
         const fullRadiantInformation = this.findOne(id);
         const index = this.radiantInformations.indexOf(fullRadiantInformation);
         this.radiantInformations[index].cardNumber = cardNumber;
         return this.radiantInformations;
     }
     // update IssueDate Information
     updateRadiantInformationIssueDate(id,issueDate){
        const fullRadiantInformation = this.findOne(id);
        const index = this.radiantInformations.indexOf(fullRadiantInformation);
        this.radiantInformations[index].issueDate = issueDate;
        return this.radiantInformations;
    }
     // update InsuranceExpiracy Information
     updateRadiantInformationInsuranceExpiracy(id,insuranceExpiracy){
        const fullRadiantInformation = this.findOne(id);
        const index = this.radiantInformations.indexOf(fullRadiantInformation);
        this.radiantInformations[index].insuranceExpiracy = insuranceExpiracy;
        return this.radiantInformations;
    }
     // update InsuranceCoverage Information
     updateRadiantInformationInsuranceCoverage(id,insuranceCoverage){
        const fullRadiantInformation = this.findOne(id);
        const index = this.radiantInformations.indexOf(fullRadiantInformation);
        this.radiantInformations[index].insuranceCoverage = insuranceCoverage;
        return this.radiantInformations;
    }
    // delete radiant information 
    deleteRadiantInformation(information){
        const index = this.radiantInformations.indexOf(information)
            return this.radiantInformations.splice(index,1)
       
    }
}


export default new RadiantInformationModel();