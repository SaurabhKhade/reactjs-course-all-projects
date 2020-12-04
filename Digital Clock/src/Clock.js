import React from 'react';

const Clock=(props)=>{
	let {hour,minute,second,slot}=props;
	return(
	<div className="page">
		<div className="box">
			<div className="timebox">
				<div className="time">{hour}</div>
				<div className="time-separater">:</div>
				<div className="time">{minute}</div>
				<div className="time-separater">:</div>
				<div className="time">{second}</div>
			</div>
			<div className="am-pm">
				<p>{slot}</p>
			</div>
		</div>
	</div>
	);
}

export default Clock;