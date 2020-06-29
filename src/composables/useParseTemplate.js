export function useParseTemplate () {

  function parseComponent(template) {
    if(template.includes('</style>')) {
      return ["<template>", parse(template, "<template>", "</style>").trim(), "</style>"].join('\n')
    } else if(template.includes('</script>')) {
      return ["<template>", parse(template, "<template>", "</script>").trim(), "</script>"].join('\n')
    } else {
      return ["<template>", parse(template, "<template>", "</template>").trim(), "</template>"].join('\n')
    }
  }

  function parseUsage(template, startTag='<usage>', endTag='</usage>') {
    const first = template.indexOf(startTag) + startTag.length
    const last = template.lastIndexOf(endTag)
    return template.substring(first, last).trimLeft()
  }

  function parse(template, startTag='<template>', endTag='</template>') {
    const first = template.indexOf(startTag) + startTag.length
    const last = template.lastIndexOf(endTag)
    return template.substring(first, last).trimLeft()
  }

  function parseDesc(template, startTag='<description>', endTag='</description>') {
    const first = template.indexOf(startTag) + startTag.length
    const last = template.lastIndexOf(endTag)
    return template.substring(first, last).trimLeft()
  }

  return {
    parse,
    parseDesc,
    parseComponent,
    parseUsage,
  }
}