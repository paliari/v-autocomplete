v-autocomplete
==============

---

> Autocomplete component for Vue.js
>
> This component is css-free. The idea is to be used with any framework.

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
  Vue.use(VAutocomplete.default)
</script>
```

### Example

```html
<template>
  <v-autocomplete :items="items" v-model="item" :get-label="getLabel" :component-item='template' @update-items="updateItems">
  </v-autocomplete>
</template>

<script>
import ItemTemplate from './ItemTemplate.vue'
export default {
  data () {
    return {
      item: {id: 9, name: 'Lion', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      items: [],
      template: ItemTemplate
    }
  },
  methods: {
    getLabel (item) {
      return item.name
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

**ItemTemplate example:**

```html
<template>
  <div>
    <b>#{{item.id}}</b>
    <span>{{ item.name }}</span>
    <abbr>{{item.description}}</abbr>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true },
    searchText: { required: true }
  }
}
</script>
```

Properties
----------

| Name                     | Type                                | Required | Default value                  | Info                                                                                                   |
| ------------------------ | ----------------------------------- | -------- | ------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **items**                | Array                               | Yes      |                                | List items                                                                                             |
| **component-item**       | Vue Component or Function or String | No       | Item                           | Item list template                                                                                     |
| **min-len**              | Number                              | No       | 3                              | Min length to trigger the *updateItems* event                                                          |
| **wait**                 | String                              | No       | 500                            | Miliseconds dela to trigger the *updateItems* event                                                    |
| **get-label**            | Function                            | No       | function(item) { return item } | Anonymous function to extract label of the item                                                        |
| **value**                | Mixed                               | No       |                                | Initial value (use v-model)                                                                            |
| **auto-select-one-item** | Boolean                             | No       | true                           | Auto select item if result one item in items                                                           |
| **input-attrs**          | Object                              | No       | {}                             | Attributes for input                                                                                   |
| **keep-open**            | Boolean                             | No       | false                          | If true, suggestions list stays open even when input is not active |
| **placeholder**          | String                              | No       |                                | **Deprecated**, will be removed in the next version. Use **input-attrs**                               |
| **input-class**          | String                              | No       |                                | Custom class of input search. **Deprecated**, will be removed in the next version. Use **input-attrs** |
| **disabled**             | Boolean                             | No       | false                          | Disable input. **Deprecated**, will be removed in the next version. Use **input-attrs**                |

Events
------

| Name              | Params                       | Info                                                  |
| ----------------- | ---------------------------- | ----------------------------------------------------- |
| **input**         | *item*: Item changed         | Triggered after any changed in the model              |
| **change**        | *text*: Text of search input | Triggered after every change in the search input      |
| **update-items**  | *text*: Text of search input | Same as *change*, but respecting *min-len* and *wait* |
| **item-clicked**  | *item*: Item clicked         | Triggered after a click on a suggestion               |
| **item-selected** | *item*: Item selected        | Like @input, but only when has value                  |
| **blur**          | *text*: Text of search input | Triggered on blur in the search input                 |
| **focus**         | *text*: Text of search input | Triggered on focus in the search input                |

What about appearence?
----------------------

Just overwrite their css classes. See the structure in *stylus* lang:

```stylus
.v-autocomplete
  .v-autocomplete-input-group
    .v-autocomplete-input
  .v-autocomplete-list
    .v-autocomplete-list-item
      &.v-autocomplete-item-active
```

Follows the css used in the [DEMO](http://paliari.github.io/v-autocomplete):

```stylus
.v-autocomplete
  .v-autocomplete-input-group
    .v-autocomplete-input
      font-size 1.5em
      padding 10px 15px
      box-shadow none
      border 1px solid #157977
      width calc(100% - 32px)
      outline none
      background-color #eee
    &.v-autocomplete-selected
      .v-autocomplete-input
        color green
        background-color #f2fff2
  .v-autocomplete-list
    width 100%
    text-align left
    border none
    border-top none
    max-height 400px
    overflow-y auto
    border-bottom 1px solid #157977
    .v-autocomplete-list-item
      cursor pointer
      background-color #fff
      padding 10px
      border-bottom 1px solid #157977
      border-left 1px solid #157977
      border-right 1px solid #157977
      &:last-child
        border-bottom none
      &:hover
        background-color #eee
      abbr
        opacity 0.8
        font-size 0.8em
        display block
        font-family sans-serif
```

Development
-----------

```bash
$ git clone https://github.com/paliari/v-autocomplete.git
$ cd v-autocomplete

```

### Using yarn

```bash

# install dependencies
$ yarn install

# compile demo for development
$ yarn dev

# open Browser and start serve in demo
$ yarn demo:open

# compile dist demo
$ yarn dist:demo

# compile dist
$ yarn dist

```

### Using npm

```bash

# install dependencies
$ npm install

# compile demo for development
$ npm run dev

# open Browser and start serve in demo
$ npm run demo:open

# compile dist demo
$ npm run dist:demo

# compile dist
$ npm run dist

```

Authors
-------

-	[Marcos Paliari](http://paliari.com)
-	[Daniel Fernando Lourusso](http://dflourusso.com.br)

License
-------

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
