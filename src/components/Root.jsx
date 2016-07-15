var React = require('react')
var Html = require('react-html-document')

var Root = React.createClass({
  render: function () {
    var scripts = ['bundle.js'];
    return (
      <Html title={this.props.title} scripts={scripts}>
          <div id='outlet'>
            {this.props.children}
          </div>
      </Html>
    )
  }
});

module.exports = Root
