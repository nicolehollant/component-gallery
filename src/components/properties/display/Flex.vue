<template>
<div class="flex flex-col justify-around">
  <h2 class="mx-4 mt-4">Standard flex row</h2>
  <div class="flex mx-4 mt-2 mb-4 p-4 bg-white rounded-lg shadow text-xs">
    <div class="my-1 mr-2 w-20 h-12 border border-gray-300 rounded bg-green-100"></div>
    <div class="my-1 mr-2 w-20 h-12 border border-gray-300 rounded bg-green-200"></div>
    <div class="my-1 mr-2 w-20 h-12 border border-gray-300 rounded bg-green-300"></div>
    <div class="my-1 mr-2 px-2 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-400 text-gray-700 font-medium">
      standard flex row
    </div>
    <div class="my-1 mr-2 w-32 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-500">
      different widths
    </div>
    <div class="my-1 mr-2 w-20 h-12 flex-shrink-0 border border-gray-300 flex items-center justify-center rounded bg-green-600">
      flex-shrink
    </div>
    <div class="my-1 mr-2 w-20 h-12 border border-gray-300 rounded bg-green-700"></div>
    <div class="my-1 mr-2 flex-1 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-800 truncate">
      take available space
    </div>
    <div class="my-1 flex-grow flex-shrink-0 w-20 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-900">
      flex grow and shrink
    </div>
  </div>

  <h2 class="mx-4 mt-4">Flex row with wrapping</h2>
  <div class="flex flex-wrap mx-4 mt-2 mb-4 p-4 bg-white rounded-lg shadow text-xs">
    <div class="my-1 mr-2 w-20 h-12 border border-gray-300 rounded bg-green-100"></div>
    <div class="my-1 mr-2 w-20 h-12 border border-gray-300 rounded bg-green-200"></div>
    <div class="my-1 mr-2 w-20 h-12 border border-gray-300 rounded bg-green-300"></div>
    <div class="my-1 mr-2 px-2 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-400 text-gray-700 font-medium">
      standard flex row
    </div>
    <div class="my-1 mr-2 w-32 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-500">
      different widths
    </div>
    <div class="my-1 mr-2 w-20 h-12 flex-shrink-0 border border-gray-300 flex items-center justify-center rounded bg-green-600">
      flex-shrink
    </div>
    <div class="my-1 mr-2 w-20 h-12 border border-gray-300 rounded bg-green-700"></div>
    <div class="my-1 mr-2 flex-1 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-800 truncate">
      take available space
    </div>
    <div class="my-1 flex-grow flex-shrink-0 w-20 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-900">
      flex grow and shrink
    </div>
  </div>
  
  <h2 class="mx-4 mt-4">Flex col</h2>
  <div class="flex flex-col mx-4 mt-2 mb-4 p-4 bg-white rounded-lg shadow text-xs">
    <div class="my-1 mr-2 w-20 h-12 border border-gray-300 rounded bg-green-300"></div>
    <div class="my-1 mr-2 w-32 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-500">
      different widths
    </div>
    <div class="my-1 mr-2 w-20 h-12 flex-shrink-0 border border-gray-300 flex items-center justify-center rounded bg-green-600">
      flex-shrink
    </div>
    <div class="my-1 mr-2 flex-1 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-800 truncate">
      take available space
    </div>
    <div class="my-1 flex-grow flex-shrink-0 w-20 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-900">
      flex grow and shrink
    </div>
  </div>

  <h2 class="mx-4 mt-4">Flex col with wrapping</h2>
  <div class="flex flex-col flex-wrap h-32 mx-4 mt-2 mb-4 p-4 bg-white rounded-lg shadow text-xs">
    <div class="my-1 mr-2 w-32 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-500">
      different widths
    </div>
    <div class="my-1 mr-2 w-20 h-12 flex-shrink-0 border border-gray-300 flex items-center justify-center rounded bg-green-600">
      flex-shrink
    </div>
    <div class="my-1 mr-2 flex-1 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-800 truncate">
      take available space
    </div>
    <div class="my-1 flex-grow flex-shrink-0 w-20 h-12 border border-gray-300 flex items-center justify-center rounded bg-green-900">
      flex grow and shrink
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
const Flex = defineComponent({})
export default Flex
</script>

<description>
## Flexbox

Flexbox is a super versatile display mode, perfect for responsive designs. There are several aspects to flexbox that you'll need to know:

### Axes

There are two axes corresponding to a flex container. The main-axis is the direction children are added in, and the cross-axis is the direction the children wrap (or the other axis). A `row` container has the main-axis as horizontal, and the cross-axis of vertical. The opposite is true for a `column` container.

### Order

- `flex-direction` can be either `row, row-reverse, column,` or `column-reverse` and determines whether children are added horizontally or vertically as well as the flow of the children from first-to-last or last-to-first.
- `flex-wrap` can be either `nowrap, wrap,` or `wrap-reverse` and determines whether children are single or multiline. The line is added in the cross-axis, and wrap-reverse determines flow by line.
- `flex-flow` is a shorthand property for `<flex-direction>||<flex-wrap>`
- `order` is a number used to bypass default ordering

### Alignment

- `justify-content` can be either `start, end, flex-start, flex-end, center, space-between, space-around,` or `space-evenly` and determines how children are aligned on the main-axis after flex growth and auto margins are accounted for.
- `align-items` can be either `start, end, flex-start, flex-end, center, baseline,` or `stretch` and determines how children are aligned on the cross-axis after flex growth and auto margins are accounted for.
  - `start/end`: aligns to beginning/end of axis.
  - `flex-start/flex-end`: aligns to beginning/end of flex axis (respects flow).
  - `center`: aligns to center of axis.
  - `space-between`: gives even space between children, pushing first and last children to the edges.
  - `space-around`: gives even left and right margin around all children.
  - `space-evenly`: gives even space each side of all children.

### Sizing

- `flex-grow`: determines flex growth factor (defaults 0)
- `flex-shrink`: determines flex shrink factor (defaults 1)
- `flex-basis`: similar to width/height but allows `content`

</description>