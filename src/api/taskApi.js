import axiosClient from './axiosClient';

const taskApi = {
    get: (params) => {
        const url = `/tasks`;
        return axiosClient.get(url, params);
    },
    post: (data) => {
        const url = `/tasks`;
        return axiosClient.post(url, data);
    },
    add: (data) => {
        const url = '/tasks';
        return axiosClient.post(url, data);
    },
    update: (data) => {
        const url = `/tasks/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove: (id) => {
        const url = `/tasks/${id}`;
        return axiosClient.delete(url);
    },
};
export default taskApi;
