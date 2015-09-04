var _ = require('lodash');
var React = require('react');
var TweetList = require('./TweetList');
var TweetMap = require('./TweetMap');
var Tweet = require('./Tweet');
var CurrentTweet = require('./CurrentTweet');
var CountryList = require('./CountryList');
var Header = require('./Header');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      tweet: null,
      currentTweet: null,
      recentTweets: [],
      countryList: {}
    };
  },

  componentDidMount: function(){
    this.setState({oTime: Date.now()})
    var ws = new WebSocket('ws://localhost:9999');
    ws.onmessage = function(ms) {
      var rT = this.state.recentTweets;
      var tweet = JSON.parse(ms.data);
      // this.setState({tweet: tweet});
      rT.push(tweet);
      if (rT.length > 10) {
        rT.shift();
      };
      this.setCountry(tweet);
      this.setState({recentTweets: rT, tweetCount: rT.length});
    }.bind(this);
  },

  setCountry: function(tweet){
    var countryList = this.state.countryList;
    var countryCode = tweet.place.country_code.toLowerCase();
    var existingCountry = countryList[countryCode]
    if (!existingCountry){
      countryList[countryCode] = {code: countryCode, value: 1};
    } else {
      countryList[countryCode]['value'] += 1
    };
    this.setState({countryList: countryList});
  },

  influentialTweets: function(){
    return this.state.recentTweets.sort(function(a,b){
      if (a.user.followers_count < b.user.followers_count)
        return -1;
      if (a.user.followers_count > b.user.followers_count)
        return 1;
      return 0;
    }).slice(0, 20);
  },

  showTweet: function(id) {
    var tweet = _.findWhere(this.state.recentTweets, { id: id });
    if (!tweet) console.log('Tweet no longer in selection');
    this.setState({ currentTweet: tweet });
  },

  render: function() {
      return <div>
        <TweetMap tweets={this.influentialTweets} showTweet={this.showTweet} currentTweet={this.state.currentTweet} />
        <Header tweetCount={this.state.tweetCount} oTime={this.state.oTime} />
        <Tweet tweet={this.state.tweet} />
        <CurrentTweet tweet={this.state.currentTweet} />
        <CountryList countryList={this.state.countryList} />
      </div>
  },
});

