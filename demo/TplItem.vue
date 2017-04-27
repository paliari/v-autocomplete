<template lang="pug">
div
  b \#{{item.id}}
  span  {{ item.name }}
  abbr {{item.description}}
</template>

<script>
export default {
  props: {
    item: { required: true }
  }
}
</script>
