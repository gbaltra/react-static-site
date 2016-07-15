var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var Router = require('react-router');
var routes = require('./Routes.jsx');

var global_locals;

if (typeof document !== 'undefined') {
  var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML);
  ReactDOM.render(<Router history={Router.browserHistory} routes={routes} />, document);
}

function createElement(Component, props) {
  return <Component {...props} title={global_locals.title}/>
}

module.exports = function(locals, callback) {

  global_locals = locals;

  var history = Router.createMemoryHistory();
  var location = history.createLocation(locals.path);

  Router.match({ routes: routes, location: location }, function(error, redirectLocation, renderProps) {
    var html = ReactDOMServer.renderToString(<Router.RouterContext {...renderProps} createElement={createElement}/>);
    callback(null, '<!DOCTYPE html>' + html);
  });
}
