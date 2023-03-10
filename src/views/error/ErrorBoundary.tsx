import React from 'react'

interface Props {
	resetQuery?: () => void
	fallback: (...args: any[]) => React.ReactElement
	children: React.ReactElement
}

interface State {
	isRethrow: boolean
	error?: Error
}

const initialState = { hasError: false, error: undefined }

export default class ErrorBoundary extends React.Component<Props, State> {
	public state: State = {
		isRethrow: false
	}

	static getDerivedStateFromError(error: Error): State {
		return { isRethrow: true, error }
	}

	resetBoundary = () => {
		this.props.resetQuery?.()
		this.setState(state => {
			return { ...state, ...initialState }
		})
	}

	// 부모 컴포넌트에서의 props 변경 감지를 통한 리렌더링
	componentDidUpdate() {
		// 	if (prev.keys !== this.props.keys) {
		// 		console.log(`componentDidUpdate`)
		// 		this.resetBoundary()
		// 	}
		console.log(`ErrorBoundary:componentDidUpdate`)
		return false
	}
	// componentDidMount() {
	// 	console.log(`componentDidMount`)
	// 	this.resetBoundary()
	// }

	componentWillUnmount(): void {
		// this.resetBoundary()
	}

	render() {
		if (this.state.error) {
			const { fallback: ErrorFallback } = this.props
			const { error } = this.state
			return <ErrorFallback error={error} resetBoundary={this.resetBoundary} />
		}

		return this.props.children
	}
}
