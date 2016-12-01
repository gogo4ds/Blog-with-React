let Session = {
    save: function (data) {
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('authToken', data._kmd.authtoken);
    },
    clear: function(){
        sessionStorage.clear();
    }
};

export default Session;
