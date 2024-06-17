import axios, { AxiosResponse } from "axios";
import React from "react";

type returnApi = {
    data: any;
    error: any;
    status: number;
}

function useApi({ url = '', method = 'GET' }) {
    const apiCall = async (params = {}, body = {}): Promise<returnApi> => {
        try {
            const response: AxiosResponse = await axios({
                method,
                url,
                params: method === 'GET' ? params : {},
                data: method !== 'GET' ? body : null,
            });
            return {
                data: response.data,
                error: null,
                status: response.status,
            };
        } catch (error: any) {
            return {
                data: null,
                error: error.response ? error.response.data : error.message,
                status: error.response ? error.response.status : 500,
            };
        }
    };

    return apiCall;
}

export default useApi;
