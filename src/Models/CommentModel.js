import Requester from '../utilities/KinveyRequester'

function createComment(comment) {
    let requester=new Requester('Kinvey');
    return requester.ajaxPOST('appdata','comments',comment);
}

function loadComments() {
    let requester=new Requester('Kinvey');
    return requester.ajaxGET('appdata','comments');
}


export {
    createComment,
    loadComments
};






