# lazy-render

A helper to render React components for lazy-router (or whatever)

## Usage

```js
const router = require('lazy-router')('/404')
const render = require('lazy-render')

const LazyComponent = require('./my-component')

router.on('/lazy-routing', (path, location) => render(LazyComponent, {location}))
```

## License
Copyright © 2017 Script LLC. Apache-2.0 licensed
