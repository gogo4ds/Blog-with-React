//import $ from 'jquery';

let errorHandler = {
    showError: function (errorMsg) {
        // $('#errorBox').fadeIn().text(errorMsg);
        // $('#errorBox').on('click', function () {
        //     $('#errorBox').hide();
        // })
        console.log(errorMsg);
        //TODO: display some error box
    },

    handleAjaxError: function (reason) {
        let errorMsg = JSON.stringify(reason);
        if (reason.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (reason.responseJSON &&
            reason.responseJSON.description)
            errorMsg = reason.responseJSON.description;
        errorHandler.showError(errorMsg);
    }
};

export default errorHandler;
