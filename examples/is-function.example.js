import isFunction from '../src/is-function'

isFunction(function () {})
//=> true

isFunction(class {})
//=> true

isFunction(() => {})
//=> true

isFunction()
//=> false

isFunction('a')
//=> false

isFunction(1)
//=> false
