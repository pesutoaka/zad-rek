

$(function(){
    $('nav a').click(function(){
        var left = $(this).offset().left + ($(this).width() / 2),
        center = $(document).width() / 2;
        var moveBy = center-left;
        $('nav > div:first').css({'margin-left':'+='+moveBy});
        $('nav .active').removeClass('active');
        $(this).addClass('active').parent().parent().addClass('active');
    });
    
    $('nav a.active').click();
    
    $('.menu-nav-left').click(function(){
        var $elems = $('.menu-leaf a');
        if($elems.length){
            var i = $elems.index($('.menu-item.active'));
            if(i-1>=0){
                i--;
                $elems[i].click();
                $('.menu-nav-right').removeClass('disabled');
            }
            if(i===0){
                $(this).addClass('disabled');
            }else{
                $(this).removeClass('disabled');
            }
        }
    });
    $('.menu-nav-right').click(function(){
        var $elems = $('.menu-leaf a');
        console.log($elems);
        if($elems.length){
            var i = $elems.index($('.menu-item.active'));
            console.log(i);
            if(i+1<$elems.length){
                i++;
                $elems[i].click();
                $('.menu-nav-left').removeClass('disabled');
            }
            if(i+1===$elems.length){
                $(this).addClass('disabled');
            }else{
                $(this).removeClass('disabled');
            }
        }
    });
});