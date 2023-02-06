// import random from ""

import { random } from 'lodash-es'
import { useEffect, useRef } from 'react'

/**
 * @description:  timeout clear
 * @returns
 * @external https://velog.io/@ice-prince/React-Clean-UP-%ED%95%A8%EC%88%98
 */
export const useTimeout = () => {
	const timeRef = useRef<NodeJS.Timeout>()
	useEffect(() => {
		return () => {
			timeRef.current && clearTimeout(timeRef.current)
		}
	}, [])

	const wait = (time?: number) => {
		return new Promise<void>(resolve => {
			const timeout = time || random(1, 3) * 500
			timeRef.current && clearTimeout(timeRef.current)
			const id = setTimeout(() => {
				resolve()
			}, timeout)

			timeRef.current = id
		})
	}

	return wait
}
