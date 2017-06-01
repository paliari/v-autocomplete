<template lang="pug">
div(style="text-align: center;")
  h2 Type some animal name to search

  v-autocomplete(:items="items" v-model='item', :get-label='getLabel', :min-len='0' @update-items='update', :component-item='tpl' input-class="test-css-class")
  p Selected item:
  pre {{ item }}

  hr
  p.left.note
    b Note:&nbsp;
    | The v-autocomplete component does not contain any css. Therefore, you can customize the appearence for any framework by applying style to the generated classes.
    br
    b
      a(href="https://github.com/paliari/v-autocomplete#what-about-appearence", target="_blank") See an example
</template>

<script>
import Autocomplete from '../src/Autocomplete.vue'
import tpl from './TplItem.vue'
import Animals from './animals.js'
export default {
  name: 'demo',
  components: {'v-autocomplete': Autocomplete},
  data () {
    return {
      itemsApi: [],
      item: {id: 9, name: 'Lion', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      items: [],
      tpl: tpl
    }
  },
  methods: {
    getLabel (item) {
      return item.name
    },
    update (text) {
      this.items = Animals.filter((item) => {
        return (new RegExp(text.toLowerCase())).test(item.name.toLowerCase())
      })
    }
  }
}
</script>

<style src="./style.css"></style>
<style lang="stylus">
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

pre
  text-align left
  white-space pre-wrap
  background-color #eee
  border 1px solid silver
  padding 20px !important
  border-radius 10px
  font-family monospace !important
.left
  text-align left
.note
  border-left 5px solid #ccc
  padding 10px
</style>
