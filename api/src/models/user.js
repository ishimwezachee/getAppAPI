class UserModel{
    constructor(){
        this.users=[{
            firstName:'divine',
            surName:"umurerwa",
            telephone:789897980,
            email:'divine@gmail.com',
            userType:"user",
        },
        {
            firstName:'christian',
            surName:"mucyo",
            telephone:789897980,
            email:'mucyo@gmail.com',
            userType:"user",
        },
        {
            firstName:'madjid',
            surName:"alice",
            telephone:789897980,
            email:'madjid@gmail.com',
            userType:"user",
            isAdmin:false
        },
        {
            firstName:'eric',
            surName:"niyonsaba",
            telephone:789897980,
            email:'niyonsaba@gmail.com',
            userType:"user",
  
        }];
    }

   findUser(email){
    return this.users.find(user => user.email=== email);
   }

  createUser(user){
   const newUser = this.users.push({id: this.users.length +1,...user });
   return this.users[newUser -1]
   }

}


export default new UserModel();