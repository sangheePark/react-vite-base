import React from 'react'
import Fallback from './Fallback'
// import NetworkError from './NetworkError'

interface State {
	shouldHandleError: boolean
	shouldRethrow: boolean
	error?: Error
}

class GlobalErrorBoundary extends React.Component<React.PropsWithChildren> {
	public state: State = {
		shouldHandleError: false,
		shouldRethrow: false
	}

	static getDerivedStateFromError(error: Error): State {
		console.log(`error.name:`, error.name)
		console.log(`error.message:`, error.message)

		if (!error.name) {
			return {
				shouldHandleError: false,
				shouldRethrow: true,
				error
			}
		}
		return {
			shouldHandleError: true,
			shouldRethrow: false,
			error
		}
	}
	componentDidCatch() {
		// 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
		console.log(`error:componentDidCatch `)
	}

	render() {
		// console.log(`error.message:`)
		// 글로벌 처리시
		if (this.state.shouldRethrow) {
			throw this.state.error
		}

		// 정상 케이스 일 경우
		if (!this.state.shouldHandleError) {
			return this.props.children
		}

		if (this.state.error) {
			return (
				<Fallback
					error={this.state.error}
					onBack={() => {
						this.setState(state => {
							return { ...state, shouldHandleError: false }
						})
					}}
				/>
			)
		}

		//   if(미로그인 에러 코드) {
		// 	  return (
		// 		  <AuthError />
		// 	  )
		//   }
		//   if(네트워크 에러 코드) {
		// 	  // ApiErrorBoundary와 중복되는 에러 처리 코드입니다.
		// 	  // Fetcher위에 ApiErrorBoundary가 누락 혹은 제외된 경우
		// return <NetworkError onRetry={() => this.setState({ shouldHandleError: false })} />
		//   }
		//   return (
		// 	  <UnknownError onClickRetry={() => this.setState({ shouldHandleError: false})} />
		//   )
	}
}
export default GlobalErrorBoundary
