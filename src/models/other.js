// creeate memory;
 
class OtherInformationModel {
    constructor(){
        // the attribute
      this.otherInformations = [
          {
            id:1,
            businessType:"wholesale",
            businessName:"limitless",
            description:"changing people's lives",
            country:"rwanda",
            province:"north",
            district:"mukinga",
            street:"kg7890"
          },
          {
            id:2,
            businessType:"Industrial",
            businessName:"umusaruro",
            description:"changing people's lives",
            country:"rwanda",
            province:"southern",
            district:"mukinga",
            street:"kg786790"
          },
          {
            id:3,
            businessType:"trade",
            businessName:"iterambere",
            description:" changing the world for better tomorrow",
            country:"uganda",
            province:"east",
            district:"mukinga",
            street:"kg7678890"
          }
      ]
    }

    // create the methods

    createOtherInformation(information){
        const newOtherInformation = {
            id:this.otherInformations.length + 1,
            businessType:information.businessType,
            businessName:information.businessName,
            description:information.description,
            country:information.country,
            province:information.province,
            district:information.district,
            street:information.street
        };

        this.otherInformations.push(newOtherInformation);
        return newOtherInformation
    }
}

export default new OtherInformationModel();