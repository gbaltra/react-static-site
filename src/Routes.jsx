var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var Index = require('./components/Index.jsx');
var App = require('./components/App.jsx');
var About = require('./components/About.jsx');

var Routes = (
  <Route path='/' component={App} >
    <IndexRoute component={Index} />
    <Route path='/about' component={About} />
  </Route>
)

module.exports = Routes
