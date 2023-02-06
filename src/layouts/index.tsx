import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import style from './index.module.css'

const Layout = () => {
	useEffect(() => {}, [])

	return (
		<section className={style.container}>
			<Outlet></Outlet>
		</section>
	)
}

export default Layout
