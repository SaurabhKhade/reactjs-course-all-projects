import React from 'react';
const {useState} =React;
const App=()=>{
	
	let [currTime,newTime]=useState(new Date().toLocaleTimeString());
	
	const update=()=>{
		newTime(new Date().toLocaleTimeString());
	};
	
	return (
		<div className="page">
			<div className="box">
				<div className="time">{currTime}</div>
				<button onClick={update} className="btn">Get Time</button>
			</div>
		</div>
	);
};

export default App;