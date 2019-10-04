class UserModel{
    constructor(){
        this.users=[{
            id:1,
            firstName:'divine',
            surName:"umurerwa",
            telephone:789897980,
            email:'divine@gmail.com',
            nationality:"rwandan",
            category:'client'
        },
        {
            id:2,
            firstName:'christian',
            surName:"mucyo",
            telephone:789897980,
            email:'mucyo@gmail.com',
            nationality:"rwandan",
            category:'client'
           
        },
        {
            id:3,
            firstName:'madjid',
            surName:"alice",
            telephone:789897980,
            email:'madjid@gmail.com',
            nationality:"rwandan",
            category:'client'
            
        },
        {
            id:4,
            firstName:'eric',
            surName:"niyonsaba",
            telephone:789897980,
            email:'niyonsaba@gmail.com',
            nationality:"rwandan",
            category:'client'
  
        }];
    }

   findUser(telephone){
    return this.users.find(user => user.telephone == telephone);
   }

  createUser(user){
   const newUser = this.users.push({id: this.users.length +1, ...user });
   return this.users[newUser -1];
   }

}


export default new UserModel();