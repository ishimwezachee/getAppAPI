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
}


export default new RadiantInformationModel();