import { throttle } from 'lodash-es'
import { useEffect, useMemo } from 'react'

/**
 * @description throttle
 * @param time = 유지 시간, trailing = true이면 마지막 이벤트 발생 후 wait만큼 지난 후 함수 실행
 * @external https://velog.io/@say_ye/JS-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4-%EC%93%B0%EB%A1%9C%ED%8B%80-Debounce-Throttle-with-lodash
 */
export const useThrottle = (time = 500, trailing = false) => {
	const fn = useMemo(() => {
		return throttle(
			(callBack: () => void, isLoading: boolean = false) => {
				if (isLoading) {
					return
				}

				callBack()
			},
			time,
			{
				trailing
			}
		)
	}, [time])

	useEffect(() => {
		return () => fn.cancel()
	}, [fn])

	return fn
}
