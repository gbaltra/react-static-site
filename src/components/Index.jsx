var React = require('react')

var i = 0;
var Index = React.createClass({
  onClick: function(e) {
    e.preventDefault();
    i = i + 1;
  },
  render: function () {
    return (
      <main>
        { i > 1 ? 'Index component' : 'Not Index' }
        <button type='button' onClick={this.onClick}>Click</button>
      </main>
    )
  }
})

module.exports = Index
