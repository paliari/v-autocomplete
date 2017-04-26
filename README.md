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

```html
<table width="100%" cellspacing="0" cellpadding="10" border="1">
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default value</th>
        <th>Info</th>
    </tr>
    <tr>
        <td>items</td>
        <td>Array</td>
        <td>Yes</td>
        <td></td>
        <td>List items</td>
    </tr>
    <tr>
        <td>componentItem</td>
        <td>Vue Component|Function|String</td>
        <td>No</td>
        <td>Item</td>
        <td>Template of item list</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>String</td>
        <td>No</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>minLen</td>
        <td>Number</td>
        <td>No</td>
        <td>3</td>
        <td>Min length to input search call 'updateItems' event</td>
    </tr>
    <tr>
        <td>wait</td>
        <td>String</td>
        <td>No</td>
        <td>500</td>
        <td>Wait of input change before call 'updateItems' event</td>
    </tr>
    <tr>
        <td>getLabel</td>
        <td>Function</td>
        <td>No</td>
        <td>function(item) { return item } </td>
        <td>Custom function to extract label of item</td>
    </tr>
    <tr>
        <td>value</td>
        <td>Mixed</td>
        <td>No</td>
        <td></td>
        <td>Initial value (use v-model)</td>
    </tr>
</table>
```

License
-------

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
