<template>
<div>
  <h2 class="mx-4 mt-4">Text Elements</h2>
  <div class="mx-4 mt-2 mb-4 p-4 bg-white rounded-lg shadow">
    <div class="mb-2">
      <h1 class="font-medium text-3xl">section header 1</h1>
      <h2 class="font-medium text-2xl">section header 2</h2>
      <h3 class="font-medium text-xl">section header 3</h3>
      <h4 class="font-medium text-lg">section header 4</h4>
      <h5 class="font-medium text-base">section header 5</h5>
      <h6 class="font-medium text-sm">section header 6</h6>
    </div>
    <p>paragraph text</p>
    <p>
      <u>underline</u>
      <i> italic</i>
      <b> bold</b>
      <code> monospaced</code>
      <br>
      on a new line, even 
      <s> striken through</s>
      <sup>above</sup> or <sub>below</sub>
      <em>emphasized</em> or <strong>important</strong>
      maybe even <small>smaller</small>
    </p>
    <a href="#" class="text-indigo-600 underline">link text</a>
    <blockquote class="my-1 pl-4 border-l-4 border-gray-500">blockquote text</blockquote>
    <p>this has an <q>inline quote</q></p>
    <div>generic content container, <span>generic inline content container</span></div>
    <abbr title="abbreviation">abbr</abbr>
  </div>

  <h2 class="mx-4 mt-4">List Elements</h2>
  <div class="mx-4 mt-2 mb-4 p-4 bg-white rounded-lg shadow">
    <ul class="list-disc ml-4">
      <li>list item</li>
      <li>list item</li>
      <li>list item</li>
    </ul>
    <ol class="list-decimal ml-4">
      <li>list item</li>
      <li>list item</li>
      <li>list item</li>
    </ol>
  </div>

  <h2 class="mx-4 mt-4">Section Elements</h2>
  <div class="mx-4 mt-2 mb-4 p-4 bg-white rounded-lg shadow">
    <div class="border border-gray-300 rounded overflow-hidden">
      <aside class="px-2 pt-2 bg-gray-100">
        <nav>
          <ul class="flex">
            <li class="mr-4 text-indigo-700"><a href="#">Home</a></li>
            <li class="mr-4 text-indigo-700"><a href="#">About</a></li>
            <li class="mr-4 text-indigo-700"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <header class="mt-1">
          <h1 class="text-xl font-semibold text-blue-700">Page Title</h1>
          <p class="text-sm">this might be a page description with navigation underneath</p>
        </header>
      </aside>
      <main class="pt-2 px-2 bg-gray-100">
        <section>
          <h2 class="my-2 font-semibold text-gray-700">Section One</h2>
          <p>
            This would be the main content of the page. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ipsam magnam facere rem voluptates similique, deleniti omnis dignissimos repellendus enim quas inventore recusandae maxime, sed eligendi alias dolore ipsum est.
          </p>
        </section>
        <section>
          <h2 class="my-2 font-semibold text-gray-700">Section Two</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ipsam magnam facere rem voluptates similique, deleniti omnis dignissimos repellendus enim quas inventore recusandae maxime, sed eligendi alias dolore ipsum est.
          </p>
        </section>
      </main>
      <footer class="py-3 px-2 bg-gray-200">
        <p class="text-sm">footer with additional info</p>
      </footer>
    </div>
  </div>

  <h2 class="mx-4 mt-4">Media Elements</h2>
  <div class="mx-4 mt-2 mb-4 p-4 bg-white rounded-lg shadow">
    <img src="https://cole-hollant-objects.nyc3.cdn.digitaloceanspaces.com/css-info/logo.png" alt="sample image" loading="lazy">
    <audio controls class="my-2" preload="none">
      <source src="https://cole-hollant-objects.nyc3.cdn.digitaloceanspaces.com/css-info/Noise.mp3" type="audio/mp3">
    </audio>
    <video controls class="my-2" preload="none">
      <source src="https://cole-hollant-objects.nyc3.cdn.digitaloceanspaces.com/css-info/Video.mp4" type="video/mp4">
    </video>
    <iframe src="/css-info" frameborder="0" class="inline-flex w-full h-64 my-2 border border-gray-500" loading="lazy"></iframe>
  </div>

  <h2 class="mx-4 mt-4">Table Elements</h2>
  <div class="mx-4 mt-2 mb-4 p-4 bg-white rounded-lg shadow">
    <table>
      <caption>Title of Table</caption>
      <thead>
        <tr class="border-t border-gray-500">
          <th class="pl-2 pr-6 text-left">rows</th>
          <th class="pl-2 pr-6">Col One</th>
          <th class="pl-2 pr-6">Col Two</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t border-gray-500">
          <th class="px-2 border-r border-gray-500">Row One</th>
          <td class="px-2">content</td>
          <td class="px-2">content</td>
        </tr>
        <tr class="border-t border-gray-500">
          <th class="px-2 border-r border-gray-500">Row Two</th>
          <td class="px-2">content</td>
          <td class="px-2">content</td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="border-t border-gray-500">
          <th class="px-2 border-r border-gray-500">Results</th>
          <td class="px-2 italic">avg content</td>
          <td class="px-2 italic">avg content</td>
        </tr>
      </tfoot>
    </table>
  </div>

  <h2 class="mx-4 mt-4">Form Elements</h2>
  <div class="mx-4 mt-2 mb-4 p-4 bg-white rounded-lg shadow">
    <form>
      <label class="block mb-4">
        <div class="text-xs capitalize text-gray-700 font-semibold tracking-wide">Choose some nonsense:</div>
        <select class="border border-gray-400">
          <option value="">default option</option>
          <optgroup>
            <option value="asdf">asdf</option>
            <option value="qwer">qwer</option>
            <option value="zxcv">zxcv</option>
          </optgroup>
          <optgroup>
            <option value="1234">1234</option>
            <option value="7890">7890</option>
            <option value="3456">3456</option>
          </optgroup>
        </select>
      </label>
      <fieldset class="my-2 border border-gray-300 rounded-lg">
        <legend class="ml-4 px-2">Related Controls</legend>
        <div class="w-full flex justify-around pt-2 pb-4">
          <label for="first" class="flex flex-col items-center">
            <p class="text-xs capitalize text-gray-700 font-semibold tracking-wide">Label First</p>
            <input type="radio" id="first" name="radio-option">
          </label>
          <label for="second" class="flex flex-col items-center">
            <p class="text-xs capitalize text-gray-700 font-semibold tracking-wide">Label Second</p>
            <input type="radio" id="second" name="radio-option">
          </label>
          <label for="third" class="flex flex-col items-center">
            <p class="text-xs capitalize text-gray-700 font-semibold tracking-wide">Label Third</p>
            <input type="radio" id="third" name="radio-option">
          </label>
        </div>
      </fieldset>
      <fieldset class="my-2 border border-gray-300 rounded-lg">
        <legend class="ml-4 px-2">Inputs</legend>
        <div class="mx-2 mt-2 mb-4">
          <label>
            <p class="mt-2 text-xs capitalize text-gray-700 font-semibold tracking-wide">
              checkbox
            </p>
            <input type="checkbox" class="border border-gray-400 rounded px-1">
          </label>
          <label>
            <p class="mt-2 text-xs capitalize text-gray-700 font-semibold tracking-wide">
              color
            </p>
            <input type="color" class="border border-gray-400 rounded px-1">
          </label>
          <label>
            <p class="mt-2 text-xs capitalize text-gray-700 font-semibold tracking-wide">
              date
            </p>
            <input type="date" class="border border-gray-400 rounded px-1">
          </label>
          <label>
            <p class="mt-2 text-xs capitalize text-gray-700 font-semibold tracking-wide">
              email
            </p>
            <input type="email" class="border border-gray-400 rounded px-1">
          </label>
          <label>
            <p class="mt-2 text-xs capitalize text-gray-700 font-semibold tracking-wide">
              file
            </p>
            <input type="file">
          </label>
          <label>
            <p class="mt-2 text-xs capitalize text-gray-700 font-semibold tracking-wide">
              number
            </p>
            <input type="number" class="border border-gray-400 rounded px-1">
          </label>
          <label>
            <p class="mt-2 text-xs capitalize text-gray-700 font-semibold tracking-wide">
              password
            </p>
            <input type="password" class="border border-gray-400 rounded px-1">
          </label>
          <label>
            <p class="mt-2 text-xs capitalize text-gray-700 font-semibold tracking-wide">
              range
            </p>
            <input type="range" class="border border-gray-400 rounded px-1">
          </label>
          <label>
            <p class="mt-2 text-xs capitalize text-gray-700 font-semibold tracking-wide">
              text
            </p>
            <input type="text" class="border border-gray-400 rounded px-1">
          </label>
          <label>
            <p class="mt-2 text-xs capitalize text-gray-700 font-semibold tracking-wide">
              text area
            </p>
            <textarea class="border border-gray-400 rounded px-1"></textarea>
          </label>
        </div>
      </fieldset>
      <button class="block px-2 font-semibold bg-blue-600 text-white rounded hover:bg-blue-800">Button</button>
    </form>
  </div>
