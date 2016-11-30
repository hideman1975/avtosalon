console.log("from connect.js");
var ourData=[];
var name = "Вася";

function connectToBase(){

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', "php/connect.php", false);
ourRequest.onload = function(){
	ourData = JSON.parse(ourRequest.responseText);
	};
ourRequest.send(null);

}