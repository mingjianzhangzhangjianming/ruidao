/***********************头部手机端点击出菜单*************************/
$(".icon-3").click(function() {
    $(".navigate-3 li").toggleClass('block');
})
/***************************头部菜单*******************************/
$(".HOME_ul2-3>a").mouseover(function (){
    $(this).css({"color":"#f00","border-bottom":"2px solid #f00"})
    $(".HOME_ul2-3 a:nth-child(1)").css({"color":"","border-bottom":""});
}).mouseout(function (){
    $(this).css({"color":"","border-bottom":""})
});
/***************************头部菜单*******************************/
$(".navigate-3>a").mouseover(function (){
    $(this).css({"color":"#f00"})
}).mouseout(function (){
    $(this).css({"color":"","border-bottom":""})
});

$(".map-3 a").hover(function(){
    $(this).find("span").css("display","block");
  },function(){
    $(this).find("span").css("display","none");
  })