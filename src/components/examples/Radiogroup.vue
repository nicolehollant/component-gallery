<template>
<div class="my-12 mx-auto px-8 max-w-2xl">
  <Radiogroup 
    name="agreement"
    :options="options"
    v-model="selected"
    class="grid gap-1"
  >
    <template v-slot:label>
      <p class="text-gray-700 font-semibold text-sm tracking-wide">
        Options:
      </p>
    </template>
  </Radiogroup>
</div>
</template>

<script>
import { Radiogroup } from '@/components/basic'
import { ref } from '@vue/composition-api'
export default {
  name: 'ExampleRadiogroup',
  components: { Radiogroup },
  setup() {
    const options = [
      { label: 'option A', value: 'A' },
      { label: 'option B', value: 'B' },
      { label: 'option C', value: 'C' },
    ]
    const selected = ref('')
    return { selected, options }
  }
}
</script>