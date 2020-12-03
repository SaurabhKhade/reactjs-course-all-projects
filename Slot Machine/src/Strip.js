import React from 'react';

const Strip = (props)=> {

	let {emoji1,emoji2,emoji3,slot} = props;
	let result = '';

	if (emoji1 == emoji2 && emoji2 == emoji3) {
		result = "Yayy! Matched.";
	} else {
		result = "offo! Better luck next time.";
	}

	return(
		<div className="strip">
			<div className="slot-number">
				Slot Number {slot}
			</div>
			<div className="emoji-strip">
				<div className="emojis">
				{emoji1}
				</div>
				<div className="emojis">
				{emoji2}
				</div>
				<div className="emojis">
				{emoji3}
				</div>
			</div>
			<div className="result">
				{result}
			</div>
		</div>
	);
}

export default Strip;