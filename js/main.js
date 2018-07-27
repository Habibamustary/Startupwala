$(document).ready(function () {
    //fixed menu
    $(function () {
        window.onscroll = function () {
            var menu = $('#mainNav');
            var form_top = $('#form-top');
            if (window.pageYOffset <=70) {
                 menu.css('display', 'block');
                 form_top.css('display', 'none');
            } else {
                menu.css('display', 'none');
                form_top.css('display', 'block');
            }
        }
    });
});