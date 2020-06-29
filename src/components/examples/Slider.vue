<template>
<div class="my-12 mx-auto px-8 max-w-2xl">
  <Slider 
    name="progress"
    v-model="value"
    min="0"
    max="100"
    step="1"
  >
    <template v-slot:label>
      <p class="text-gray-700 font-semibold text-sm tracking-wide">
        Progress:
      </p>
    </template>
  </Slider>
</div>
</template>

<script>
import { Slider } from '@/components/basic'
import { ref } from '@vue/composition-api'
export default {
  name: 'ExampleSlider',
  components: { Slider },
  setup() {
    const value = ref(0)
    return { value }
  }
}
</script>