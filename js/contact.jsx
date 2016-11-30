console.log("from contact.jsx");
var ContactsList;
var Contact;

function makeContact(){
Contact = React.createClass({
	render: function(){
		return (
		<tr>
			<td><img id="face" src={this.props.pic} /></td>
			<td>{this.props.key}</td>
			<td>{this.props.employee_name}</td>
			<td>{this.props.hired_date}</td>
			<td>{this.props.salary}</td>
		</tr>
		)
	}
});


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
					/>;
				})
				
			}

		</tbody>
		)
	}
});

ReactDOM.render(
        <ContactsList />,
        document.getElementById('compact')
      );


}	  