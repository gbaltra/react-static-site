var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var Index = require('./components/Index.jsx');
var Root = require('./components/Root.jsx');
var About = require('./components/About.jsx');

var Routes = (
  <Route path='/' component={Root} >
    <IndexRoute component={Index} />
    <Route path='/about' component={About} />
  </Route>
)

module.exports = Routes
