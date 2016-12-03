import Requester from '../utilities/KinveyRequester'

function create(data) {
    let requester=new Requester('Kinvey');
    return requester.ajaxPOST('appdata','posts',data);
}

export {create};






