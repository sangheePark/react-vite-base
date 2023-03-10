import { ErrorFallback } from '@/components/atomic/ErrorFallback/ErrorFallback'
import AsyncBoundary from '@/views/error/AsyncBoundary'
import UserCardBox from '../component/ExCardBox'

export interface IExReactQueryListProps {}

const ExReactQueryList: React.FC<IExReactQueryListProps> = () => {
	return (
		<>
			<AsyncBoundary fallback={ErrorFallback}>
				<UserCardBox />
			</AsyncBoundary>
		</>
	)
}

export default ExReactQueryList
