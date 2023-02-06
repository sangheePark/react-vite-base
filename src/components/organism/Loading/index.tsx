import React from 'react'
import style from './index.module.css'

interface IProps {}

const Loading: React.FC<IProps> = () => {
	return (
		<div className={style.loader}>
			<div className='socket'>
				<div className='gel center-gel'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
				<div className='gel c1 r1'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
				<div className='gel c2 r1'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
				<div className='gel c3 r1'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
				<div className='gel c4 r1'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
				<div className='gel c5 r1'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
				<div className='gel c6 r1'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>

				<div className='gel c7 r2'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>

				<div className='gel c8 r2'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
				<div className='gel c9 r2'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
				<div className='gel c10 r2'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
				<div className='gel c11 r2'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
				<div className='gel c12 r2'>
					<div className='hex-brick h1' />
					<div className='hex-brick h2' />
					<div className='hex-brick h3' />
				</div>
			</div>
		</div>
	)
}

export default Loading
