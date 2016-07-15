var React = require('react')
var Router = require('react-router')
var Header = require('./Header.jsx')

var Root = React.createClass({
  render: function () {
    var initialProps = {
          __html: safeStringify(this.props)
    };

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <Header />
          {this.props.children}
          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src='bundle.js' />
        </body>
      </html>
    )
  }
})

function safeStringify(obj) {
  var cache = [];
  var string = JSON.stringify(obj, function(key, value) {
      if (typeof value === 'object' && value !== null) {
          if (cache.indexOf(value) !== -1) {
              // Circular reference found, discard key
              return;
            }
            // Store value in our collection
            cache.push(value);
          }
          return value;
  });
  cache = null; // Enable garbage collection
  return string.replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

module.exports = Root
