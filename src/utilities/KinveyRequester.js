import $ from 'jquery'
import errorHandler from '../utilities/errorHandler'

const appKey = 'kid_ryzXtnZfl';
const appSecret = '8e5cbe23218047719f9a928422e0dc73';
const baseUrl = 'https://baas.kinvey.com/';
const basicAuthBase64 = btoa(appKey+":"+appSecret);
const kinveyAuthBase64 = btoa(appKey+":"+sessionStorage.getItem('authToken'));


export default class Requester {
    constructor(authType) {
        switch (authType) {
            case 'Basic':
                this.authorization = {Authorization: 'Basic ' + basicAuthBase64};
                break;
            case 'Kinvey':
                this.authorization = {Authorization: 'Kinvey ' + kinveyAuthBase64};
                break;
            default: console.log('wrong authorization in request'); break;
        }
    }

    ajaxGET(module, uri){
        return $.ajax({
            method: 'GET',
            url: `${baseUrl + module}/${appKey}/${uri}`,
            headers: this.authorization,
            error: errorHandler.handleAjaxError
        })
    }

    ajaxPOST(module, uri, data){
        return $.ajax({
            method: 'POST',
            url: `${baseUrl + module}/${appKey}/${uri}`,
            headers: this.authorization,
            data: JSON.stringify(data),
            contentType: 'application/json',
            error: errorHandler.handleAjaxError
        })
    }

    ajaxPUT(module, uri, id, data){
        return $.ajax({
            method: 'PUT',
            url: `${baseUrl + module}/${appKey}/${uri}/${id}`,
            headers: this.authorization,
            data: JSON.stringify(data),
            contentType: 'application/json',
            error: errorHandler.handleAjaxError
        })
    }

    ajaxDELETE(module, uri, id){
        return $.ajax({
            method: 'GET',
            url: `${baseUrl + module}/${appKey}/${uri}/${id}`,
            headers: this.authorization,
            error: errorHandler.handleAjaxError
        })
    }
}

