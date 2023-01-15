const toString = Object.prototype.toString

/**
 * @description: 값이 특정 유형인지 확인
 */
export function is(val: unknown, type: string) {
	return toString.call(val) === `[object ${type}]`
}

/**
 * @description: 함수 유형인지 확인
 */
export function isFunction<T = Function>(val: unknown): val is T {
	return is(val, 'Function')
}

/**
 * @description: 정의 되었는지 확인
 */
export const isDef = <T = unknown>(val?: T): val is T => {
	return typeof val !== 'undefined'
}

/**
 * @description: 정의 되지않음 확인
 */
export const isUnDef = <T = unknown>(val?: T): val is T => {
	return !isDef(val)
}
/**
 * @description: Object 유형인지 확인
 */
export const isObject = (val: any): val is Record<any, any> => {
	return val !== null && is(val, 'Object')
}

/**
 * @description:  Date 유형인지 확인
 */
export function isDate(val: unknown): val is Date {
	return is(val, 'Date')
}

/**
 * @description:  Number 유형인지 확인
 */
export function isNumber(val: unknown): val is number {
	return is(val, 'Number')
}

/**
 * @description: AsyncFunction 인지 확인
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
	return is(val, 'AsyncFunction')
}

/**
 * @description:  promise 유형인지 확인
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
	return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * @description: String 유형인지 확인
 */
export function isString(val: unknown): val is string {
	return is(val, 'String')
}

/**
 * @description: boolean 유형인지 확인
 */
export function isBoolean(val: unknown): val is boolean {
	return is(val, 'Boolean')
}

/**
 * @description:  Array 유형인지 확인
 */
export function isArray(val: any): val is Array<any> {
	return val && Array.isArray(val)
}

export const isElement = (val: unknown): val is Element => {
	return isObject(val) && !!val.tagName
}

export function isNull(val: unknown): val is null {
	return val === null
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
	return isUnDef(val) && isNull(val)
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
	return isUnDef(val) || isNull(val)
}
