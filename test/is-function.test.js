import isFunction from '../src/is-function'

describe('isFunction', () => {
	test('works', () => {
		expect(isFunction(function () {})).toBe(true)
		expect(isFunction(class {})).toBe(true)
		expect(isFunction(() => {})).toBe(true)
		expect(isFunction()).toBe(false)
		expect(isFunction('a')).toBe(false)
		expect(isFunction(1)).toBe(false)
	})
})
