export interface IExReactFCProps {}

const ExReactFC: React.FC<React.PropsWithChildren<IExReactFCProps>> = ({ children }) => {
	return <>{children}</>
}

export default ExReactFC
