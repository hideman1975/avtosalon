console.log("from contact.jsx");
var ContactsList;
var Contact;
var Timer;

function makeContact(){

Contact = React.createClass({
	render: function(){
		return (
		<tr className={this.props.className}>
			<td><img id="face" src={this.props.pic} /></td>
			<td>{this.props.key}</td>
			<td>{this.props.employee_name}</td>
			<td>{this.props.hired_date}</td>
			<td>{this.props.salary}</td>
			<td><Timer /></td>
		</tr>
		//timerCount(this.props.employee_name);
		)
	}
}); //Contact create


ContactsList = React.createClass({
	//this.state = {
		//	height: 100
		//};
	
	render: function(){
		return (
		<tbody>
			
			{
	
					ourData.map(function(el){
					return <Contact	pic={el.pic}
									key={el.employee_id}
									employee_name={el.employee_name}
									hired_date = {el.hired_date}
									salary={el.salary}
									className = {el.className}
					/>;
				})
				
			}

		</tbody>
		)
	}
}); //ContactList create

Timer = React.createClass({
		getInitialState: function(){
			return{
				seconds: 0
			};
		},
		
		componentDidMount: function(){
			this.timer = setInterval(this.tick, 1000);
		},
		
		componentWillUnmount: function() {
			clearInterval(this.timer);
			
		},
		
		
		tick: function(){
			this.setState({ seconds: this.state.seconds + 1});
		},
		
		render: function(){
			return(
				<h4> Обслуживание идёт: {this.state.seconds}</h4>
			);
		}
	});


ReactDOM.render(
        <ContactsList />,
        document.getElementById('compact')
      );

} //MakeContact close


