# app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## IDEAS

Ok so the idea is to embed a state store in the playground!

We can pass data to the `Vue.component`, so we just need some sort of key-value store.

gonna wanna have the following:

- [ ] `ref` or `reactive` for holding the `state`
- [ ] `function addKey(key, value, type)` 
  - this should more or less have `state[key] = value` with hella constraints (or maybe just pass shit through default obj constructors)
    - `Object`: should be a `JSON.parse()`
    - `Array`: should be a `JSON.parse()`
    - `Number`: should be a `Number`
    - `Boolean`: should be an if statement?
    - `String`: should just be `value`
- [ ] `function deleteKey(key)` 
  - this should just delete the key