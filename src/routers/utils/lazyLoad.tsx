import { ComponentType, lazy, Suspense } from 'react'
import Loading from '@/components/organism/Loading'
import { localGet, localSet } from '@/utils/util'

/**
 * @description
 * @param {Element} Component
 * @returns element
 */
const lazyLoad = (
	componentImport: () => Promise<{
		default: ComponentType<any>
	}>
) => {
	const pageAlreadyRefreshed = JSON.parse(localGet('pageRefreshed') || 'false')
	try {
		const LazyComponent = lazy(componentImport)
		localSet('pageRefreshed', 'false')
		return (
			<Suspense fallback={<Loading />}>
				<LazyComponent />
			</Suspense>
		)
	} catch (error) {
		if (!pageAlreadyRefreshed) {
			localSet('pageRefreshed', 'true')
			window.location.reload()
		}
		console.log(`lazy load 에러 !!!!`)
		throw error
	}
}

export default lazyLoad
