import Box from '@/components/atomic/Box/Box'
import Button from '@/components/atomic/Button/Button'
import { useNavigate } from 'react-router-dom'

export interface IExRouterUseNavigateProps {}

const ExRouterUseNavigate: React.FC<IExRouterUseNavigateProps> = () => {
	const navigate = useNavigate()
	return (
		<Box>
			<Button
				label='push'
				onClick={() => {
					// 절대경로
					navigate('/example')
				}}
			/>
			{/*  */}
			<Button
				label='replace'
				onClick={() => {
					navigate('/example', { replace: true })
				}}
			/>
			{/* 라우팅시 상태값 사용시. */}
			<Button
				label='push use state'
				onClick={() => {
					// 상대경로
					navigate('../result', { state: { value: '값입니다.' } })
				}}
			/>
			{/* 라우터에 URL 내에 사용되는 key 값 */}
			<Button
				label='parameter'
				onClick={() => {
					// 상대경로
					navigate(`../parameter/${'길동이'}`)
				}}
			/>
		</Box>
	)
}

export default ExRouterUseNavigate
