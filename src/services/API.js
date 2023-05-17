import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://6450230eba9f39c6ab749d5a.mockapi.io/',
	headers: { 'content-type': 'application/json' }
});

export let page = 1;
export const limit = 3;

export const getUsers = async () => {
	try {
		const response = await instance.get(`users`, {
			params: {
				page,
				limit
			}
		});
		return response.data;
	} catch (error) {
		return error;
	}
};

export const updateUser = async (id, updatedData) => {
	try {
		const response = await instance.put(`users/${id}`, updatedData);
		return response.data;
	} catch (error) {
		return error;
	}
};

export const loadMore = async () => {
	page = +1;
	try {
		const response = await instance.put(`users/?page=${page}&limit=3`);
		return response.data;
	} catch (error) {
		return error;
	}
};
