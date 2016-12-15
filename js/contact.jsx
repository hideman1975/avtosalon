//console.log("from contact.jsx");
var ContactsList;
var Contact;
var Timer;
var second = 0;

function makeContact(){

Contact = React.createClass({
	
	componentDidMount: function(){
	var rand = Math.floor((Math.random() * 30000) + 25000);
	var teaBreakRand = Math.floor((Math.random() * 50000) + 45000);
	//console.log(rand);
	if (this.props.className !== "otdel"){
		//console.log("Забежал в пуск таймеров");
			this.timer = setInterval(this.statusChange, teaBreakRand);
			this.visitorTimer = setInterval(this.visitorChange, rand);	
		}
	},
	
	getInitialState: function() {
	return {
      status: this.props.className
	  }
		}, 
	
	statusChange: function(){
	if(this.state.status == "free"){
	this.setState({ status: "teaBreak"});	
	} else if (this.state.status == "teaBreak"){
		this.setState({ status: "free"});
	}
		},
	
	visitorChange: function(){
	if(this.state.status == "free"){
	this.setState({ status: "bizy"});	
	} else {
		this.setState({ status: "free"});
	}
		},
		
	render: function(){
		//console.log(this);
		return (
		<tr className={this.state.status}>
			<td><img id={this.state.status} src={this.props.pic} /></td>
			<td>{this.props.key}</td>
			<td>{this.props.employee_name}</td>
			<td>{this.props.designation}</td>
			<td>{this.props.salary}</td>
	<td><Timer ocupation={this.state.status} /></td>
		</tr>
		/*  */
		)
	}
}); //Contact create

//class ContactsList extends React.Component{	
ContactsList = React.createClass({
	onMakeOlder: function(){
		console.log("I am ContactList");
		
	}, 
	
	render: function(){
		return (
		
		<tbody>
				<tr className="headrow"><td></td><td></td><td>Сотрудник</td><td>Должность</td><td>Окно №</td><td>Время обслуживания</td></tr>
			{
	
					ourData.map(function(el){
					return <Contact	pic={el.pic}
									key={el.employee_id}
									employee_name={el.employee_name}
									designation = {el.designation}
									salary={el.salary}
									className = {el.className}
									/* seconds = {parseInt(el.seconds)} */
									
					/>;
					
				})
				
			}

		</tbody>
		
		)
	}
}); //ContactList create

Timer = React.createClass({
			 
		componentDidMount: function(){
		//console.log("DidMount working");
		
		},
			componentWillUnmount: function() {
			clearInterval(this.timer);
			
		},
		
		getInitialState: function() {
		
		return {
      liked: false,
	  seconds: 0,
	  timerStart: false
    }
		}, 
				
		tick: function(){
			this.setState({ seconds: this.state.seconds + 1});
		},
				
		tiktak: function(){
			if(this.props.ocupation == "bizy" && this.state.seconds == 0){
				if(this.timer){
				clearInterval(this.timer);
				}
				this.timer = setInterval(this.tick, 1000);
				} else if (this.props.ocupation == "free" && this.props.timerStart == true){
				clearInterval(this.timer);
			}
		},
		
		render: function(){
		
		var bizyMessage = <h3> 0 минут {this.state.seconds} секунд </h3>;	
		var freeMessage = <p> Свободно </p>;
		var breakMessage = <p> Перерыв </p>;
		//var outMessage = freeMessage;
		var nullMessage = <p></p>;
		
		this.tiktak(); //Запускает секундомер
	
			if(this.props.ocupation == "bizy"){
			return bizyMessage;
			
			} else if(this.props.ocupation == "free") {
				this.state.seconds = 0;
				return freeMessage;
			} else if(this.props.ocupation == "teaBreak") {
				return breakMessage;
				} else return nullMessage;
		} //render close

	}); 


} //MakeContact close

function makeRender(){
		ReactDOM.render(
        <ContactsList />,
        document.getElementById('compact')
      );
}
