const arr=[1,2,3,4,5,5]
for(const i of arr){
    console.log(i)
}

const a="Hello World"
for(const i of a){
    console.log(i)
};

const map = new Map();
map.set('IN',"India")
map.set('USA',"UNITED STATES")
map.set('FR',"FRANCE")

//console.log(map);

// for(const i of map){  //it will print the data inthe form of array
//     console.log(i)
// }

for(const [key,value] of map){  // it will destructure the values of the array and prints the key and value seperately
    
    console.log(key, ':-', value)
}