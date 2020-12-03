import React from 'react';
import Strip from './Strip';
const App = () => {
	return(
		<div>
		<div className="heading">
			<p>💰Welcome to the <span style={{fontWeight:'bold'}}>Slot Machine</span> Lets Play💰</p>
		</div>
		<div className="machine">
			<Strip emoji1="🙂" emoji2="🙂" emoji3="🙂" slot="1"/>
			<Strip emoji1="😎" emoji2="🤩" emoji3="🙂" slot="2"/>
			<Strip emoji1="😭" emoji2="😎" emoji3="😭" slot="3"/>
			<Strip emoji1="🤩" emoji2="😭" emoji3="😎" slot="4"/>
			<Strip emoji1="🤣" emoji2="🤣" emoji3="🤣" slot="5"/>
		</div>
		</div>
	);
};

export default App;