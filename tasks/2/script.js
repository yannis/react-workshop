var Helloes = React.createClass({
  getDefaultProps: function() {
    return { names: ['one', 'two'] };
  },
  render: function() {
    return (
      <tr>
        {this.props.names.map(function(name) {
          return <HelloWorld name={name} />;
          // return <p>{name}</p>;
        })}
      </tr>
  );
  }
});

var HelloWorld = React.createClass({
  getDefaultProps: function() {
    return { name: "World" };
  },
  render: function() {
    return  <h1>
              Hello, {this.props.name}!
            </h1>
  }
});

React.render(<Helloes names={['three', 'four']}/>, document.getElementById('example'))
