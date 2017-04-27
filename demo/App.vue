<template lang="pug">
div(style="text-align: center;")
  h3 Type some animal name to search

  v-autocomplete(:items="items" v-model='item', :get-label='getLabel', :min-len='0' @update-items='update', :component-item='tpl')
  p Selected item:
  pre {{ item }}
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
  width 100%
  .v-autocomplete-input-group
    input
      font-size 1.5em
      padding 10px 15px
      border-radius 5px
      box-shadow none
      border 2px solid #157977
      width calc(100% - 30px)
      outline none
    &.v-autocomplete-selected
      input
        color green
        background-color #f2fff2
  .v-autocomplete-list
    width 100%
    text-align left
    border 1px solid #157977
    max-height 400px
    overflow-y auto
    .v-autocomplete-list-item
      cursor pointer
      background-color #fff
      padding 10px
      border-bottom 1px solid #157977
      &:last-child
        border none
      &:hover
        background-color #eee
      abbr
        opacity 0.8
        font-size 0.8em
        display block
        font-family sans-serif

pre
  text-align left
  margin 20px
  white-space pre-wrap
  background-color #eee
  border 1px solid silver
  padding 15px
  border-radius 10px
</style>
