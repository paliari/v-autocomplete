// need to use require instead of import (changes from babel 5 to 6)
const Autocomplete = require('./Autocomplete.vue')
Autocomplete.install = Vue => Vue.component(Autocomplete.name, Autocomplete)
// Autocomplete.version = proccess.env.VERSION

module.exports = Autocomplete
