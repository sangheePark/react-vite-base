export interface IExComponentProps<T> {
	value: T
}

/**
 * @description 제너릭 사용시
 */
export default function ExComponent<T>({ children }: React.PropsWithChildren<IExComponentProps<T>>) {
	return <>{children}</>
}
