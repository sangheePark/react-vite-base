import { EExampleType } from '@/enums/example/exampleEnum'

/**
 * @description 예제 모델
 */
export namespace ExampleModel {
	/**
	 * @description base entity
	 */
	export interface Entity {
		id: string
		type: EExampleType
	}
	/**
	 * @description 요청
	 */
	export interface Request {
		//속성
	}
	/**
	 * @description 응답
	 */
	export interface Response extends Entity {
		//상속, Pick 또는 Omit
	}
	/**
	 * @description 조회 조건
	 */
	export interface Filter extends Pick<Entity, 'id'> {
		//상속, Pick 또는 Omit
	}
}
