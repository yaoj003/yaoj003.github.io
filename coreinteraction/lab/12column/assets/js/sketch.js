window.onload = function() {

$('#shake').hover(function(){
    if(!$(this).hasClass('animated')){
        $(this).addClass('animated');
        $(this).stop().effect('shake', {distance:5}, 500);
    }
}, function(){
    $(this).removeClass('animated');
});

}
