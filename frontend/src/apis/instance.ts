import { IAppStore, store } from '@stores/store';
import axios, { AxiosError, AxiosResponse } from 'axios';

const createInstance = (basUrl: string, store: IAppStore, requireAuth?: boolean) => {
    const instance = axios.create({
        baseURL: basUrl,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    instance.interceptors.request.use(
        (config) => {
            const token = store.getState().auth.token;
            if (requireAuth) {
                if (token) {
                    // @ts-ignore
                    config.headers.Authorization = `Bearer ${token}`;
                } else {
                    throw new Error('Token is required');
                }
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },

        async (err: AxiosError) => {
            if (err.response?.status === 401) {
                return Promise.reject(err);
            }

            return Promise.reject(err);
        }
    );

    return instance;
};

export const API_INSTANCE = createInstance('http://localhost:8080/api', store, true);
// export const API_INSTANCE = createInstance('https://71c4pnfp-8080.asse.devtunnels.ms/api', store, true);
