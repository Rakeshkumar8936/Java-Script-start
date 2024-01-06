const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Rohan"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

//Nested Oject
const regularUser={
    email:"rakesh@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Rahul",
            lastName:"Kumar"
        }
    }
}

//console.log(regularUser.fullname.userFullName.firstName) //OR console.log(regularUser.fullname.userFullName["firstName"])

//merging Onjects
const obj1={1:"Rakesh", 2:"Kumar"}
const obj2={3:"Rohan", 4:"mishra"}

//const Obj3=Object.assign(obj1, obj2) //Obj3 is a reference to the modified obj1, and if you make changes to Obj3, it will affect obj1.
//console.log(obj1)
//const Obj4=Object.assign({},obj1, obj2) //Obj4 is a completely new object that contains the properties of both obj1 and obj2. Changes to Obj4 won't affect obj1 or obj2.
//console.log(obj1)
//console.log(Obj4)

//Another way of merging
const obj5={...obj1 , ...obj2}
//console.log(obj5)

//when accessing the datas from the datbase
//data available format
const user=[
    {
        id:123,
        email:"rakesh@mail.com"
    },
    {
        id:"234s",
        email:"Rakeshkumar@mail.com"
    }
]
//acessing the data
// console.log(user[0].email)
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));