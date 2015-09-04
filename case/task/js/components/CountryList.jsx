var _ = require('lodash');
var React = require('react');
var Flag = require('./Flag');

module.exports = React.createClass({
  render: function() {
    var countries = _.values(this.props.countryList);
    countries = countries.sort(function(a,b){
      if (a['value'] > b['value']) {
        return -1
      } else if (a['value'] < b['value']) {
        return 1
      }
      return 0
    });
    if (!countries || countries.length === 0) {return <div></div>}
    return  <div>
              <ul className="countrylist">
              {countries.map(function(country){
                return  <li>
                          <Flag countryCode={country['code']} />
                          <span className="country-tweet-count">{country['value']}</span>
                        </li>
              })}
              </ul>
            </div>
  }
})
