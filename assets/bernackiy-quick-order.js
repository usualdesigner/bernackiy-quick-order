(function () {
    jQuery(document).ready(function ($) {
        var unacceptable_watching_time = 10 * 1000;
        $.cookie('bernackiy-quick-order', Date.now());
        window.onbeforeunload = function () {
            console.log(parseInt($.cookie('bernackiy-quick-order')));
            console.log(parseInt($.cookie('bernackiy-quick-order')) + parseInt(unacceptable_watching_time));
            console.log(parseInt(Date.now()));
            if ((parseInt($.cookie('bernackiy-quick-order')) + parseInt(unacceptable_watching_time)) > parseInt(Date.now()))
                return confirm("Do you really want to close?");
        };
    });
}());