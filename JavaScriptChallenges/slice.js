var tweet = prompt("Enter your tweet: ");
var tweetCount140 = tweet.slice(0, 140);
alert(tweetCount140);

// DIFF METHOD 1 LINE
alert(prompt("Compose a tweet: ").slice(0,140));
