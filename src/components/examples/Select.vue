<template>
<div class="my-12 mx-auto px-8 max-w-2xl">
  <Select 
    id="select"
    placeholder="pick your state"
    v-model="selected"
    :options="options"
  >
    <template v-slot:label>
      <p class="text-gray-700 font-semibold text-sm tracking-wide">State:</p>
    </template>
  </Select>
</div>
</template>

<script>
import { Select } from '@/components/basic'
import { ref } from '@vue/composition-api'
export default {
  name: 'ExampleSelect',
  components: { Select },
  setup() {
    const options = [
      { label: 'Connecticut', value: 'CT' },
      { label: 'Massachusetts', value: 'MA' },
      { label: 'New York', value: 'NY' },
    ]
    const selected = ref('')
    return { selected, options }
  }
}
</script>