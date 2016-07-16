var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var Router = require('react-router');
var routes = require('./Routes.jsx');
var Root = require('./components/Root.jsx');

if (typeof document !== 'undefined') {
  const history = Router.browserHistory;
  const outlet = document.getElementById('outlet');

  ReactDOM.render(<Router.Router history={history} routes={routes}/>, outlet);
}

module.exports = function(locals, callback) {

  var history = Router.createMemoryHistory();
  var location = history.createLocation(locals.path);

  Router.match({ routes: routes, location: location }, function(error, redirectLocation, renderProps) {
    var html = ReactDOMServer.renderToString(
      <Root title={locals.title}>
        <Router.RouterContext {...renderProps} />
      </Root>
    )
    callback(null, html);
  });
};
