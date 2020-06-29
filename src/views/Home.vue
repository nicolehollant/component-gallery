<template>
<div class="h-full bg-white pb-8">
  <header class="pt-2 bg-gray-200 text-gray-700 font-semibold">
    <div class="px-4">
      <div class="relative max-w-6xl mx-auto flex justify-around items-center">
        <p class="w-1/2">Component Gallery</p>
        <router-link class="block" to="/" exact>Home</router-link>
        <router-link class="block" to="/playground">Playground</router-link>
      </div>
    </div>
    <div class="mt-2 flex justify-around items-center">
      <button 
        v-for="category in state.categories" 
        :key="category.tab"
        class="py-1 px-2 flex-1 font-medium text-sm ease duration-150 focus:outline-none focus:bg-teal-900 hover:bg-teal-800 focus:text-gray-100 hover:text-gray-100"
        :class="category.tab === state.active ? 'bg-teal-600 text-white' : 'text-gray-600'"
        @click="() => state.active = category.tab"
      >
        {{ category.tab }}
      </button>
    </div>
  </header>
  <div class="max-w-6xl m-auto">
    <RenderBoxBasic
      v-for="component of state.categories.filter(e => e.tab === state.active)[0].components" 
      :key="component.title" 
      :renderData="{title: component.title, usage: component.usage, template: component.template}"
    >
      <component :is="component.tag" :class="component.xClass"></component>
    </RenderBoxBasic>
  </div>
</div>
</template>

<script>
import { useParseTemplate } from '@/composables'
import RenderBoxBasic from '@/components/RenderBoxBasic.vue'
import { defineComponent, reactive } from '@vue/composition-api'

import { Select, Slider, TextInput, Toggle, Checkbox, Radiogroup } from '@/components/basic'
import selectText from '!!raw-loader!@/components/basic/Select.vue';
import sliderText from '!!raw-loader!@/components/basic/Slider.vue';
import textInputText from '!!raw-loader!@/components/basic/TextInput.vue';
import toggleText from '!!raw-loader!@/components/basic/Toggle.vue';
import checkboxText from '!!raw-loader!@/components/basic/Checkbox.vue';
import radiogroupText from '!!raw-loader!@/components/basic/Radiogroup.vue';

import { ExampleSlider, ExampleTextInput, ExampleToggle, ExampleSelect, ExampleCheckbox, ExampleRadiogroup } from '@/components/examples'
import selectUsageText from '!!raw-loader!@/components/examples/Select.vue';
import sliderUsageText from '!!raw-loader!@/components/examples/Slider.vue';
import textInputUsageText from '!!raw-loader!@/components/examples/TextInput.vue';
import toggleUsageText from '!!raw-loader!@/components/examples/Toggle.vue';
import checkboxUsageText from '!!raw-loader!@/components/examples/Checkbox.vue';
import radiogroupUsageText from '!!raw-loader!@/components/examples/Radiogroup.vue';

const Home = defineComponent({
  name: 'Home',
  components: {
    RenderBoxBasic,
    Select, 
    Slider, 
    TextInput, 
    Toggle,
    Checkbox,
    Radiogroup,
    ExampleSlider, ExampleTextInput, ExampleToggle, ExampleSelect, ExampleCheckbox, ExampleRadiogroup
  },
  setup() {
    const { parseComponent } = useParseTemplate()
    const renderBox = (title, rawText, rawExampleText, tag, xClass='') => (
      { title, template: parseComponent(rawText), usage: parseComponent(rawExampleText), xClass, tag }
    )
    const state = reactive({
      active: 'Form Inputs',
      categories: [
        {
          tab: 'Form Inputs',
          components: [
            renderBox('Select', selectText, selectUsageText, ExampleSelect),
            renderBox('Slider', sliderText, sliderUsageText, ExampleSlider),
            renderBox('TextInput', textInputText, textInputUsageText, ExampleTextInput),
            renderBox('Toggle', toggleText, toggleUsageText, ExampleToggle),
            renderBox('Checkbox', checkboxText, checkboxUsageText, ExampleCheckbox),
            renderBox('Radiogroup', radiogroupText, radiogroupUsageText, ExampleRadiogroup),
          ]
        },
        // {
        //   tab: 'Layouts',
        //   components: [renderBox('FlexBox', flexText, Flex) ]
        // }
      ]
    })

    return {
      state,
    }
  }
})
export default Home
</script>