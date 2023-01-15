import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './index.less'

interface IProps {}

const Layout = (props: any) => {
	useEffect(() => {}, [])

	return (
		<section className='container'>
			<Outlet></Outlet>
		</section>
	)
}

export default Layout
