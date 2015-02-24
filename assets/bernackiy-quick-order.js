(function () {
    jQuery(document).ready(function ($) {

            if (!$.cookie('bernackiy-quick-order-expired-at', Number)) {
                if (!$.cookie('bernackiy-quick-order-next-at', Number)) {
                    var expires = new Date();
                    var next = new Date();
                    expires.setMinutes(expires.getMinutes() + 30);
                    next.setHours(next.getHours() + 24);
                    $.cookie('bernackiy-quick-order-expired-at', expires.getTime(), {expires: expires});
                    $.cookie('bernackiy-quick-order-next-at', next.getTime(), {expires: next});
                } else {
                    var expires = new Date();
                    expires.setSeconds(expires.getSeconds() - 1);
                }
            } else {
                var expires = $.cookie('bernackiy-quick-order-expired-at', Number);
            }

            $.each($('.bernackiy-quick-order-countdown'), function (index, value) {

                $(value).countdown(expires, function (event) {
                    $(this).html(event.strftime('%M:%S'));
                });

            });


            //var unacceptable_watching_time = 60 * 1000;
            //$.cookie('bernackiy-quick-order', Date.now());
            //window.onbeforeunload = function () {
            //    console.log(parseInt($.cookie('bernackiy-quick-order')));
            //    console.log(parseInt($.cookie('bernackiy-quick-order')) + parseInt(unacceptable_watching_time));
            //    console.log(parseInt(Date.now()));
            //    if ((parseInt($.cookie('bernackiy-quick-order')) + parseInt(unacceptable_watching_time)) > parseInt(Date.now()))
            //        return confirm("Do you really want to close?");
            //};
        }
    );
}());