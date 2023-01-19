import { localGet, localSet } from '@/utils/util'
import { ComponentType, lazy, Suspense } from 'react'

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
			<Suspense fallback={<div>spin load</div>}>
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

// const lazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
// 	return (
// 		<Suspense fallback={<div>spin load</div>}>
// 			<Component />
// 		</Suspense>
// 	)
// }

export default lazyLoad
