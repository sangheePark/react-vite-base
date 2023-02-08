export const size = {
	largest: '75em', // 1200px
	large: '56.25em', // 900px
	medium: '37.5em', // 600px
	small: '31.25em', // 500px
	smallest: '25em' // 400px
}

/**
 * @description emotion.d.ts  에 정의 해야함.
 */
const StyleTheme = {
	mainColor: '#0000ff',
	mq: {
		laptop: `@media only screen and (min-width: ${size.largest})`,
		tablet: `@media only screen and (min-width: ${size.large})`,
		mobile: `@media only screen and (min-width: ${size.small})`
	}
}

export default StyleTheme