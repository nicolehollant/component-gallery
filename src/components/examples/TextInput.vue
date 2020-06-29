<template>
<div class="my-12 mx-auto px-8 max-w-2xl space-y-4">
  <TextInput name="title" v-model="title">
    <template v-slot:label>
      <p class="text-gray-700 font-semibold text-sm tracking-wide">
        Title:
      </p>
    </template>
  </TextInput>

  <TextInput name="date" v-model="date" type="date">
    <template v-slot:label>
      <p class="text-gray-700 font-semibold text-sm tracking-wide">
        Date:
      </p>
    </template>
  </TextInput>

  <TextInput multiline name="desc" v-model="description">
    <template v-slot:label>
      <p class="text-gray-700 font-semibold text-sm tracking-wide">
        Description:
      </p>
    </template>
  </TextInput>
</div>
</template>

<script>
import { TextInput } from '@/components/basic'
import { ref } from '@vue/composition-api'
export default {
  name: 'ExampleTextInput',
  components: { TextInput },
  setup() {
    const title = ref('')
    const description = ref('')
    const date = ref('')
    return {
      title, 
      description,
      date
    }
  }
}
</script>