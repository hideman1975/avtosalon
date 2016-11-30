function Visitor(name){
	this.name = name;
	
	this.takeManager = function()  {
		console.log("I am "+ this.name);
		console.log(<ContactsList />);
	}

}