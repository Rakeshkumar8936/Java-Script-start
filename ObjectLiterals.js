// declaring objects using Object Literals 
const mySymb=Symbol();
const JsUser={
    Name : "Rakesh",
    age:18,
    Email:'rakeshranjan.20@nshm.edu.in',
    [mySymb]:'(*&^'
}

console.log(JsUser.Name);

//console.log(JsUser[mySymb]);
//JsUser.Name = "Rakesh Kumar Ranjan";
//console.log(JsUser);
//Object.freeze(JsUser);
//JsUser.Name = "Rakesh Ranjan";
//console.log(JsUser);
JsUser.greeting=function(){
    console.log("Hello js Users")
}
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello ${this.Name} How are You?`);
}
console.log(JsUser.greetingTwo());