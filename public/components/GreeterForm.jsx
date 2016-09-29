var React = require('react');

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

module.exports = GreeterForm;
