import $ from 'jquery'

export default class Requester {

    ajaxGET(url, authorizationHeader){
        return $.ajax({
            method: 'GET',
            url: url,
            headers: authorizationHeader
        })
    }

    ajaxPOST(url, authorizationHeader, data){
        return $.ajax({
            method: 'POST',
            url: url,
            headers: {Authorization : authorizationHeader},
            data: JSON.stringify(data),
            contentType: 'application/json'
        })
    }

    ajaxPUT(url, authorizationHeader, data){
        return $.ajax({
            method: 'PUT',
            url: url,
            headers: authorizationHeader,
            data: JSON.stringify(data),
            contentType: 'application/json'
        })
    }

    ajaxDELETE(url, authorizationHeader){
        return $.ajax({
            method: 'GET',
            url: url,
            headers: authorizationHeader
        })
    }
}

