import useExStore from '@/store/exStore'

export interface IExZustandChildProps {}

const ExZustandChild: React.FC<IExZustandChildProps> = () => {
	const { value } = useExStore()
	return <>관리되는 상태값 입니다.{value}</>
}

export default ExZustandChild
