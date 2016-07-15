var React = require('react')
var Router = require('react-router')
var Header = require('./Header.jsx')

var Root = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <Header />
          <div id='outlet'>
            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
})

module.exports = Root
