import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let time=new Date().getHours();

let greetColor={};
let greet='';

if (time>=3 && time<12){
	greetColor.color='rgb(243,148,0)';
	greet="Good Morning";
} else if (time>=12 && time<16){
	greetColor.color='rgb(255,196,38)';
	greet="Good Afternoon";
} else if (time>=16 && time<24){
	greetColor.color='rgb(164,255,234)';
	greet="Good Evening";
} else{
	greetColor.color='rgb(255,170,236)';
	greet="Good Night";
}


ReactDOM.render(
	<div className='mainbox'>
		<div className='subbox'>
			<h1>Hello Sir, <span style={greetColor}>{greet}</span></h1>
		</div>
	</div>,
  document.getElementById('root')
);
