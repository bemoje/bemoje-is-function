(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['is-function'] = factory());
}(this, (function () { 'use strict';

	/**
	 * Returns true if the argument is a function; false otherwise.
	 * @param {*} value - The value to evaluate
	 * @returns {boolean}
	 */
	function isFunction(value) {
		return typeof value === 'function'
	}

	return isFunction;

})));
