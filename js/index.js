wow = new WOW(
    {
        animateClass: 'animated',
        offset: 10,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();
$(function(){
    setHeaderBg();
    $(window).on('scroll',function(){
        setHeaderBg();
    })
    function setHeaderBg(){
       var popo = $(window).scrollTop(); 
        if(popo==0){
                $('.header').css('background','none');
                $('.header').css('box-shadow','none')
        }
        if(popo >=10){
                $('.header').css('background','#fff');
                $('.header').css('box-shadow','5px 5px 70px 5px rgb(204, 204, 204)')
        }
    }
})
