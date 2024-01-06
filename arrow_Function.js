const user={
    userName :"Hitesh",
    price : 999,
    welcomeMessage:function(){
        console.log(`${this.userName}, welcome to the World`) // prints the userName ie Hitesh
        //console.log(this); // prints the wholw object
    }
}

// user.welcomeMessage();
// user.userName="Sam"
// user.welcomeMessage();

function chai(){
    let userName = "Hitesh"
    console.log(this);
    // console.log(this.userName); //this format only works in obbjects
}
//chai();

//ARROW FUNCTION

const addTwo = (num1,num2)=>{
    return num1+num2
}
//OR
//const addTwo =(num1, num2)=>(num1+num2);

//console.log(addTwo(3,6))

//IFEE--used to prevent the function from globalscope pollution......Immediately invoked function expression
//IMP NOTE-- must add semicolon at the end in IFEE function to end the function
// (function chai(){
//     console.log(`Hello World`)
// })();

((name)=>{
    console.log(`Hello ${name}`)
})("Rakesh");

(()=>{
    console.log(`lidugni`)
})();
