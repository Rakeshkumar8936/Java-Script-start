const myObject={
    js:"jsvaScript",
    cpp:"c++",
    rb:'ruby',
    Swift:'Swift by apple'
}

for(const key in myObject){
    //console.log(`${key} shortcut is the shortcut for " ${myObject[key]} "`) //here dot (.) operataor do not work
    console.log(key)
}

const  programming = ["js","cpp","c","java","html"]

for(const i in programming){
   console.log(programming[i])
}
