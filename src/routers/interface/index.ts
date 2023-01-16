import { RouteObject } from 'react-router-dom'

export interface MetaProps {
	keepAlive?: boolean
	requiresAuth?: boolean
	title: string
	key?: string
}

export declare type IRouteObject = Omit<RouteObject, 'children'> & {
	children?: IRouteObject[]
	meta?: MetaProps
	isLink?: string
}
