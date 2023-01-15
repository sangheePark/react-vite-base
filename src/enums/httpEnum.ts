
/**
 * @description：
 */
export enum ResultEnum {
	SUCCESS = 200,
	ERROR = 500,
	OVERDUE = 599,
	TIMEOUT = 10000,
	TYPE = "success"
}

/**
 * @description：
 */
export enum RequestEnum {
	GET = "GET",
	POST = "POST",
	PATCH = "PATCH",
	PUT = "PUT",
	DELETE = "DELETE"
}

/**
 * @description：
 */
export enum ContentTypeEnum {
	JSON = "application/json;charset=UTF-8",
	TEXT = "text/plain;charset=UTF-8",
	FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
	FORM_DATA = "multipart/form-data;charset=UTF-8"
}
