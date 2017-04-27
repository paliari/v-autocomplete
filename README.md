# v-autocomplete
---

> Autocomplete component for Vue.js


## Installation

### Using yarn

`yarn add v-autocomplete`

### Using npm

`npm i --save v-autocomplete`

## Demo

[DEMO](http://paliari.github.io/v-autocomplete)

## Usage


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

### Example

```html
<template>
  <v-autocomplete :items="items" v-model="item" :get-label="getLabel" @update-items="updateItems">
  </v-autocomplete>
</template>

<script>
export default {
  data () {
    return {
      item: {id: 4, label: 'Item 4'},
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
  }
}
</script>
```

## Properties

| Name               | Type                                | Required | Default value                  | Info                                                   |
|--------------------|-------------------------------------|----------|--------------------------------|--------------------------------------------------------|
| **items**          | Array                               | Yes      |                                | List items                                             |
| **component-item** | Vue Component or Function or String | No       | Item                           | Item list template                                     |
| **placeholder**    | String                              | No       |                                |                                                        |
| **min-len**        | Number                              | No       | 3                              | Min length to trigger the *updateItems* event          |
| **wait**           | String                              | No       | 500                            | Miliseconds dela to trigger the *updateItems* event    |
| **get-label**      | Function                            | No       | function(item) { return item } | Anonymous function to extract label of the item        |
| **value**          | Mixed                               | No       |                                | Initial value (use v-model)                            |

## Events

| Name               | Params                       | Info                                                   |
|--------------------|------------------------------|--------------------------------------------------------|
| **change**         | *text*: Text of search input | Triggered after every change in the search input       |
| **update-items**   | *text*: Text of search input | Same as *change*, but respecting *min-len* and *wait*  |


## Authors

- [Marcos Paliari](http://paliari.com)
- [Daniel Fernando Lourusso](http://dflourusso.com.br)

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
