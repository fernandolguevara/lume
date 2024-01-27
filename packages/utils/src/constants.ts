export const FETCH_LIMIT = 20;

export const NOSTR_MENTIONS = [
	"@npub1",
	"nostr:npub1",
	"nostr:nprofile1",
	"nostr:naddr1",
	"npub1",
	"nprofile1",
	"naddr1",
	"Nostr:npub1",
	"Nostr:nprofile1",
	"Nostr:naddre1",
];

export const NOSTR_EVENTS = [
	"@nevent1",
	"@note1",
	"@nostr:note1",
	"@nostr:nevent1",
	"nostr:note1",
	"note1",
	"nostr:nevent1",
	"nevent1",
	"Nostr:note1",
	"Nostr:nevent1",
];

// const BITCOINS = ['lnbc', 'bc1p', 'bc1q'];

export const IMAGES = ["jpg", "jpeg", "gif", "png", "webp", "avif", "tiff"];

export const VIDEOS = [
	"mp4",
	"mov",
	"webm",
	"wmv",
	"flv",
	"mts",
	"avi",
	"ogv",
	"mkv",
	"m3u8",
];

export const AUDIOS = ["mp3", "ogg", "wav"];

export const HASHTAGS = [
	{ hashtag: "#food" },
	{ hashtag: "#gaming" },
	{ hashtag: "#nsfw" },
	{ hashtag: "#bitcoin" },
	{ hashtag: "#nostr" },
	{ hashtag: "#nostrdesign" },
	{ hashtag: "#security" },
	{ hashtag: "#zap" },
	{ hashtag: "#LFG" },
	{ hashtag: "#zapchain" },
	{ hashtag: "#shitcoin" },
	{ hashtag: "#plebchain" },
	{ hashtag: "#nodes" },
	{ hashtag: "#hodl" },
	{ hashtag: "#stacksats" },
	{ hashtag: "#nokyc" },
	{ hashtag: "#meme" },
	{ hashtag: "#memes" },
	{ hashtag: "#memestr" },
	{ hashtag: "#nostriches" },
	{ hashtag: "#dev" },
	{ hashtag: "#anime" },
	{ hashtag: "#waifu" },
	{ hashtag: "#manga" },
	{ hashtag: "#lume" },
	{ hashtag: "#snort" },
	{ hashtag: "#damus" },
	{ hashtag: "#primal" },
];

export const COL_TYPES = {
	default: 0,
	user: 1,
	thread: 2,
	hashtag: 3,
	group: 4,
	antenas: 5,
	topic: 6,
	trendingNotes: 9000,
	trendingAccounts: 9001,
	foryou: 9998,
	newsfeed: 9999,
};

