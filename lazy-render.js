var React = require('react')
var render = require('react-dom').render
var _cache = Object.create(null)

function lazyReact (mountPoint) {
  if (typeof mountPoint !== 'string') {
    throw new Error('mountPoint must be a string')
  }
  if (!_cache[mountPoint]) {
    _cache[mountPoint] = document.querySelector(mountPoint)
  }
  return function lazyRender (component, props) {
    var mount = _cache[mountPoint] || document.querySelector(mountPoint)
    if (!mount) {
      throw new Error(mountPoint + ' does not exist')
    }
    render(React.createElement(component, props || {}, null), mount)
  }
}

module.exports = lazyReact
