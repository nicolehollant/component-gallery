<template>
<div class="min-h-screen bg-gray-200 flex flex-col">
  <header class="pt-2 px-4 text-gray-700 font-semibold">
      <div class="relative max-w-6xl mx-auto flex justify-around items-center">
        <p class="w-1/2">Component Gallery</p>
        <router-link class="block" to="/" exact>Home</router-link>
        <router-link class="block" to="/playground">Playground</router-link>
      </div>
  </header>
  <main class="m-4 grid gap-4">
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

    <div class="flex space-x-4 overflow-auto">
      <div class="group" v-for="(size, index) in state.sizes" :key="index">
        <div class="relative z-nav shadow-md group-hover:shadow-lg transition duration-300">
          <div class="flex-shrink-0 bg-white overflow-auto" :style="`width: ${size.w}px; height: ${size.h}px`">
            <myframe class="inline-flex h-full w-full">
              <component :is="compiled" />
            </myframe>
          </div>
        </div>
        <p>
          <span class="text-sm font-semibold text-gray-500 group-hover:text-gray-800 transition duration-300">
            {{ size.w }}px &times; {{ size.h }}px
          </span>
        </p>
      </div>
    </div>

    <textarea
      class="text-sm font-mono p-2 border-2 border-gray-400 rounded-lg h-64 resize-none focus:outline-none focus:border-blue-500" 
      v-model="state.content" 
      @keydown.tab.prevent="injectTab"
      @keydown.enter.meta="submit"
      @input="debounceSubmit"
      spellcheck="false"
    />
    <div class="flex justify-around">
      <button @click="share">share</button>
      <button @click="submit">submit</button>
    </div>
  </main>
</div>
</template>

