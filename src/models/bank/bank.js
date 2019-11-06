// create a memory for  the bank ;
class BankModel {
    constructor(){
        this.banks =[
            {
                id:1,
                bankName:"BK"
            },
            {
                id:2,
                bankName:"equity"
            },
            {
                id:3,
                bankName:"BPR"
            },
            {
                id:4,
                bankName:"access"
            }
        ]
    }
    // create a bank 
    createBankName(name){
        const newBank ={
            id:this.banks.length + 1,
            bankName:name.bankName
        }
        this.banks.push(newBank);
        return newBank
    }
    // get one bank 
    findOne(id){
        return this.banks.find(bank => bank.id === id);
    }
    // get all banks;
    findAllBanks(){
        return this.banks;
    }
    // update bank 
    UpdateBankNameMethod(id,bankName){
        const allBank = this.findOne(id);
        const index = this.banks.indexOf(allBank);
        this.banks[index].bankName = bankName;
        return this.banks;
    }
    // delete bank 
    deleteBank(name){
        const index = this.banks.indexOf(name);
        return this.banks.splice(index,1)
    }
}

export default new BankModel();