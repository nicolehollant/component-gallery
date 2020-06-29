<template>
<div>
  <slot name="label" />
  <div 
    class="grid grid-flow-col justify-start items-center gap-2" 
    v-for="(val, index) in options" 
    :key="['radio-option', index].join('-')"
  >
    <label
      class="relative w-5 h-5 border border-gray-300 rounded-full text-white transition duration-100 ease-in" 
      :class="{'bg-white': val.value !== selected, 'bg-teal-500': val.value === selected}"
    >
      <input
        type="radio"
        :name="[$attrs.name || $attrs.id, index].join('-')"
        :id="[$attrs.id || $attrs.name, index].join('-')"
        :value="val.value"
        v-model="selected"
        class="w-0 h-0 absolute invisible pointer-events-none"
      >
    </label>
    <label :for="[$attrs.id || $attrs.name, index].join('-')">
      {{ val.label }}
    </label>
  </div>
</div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
export default {
  name: 'Radiogroup',
  props: {
    value: {
      type: null,
      required: false
    },
    options: {
      type: Array,
      default: () => ([{label: 'label', value: 'value'}])
    },
  },
  setup(props, {emit}) {
    const selected = ref(props.value)
    watch(selected, () => emit('input', selected.value))
    return { selected }
  }
}
</script>