export const TOPICS = [
	{
		icon: "/anime.jpg",
		title: "Anime & Manga",
		content: [
			"#animestr",
			"#anime",
			"#manga",
			"#otaku",
			"#frieren",
			"#fate",
			"#aot",
			"#AttackOnTitan",
			"#JujutsuKaisen",
			"#OnePiece",
			"#KimetsuNoYaiba",
			"#Overlord",
			"#Evangelion",
			"#DemonSlayer",
			"#JoJo",
			"#SPYxFAMILY",
			"#MatoSeiheinoSlave",
			"#ghibli",
			"#ChainsawMan",
			"#Gintama",
			"#animeart",
			"#animegirl",
			"#cosplay",
			"#weeb",
			"#animeworld",
			"#fanart",
			"#vocaloid",
			"#vtuber",
			"#hololive",
			"#hololivemeet",
			"#pixiv",
			"#waifu",
		],
	},
	{
		icon: "/gaming.jpg",
		title: "Gaming",
		content: [
			"#gamestr",
			"#GenshinImpact",
			"#HonkaiStarRail",
			"#HonkaiImpact",
			"#steam",
			"#pubg",
			"#cs2",
			"#Cyberpunk",
			"#Skyrim",
			"#GTA",
			"#GTA6",
			"#CallofDuty",
			"#Pokemon",
			"#apexlegends",
			"#baldurgate",
			"#starfield",
			"#thefinals",
			"#palworld",
			"#famitsu",
			"#jrpg",
			"#ffxiv",
			"#gacha",
			"#warthunder",
			"#hoyoverse",
			"#arknights",
			"#soulslike",
			"#eldenring",
			"#persona",
			"#playstation",
			"#steamdeck",
			"#xbox",
			"#xbot",
			"#consolewars",
			"#game",
			"#games",
			"#twitch",
			"#fortnite",
			"#pcgaming",
			"#nintendo",
			"#switch",
			"#pubg",
			"#esports",
			"#gameoftheyear",
			"#darksoul",
			"#batterfield",
			"#dota",
			"#rpg",
			"#thewitcher",
			"#rogally",
			"#rog",
			"#indiegames",
			"#indiedev",
			"#gamedev",
		],
	},
	{
		icon: "/music.jpg",
		title: "Music & Entertainment",
		content: [
			"#audiostr",
			"#musicstr",
			"#music",
			"#movie",
			"#BLACKPINK",
			"#Lisa",
			"#Jennie",
			"#Taylor",
			"#BTC",
			"#Twice",
			"#TikTok",
			"#KPOP",
			"#Marvel",
			"#DC",
			"#Woke",
			"#fan",
			"#StarWars",
			"#Podcast",
			"#JoeRogan",
			"#Ariana",
			"#SONTUNGMTP",
			"#rap",
			"#metal",
			"#vinyl",
			"#art",
			"#artist",
			"#singer",
			"#dj",
			"#rock",
			"#dance",
			"#guitar",
			"#song",
			"#newmusic",
			"#producer",
			"#rapper",
			"#party",
			"#fashion",
			"#viral",
			"#beats",
			"#dvd",
			"#amass",
			"#bluray",
		],
	},
	{
		icon: "/movie.jpg",
		title: "Television",
		content: [
			"#filmstr",
			"#moviestr",
			"#movies",
			"#movie",
			"#HBO",
			"#BreakingBad",
			"#Wednesday",
			"#Disney+",
			"#film",
			"#cinema",
			"#films",
			"#hollywood",
			"#actor",
			"#cinematography",
			"#actress",
			"#netflix",
			"#moviescenes",
			"#music",
			"#filmmaking",
			"#horror",
			"#bollywood",
			"#movienight",
			"#comedy",
			"#cine",
			"#horrormovies",
			"#drama",
			"#kdrama",
		],
	},
	{
		icon: "/technology.jpg",
		title: "Technology",
		content: [
			"#Apple",
			"#Tesla",
			"#AMD",
			"#Intel",
			"#Xiaomi",
			"#Huawei",
			"#OpenAI",
			"#BigTech",
			"#ai",
			"#IOS",
			"#Android",
			"#oppo",
			"#nostr",
			"#technology",
			"#tech",
			"#innovation",
			"#engineering",
			"#business",
			"#iphone",
			"#technews",
			"#science",
			"#gadgets",
			"#software",
			"#programming",
			"#smartphone",
			"#samsung",
			"#coding",
			"#computer",
			"#security",
			"#gadget",
			"#mobile",
			"#opensource",
			"#tor",
		],
	},
	{
		icon: "/photography.jpg",
		title: "Photography",
		content: [
			"#photostr",
			"#NewProfilePic",
			"#photography",
			"#photooftheday",
			"#foot",
			"#love",
			"#photo",
			"#nature",
			"#picoftheday",
			"#photographer",
			"#beautiful",
			"#fashion",
			"#travel",
			"#photoshoot",
			"#nature",
			"#naturephotography",
			"#smile",
			"#style",
			"#happy",
			"#likes",
			"#myself",
		],
	},
	{
		icon: "/art.jpg",
		title: "Art & Design",
		content: [
			"#nostrdesign",
			"#artstr",
			"#art",
			"#design",
			"#ui",
			"#ux",
			"#MidJourney",
			"#Dall-E",
			"#aiart",
			"#retro",
			"#webdesign",
			"#artist",
			"#pixelart",
			"#pixel",
			"#3D",
			"#drawing",
			"#artwork",
			"#painting",
			"#fashion",
			"#beautiful",
			"#illustration",
			"#digitalart",
			"#nature",
			"#photo",
			"#sketch",
			"#style",
			"#draw",
			"#artoftheday",
		],
	},
	{
		icon: "/nsfw.jpg",
		title: "NSFW",
		content: [
			"#pornstr",
			"#porn",
			"#Lesbian",
			"#ntr",
			"#yuri",
			"#BigCock",
			"#Anal",
			"#BDSM",
			"#pornhub",
			"#nsfw",
			"#nude",
			"#sexy",
			"#loli",
			"#hentai",
			"#69",
		],
	},
];

export const QUOTES = [
	"You can learn more about nostr here: https://usenostr.org",
	"Nostr has a lot of awesome clients, you can spend a bit of time to try https://snort.social",
	"Nostr has a lot of awesome clients, you can spend a bit of time to try https://iris.to",
	"Nostr has a lot of awesome clients, you can spend a bit of time to try https://primal.net",
	"Nostr has a lot of awesome clients, you can spend a bit of time to try https://nostrudel.ninja",
	"If you're using iOS, you can use Nostr with https://damus.io",
	"If you're using Android, you can use Nostr with Amethyst",
	"If you want to curate and share your interests on Nostr, you can use https://pinstr.app",
	"If you want to post anonymously on Nostr, you can use https://www.get-tao.app",
	"If you want to read in-depth content and high quality insights, you can use https://habla.news",
	"You can send secure messages on Nostr with https://0xchat.com/",
	"Are you a fan of following topics, instead of people? Use https://zapddit.com",
];

export const VITE_FLATPAK_RESOURCE = import.meta.env.VITE_FLATPAK_RESOURCE;
