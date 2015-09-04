var _ = require('lodash');
var React = require('react');
var Tweet = require('./Tweet');

module.exports = React.createClass({
  getDefaultProps: function() {
    return { tweets: [] };
  },
  render: function() {
    var tweets = this.props.tweets.map(function(tweet) {
        return <Tweet tweet={tweet} />
    });
    return  <div className="tweet-list">
              {tweets}
            </div>
  }

});

