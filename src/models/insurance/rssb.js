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
}

export default new RssbInformationModel();