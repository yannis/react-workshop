var React = require('react');
var _ = require('lodash');

var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;

module.exports = React.createClass({

  render: function() {

    var tweets = this.props.tweets();
    var props = this.props;

    return <div className="tweet-map">
              <Map
                width="100%"
                height="100%"
                initialZoom={2}
                scaleControl={false}
                streetViewControl={false}
                panControl={false}
                zoomControl={false}
                mapTypeControl={false}
                initialCenter={new GoogleMapsAPI.LatLng(30.675226, -35.051272)} >
                {tweets.map(function(tweet){
                  function handleClick(e) {
                    props.showTweet(tweet.id);
                  };
                  var icon = props.currentTweet === tweet ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
                  return <Marker
                    onClick={handleClick}
                    icon={ icon }
                    key={tweet.id}
                    position={new GoogleMapsAPI.LatLng(tweet.geo.coordinates[0], tweet.geo.coordinates[1])} />
                })}

              </Map>
            </div>
  }
});


