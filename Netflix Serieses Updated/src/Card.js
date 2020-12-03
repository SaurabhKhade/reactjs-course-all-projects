import React from 'react';

const Card = (props) => {
	return (
		<div className="card">
			<div className="card-img">
				<img src={props.imgsrc} alt={props.webtitle} className="img" />
			</div>
			<div className="desc">
				<p>
					{props.desc}
				</p>
			</div>
			<div className="title">
				<h2>{props.webtitle}</h2>
			</div>
			<div className="card-link">
				<a href={props.weblink} target="_blank">
					<button className="btn">Watch Now</button>
				</a>
			</div>
		</div>
	);
}

export default Card;