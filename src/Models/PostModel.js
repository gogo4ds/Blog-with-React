import Requester from '../utilities/KinveyRequester'

function create(post) {
    let requester=new Requester('Kinvey');
    return requester.ajaxPOST('appdata','posts',post);
}

function loadSinglePost(postId) {
    let requester=new Requester('Kinvey');
    return requester.ajaxGET('appdata','posts',postId);
}

function editPost(postId,data) {
    let requester=new Requester('Kinvey');
    return requester.ajaxPUT('appdata','posts',postId,data);
}

export {
        create,
        loadSinglePost,
        editPost
};






