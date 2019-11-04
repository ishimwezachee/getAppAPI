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
                id:1,
                holder:"walcon",
                cardNumber:56464978,
                issueDate:34578678,
                insuranceExpiracy:556789,
                insuranceCoverage:"yollo"
            },
            {
                id:1,
                holder:"gako",
                cardNumber:56464978,
                issueDate:34578678,
                insuranceExpiracy:556789,
                insuranceCoverage:"yollo"
            }
        ]
    }

    //create the required method ;

    createRamainformation(information){
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
};

export default new RamaInformationModel();