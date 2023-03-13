import Box from '@/components/atomic/Box/Box'
import Button from '@/components/atomic/Button/Button'
import useExStore from '@/store/exStore'
import { random } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import ExBasicPage from '../component/ExBasicPage'
import ExZustandChild from './ExZustandChild'

const ExZustand: React.FC = () => {
	const { value, setValue } = useExStore()

	const label = useMemo(() => {
		return `prev(${value}) -> next setValue `
	}, [value])

	const onClickHandler = useCallback(() => {
		setValue(random(1000000, 9000000).toString())
	}, [])
	return (
		<ExBasicPage title='Router'>
			<Box>
				<ExZustandChild />
			</Box>
			<Box>
				<Button label={label} onClick={onClickHandler}></Button>
			</Box>
		</ExBasicPage>
	)
}

export default ExZustand
