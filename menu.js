$(document).ready(function(){
    $('.nav a[href^"#"]').click(function(){ //choise links from menu
        var offset = $('nav').innerHeight();//menu height
        var target = $(this).attr('href'); //save href value
        $('html,body').animate({
            scrollTop: $(target).offset().top - offset //minus height of menu
        },500);//animation time
        $('.nav a[href^="3"').removeClass('active'); //delete class active from all punkts
        $(this).addClass('active');//add class active
        return false;
    });
});
