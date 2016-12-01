function Visitor(name, mgr){
	this.name = name;
	//this.mgr = mgr;
	console.log(mgr);
	this.takeManager = function()  {
		var me = this;
		console.log("takeManager work");
		console.log(mgr);
		ourData[mgr].className = "bizy";
		makeContact();
		var timer = setTimeout(me.freeManager, 3000);
		console.log(this + timer);
	}
	
	this.freeManager = function()  {
		console.log("freeManager work");
		console.log(mgr);
		ourData[mgr].className = "free";
		makeContact();
	}

}