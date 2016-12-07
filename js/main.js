//console.log("from main.js");
//var m = require ("./connect");
//document.getElementById("btn3").addEventListener("click", makeRender);
//document.getElementById("btn1").addEventListener("click", changeName);
//var transfer = connectToBase();


connectToBase();
makeContact();
makeRender();
//timerCount('timer');
//console.log(ourData);
//console.dir(ContactsList);
//console.log(ContactList);
//$(document).ready(makeContact());
var visitor1 = new Visitor("Вася",0);
var visitor2 = new Visitor("Петя",1);
var visitor3 = new Visitor("Коля",2);
var visitor4 = new Visitor("Дима",3);
var visitor5 = new Visitor("Саша",4);
var visitor6 = new Visitor("Саша",5);
var visitor7 = new Visitor("Саша",6);
var visitor8 = new Visitor("Саша",7);
ochered();
setInterval(ochered, 50000);
//for(var i=0; i<20; i++) ochered();
makeRender();
function ochered(){
setTimeout($.proxy(visitor1.takeManager,visitor1), 1000); //можно так
//setTimeout(visitor2.takeManager.bind(visitor2), 24000); //а можно так
setTimeout($.proxy(visitor3.takeManager,visitor3), 10000); //можно так
setTimeout($.proxy(visitor4.takeManager,visitor4), 15000); //можно так
//setTimeout($.proxy(visitor5.takeManager,visitor5), 22000); //можно так
setTimeout($.proxy(visitor6.takeManager,visitor6), 19000); //можно так
setTimeout($.proxy(visitor7.takeManager,visitor7), 28000); //можно так
setTimeout($.proxy(visitor8.takeManager,visitor8), 12000); //можно так
}

