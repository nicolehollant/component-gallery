<template>
<div class="my-12 mx-auto px-8 max-w-2xl">
  <Checkbox 
    name="agreement"
    v-model="value"
  >
    <template v-slot:label>
      <p class="text-gray-700 font-semibold text-sm tracking-wide">
        Agreement:
      </p>
    </template>
    <template v-slot:label-right>
      <p class="ml-2 text-sm text-gray-700">
        Is this ok or something?
      </p>
    </template>
  </Checkbox>
</div>
</template>

<script>
import { Checkbox } from '@/components/basic'
import { ref } from '@vue/composition-api'
export default {
  name: 'ExampleCheckbox',
  components: { Checkbox },
  setup() {
    const value = ref(true)
    return { value }
  }
}
</script>