import Axios from 'axios';

const baseApi = Axios.create({
	baseURL: `http://192.168.43.136:5000`
});

const token = localStorage.getItem('token');
if (token) {
	baseApi.defaults.headers.common['Authorization'] = `${token}`;
}
export default baseApi;
