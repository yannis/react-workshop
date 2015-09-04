var _ = require('lodash');
var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      seconds: 0
    };
  },
  setSeconds: function() {
    this.setState({ seconds: ((Date.now())-this.props.oTime)/1000 });
  },
  componentDidMount: function(){
    interv = setInterval(this.setSeconds, 100);
  },
  componentWillUnmount: function(){
    clearInterval(interv);
  },
  render: function() {
    return  <div className="app-header">
              <h1>TweetPicker</h1>
              <div>
                  <span className="tweet-stats-desc">seconds running</span>
                  <strong>{this.state.seconds}</strong>
              </div>
              <div>
                  <span className="tweet-stats-desc">tweets</span>
                  <strong>{this.props.tweetCount}</strong>
              </div>
            </div>
  }
})
