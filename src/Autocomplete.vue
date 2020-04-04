<template lang="html">
  <div class="v-autocomplete">
    <div class="v-autocomplete-input-group" :class="{'v-autocomplete-selected': value}">
      <input type="search" v-model="searchText" v-bind="inputAttrs" 
            :class="inputAttrs.class || inputClass"
            :placeholder="inputAttrs.placeholder || placeholder"
            :disabled="inputAttrs.disabled || disabled"
            @blur="blur" @focus="focus" @input="inputChange"
            @keyup.enter="keyEnter" @keydown.tab="keyEnter" 
            @keydown.up="keyUp" @keydown.down="keyDown">
    </div>
    <div class="v-autocomplete-list" v-if="show">
      <div class="v-autocomplete-list-item" v-for="item, i in internalItems" @click="onClickItem(item)"
           :class="{'v-autocomplete-item-active': i === cursor}" @mouseover="cursor = i">
        <div :is="componentItem" :item="item" :searchText="searchText"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import utils from './utils.js'

export default {
  name: 'v-autocomplete',
  props: {
    componentItem: { default: () => Item },
    minLen: { type: Number, default: utils.minLen },
    wait: { type: Number, default: utils.wait },
    value: null,
    getLabel: {
      type: Function,
      default: item => item
    },
    items: Array,
    autoSelectOneItem: { type: Boolean, default: true },
    placeholder: String,
    inputClass: {type: String, default: 'v-autocomplete-input'},
    disabled: {type: Boolean, default: false},
    inputAttrs: {type: Object, default: () => {return {}}},
    keepOpen: {type: Boolean, default: false}
  },
  data () {
    return {
      searchText: this.inputAttrs.value || '',
      showList: false,
      cursor: -1,
      internalItems: this.items || []
    }
  },
  computed: {
    hasItems () {
      return !!this.internalItems.length
    },
    show () {
      return (this.showList && this.hasItems) || this.keepOpen
    }
  },
  methods: {
    inputChange () {
      this.showList = true
      this.cursor = -1
      this.onSelectItem(null, 'inputChange')
      utils.callUpdateItems(this.searchText, this.updateItems)
      this.$emit('change', this.searchText)
    },

    updateItems () {
      this.$emit('update-items', this.searchText)
    },

    focus () {
      this.$emit('focus', this.searchText)
      this.showList = true
    },

    blur () {
      this.$emit('blur', this.searchText)
      setTimeout( () => this.showList = false, 200)
    },

    onClickItem(item) {
      this.onSelectItem(item)
      this.$emit('item-clicked', item)
    },

    onSelectItem (item) {
      if (item) {
        this.internalItems = [item]
        this.searchText = this.getLabel(item)
        this.$emit('item-selected', item)
      } else {
        this.setItems(this.items)
      }
      this.$emit('input', item)
    },

    setItems (items) {
      this.internalItems = items || []
    },

    isSelectedValue (value) {
      return 1 == this.internalItems.length && value == this.internalItems[0]
    },

    keyUp (e) {
      if (this.cursor > -1) {
        this.cursor--
        this.itemView(this.$el.getElementsByClassName('v-autocomplete-list-item')[this.cursor])
      }
    },

    keyDown (e) {
      if (this.cursor < this.internalItems.length) {
        this.cursor++
        this.itemView(this.$el.getElementsByClassName('v-autocomplete-list-item')[this.cursor])
      }
    },

    itemView (item) {
      if (item && item.scrollIntoView) {
        item.scrollIntoView(false)
      }
    },

    keyEnter (e) {
      if (this.showList && this.internalItems[this.cursor]) {
        this.onSelectItem(this.internalItems[this.cursor])
        this.showList = false
      }
    },

  },
  created () {
    utils.minLen = this.minLen
    utils.wait = this.wait
    this.onSelectItem(this.value)
  },
  watch: {
    items (newValue) {
      this.setItems(newValue)
      let item = utils.findItem(this.items, this.searchText, this.autoSelectOneItem)
      if (item) {
        this.onSelectItem(item)
        this.showList = false
      }
    },
    value (newValue) {
      if (!this.isSelectedValue(newValue) ) {
        this.onSelectItem(newValue)
        this.searchText = this.getLabel(newValue)
      }
    }
  }
}
</script>

<style>
  .v-autocomplete {
    position: relative;
  }
  .v-autocomplete .v-autocomplete-list {
    position: absolute;
  }
  .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
    cursor: pointer;
  }
  .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item.v-autocomplete-item-active {
    background-color: #f3f6fa;
  }
</style>
