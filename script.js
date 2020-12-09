"use strict";

let users = [
    {name:'Iliya', age:19, isadult: true},
    {name:'Artem', age:15, isadult: false},
    {name:'Nikon', age:19, isadult: true},
    {name:'Sofia', age:18, isadult: false},
   //Почему-то не работает с age>18 {name:'Not work', age:10, isadult: age>18},
]


//for ()
function showMass(){
    
    for (let i = 0; i<users.length; i++){
        console.log(`Человек с именем ${users[i]['name']} с возврастом ${users[i].age} является взрослым ${users[i].isadult}`);
    }

}

showMass();


//for of 
let showMass1 = () => {

    for(const item of users){
        console.log(`Человек с именем ${item.name} с возврастом ${item.age} является взрослым ${item.isadult}`);
    }

}

showMass1();


//for in 
function showMass2(){

    for(const key in users){
        console.log(`Человек с именем ${users[key].name} с возврастом ${users[key].age} является взрослым ${users[key].isadult}`);
    }

}

showMass2();


//while 
function showMass3(){
    let i = 0;

    while(i<users.length){
        console.log(`Человек с именем ${users[i].name} с возврастом ${users[i].age} является взрослым ${users[i].isadult}`);
        i++;
    }

}

showMass3();

