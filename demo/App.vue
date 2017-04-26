<template lang="pug">
div(style="padding-top: 50px; text-align: center;")
  h1 DEMO v-autocomplete

  div(style='margin: auto; width: 200px; background-color: #a8c2de')
    v-autocomplete(:items="items" v-model='item', :get-label='getLabel', @updateItems='update')

  p item: {{ item }}
  pre text: {{ text }}
</template>

<script>
import Autocomplete from '../src/Autocomplete.vue'

export default {
  name: 'demo',
  components: {'v-autocomplete': Autocomplete},
  data () {
    return {
      item: {label: 'Item 4', id: 4},
      items: [],
      text: ''
    }
  },
  methods: {
    getLabel (item) {
      return item.label
    },
    update (text) {
      this.text = this.text + "\n" + Date.now() + ": " + text
    }
  },
  created () {
    for (let i = 0; i < 30; i++) {
      this.items.push({label: 'Item ' + i, id: i})
    }
    window.a = this
  }
}
</script>

<style lang="stylus">
.v-autocomplete
  position relative
  .v-autocomplete-input-group
    &.v-autocomplete-selected
      input
        color green
  .v-autocomplete-list
    position absolute
    background-color #eee
    .v-autocomplete-list-item
      cursor pointer
</style>
