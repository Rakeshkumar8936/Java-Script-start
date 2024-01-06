function saymyName(){
    console.log("H");
    console.log("I");
    console.log("T")
}
// saymyName();

// function addTwoNumbers(number1, number2){ //paramaters number1 and number2
//     console.group(number1 + number2);
// }


// const result = addTwoNumbers(3,5); //3 and null are argumants
// console.log("Result: ", result)

function loginUserMessage(userName){ //paramaters userName
    return `${userName} just logged in`;
}
const result=loginUserMessage("Hitesh");
// console.log(result);

// The way in which the products price is added in the cart
function calculateCartPrice(val1, val2, ...num1){ //...num will return the array of arguments
    
    //return val1; //val 1 will return 200 form the arguments
    //return val2; // val2 return 400
    return num1; //it return the array of all the left values apar val1 and val2
}
//console.log(calculateCartPrice(200,400,456,345)) //arguments val1=200 and val2 = 400 and num1 return the array of left values



// OBJECTS AND FUNCTIONS
const user={
    userName:'rakesh',
    roll: 199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and roll number is ${anyObject.roll}`)
}

// handleObject(user);

// // OR passing the object directly
// handleObject({
//     userName:"Rakesh",
//     roll:190
// })

//PASSING ARRAY IN FUNCTION
const myNewArray=[200, 40, 19,83]
function handleArray(getArray){
    return getArray[1]
}

//console.log(handleArray(myNewArray));

