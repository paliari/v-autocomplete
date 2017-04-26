<template lang="pug">
div {{item.label}}
</template>

<script>
export default {
  props: {
    item: { required: true }
  }
}
</script>
