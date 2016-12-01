console.log("from main.js");
//var m = require ("./connect");
//document.getElementById("btn3").addEventListener("click", makeContact);
//var transfer = connectToBase();


connectToBase();
makeContact();
//timerCount('timer');
console.log(ourData);
console.dir(ContactsList);
//console.log(ContactList);
//$(document).ready(makeContact());
var visitor1 = new Visitor("Вася",1);
var visitor2 = new Visitor("Петя",3);
var visitor3 = new Visitor("Коля",0);
var visitor4 = new Visitor("Дима",2);
var visitor5 = new Visitor("Саша",4);

setInterval(ochered, 15000);


function ochered(){
setTimeout($.proxy(visitor1.takeManager,visitor1), 5000); //можно так
setTimeout(visitor2.takeManager.bind(visitor2), 4000); //а можно так
setTimeout($.proxy(visitor3.takeManager,visitor3), 7000); //можно так
setTimeout($.proxy(visitor4.takeManager,visitor4), 9000); //можно так
setTimeout($.proxy(visitor5.takeManager,visitor5), 12000); //можно так
}

