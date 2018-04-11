/**
 * Created by lea on 2018/1/12.
 */
(function(){
    $.fn.slideSw = function(options){
        var setting = {
            container:""
        };
        options = $.extend(setting,options||{});
        return new Swiper(options.container, {
            mode: 'horizontal',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 0,
            freeMode: true,//slide会根据惯性滑动
            freeModeMomentumRatio: 0.2,//移动惯量[释放slide时的滑动距离]
            freeModeSticky:true
        });
    };
    var homeObj = {
        swiper:null,
        init:function(){
            homeObj.swiperInit();
            homeObj.pinInit();
            $("#newList").slideSw({
                container:"#newList"
            });
            $("#sellList").slideSw({
                container:"#sellList"
            });
        },
        swiperInit:function(){
            homeObj.swiper = new Swiper('.banner .swiper-container', {
                autoplay:3000,
                mode: 'horizontal',
                loop: true,
                calculateHeight: true,//自动高度
                // 如果需要分页器
                pagination: '.swiper-pagination',
                paginationClickable:true
            });
            var $swiper = $(".banner .swiper-container");
            $swiper.on("mouseenter",function(){
                homeObj.swiper.stopAutoplay();
            });
            $swiper.on("mouseleave",function(){
                homeObj.swiper.startAutoplay();
            });
            $swiper.find('.arrow-left').click(function(){
                homeObj.swiper.swipePrev();
            });
            $swiper.find('.arrow-right').click(function(){
                homeObj.swiper.swipeNext();
            });
        },
        pinInit:function(){
        //品牌的
            var swiper = new Swiper('#brandList', {
                mode: 'horizontal',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 3,
                paginationClickable: true,
                spaceBetween: 0
            });
            var $swiper = $("#brandList");
            $swiper.find('.arrow-left').click(function(){
                swiper.swipePrev();
            });
            $swiper.find('.arrow-right').click(function(){
                swiper.swipeNext();
            });
        }
    };
    $(function(){
        homeObj.init();
    });
})();
