import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import style from './index.module.css'

function Layout() {
	useEffect(() => {}, [])

	return (
		<section className={style.container}>
			<Outlet />
		</section>
	)
}

export default Layout
