import React from 'react';
import Clock from './Clock';

 const {useState}=React;
 
const App=()=>{
	let [time,slt]=new Date().toLocaleTimeString().split(" ");
	let [hh,mm,ss]=time.split(":");
	
	let[hour,updHour]=useState(hh);
	let[minute,updMinute]=useState(mm);
	let[second,updSecond]=useState(ss);
	let[slot,updSlot]=useState(slt);
	
	setInterval(()=>{
		let [time,slt]=new Date().toLocaleTimeString().split(" ");
		let [hh,mm,ss]=time.split(":");
		updHour(hh);
		updMinute(mm);
		updSecond(ss);
		updSlot(slt);
	})
	
	return <Clock hour={hour} minute={minute} second={second} slot={slot} />;
}

export default App;