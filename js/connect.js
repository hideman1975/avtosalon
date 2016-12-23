console.log("from connect.js");
var ourData=[];
var ourCar=[];

function connectToBase(){

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', "php/connect.php", false);
ourRequest.onload = function(){
	ourData = JSON.parse(ourRequest.responseText);
	};
ourRequest.send(null);
makeOtdel();
//console.log(ourData);
}

function connectToCarBase(){

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', "php/getcar.php", false);
ourRequest.onload = function(){
	ourCar = JSON.parse(ourRequest.responseText);
	};
ourRequest.send(null);

console.log(ourCar);
}


function makeOtdel(){
	var service = {
 employee_id: 101,
 className: 'otdel',
 designation: 'тел: 423-66-71',
 employee_name: "Сервисный отдел"
 }	
 
 var credit = {
 employee_id: 102,
 className: 'otdel',
 designation: 'тел: 454-86-91',
 employee_name: "Кредитный отдел"
 }	
 
 var komplekt = {
 employee_id: 103,
 className: 'otdel',
 designation: 'тел: 412-12-77',
 employee_name: "Запасные части, расходные материалы"
 }	
	ourData.unshift(credit);
	ourData.splice(-6, 0, service);
	ourData.splice(-2, 0, komplekt);
	
}

//для выгрузки температуры
var get = function(url){
	var getter = new XMLHttpRequest();
	parser = new DOMParser();
	getter.open('GET', url, true);
	getter.onreadystatechange = function(){
		if (getter.readyState == 4){
			var xmlDoc = parser.parseFromString(getter.responseText, "text/html");
			//var jq = $('title', xmlDoc);
			//console.log(jq[0].innerHTML);
			//$("#port").text(jq[0].innerHTML);
			$('div.today-panel__temperature');
			var tempr = $('div.today-panel__temperature', xmlDoc);
			//console.log(tempr[0].outerText);
			$("#tempereture").text(tempr[0].outerText);
			
		}
	};
	getter.send();
}