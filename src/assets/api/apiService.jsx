import { json } from "react-router-dom";
import ApiHelper from "./apiHelper";

/* Usecases */

export const usecases = (data) => {
    return ApiHelper.get(`${process.env.REACT_APP_APIEND}/usecases`);
};

/* Get LAYERS */

export const getlayers = (data) => {
    return ApiHelper.get(`${process.env.REACT_APP_APIEND}/getlayerconfig?`);
};



