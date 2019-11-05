// create a memory that holds all the data;
 
class RamaInformationModel{
    constructor(){
        this.ramaInformations = [
            {
                id:1,
                holder:"madjid",
                cardNumber:56464978,
                issueDate:34578678,
                insuranceExpiracy:556789,
                insuranceCoverage:"yollo"
            },
            {
                id:2,
                holder:"walcon",
                cardNumber:56464978,
                issueDate:34578678,
                insuranceExpiracy:556789,
                insuranceCoverage:"yollo"
            },
            {
                id:3,
                holder:"gako",
                cardNumber:56464978,
                issueDate:34578678,
                insuranceExpiracy:556789,
                insuranceCoverage:"yollo"
            }
        ]
    }

    //create the required method ;

    createRamaInformation(information){
        const newRamaInformation = {
            id:this.ramaInformations.length +1,
            holder:information.holder,
            cardNumber:information.cardNumber,
            issueDate:information.issueDate,
            insuranceExpiracy:information.insuranceExpiracy,
            insuranceCoverage:information.insuranceCoverage
        }

        this.ramaInformations.push(newRamaInformation);
        return newRamaInformation
    }
    // get one 
    findOne(id){
        return this.ramaInformations.find(info => info.id ===id);
    }
    //  get all ramaInformation;
    findAllRamaInformation(){
        return this.ramaInformations;
    }
    //update rama information ;
    // update CardNumber information ;
    updateRamaInformationCardNumber(id,cardNumber){
        const fullInformation = this.findOne(id);
        const index = this.ramaInformations.indexOf(fullInformation);
        this.ramaInformations[index].cardNumber =  cardNumber;
        return this.ramaInformations;
    }
    // update issueDate  ;
    updateRamaInformationIssueDate(id,issueDate){
        const fullInformation = this.findOne(id);
        const index = this.ramaInformations.indexOf(fullInformation);
        this.ramaInformations[index].issueDate =  issueDate;
        return this.ramaInformations;
    }
    // update insuranceExpiracy;
    updateRamaInformationInsuranceExpiracy(id,insuranceExpiracy){
        const fullInformation = this.findOne(id);
        const index = this.ramaInformations.indexOf(fullInformation);
        this.ramaInformations[index].insuranceExpiracy = insuranceExpiracy;
        return this.ramaInformations;
    }
    // update insuranceCoverage;
    updateRamaInformationInsuranceCoverage(id,insuranceCoverage){
        const fullInformation = this.findOne(id);
        const index = this.ramaInformations.indexOf(fullInformation);
        this.ramaInformations[index].insuranceCoverage = insuranceCoverage;
        return this.ramaInformations;
    }

    // delete rama information ;
    deleteRamaInformation(information){
        const index = this.ramaInformations.indexOf(information);
        return this.ramaInformations.splice(index,1);
    }
};

export default new RamaInformationModel();