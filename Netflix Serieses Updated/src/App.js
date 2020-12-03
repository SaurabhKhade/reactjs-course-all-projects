import React from 'react';
import cards from './CardDetails';
import Card from './Card';

const AllCards = (cval)=> {
	return (
		<Card
			imgsrc={cval.imgsrc}
			webtitle={cval.webtitle}
			weblink={cval.weblink}
			desc={cval.desc} />
	);
}

const App = () => {
	return (
		<div>
		<div className="heading">
			<h1>Here are 6 must watch netflix serieses</h1>
		</div>
		<div className='wrapper'>
			{cards.map(AllCards)}
		</div>
		</div>
	);
}

export default App;