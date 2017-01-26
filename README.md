# lazy-render

A helper to render React components for lazy-router (or whatever)

## Usage

```js
const router = require('lazy-router')('/404')
const render = require('lazy-render')('#app')

const LazyComponent = require('./my-component')

router.on('/lazy-routing', (path, location) => render(LazyComponent, {location}))
```

## API

#### `render(mountPoint: selector) -> (Component: HTMLComponent, props: object): void`
`render` returns a function which will mount a given component in the DOM at the
location specified via the `mountPoint` selector, and additionally pass any
properties specified into the component.

## License
Copyright © 2017 Script LLC. Apache-2.0 licensed
