import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://6450230eba9f39c6ab749d5a.mockapi.io/',
	headers: { 'content-type': 'application/json' }
});

export const getUsers = async () => {
	try {
		const response = await instance.get(`users`);
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
