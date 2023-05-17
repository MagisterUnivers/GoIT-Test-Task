import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://6450230eba9f39c6ab749d5a.mockapi.io/',
	headers: { 'content-type': 'application/json' }
});

let page = 1;
const limit = 3;

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

export const updateUser = async (id) => {
	try {
		const response = await instance.put(`users/${id}`);
		return response.data;
	} catch (error) {
		return error;
	}
};
