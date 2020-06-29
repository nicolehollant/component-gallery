# Component Gallery

I just wanna copy/paste my components tbh cause I like [Tailwind UI](https://tailwindui.com/preview). Also stealing [Braid's playground](https://seek-oss.github.io/braid-design-system/playroom) idea.

Live [over here](https://misc.colehollant.com/component-gallery/#/playground/PGRpdiBjbGFzcz0iaC1mdWxsIHAtNCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCIgOmNsYXNzPSJ7J2JnLWJsdWUtMjAwIHNtOmJnLXBpbmstMjAwJzogdG9nZ2xlLCAnYmctZ3JlZW4tMjAwIHNtOmJnLXB1cnBsZS0yMDAnOiAhdG9nZ2xlfSI-CjxkaXYgY2xhc3M9ImdyaWQgZ2FwLTQgdy1mdWxsIHNtOm1heC13LW1kIHNtOm14LWF1dG8iPgo8VG9nZ2xlIGNsYXNzPSJtbC1hdXRvIGdyaWQgZ3JpZC1mbG93LWNvbCBnYXAtMiIgbmFtZT0idGhlbWUiIHYtbW9kZWw9InRvZ2dsZSI-CiAgPHRlbXBsYXRlIHYtc2xvdDpsYWJlbD4KICAgIDxwIGNsYXNzPSJ0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSB0cmFja2luZy13aWRlIj4KICAgICAgVGhlbWU6CiAgICA8L3A-CiAgPC90ZW1wbGF0ZT4KPC9Ub2dnbGU-CjxoMyBjbGFzcz0ibXktNCB0ZXh0LTJ4bCB0ZXh0LXB1cnBsZS04MDAgZm9udC1ib2xkIGZvbnQtbW9ubyI-CiAgT2ggSGkgVGltIPCfmIoKPC9oMz4KPFNlbGVjdCBpZD0ic2VsZWN0IiBwbGFjZWhvbGRlcj0iIiB2LW1vZGVsPSJzZWxlY3QiIDpvcHRpb25zPSJbeyBsYWJlbDogJ1BpbmsnLCB2YWx1ZTogJ2EnIH0sIHsgbGFiZWw6ICdQdXJwbGUnLCB2YWx1ZTogJ2InIH1dIj4KICA8dGVtcGxhdGUgdi1zbG90OmxhYmVsPgogICAgPHAgY2xhc3M9InRleHQtZ3JheS03MDAgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIHRyYWNraW5nLXdpZGUiPgogICAgICBMYWJlbDoKICAgIDwvcD4KICA8L3RlbXBsYXRlPgo8L1NlbGVjdD4KPFRleHRJbnB1dCB2LW1vZGVsPSJ0aXRsZSIgdHlwZT0idGV4dCI-CiAgPHRlbXBsYXRlIHYtc2xvdDpsYWJlbD4KICAgIDxwIGNsYXNzPSJ0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSB0cmFja2luZy13aWRlIj4KICAgICAgTGFiZWw6CiAgICA8L3A-CiAgPC90ZW1wbGF0ZT4KPC9UZXh0SW5wdXQ-CjxSYWRpb2dyb3VwIDpvcHRpb25zPSJbeyBsYWJlbDogJ29wdGlvbiBBJywgdmFsdWU6ICdBJyB9LCB7IGxhYmVsOiAnb3B0aW9uIEInLCB2YWx1ZTogJ0InIH1dIiB2LW1vZGVsPSJyYWRpbyIgY2xhc3M9ImdyaWQgZ2FwLTEgdGV4dC1ncmF5LTgwMCI-CiAgPHRlbXBsYXRlIHYtc2xvdDpsYWJlbD4KICAgIDxwIGNsYXNzPSJ0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSB0cmFja2luZy13aWRlIj4KICAgICAgT3B0aW9uczoKICAgIDwvcD4KICA8L3RlbXBsYXRlPgo8L1JhZGlvZ3JvdXA-CjxTbGlkZXIgdi1tb2RlbD0ic2xpZGVyIiB2YWx1ZT0iMCIgbWluPSIwIiBtYXg9IjEwMCIgc3RlcD0iMSI-CiAgPHRlbXBsYXRlIHYtc2xvdDpsYWJlbD4KICAgIDxwIGNsYXNzPSJ0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSB0cmFja2luZy13aWRlIj4KICAgICAgU2xpZGVyOgogICAgPC9wPgogIDwvdGVtcGxhdGU-CjwvU2xpZGVyPgo8L2Rpdj4KPC9kaXY-)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

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