import axios from "axios";
import { store } from "../store";

const HOSTNAME = "https://hporxadminbackend.herokuapp.com" ;
const callApi = (endpoint, method, payload) => {
    let token = store.getState().recruitAuth.loginInfo.token;
    console.log("data", token)
    const authHeaders = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};
    const configaxios = {
        method,
        url: `${HOSTNAME}${endpoint}`,
        data: payload,
        headers: {
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Max-Age": "6000",
            "Access-Control-Allow-Headers": "*",

            ...authHeaders,
        },
    };
    return new Promise((resolve, reject) => {
        axios(configaxios)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const callApiRecuit = (endpoint, method, payload) => {
    let token = store.getState().recruitAuth.loginInfo.token;
    const authHeaders = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};
    const configaxios = {
        method,
        url: `${HOSTNAME}${endpoint}`,
        data: payload,
        headers: {
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Max-Age": "6000",
            "Access-Control-Allow-Headers": "*",

            ...authHeaders,
        },
    };
    return new Promise((resolve, reject) => {
        axios(configaxios)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const callPublicApi = (endpoint, method, payload) => {
    const HOSTNAME = "https://hporxadminbackend.herokuapp.com";
    const configaxios = {
        method,
        url: `${HOSTNAME}${endpoint}`,
        data: payload,
        headers: {
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Max-Age": "6000",
            "Access-Control-Allow-Headers": "*",
            // ...authHeaders,
        },
    };
    return new Promise((resolve, reject) => {
        axios(configaxios)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export { callPublicApi, callApi , callApiRecuit , HOSTNAME };