</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
const Tags = defineComponent({})
export default Tags
</script>

<description>
## HTML Tags

There are a whole bunch of HTML tags! These are a subset of them that I think are rather important. They're categorized by the following here: text elements, list elements, section elements, media elements, table elements, and form elements.

### Text Elements
- `<h1> - <h6>`: These are section headings of decreasing importance. Note there should only be one `h1` per page
- `<div>`: Generic block content container
- `<span>`: Generic inline content container
- `<a>`: Link / anchor tag
- `<blockquote>`: Blockquote container
- `<abbr>`: Abbreviation
- `<p>`: Paragraph text
  - `<u>`: Underlined
  - `<i>`: Italicized
  - `<b>`: Bolded
  - `<code>`: Monospaced
  - `<br>`: Line break (carriage return)
  - `<s>`: Strike through
  - `<sup>`: Superscript
  - `<sub>`: Subscript
  - `<em>`: Emphasized
  - `<strong>`: Urgent, very important
  - `<small>`: Renders in next smallest font size
  - `<q>`: Inline quote

### List Elements
- `<ul>`: unordered list (defaults to bullet style)
- `<ol>`: ordered list (defaults to decimal style)
- `<li>`: list item

### Section Elements
- `<aside>`: secondary section (often things like sidebars)
- `<nav>`: group of links
- `<header>`: page header
- `<footer>`: page footer
- `<main>`: main section of page
- `<section>`: subsection of page

### Media Elements
- `<img>`: image tag
- `<audio>`: audio tag
- `<video>`: video tag
- `<source>`: specifies a media source
- `<iframe>`: embeded content, typically webpages

### Table Elements
- `<table>`: table container
- `<caption>`: title of table
- `<thead>`: table header
- `<tbody>`: table body
- `<tfoot>`: table footer
- `<tr>`: table row
- `<th>`: table head (column/row names)
- `<td>`: table cell

### Form Elements
- `<form>`: form container that submits content
- `<label>`: caption for an element
- `<select>`: dropdown menu of options
- `<option>`: single item in a `<select>` or `<optgroup>`
- `<optgroup>`: group of `<option>`s
- `<fieldset>`: group of several inputs/labels
- `<legend>`: label for a fieldset
- `<input>`: provides a variety of controls based on the `type` attribute
- `<textarea>`: multiline plaintext input
- `<button>`: clickable element
</description>