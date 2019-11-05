// create a memory to hold all the data;

class RssbInformationModel{
    constructor(){
        this.rssbInfomations= [
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
    createRssbInformation(information){
        const newRssbInformation = {
            id:this.rssbInfomations.length +1,
            holder:information.holder,
            cardNumber:information.cardNumber,
            issueDate:information.issueDate,
            insuranceExpiracy:information.insuranceExpiracy,
            insuranceCoverage:information.insuranceCoverage
        }
        this.rssbInfomations.push(newRssbInformation);
        return newRssbInformation;
    }
    // get one ;
    findOne(id){
        return this.rssbInfomations.find(info => info.id === id)
    }
    // get all 
    findAllRssbInformation(){
        return this.rssbInfomations;
    }
    // update cardNumber rssb information
    updateRssbInformationCardNumber(id,cardNumber){
        const fullRssbInformation = this.findOne(id);
        const index = this.rssbInfomations.indexOf(fullRssbInformation);
        this.rssbInfomations[index].cardNumber = cardNumber;
        return this.rssbInfomations
    }
    // update issueDate rssb information
    updateRssbInformationIssueDate(id,issueDate){
        const fullRssbInformation = this.findOne(id);
        const index = this.rssbInfomations.indexOf(fullRssbInformation);
        this.rssbInfomations[index].issueDate = issueDate;
        return this.rssbInfomations
    }
    // update insuranceExpiracy rssb information
    updateRssbInformationInsuranceExpiracy(id,insuranceExpiracy){
        const fullRssbInformation = this.findOne(id);
        const index = this.rssbInfomations.indexOf(fullRssbInformation);
        this.rssbInfomations[index].insuranceExpiracy = insuranceExpiracy;
        return this.rssbInfomations
    }
    // update insuranceCoverage rssb information
    updateRssbInformationInsuranceCoverage(id,insuranceCoverage){
        const fullRssbInformation = this.findOne(id);
        const index = this.rssbInfomations.indexOf(fullRssbInformation);
        this.rssbInfomations[index].insuranceCoverage = insuranceCoverage;
        return this.rssbInfomations
    }
    // delete rssb information;
    deleteRssbInformation(information){
        const index = this.rssbInfomations.indexOf(information);
        return this.rssbInfomations.splice(index,1)
    }
}

export default new RssbInformationModel();