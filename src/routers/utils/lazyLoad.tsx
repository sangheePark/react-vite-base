import React, { Suspense } from 'react'

/**
 * @description
 * @param {Element} Component
 * @returns element
 */
const lazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense fallback={<div>spin load</div>}>
			<Component />
		</Suspense>
	)
}

export default lazyLoad
