<template>
<div class="p-4 rounded-lg shadow-md flex flex-col justify-start">
  <h2 class="text-lg font-semibold text-teal-700">Hi I'm a card</h2>
  <p class="font-medium mt-1">And here is some other content</p>
  <div class="mt-4 flex flex-col w-full justify-around md:flex-row">

    <div class="px-3 py-2 mx-4 h-40 flex flex-col flex-grow-0 flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden md:w-1/2 md:mx-0">
      <div class="flex justify-between items-center">
        <h3 class="text-base font-medium text-teal-600 truncate">
          Stuff Worked
        </h3>
        <span class="ml-4 px-2 leading-relaxed text-xs font-medium uppercase tracking-wide rounded-full text-gray-700 bg-green-300">
          Success
        </span>
      </div>
      <div class="mt-2 flex flex-col justify-around flex-1">
        <p class="font-semibold tracking-wide text-gray-800 truncate">
          This is what you did
        </p>
        <blockquote class="h-12 mt-1 pl-2 leading-snug border-l-2 border-green-600 overflow-scroll">
          perhaps this is some data that was grabbed from a form submission, but you can use your imagination
        </blockquote>
      </div>
      <a class="mt-1 ml-auto inline text-xs text-gray-700 cursor-pointer hover:text-indigo-700">
        More Info
      </a>
    </div>

    <div class="px-3 py-2 my-4 flex flex-col flex-1 h-40 mx-4 border border-gray-200 rounded-lg overflow-hidden md:my-0">
      <div class="flex justify-between items-center">
        <h3 class="text-base font-medium text-teal-600 truncate">
          Something Happened
        </h3>
        <span class="ml-4 px-2 leading-relaxed text-xs font-medium uppercase tracking-wide rounded-full text-gray-700 bg-yellow-300">
          Warning
        </span>
      </div>
      <div class="mt-2 flex flex-col justify-around flex-1">
        <p class="font-semibold tracking-wide text-gray-800 truncate">
          This had issues
        </p>
        <blockquote class="h-12 mt-1 pl-2 leading-snug border-l-2 border-yellow-600 overflow-scroll">
          maybe this worked but it's deprecated. this could be a suggestion for an alternative
        </blockquote>
      </div>
      <a class="mt-1 ml-auto inline text-xs text-gray-700 cursor-pointer hover:text-indigo-700">
        More Info
      </a>
    </div>

    <div class="px-3 py-2 flex flex-col flex-1 h-40 mx-4 border border-gray-200 rounded-lg overflow-hidden md:mx-0">
      <div class="flex justify-between items-center">
        <h3 class="text-base font-medium text-teal-600 truncate">
          Oops
        </h3>
        <span class="ml-4 px-2 leading-relaxed text-xs font-medium uppercase tracking-wide rounded-full text-gray-700 bg-orange-300">
          Error
        </span>
      </div>
      <div class="mt-2 flex flex-col justify-around flex-1">
        <p class="font-semibold tracking-wide text-gray-800 truncate">
          This had issues
        </p>
        <blockquote class="h-12 mt-1 pl-2 leading-snug border-l-2 border-orange-600 overflow-scroll">
          this is what didn't work, and also why it didn't!
        </blockquote>
      </div>
      <a class="mt-1 ml-auto inline text-xs text-gray-700 cursor-pointer hover:text-indigo-700">
        More Info
      </a>
    </div>

  </div>
</div>
</template>

<description>
## Card Row


</description>

<script>
import { defineComponent } from '@vue/composition-api'
const Card = defineComponent({})
export default Card
</script>

<style lang="scss" scoped>

</style>