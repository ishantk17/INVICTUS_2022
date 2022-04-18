$(function(){

    $('.countdown').countdown('2022/04/25', function(event) {
        $(this).html(event.strftime('%w %d %H %M %S'));

    });

});
