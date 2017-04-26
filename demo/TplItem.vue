<template lang="pug">
div
  b \#{{item.id}}
  span  {{ item.label }}
</template>

<script>
export default {
  props: {
    item: { required: true }
  }
}
</script>
