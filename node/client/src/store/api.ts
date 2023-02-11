import axios, { AxiosPromise } from 'axios';

class Api {
	get<T>(url: string): AxiosPromise<T> {
		return axios({
			method: 'GET',
			url: `/api${url}`,
			headers: {
				authorization: `${localStorage.getItem('token')}`
			}
		});
	}

	post<T>(url: string, data: unknown): AxiosPromise<T> {
		return axios({
			method: 'POST',
			url: `/api${url}`,
			headers: {
				authorization: `${localStorage.getItem('token')}`
			},
			data
		});
	}
}

export const api = new Api(); 
