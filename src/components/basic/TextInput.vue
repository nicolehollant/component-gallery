<template>
<label class="block" :for="$attrs.id || $attrs.name">
  <slot name="label" />
  <textarea
    v-if="multiline"
    :name="$attrs.name || $attrs.id"
    :id="$attrs.id || $attrs.name" 
    :placeholder="$attrs.placeholder"
    class="block w-full px-2 py-1 font-medium rounded border border-gray-300 focus:outline-none focus:shadow-outline resize-y"
    :class="{'border-orange-700': error !== ''}"
    v-model="val"
    @input="$emit('input', val)"
  />
  <input
    :type="$attrs.type || 'text'"
    v-else
    :name="$attrs.name || $attrs.id"
    :id="$attrs.id || $attrs.name" 
    :placeholder="$attrs.placeholder"
    class="block w-full px-2 py-1 font-medium rounded border border-gray-300 focus:outline-none focus:shadow-outline"
    :class="{'border-orange-700': error !== ''}"
    v-model="val"
    @input="$emit('input', val)"
  />
  <p v-if="error" class="mt-1 text-sm font-medium text-orange-700">
    {{ error }}
  </p>
</label>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'TextInput',
  props: {
    multiline: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: true
    },
    error: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const val = ref(props.value)
    return { val }
  },
}
</script>