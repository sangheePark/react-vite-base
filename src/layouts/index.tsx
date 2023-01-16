import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './index.less'

const Layout = () => {
	useEffect(() => {}, [])

	return (
		<section className='container'>
			<Outlet></Outlet>
		</section>
	)
}

export default Layout
