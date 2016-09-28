var GreeterMessage = React.createClass({
  render: function() {
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

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" />
        <button>Set Name</button>
      </form>
    );
  }
});

var Greeter = React.createClass({ // This is a react component. createClass() is the most common react method.
  getDefaultProps: function () { // Sets a default prop for the name prop but can be overwritten
    return {
      name: 'React',
      message: 'This is from a component'
    };
  },
  getInitialState: function () { // Sets initial state
    return {
      name: this.props.name
    };
  },
  handleNewName: function (name) { // This function gets passed an event handler in (e)
    this.setState({
      name: name
    })
  },
  render: function () { // Only thing that's required is render method; needs to return JSX
    var name = this.state.name; // Refers to the state from onButtonClick method
    var message = this.props.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Mike';

ReactDOM.render(
  <Greeter name={firstName}/>, // This gets passed from the method above
  document.getElementById('app')
);
