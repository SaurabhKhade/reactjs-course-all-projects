function cardDetail(imgsrc, webtitle, desc, weblink){
	this.imgsrc = imgsrc;
	this.webtitle = webtitle;
	this.desc = desc;
	this.weblink = weblink;
}

let cards = [
	new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/21/919/714/the-witcher-netflix-tv-series-tv-series-henry-cavill-orange-eyes-hd-wallpaper-preview.jpg',
		'The Witcher',
		'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
		'https://www.netflix.com/in/title/80189685?preventIntent=true'
	),
	new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/913/33/212/billelis-stranger-things-artwork-digital-tv-hd-wallpaper-preview.jpg',
		'The Stranger Things',
		'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
		'https://www.netflix.com/in/title/80057281?preventIntent=true'
	),
	new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/241/910/337/la-casa-de-papel-series-netflix-netflix-tv-series-hd-wallpaper-preview.jpg',
		'Money Heist',
		'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
		'https://www.netflix.com/in/title/80192098?preventIntent=true'
	),
	new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/496/845/246/the-midnight-gospel-clancy-minimalism-simple-simple-background-hd-wallpaper-preview.jpg',
		'The Midnight Gospel',
		'Traversing trippy worlds inside his universe simulator, a space caster explores existential questions about life, death and everything in between.',
		'https://www.netflix.com/in/title/80987903?preventIntent=true'
	),
	new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/297/875/692/netflix-castlevania-tv-castlevania-anime-wallpaper-preview.jpg',
		'CastleVania',
		'A vampire hunter fights to save a besieged city from an army of otherworldly beasts controlled by Dracula himself. Inspired by the classic video games.',
		'https://www.netflix.com/in/title/80095241?preventIntent=true'
	),
	new cardDetail(
		'https://c4.wallpaperflare.com/wallpaper/757/1010/506/marvel-cinematic-universe-mcu-netflix-netflix-tv-series-daredevil-hd-wallpaper-preview.jpg',
		'MCU Comics',
		'Ready to marvel at the Marvel Cinematic Universe? The comic book leaders deliver superhero movies and shows like no other. Put on your cape and join in the action.',
		'https://www.netflix.com/in/browse/genre/1611208'
	)
];

export default cards;