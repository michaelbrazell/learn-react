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

    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      // This component knows it's going to get this function which it gets from the parent component
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

// Container Component have state, presentational components don't
// Presentation containers should not do much rendering other than rendering children
// You can't update prop values in React. You can only update their state
var Greeter = React.createClass({
  getDefaultProps: function () {
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
  handleNewName: function (name) {
    this.setState({
      name: name
    })
  },
  render: function () {
    var name = this.state.name;
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
