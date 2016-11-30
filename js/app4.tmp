timerCount();
connectToBase();
//makeContact();

document.getElementById("btn3").addEventListener("click", makeContact);
//__________________________________
var ourData = ["empty"];

function connectToBase(){
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', "php/connect.php");
ourRequest.onload = function(){
	ourData = JSON.parse(ourRequest.responseText);
	
};
ourRequest.send();
}
//_____________________________
console.log("from app again");


ReactDOM.render(
  React.createElement('h1', null, 'Автосалон Нижегородец приветствует Вас!'),
  document.getElementById('root')
);

//getData("andrew");
//американский код
function getData(pageName){
	
	var posting = $.post("php/connect.php", {
		name: pageName
	});
	
	posting.done(function(data){
	$("#content").html(data);
	obj = JSON.parse(data);
	
	});
	
	posting.fail(function(){
		alert("failed");
		
	});
	
}

//_____________________________
function makeContact(){
var Contact = React.createClass({
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
})

 var ContactsList = React.createClass({
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
})

 ReactDOM.render(
        <ContactsList />,
        document.getElementById('compact')
      ); 
	  
	  
}


//________Функция таймера__________________
function timerCount(){
	var Timer = React.createClass({
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
				<h4> Уже прошло {this.state.seconds} секунд</h4>
			);
		}
	});
	
	ReactDOM.render(
		<Timer />,
		document.getElementById('mount-point')
	);
	
}

//________Функция таймера закрыта__________________
