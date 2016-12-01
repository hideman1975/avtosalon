//________Функция таймера__________________
function timerCount(timerDiv){
	console.log(timerDiv);
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
		document.getElementById(timerDiv)
	); 
	
}
//________Функция таймера закрыта__________________


