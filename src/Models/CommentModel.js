import Requester from '../utilities/KinveyRequester'

function createComment(comment) {
    let requester=new Requester('Kinvey');
    return requester.ajaxPOST('appdata','comments',comment);
}


export {
    createComment
};






