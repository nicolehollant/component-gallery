<template>
  <div class="p-4">
    <h1 class="text-xl text-gray-700 font-semibold">SVG Loader</h1>
    <div class="flex mt-2">
      <SvgLoader :svg="spelling" class="w-16 h-16" />
    </div>
  </div>
</template>

<script>
import SvgLoader from '@/components/SvgLoader.vue'
import { defineComponent } from '@vue/composition-api'

import spelling from '!!raw-loader!@/assets/svg/spelling.svg';

const About = defineComponent({
  name: 'About',
  components: {
    SvgLoader,
  },
  setup() {
    return { spelling }
  }
})
export default About
</script>