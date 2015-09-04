var Search = React.createClass({
  getDefaultProps: function() {
    return { items: [
      { name: "first", url: "www.first.com" },
      { name: "second", url: "www.second.com" },
      { name: "third", url: "www.this.com" },
      { name: "fourth", url: "www.four.com" },
    ] };
  },
  getInitialState: function() {
    return {
      filteredItems: this.props.items
    };
  },

  filter: function(){

  },

  setFiltered: function(event){

    this.setState({ filteredItems: this.props.items.filter( function(item){
      return item.name.match(event.target.value);
    })});
  },
  render: function() {
    return (
      <div>
        <input type="text" onChange={this.setFiltered} />
        <ul className='filteredItems'>

          {this.state.filteredItems.map(function(item) {
            return  <li>
                      <a href={item.url} >{item.name}</a>
                    </li>
          })}
        </ul>
      </div>
    );
  }
});

React.render(<Search start={Date.now()}/>, document.getElementById('search'));


var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];

