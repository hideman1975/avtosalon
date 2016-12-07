function Visitor(name, mgr){
	this.name = name;
	
	this.takeManager = function(timing)  {
		var me = this;
		//console.log("takeManager work");
		//console.log(timing);
		ourData[mgr].className = "bizy";
		ourData[mgr].seconds = 0;
		makeRender();
		var timer = setTimeout(me.freeManager, 20000);
		//console.log(this + timer);
	}
	
	this.freeManager = function()  {
		//console.log("freeManager work");
		//console.log(mgr);
		ourData[mgr].className = "free";
		//ourData[mgr].seconds = 100;
		makeRender();
	}

}