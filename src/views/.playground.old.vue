<template>
<div class="min-h-screen bg-gray-200 flex flex-col">
  <header class="pt-2 bg-gray-200 text-gray-700 font-semibold">
    <div class="px-4">
      <div class="relative max-w-6xl mx-auto flex justify-around items-center">
        <p class="w-1/2">Component Gallery</p>
        <router-link class="block" to="/" exact>Home</router-link>
      </div>
    </div>
    <div class="mt-2 flex justify-around items-center">
      <button 
        class="py-1 px-2 flex-1 font-medium text-sm ease duration-150 focus:outline-none focus:bg-teal-900 hover:bg-teal-800 focus:text-gray-100 hover:text-gray-100"
        :class="state.editing ? 'bg-teal-600 text-white' : 'text-gray-600'"
        @click="() => state.editing = true"
      >
        Edit
      </button>
      <button 
        class="py-1 px-2 flex-1 font-medium text-sm ease duration-150 focus:outline-none focus:bg-teal-900 hover:bg-teal-800 focus:text-gray-100 hover:text-gray-100"
        :class="!state.editing ? 'bg-teal-600 text-white' : 'text-gray-600'"
        @click="submit"
      >
        View
      </button>
    </div>
  </header>
  <main v-if="state.editing" class="m-4 flex-1 flex flex-col">
    <textarea name="template" id="" class="sr-only whitespace-pre-wrap" aria-hidden ref="clipboardCode" v-model="state.clipboard" />
    <div class="my-2 grid gap-4 grid-flow-col justify-start items-center">
      <Select 
        :options="state.componentList.map(a => ({label: a.label, value: a.label}))" 
        placeholder="select a component"
        v-model="state.selectedComponent" 
        name="component-select"
      />
      <button @click="copy" class="p-1 rounded-full h-min text-gray-700 transition duration-100 ease-in hover:text-teal-800 hover:bg-teal-200 focus:outline-none focus:shadow-outline">
        <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      </button>
    </div>
    <textarea 
      class="text-sm font-mono p-2 border-2 border-gray-400 rounded-lg flex-1 resize-none focus:outline-none focus:border-blue-500" 
      v-model="state.content" 
      @keydown.tab.prevent="injectTab"
      @keydown.enter.meta="submit"
      spellcheck="false"
    />
    <button @click="submit">submit</button>
  </main>
  <main v-else>
    <component :is="compiled" />
  </main>
</div>
</template>

<script>
import Vue from 'vue'
import { Select, Slider, TextInput, Toggle, Checkbox, Radiogroup } from '@/components/basic'
import { defineComponent, reactive, ref, onMounted } from '@vue/composition-api'
export default defineComponent({
  name: 'Playground',
  components: {
    Select
  },
  setup() {
    const state = reactive({
      content: '',
      rendered: '',
      editing: true,
      componentList: [
        { label: 'Select', value: Select },
        { label: 'Slider', value: Slider },
        { label: 'TextInput', value: TextInput },
        { label: 'TextInput:multiline', value: TextInput },
        { label: 'TextInput:number', value: TextInput },
        { label: 'TextInput:date', value: TextInput },
        { label: 'TextInput:password', value: TextInput },
        { label: 'TextInput:tel', value: TextInput },
        { label: 'Toggle', value: Toggle },
        { label: 'Checkbox', value: Checkbox },
        { label: 'Radiogroup', value: Radiogroup },
      ],
      selectedComponent: 'Select',
      clipboard: '',
      labelClass: 'text-gray-700 font-semibold text-sm tracking-wide'
    })

    const compiled = ref('')
    const clipboardCode = ref(null)

    function copy() {
      const selected = state.selectedComponent
      console.log({selected})
      let inputType = 'text'
      const multiline = selected === 'TextInput:multiline'
      switch (selected) {
        case 'Slider':
          state.clipboard = 
`<Slider 
  name="progress"
  value="0"
  min="0"
  max="100"
  step="1"
>
  <template v-slot:label>
    <p class="${state.labelClass}">
      Label:
    </p>
  </template>
</Slider>`
          break
        case 'TextInput':
        case 'TextInput:multiline':
        case 'TextInput:number': inputType = 'number'
        case 'TextInput:date': inputType = 'date'
        case 'TextInput:password': inputType = 'password'
        case 'TextInput:tel': inputType = 'tel'
          state.clipboard =
`<TextInput name="title" v-model="title"${multiline ? ' multiline' : ''} type="${inputType}">
  <template v-slot:label>
    <p class="${state.labelClass}">
      Label:
    </p>
  </template>
</TextInput>`
          break
        case 'Toggle':
          state.clipboard = `<${selected} value=""></${selected}>`
          break
        case 'Select':
          state.clipboard = `<${selected} name="" value="" options="" ></${selected}>`
          break
        case 'Checkbox':
          state.clipboard = `<${selected} name="" value="" options="" ></${selected}>`
          break
        case 'Radiogroup':
          state.clipboard = `<${selected} name="" value="" options="" ></${selected}>`
          break
        default:
          state.clipboard = `<${selected}></${selected}>`
          break
      }
      setTimeout(() => {
        clipboardCode.value.select()
        document.execCommand('copy')
      });
    }

    function submit() {
      compiled.value = Vue.compile(['<div>', state.content, '</div>'].join('\n'))
      state.editing = false
    }

    function injectTab(event) {
      let text = state.content,
          originalSelectionStart = event.target.selectionStart,
          textStart = text.slice(0, originalSelectionStart),
          textEnd =  text.slice(originalSelectionStart);
      state.content = `${textStart}  ${textEnd}`
      setTimeout(() => {
        event.target.selectionEnd = event.target.selectionStart = originalSelectionStart + 2
      });
    }

    onMounted(() => {
      state.componentList.forEach(c => Vue.component(c.label, c.value))
    })

    return {
      state,
      submit,
      compiled,
      injectTab,
      copy,
      clipboardCode,
    }
  }
})
</script>