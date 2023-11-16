import axios from 'axios';

const UsersApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getUsers = async () => {
    const response = await UsersApi.get('/users');
    return response.data;
}