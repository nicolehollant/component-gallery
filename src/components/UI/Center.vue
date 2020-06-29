<template>
<div class="flex flex-col justify-around">
  <div class="m-4 h-40 flex justify-center items-center bg-white rounded-lg shadow">
    <h1 class="px-2 py-1 block rounded bg-blue-300 text-gray-800 font-medium">
      I'm centered with flexbox
    </h1>
  </div>

  <div class="m-4 h-40 grid justify-center items-center bg-white rounded-lg shadow">
    <h1 class="px-2 py-1 block rounded bg-blue-300 text-gray-800 font-medium">
      I'm centered with grid
    </h1>
  </div>

  <div class="m-4 h-40 bg-white rounded-lg shadow">
    <h1 class="relative px-2 py-1 block w-max top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded bg-blue-300 text-gray-800 font-medium">
      I'm centered with positioning
    </h1>
  </div>

  <div class="m-4 h-24 bg-white rounded-lg shadow">
    <h1 class="px-2 py-1 block m-auto w-max rounded bg-blue-300 text-gray-800 font-medium">
      I'm centered (horizontally) with margin
    </h1>
  </div>
</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
const Center = defineComponent({})
export default Center
</script>

<description>
## Centering
There are many different ways to center something with CSS. You can use flexbox, you can use positioning, transforming, and grids!

Centering with grid and flex consist of placing an element in a container with `justify-content: center` and `align-items: center`

A common hack for centering is use relative positioning and x/y-translating. You can give offsets of `top: 50%` and `left: 50%` to get the top left corner of the element into the middle of its parent. Then to correct for the offset origin, we can use `transform: translate(-50%, -50%)` to move the element left and up by half of its own size. Note that the transform percentages are based off of the element's size, whereas the position offset percentages are relative to its parent.

The last is just using `margin: auto` to center an element with a defined width within its parent. This is just used for centering on the x-axis.
</description>