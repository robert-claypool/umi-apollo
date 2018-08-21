This project demos a breaking change from `umi 1.3.18` to `umi 2.0.0-beta.16`, see https://github.com/umijs/umi/issues/881

Module resolution for `graphql` **works** in version 1.3.18 and **fails** in 2.0.0-beta.16:
```JavaScript
index.js:2178 ReferenceError: module is not defined
    at Module../node_modules/graphql/language/printer.mjs (printer.mjs:1)
    at __webpack_require__ (bootstrap:724)
    at fn (bootstrap:101)
    at Module../node_modules/apollo-client/index.js (index.js:1)
    at __webpack_require__ (bootstrap:724)
    at fn (bootstrap:101)
    at Object../node_modules/apollo-boost/lib/index.js (index.js:30)
    at __webpack_require__ (bootstrap:724)
    at fn (bootstrap:101)
    at Object../pages/index.js (index.js:2)
    at __webpack_require__ (bootstrap:724)
    at fn (bootstrap:101)
    at Object../pages/.umi/router.js (router.js:13)
    at __webpack_require__ (bootstrap:724)
    at fn (bootstrap:101)
    at render (umi.js:14)
    at umi.js:23
```
