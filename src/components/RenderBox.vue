<template>
<div :class="$attrs.class" class="mt-6 border border-gray-200 bg-gray-100 overflow-hidden lg:rounded-lg lg:mt-12">
  <div class="px-4 py-2 border-b border-gray-200 flex justify-between items-center bg-white sm:py-4 sm:px-6 sm:items-baseline">
    <h3 class="font-regular text-base md:text-lg leading-snug truncate">{{ renderData.title }}</h3>
    <div class="ml-4 flex flex-shrink-0 items-center">
      
      <div class="mr-2">
        <button
          @click="state.activeTab = 'preview'"
          class="px-2 py-1 rounded font-medium text-gray-600 hover:text-teal-700 focus:outline-none focus:shadow-outline"
          :class="{'bg-teal-200': state.activeTab === 'preview'}"
        >
          Preview
        </button>
      </div>

      <div class="mr-2">
        <button
          @click="state.activeTab = 'description'"
          class="px-2 py-1 rounded font-medium text-gray-600 hover:text-teal-700 focus:outline-none focus:shadow-outline"
          :class="{'bg-teal-200': state.activeTab === 'description'}"
        >
          Description
        </button>
      </div>

      <div>
        <button 
          @click="state.activeTab = 'code'"
          class="px-2 py-1 rounded font-medium text-gray-600 hover:text-teal-700 focus:outline-none focus:shadow-outline"
          :class="{'bg-teal-200': state.activeTab === 'code'}"
        >
          Code
        </button>
      </div>

      <div class="-my-1 px-4 self-stretch">
        <div class="h-full border-l border-gray-200"></div>
      </div>

      <textarea name="template" id="" class="sr-only whitespace-pre-wrap" aria-hidden ref="clipboardCode" v-model="renderData.template" />
      
      <div>
        <button 
          @click="copy"
          class="px-2 py-1 rounded font-medium text-gray-600 hover:text-teal-700 focus:outline-none focus:shadow-outline"
        >
          Copy
        </button>
      </div>
    </div>
  </div>
  <div v-if="state.activeTab === 'preview'">
    <slot />
  </div>
  <div v-else-if="state.activeTab === 'description'" class="p-4 description" v-html="state.description"></div>
  <div v-else class="p-4 bg-gray-900 text-gray-100">
    <pre v-highlightjs="renderData.template" class="text-sm font-medium overflow-scroll"><code class="html"></code></pre>
  </div>
</div>
</template>

<script>
import md from 'markdown-it'
import { defineComponent, reactive, ref } from '@vue/composition-api'
const RenderBox = defineComponent({
  props: {
    renderData: {
      type: Object,
      default: () => ({
        title: 'Some Component',
        template: '<div>Woah woah woah</div>',
        description: '<div>Woah woah woah</div>',
      })
    }
  },
  setup(props) {
    const clipboardCode = ref(null);
    const previewFrame = ref(null);

    const state = reactive({
      activeTab: 'preview',
      templateHighlight: props.renderData.template,
      description: md().render(props.renderData.description)
    })

    function copy() {
      clipboardCode.value.select(); 
      document.execCommand('copy')
    }

    return {
      state,
      copy,
      clipboardCode,
      previewFrame
    }
  }
})
export default RenderBox
</script>

<style lang="postcss" scoped>
.description {
  @apply leading-relaxed text-lg font-medium p-4 max-w-4xl mx-auto text-left;
}
.description >>> h2:first-child, .description >>> h1:first-child {
  @apply mt-0
}
.description >>> h1 {
  @apply font-black text-3xl mt-8 mb-2 uppercase;
}
.description >>> h2 {
  @apply font-bold text-2xl mt-4 mb-2;
}
.description >>> h3 {
  @apply font-bold text-xl mt-2 mb-2;
}
.description >>> h4{
  @apply font-bold text-lg mt-2 mb-1;
}
.description >>> li {
  @apply ml-6 list-disc;
}
.description >>> p {
  @apply mb-6;
}
.description >>> code {
  @apply text-blue-700;
}
.description >>> a {
  @apply text-teal-200 underline;
}
.description >>> ul{
  margin: 0.2rem 0 0.5rem;
}
.description >>> blockquote{
  @apply flex flex-col m-4 rounded-lg border-l-4 p-4 bg-gray-300;
}
.description >>> pre, .description >>> code {
  font-family: monospace, monospace;
}
.description >>> pre {
  @apply flex m-4 rounded-lg border-l-4 text-base p-4 overflow-auto;
}
</style>