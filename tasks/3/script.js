var Timer = React.createClass({
  getInitialState: function() {
    return {
      seconds: 0
    };
  },
  setSeconds: function() {
    console.log("called");
    this.setState({ seconds: ((Date.now())-this.props.start)/1000 });
  },
  componentDidMount: function(){
    interv = setInterval(this.setSeconds, 100);
  },
  componentWillUnmount: function(){
    clearInterval(interv);
  },
  render: function() {
    return (
      <h1>
        I was started {this.state.seconds} seconds ago
      </h1>
    );
  }
});

React.render(<Timer start={Date.now()}/>, document.getElementById('timer'))
