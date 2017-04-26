v-autocomplete
==============

> Autocomplete component for Vue.js

Usage
=====

Installation
------------

### Using yarn

`yarn add v-autocomplete`

### Using npm

`npm i --save v-autocomplete`

Demo
----

[DEMO](http://paliari.github.io/v-autocomplete)

Usage
-----

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'

import Autocomplete from 'v-autocomplete'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-autocomplete/dist/v-autocomplete.css'

Vue.use(Autocomplete)
```

### Browser

```html
<!-- Include after Vue -->
<link rel="stylesheet" href="v-autocomplete/dist/v-autocomplete.css"></link>
<script src="v-autocomplete/dist/v-autocomplete.js"></script>
<script>
  Vue.use(Autocomplete)
</script>
```

### Usage example

```html
<!-- in your component -->
<v-autocomplete :items="items" v-model="item" :get-label="getLabel" @updateItems="updateItems">
</v-autocomplete>
```

```js
// in your component
// ...
data () {
  return {
    item: {label: 'Item 4', id: 4},
    items: []
  }
},
methods: {
  getLabel (item) {
    return item.label
  },
  updateItems (text) {
    yourGetItemsMethod(text).then( (response) => {
      this.items = response
    })
  }
},
// ...
```

### Params

| Name          | Type                                | Required | Default value                  | Info                                                 |
|---------------|-------------------------------------|----------|--------------------------------|------------------------------------------------------|
| items         | Array                               | Yes      |                                | List items                                           |
| componentItem | Vue Component or Function or String | No       | Item                           | Template of item list                                |
| placeholder   | String                              | No       |                                |                                                      |
| minLen        | Number                              | No       | 3                              | Min length to input search call 'updateItems' event  |
| wait          | String                              | No       | 500                            | Wait of input change before call 'updateItems' event |
| getLabel      | Function                            | No       | function(item) { return item } | Custom function to extract label of item             |
| value         | Mixed                               | No       |                                | Initial value (use v-model)                          |

License
-------

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
