var _ = require('lodash');
var React = require('react');
var Tweet = require('./Tweet');

module.exports = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.tweet !== nextProps.tweet;
  },
  render: function() {
    var tweet = this.props.tweet;
    if (!tweet) {return <div></div>};
    return <div className="current-tweet">
      <Tweet tweet={tweet} />
    </div>
  }

});



// var React = require('react');

// var Tweet = require('./Tweet');

// module.exports = React.createClass({
//   render: function() {
//     var tweet = this.props.currentTweet
//     if (!tweet) {return <div></div>};
//     return <div className="current-tweet">
//       <Tweet tweet={tweet} />
//     </div>
//   }
// });
