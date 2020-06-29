<template>
<div class="my-12 mx-auto px-8 max-w-2xl">
  <Toggle 
    name="theme"
    v-model="value"
  >
    <template v-slot:label>
      <p class="text-gray-700 font-semibold text-sm tracking-wide">
        Theme:
      </p>
    </template>
  </Toggle>
</div>
</template>

<script>
import { Toggle } from '@/components/basic'
import { ref } from '@vue/composition-api'
export default {
  name: 'ExampleToggle',
  components: { Toggle },
  setup() {
    const value = ref(true)
    return { value }
  }
}
</script>