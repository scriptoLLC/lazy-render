var React = require('react')
var render = require('react-dom')

function lazyReact (mountPoint) {
  if (typeof mountPoint !== 'string') {
    throw new Error('mountPoint must be a string')
  }
  return function lazyRender (component, props) {
    render(React.createElement(component, props || {}, null), mountPoint)
  }
}

module.exports = lazyReact