<script>
import { encode, decode } from 'base64-url'
import Vue from 'vue'
import { debounce } from 'lodash'
import { Select, Slider, TextInput, Toggle, Checkbox, Radiogroup } from '@/components/basic'
import { defineComponent, reactive, ref, onMounted } from '@vue/composition-api'
export default defineComponent({
  name: 'Playground',
  components: {
    Select
  },
  setup(_, { root }) {
    const state = reactive({
      content: '',
      rendered: '',
      editing: true,
      sizes: [
        { w: 300, h: 500 },
        { w: 400, h: 500 },
        { w: 700, h: 500 },
        { w: 1000, h: 500 },
      ],
      componentList: [
        { componentName: 'Select', label: 'Select', value: Select },
        { componentName: 'Slider', label: 'Slider', value: Slider },
        { componentName: 'TextInput', label: 'TextInput', value: TextInput },
        { componentName: 'TextInput', label: 'TextInput:multiline', value: TextInput },
        { componentName: 'TextInput', label: 'TextInput:number', value: TextInput },
        { componentName: 'TextInput', label: 'TextInput:date', value: TextInput },
        { componentName: 'TextInput', label: 'TextInput:password', value: TextInput },
        { componentName: 'TextInput', label: 'TextInput:tel', value: TextInput },
        { componentName: 'Toggle', label: 'Toggle', value: Toggle },
        { componentName: 'Checkbox', label: 'Checkbox', value: Checkbox },
        { componentName: 'Radiogroup', label: 'Radiogroup', value: Radiogroup },
      ],
      selectedComponent: 'Select',
      clipboard: '',
      labelClass: 'text-gray-700 font-semibold text-sm tracking-wide'
    })

    const substate = reactive({
      toggle: true,
      input: '',
      content: '',
    })

    const compiled = ref('')
    const clipboardCode = ref(null)

    const setClipboardTextInput = (type) => {
      const multiline = type === 'multiline'
      state.clipboard =
`<TextInput v-model="title"${multiline ? ' multiline' : ''} type="${type}">
  <template v-slot:label>
    <p class="${state.labelClass}">
      Label:
    </p>
  </template>
</TextInput>`
    }

    function copy() {
      const selected = state.selectedComponent
      switch (selected) {
        case 'Slider':
          state.clipboard = 
`<Slider v-model="slider" value="0" min="0" max="100" step="1">
  <template v-slot:label>
    <p class="${state.labelClass}">
      Label:
    </p>
  </template>
</Slider>`
          break
        case 'TextInput':
          setClipboardTextInput('text')
          break
        case 'TextInput:multiline':
          setClipboardTextInput('multiline')
          break
        case 'TextInput:number':
          setClipboardTextInput('number')
          break
        case 'TextInput:date':
          setClipboardTextInput('date')
          break
        case 'TextInput:password':
          setClipboardTextInput('password')
          break
        case 'TextInput:tel':
          setClipboardTextInput('tel')
          break
        case 'Toggle':
          state.clipboard = 
`<Toggle name="theme" v-model="toggle">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Theme:
    </p>
  </template>
</Toggle>`
          break
        case 'Select':
          state.clipboard = 
`<Select id="select" placeholder="" v-model="select" :options="[{ label: 'Pink', value: 'a' }, { label: 'Purple', value: 'b' }]">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Label:
    </p>
  </template>
</Select>`
          break
        case 'Checkbox':
          state.clipboard =
`<Checkbox name="agreement" v-model="checkbox">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Agreement:
    </p>
  </template>
  <template v-slot:label-right>
    <p class="ml-2 text-sm text-gray-700">
      Is this cool w u?
    </p>
  </template>
</Checkbox>`
          break
        case 'Radiogroup':
          state.clipboard = 
`<Radiogroup :options="[{ label: 'option A', value: 'A' }, { label: 'option B', value: 'B' }]" v-model="radio" class="grid gap-1">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Options:
    </p>
  </template>
</Radiogroup>`
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

    const debounceSubmit = debounce(() => {
      submit()
    }, 1000)

    function submit() {
      const hash = encode(state.content)
      if(hash !== root.$route.params.code){
        root.$router.push({
          path: ['/playground', hash].join('/'),
        })
      }
      compiled.value = Vue.component('playground', {
        props: ['state'],
        data: () => ({
          radio: '',
          select: '',
          title: "I'm live 🥰",
          checkbox: false,
          toggle: false,
          slider: 0,
        }),
        template: ['<div>', state.content, '</div>'].join('\n')
      })
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

    Vue.component('myframe', {
      render(h) {
        return  h('iframe', {
          on: { load: this.renderChildren }
        })
      },
      beforeUpdate() {
        this.iApp.children = Object.freeze(this.$slots.default)
      },  
      methods: {
        renderChildren() {
          const children = this.$slots.default
          // oh dear
          this.$el.contentDocument.head.innerHTML = document.head.innerHTML
          const body = this.$el.contentDocument.body      
          const el = document.createElement('DIV')
          body.appendChild(el)
          const iApp = new Vue({
            name: 'iApp',
            data: { children: Object.freeze(children) }, 
            render(h) {
              return h('div', this.children)
            },
          })
          iApp.$mount(el)
          this.iApp = iApp
        }
      }
    })

    function share() {
      state.clipboard = window.location
      setTimeout(() => {
        clipboardCode.value.select()
        document.execCommand('copy')
      });
    }

    onMounted(() => {
      const hashCode = root.$route.params.code
      if(hashCode && decode(hashCode)) {
        state.content = decode(hashCode)
        submit()
      }
      state.componentList.forEach(c => Vue.component(c.componentName, c.value))
    })

    return {
      state,
      submit,
      compiled,
      injectTab,
      copy,
      clipboardCode,
      debounceSubmit,
      substate,
      share,
    }
  }
})
</script>

<!--
<div class="h-full p-4 transition duration-500" :class="{'bg-blue-500 sm:bg-pink-500': toggle, 'bg-green-500 sm:bg-purple-500': !toggle}">
<div class="grid gap-4 w-full sm:max-w-md sm:mx-auto">
<Select id="select" placeholder="" v-model="selected" :options="[{ label: 'Pink', value: 'a' }, { label: 'Purple', value: 'b' }]">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Label:
    </p>
  </template>
</Select>
<Toggle name="theme" v-model="toggle">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Theme:
    </p>
  </template>
</Toggle>
<TextInput v-model="title" type="text">
  <template v-slot:label>
    <p class="text-gray-700 font-semibold text-sm tracking-wide">
      Label:
    </p>
  </template>
</TextInput>
</div>
</div>
-->