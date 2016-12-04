import Requester from '../utilities/KinveyRequester'

function create(post) {
    let requester=new Requester('Kinvey');
    return requester.ajaxPOST('appdata','posts',post);
}

export {create};






