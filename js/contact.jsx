console.log("from contact.jsx");
var ContactsList;
var Contact;
var Timer;
var second = 0;

function makeContact(){

Contact = React.createClass({
	render: function(){
		//console.log(this);
		return (
		<tr className={this.props.className}>
			<td><img id="face" src={this.props.pic} /></td>
			<td>{this.props.key}</td>
			<td>{this.props.employee_name}</td>
			<td>{this.props.designation}</td>
			<td>{this.props.salary}</td>
			<td><Timer ocupation={this.props.className} /></td>
		</tr>
		
		)
	}
}); //Contact create


ContactsList = React.createClass({
	
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
									seconds = {parseInt(el.seconds)}
					/>;
				})
				
			}

		</tbody>
		)
	}
}); //ContactList create

Timer = React.createClass({
			 //var freeMessage = "<h4> Свободно </h4>";
			 //var bizyMessage = <h4> Время обслуживания: {this.state.seconds}</h4>;
			 getInitialState: function(){
			return{
				seconds: 0,
				timerStart: false
			};
		}, 
		
		componentDidMount: function(){
		//console.log("DidMount working");
		},
			componentWillUnmount: function() {
			clearInterval(this.timer);
			
		},
		
		tick: function(){
			this.setState({ seconds: this.state.seconds + 1});
		},
		
		srTimer: function(){
			this.setState({ timerStart: true});
			
		},
		
		stTimer: function(){
			this.setState({ timerStart: false});
		},
		
		render: function(){
		var bizyMessage = <h4> 0 минут {this.state.seconds} секунд</h4>;	
		var freeMessage = <h4> Свободно </h4>;
		var outMessage = freeMessage;
		
		if(this.props.ocupation == "bizy" && this.state.timerStart == false){
			//	console.log("Start timer");
				this.srTimer();
				this.timer = setInterval(this.tick, 1000);
				
				
			} else if (this.props.ocupation == "free" && this.state.timerStart == true){
			//	console.log("Stop timer");
				clearInterval(this.timer);
				this.setState({ seconds: 0});
				this.stTimer();
				outMessage = freeMessage;
			}
			//console.log(this.props.ocupation);
			if(this.props.ocupation == "bizy"){
			return bizyMessage;} else {
				return freeMessage;
			}
		}
		
			
			
		
	});


} //MakeContact close

function makeRender(){
		ReactDOM.render(
        <ContactsList />,
        document.getElementById('compact')
      );
}
