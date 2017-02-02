console.log("app is up!");

var fs = require("fs");
var Twit = require("twit");
var news = require("newsapi");

var T = new Twit({
	consumer_key:         '6O5iRf85GCoIhOE70sg9cu4QU',
    consumer_secret:      '1bM44CAhVTLmmeuUKERxagnMWn86mGXbPKTMPiwFgscdUeIuin',
    access_token:         '2800029086-xlxhTC2UscVJexmsnpQHyu5xEEVuONknzpTt35u',
    access_token_secret:  'Nwn4UtedrYPg73qOe99VwAMSHUmoWD4KQ9iOxkEyPQUg7',

});

/////////////////// Tweet a news bot ////////////////////////////////////////////////////
var url = "";
var newsHead = " ";
var newsKey = 'ce3439ff22224424a60b7b4aa5a0449b';
var newsTest = new news(newsKey);

 headlineGenerator = function(){
	newsTest.articles({
	status: 'ok',
	source: 'the-new-york-times',
	sortBy: 'top'
}).then(data =>{
	
	for(var i =0; i < 1; i++){
		newsHead =  data.articles[i].title;
		url = data.articles[i].url;
	
	poster(newsHead, url, function(){
		console.log(newsHead + " "+ url);
	});
	
}
	
});
};

poster = function(title,url){
	T.post("statuses/update", {status: title+" "+ url}, function(err,data,res){
});
};

setInterval(headlineGenerator, 1000, function(){
	console.log("a new post");
});




/*
var sources = [
bbc-news,
bbc-sport,
bild,
bloomberg,
business-insider,
business-insider-uk,
buzzfeed,
cnbc,
cnn,
daily-mail,
der-tagesspiegel,
die-zeit,
engadget,
entertainment-weekly,
espn,
espn-cric-info,
financial-times,
focus,
football-italia,
fortune,
four-four-two,
fox-sports,
google-news,
gruenderszene,
hacker-news,
handelsblatt,
ign,
independent,
mashable,
metro,
mirror,
mtv-news,
mtv-news-uk,
national-geographic,
new-scientist,
newsweek,
new-york-magazine,
nfl-news,
polygon,
recode,
reddit-r-all,
reuters,
sky-news,
sky-sports-news,
spiegel-online,
t3n,
talksport,
techcrunch,
techradar,
the-economist,
the-guardian-au,
the-guardian-uk,
the-hindu,
the-huffington-post,
the-lad-bible,
the-new-york-times,
the-next-web,
the-sport-bible,
the-telegraph,
the-times-of-india,
the-verge,
the-wall-street-journal,
the-washington-post,
time,
usa-today,
wired-de,
wirtschafts-woche
];
console.log(sources);

*/