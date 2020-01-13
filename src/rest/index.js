import {BASE_URL, GIFFY_API_KEY} from '../constants';
import _ from 'lodash';
function count(obj) {
    return Object.keys(obj).length;
}

/**
 * This is to handle get requests
 * @param type
 * @param api_name
 * @param parameters
 * @returns {Promise<any>}
 * @constructor
 */
const API_GET = (type, api_name, parameters) => {
    var str = '';
    for (let i = 0; i < count(parameters); i++) {
        var theKey = Object.keys(parameters)[i];
        str = `${str}&${theKey}=${parameters[theKey]}`;
    }
    str = `${str}&sort=${"stars"}`;
    str = `${str}&order=${"desc"}`;
    str = `${str}&per_page=${10}`;
    str = str.toString().substr(1);
    console.log(str);
    console.log(BASE_URL + api_name + '?' + str);

    return fetch(BASE_URL + api_name + '?' + str, {method: 'GET'})
        .then(response => {
            return response.json();
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            console.log(error);
        });
};


export const getReposByUserName = (name) => {
    let q = _.isEmpty(name)?'a':name;
    const queryObj = {};
    queryObj['q'] = q;

    return API_GET(URL, '', queryObj)
        .then((res) => res).catch((err)=>err)
};


export default API_GET;
