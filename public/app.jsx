var GreeterMessage = React.createClass({
  render: function() {
    return (
        <div>
          <h1>Some H1</h1>
          <p>Some paragraph</p>
        </div>
      );
    }
});

var GreeterForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" ref="name" />
        <button>Set Name</button>
      </form>
    );
  }
})



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
  onButtonClick: function (e) { // This function gets passed an event handler in (e)
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value; // Refs refers to the React attribute on the input.
    nameRef.value = ''; // Removes the name from the input after submitting

    if (typeof name === 'string' && name.length > 0) { // CHecks if name is a string and is longer than 0, if so...
      this.setState({ // Updates the state and re-renders the component.
        name: name
      });
    }
  },
  render: function () { // Only thing that's required is render method; needs to return JSX
    var name = this.state.name; // Refers to the state from onButtonClick method
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message + '!!!!'}</p>

        <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>

        <GreeterForm/>

      </div>
    );
  }
});

var firstName = 'Mike';
var customMessage = 'This is a custom message!'

ReactDOM.render(
  <Greeter name={firstName} message={customMessage} />, // This gets passed from the method above
  document.getElementById('app')
);
