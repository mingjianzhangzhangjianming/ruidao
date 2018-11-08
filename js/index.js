
/***************************头部轮播********************************/
if($(".carousel-3").length==1){
  var tblb = new Swiper ('.carousel-3', {
    slidesPerView:"auto",
    loop: true,
    simulateTouch : false,//禁止鼠标模拟
    autoplay:{
      delay: 2000,
    },
    pagination:{
      el: '.swiper-pagination',
      clickable :true,
    }
  })
}



/*********************** 首页内容区轮播*************************/
var nrlb = new Swiper('.details-carousel-3',{
    direction : 'horizontal',
    slidesPerView : "auto",
    pagination:{
      el: '.swiper-pagination',
      clickable :true,
    }
})
 //轮播头部小方块
      var galleryLeft = new Swiper('.dot-3', {
        direction: "horizontal",
        slidesPerView:"auto",
        slideToClickedSlide:true,
        normalizeSlideIndex:false,
      });
      //轮播内容
      var galleryRight = new Swiper('.client-3', {
        direction: "horizontal",
        slidesPerView:"1",
        autoHeight:true,
        on:{
          slideChange:function(){
            $(".dot-3").find(".swiper-slide").eq(this.activeIndex).addClass('onn').siblings().removeClass("onn");
            galleryLeft.slideTo(this.activeIndex);
          },
        },
      });
      galleryLeft.on('click',function(){
        var i=this.activeIndex;
        $(".dot-3").find(".swiper-slide").eq(this.activeIndex).addClass('onn').siblings().removeClass("onn");
        galleryRight.slideTo(i);
      })

$('.aa-3>span').hover(function(){
      $(this).css({'background':'#f00','color':'#fff'});

  },function(){
      $(this).css({'background':'','color':'#000'});
  });

/*首页服务优势底下的鼠标样式*/
  $('.bottom_div1-3').hover(function(){
      $(this).css({'margin-top':'44px'});
      $(this).css({"box-shadow":" 0 0 30px #eaeaea",'color':'#F00'});
  },function(){
      $(this).css({'margin-top':'50px'});
      $(this).css({'box-shadow':'0px 0px 0px','color':'#000'});
  });


var bottom = new Swiper('.bottom_1-3',{
    direction : 'horizontal',
    slidesPerView : 'auto',
    pagination:{
      el: '.swiper-pagination',
      clickable :true,
    }
})

//15个方块的动画
  $(".clearfix-3 div").hover(function(){
    $(this).css("top","-100px")
  },function(){
    $(".clearfix-3 div").css("top","0px")
  })
/***********************头部轮播鼠标覆盖停止自动切换*************************/
if($(".carousel-3").length==1){
  tblb.el.onmouseover = function(){
    tblb.autoplay.stop();
  }
  tblb.el.onmouseout = function(){
    tblb.autoplay.start();
  }
}

// $(" .swiper-pagination-bullet-active").css({
//     "border-radius": "1%",
//     "background": "#f00",
//     "opacity": "1"
// })
// $(" ").css({
//   "bottom": "0px",
// })