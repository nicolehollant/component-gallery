<template>
<div v-html="svg" :class="$attrs.class" />
</template>

<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: ['svg']
})
</script>