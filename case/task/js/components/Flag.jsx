var _ = require('lodash');
var React = require('react');
module.exports = React.createClass({
  getDefaultProps: function() {
    return { countryCode: "no" };
  },
  render: function() {
    console.log("countryCode", this.props.countryCode)
    return <span className={"tweet-flag flag-icon flag-icon-"+this.props.countryCode.toLowerCase()}></span>
  }
})
