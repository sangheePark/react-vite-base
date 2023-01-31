import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'
// import Backend from 'i18next-http-backend'

import en from './locales/en'
import ko from './locales/ko'

i18n
	// .use(Backend)  //백엔드에서 리소스 가져올시
	.use(detector) //사용자 언어 감지
	.use(initReactI18next) // passes i18n down to react-i18next
	.init(
		{
			// for all options read: https://www.i18next.com/overview/configuration-options
			resources: {
				ko,
				en
			},
			lng: 'ko', //언어 감지기를 상요하는 경우 옵션 정의 X
			fallbackLng: 'en',
			// detection: {
			// 	// languagedetector option
			// 	order: ['querystring', 'htmlTag', 'cookie'], // detect 우선순위
			// 	lookupQuerystring: 'lang', // ?lang=
			// 	lookupCookie: 'i18n_lang' // cookie name
			// },
			debug: true,
			saveMissing: true, //변환되지않는 키를 엔드포인트로 보냅니다.
			// keySeparator: false, //메세지 형식에서 키를 사용하지 않습니다.
			ns: ['title', 'menu'], //ns는 namespace로 label, button, menu 등 구분해서 관리할 경우 필요
			interpolation: {
				escapeValue: false
			}
		},
		function (err) {
			if (err) console.error(err)
		}
	)

export default i18n
