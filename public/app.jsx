var React = require('react');
var ReactDOM = require('react-dom');

// Presentational Component
var GreeterMessage = React.createClass({
  render: function() {

    // These props are grabbed from the parent component (e.g., Greeter)
    var name = this.props.name;
    var message = this.props.message;
    return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});

// Presentational Component
// This does not save any state.
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0 ) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value='';
      updates.message = message;
    }

    // This component knows it's going to get this function which it gets from the parent component
    this.props.onNewData(updates);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div><textarea placeholder="Enter Message" ref="message"/></div>
        <div><input placeholder="Enter name" type="text" ref="name" /></div>
        <div><button>Submit</button></div>
      </form>
    );
  }
});

// Container Component have state, presentational components don't
// Presentation containers should not do much rendering other than rendering children
// You can't update prop values in React. You can only update their state
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is my test message'
    };
  },
  getInitialState: function () { // Sets initial state
    return {
      // add message to get default message from props
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewDate: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>, // This gets passed from the method above
  document.getElementById('app')
);
