<template>
  <div class="p-4">
    <h1 class="text-xl text-gray-700 font-semibold">SVG Loader</h1>
    <div class="flex mt-2">
      <SvgLoader :svg="state.spelling" class="w-16 h-16" />
      <SvgLoader :svg="state.tim" class="ml-4 w-16 h-16" />
    </div>
  </div>
</template>

<script>
import SvgLoader from '@/components/SvgLoader.vue'
import { defineComponent, reactive } from '@vue/composition-api'

import spelling from '!!raw-loader!@/assets/svg/spelling.svg';
import tim from '!!raw-loader!@/assets/svg/tim.svg';

const About = defineComponent({
  name: 'About',
  components: {
    SvgLoader,
  },
  setup() {
    const state = reactive({
      spelling: spelling,
      tim: tim,
    })

    return {
      state,
    }
  }
})
export default About
</script>