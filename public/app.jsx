var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

ReactDOM.render(
  <Greeter/>, // This gets passed from the method above
  document.getElementById('app')
);
