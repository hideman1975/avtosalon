class Service extends React.Component{	
	constructor(){
		super();
		this.state = {
			homeLink: "Home"
		}
		
	}
	
	onGreet(){
		alert("Hello!");
	}
	
	onChangeLinkName(newName){
		this.setState({
			homeLink: newName
		});
		
	}
	
	
	render(){
		return (	
	<tbody>
				<tr className="headrow"><td>Время</td><td>Марка</td><td>VIN</td><td>Гос номер</td><td>Мастер</td><td>Статус</td></tr>
			{
	
					ourCar.map(function(el){
					return <Car		
									key={el.id}
									master={el.master}
									status={el.status}
									car_marka={el.car_marka}
									car_vin = {el.car_vin}
									gos={el.gos}
									time = {el.time}
									/* seconds = {parseInt(el.seconds)} */
									
					/>;
					
				})
				
			}

		</tbody>
		
		)
	}
	
}

class Car extends React.Component{	
	constructor(){
		super();
		this.state = {
			status: "free"
		}
		
	}
	
	onGreet(){
		alert("Hello!");
	}
	
	onChangeLinkName(newName){
		this.setState({
			homeLink: newName
		});
		
	}
	
	
	render(){
		return (	
	<tr className={this.state.status}>
			<td>{this.props.time.substr(11, 5)}</td>
			<td>{this.props.car_marka}</td>
			<td>{this.props.car_vin}</td>
			<td>{this.props.gos}</td>
			<td>{this.props.master}</td>
			<td>{this.props.status}</td>
	
		</tr>
	)}
	
}

ReactDOM.render(<Service />, window.document.getElementById('service'));