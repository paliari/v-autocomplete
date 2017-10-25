import Autocomplete from './Autocomplete.vue'
// Autocomplete.version = proccess.env.VERSION

export default {
  ...Autocomplete,
  install: vue => vue.component(Autocomplete.name, Autocomplete)
}
