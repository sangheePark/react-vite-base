import { useParams } from 'react-router-dom'

const Component: React.FC = () => {
	// 라우터의 key값과 동일해야함.
	const { name } = useParams<{ name: string }>()
	return <>{name}</>

	// const params = useParams()
	// return <>params.name</>
}

export default Component
