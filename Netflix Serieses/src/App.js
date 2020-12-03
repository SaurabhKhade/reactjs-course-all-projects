import React from 'react';
import Card from './Card';

	function cardDetail(imgsrc,webtitle,desc,weblink){
		this.imgsrc=imgsrc;
		this.webtitle=webtitle;
		this.desc=desc;
		this.weblink=weblink;
	}

let cards=new Array(6);
cards[0]=new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/21/919/714/the-witcher-netflix-tv-series-tv-series-henry-cavill-orange-eyes-hd-wallpaper-preview.jpg',
		'The Witcher',
		'one of the best netflix original series',
		'https://www.google.com/'
	);

cards[1]=new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/913/33/212/billelis-stranger-things-artwork-digital-tv-hd-wallpaper-preview.jpg',
		'The Stranger Things',
		'one of the best netflix original series',
		'https://www.google.com/'
	);

cards[2]=new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/241/910/337/la-casa-de-papel-series-netflix-netflix-tv-series-hd-wallpaper-preview.jpg',
		'Money Heist',
		'one of the best netflix original series',
		'https://www.google.com/'
	);

cards[3]=new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/496/845/246/the-midnight-gospel-clancy-minimalism-simple-simple-background-hd-wallpaper-preview.jpg',
		'The Midnight Gospel',
		'one of the best netflix original series',
		'https://www.google.com/'
	);

cards[4]=new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/297/875/692/netflix-castlevania-tv-castlevania-anime-wallpaper-preview.jpg',
		'CastleVania',
		'one of the best netflix original series',
		'https://www.google.com/'
	);

cards[5]=new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/757/1010/506/marvel-cinematic-universe-mcu-netflix-netflix-tv-series-daredevil-hd-wallpaper-preview.jpg',
		'MCU',
		'one of the best netflix original series',
		'https://www.google.com/'
	);
	
function App(){
	return (
		<div className='wrapper'>
		<Card 
			imgsrc={cards[0].imgsrc} 
			webtitle={cards[0].webtitle} 
			weblink={cards[0].weblink} 
			desc={cards[0].desc}/>
		
		<Card 
			imgsrc={cards[1].imgsrc} 
			webtitle={cards[1].webtitle} 
			weblink={cards[1].weblink} 
			desc={cards[1].desc}/>
		
		<Card 
			imgsrc={cards[2].imgsrc} 
			webtitle={cards[2].webtitle} 
			weblink={cards[2].weblink} 
			desc={cards[2].desc}/>
		
		<Card 
			imgsrc={cards[3].imgsrc} 
			webtitle={cards[3].webtitle} 
			weblink={cards[3].weblink} 
			desc={cards[3].desc}/>
		
		<Card 
			imgsrc={cards[4].imgsrc} 
			webtitle={cards[4].webtitle} 
			weblink={cards[4].weblink} 
			desc={cards[4].desc}/>
		
		<Card 
			imgsrc={cards[5].imgsrc} 
			webtitle={cards[5].webtitle} 
			weblink={cards[5].weblink} 
			desc={cards[5].desc}/>
		</div>
	);
}

export default App;