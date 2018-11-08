

//  var galleryThumbs = new Swiper('.gallery-thumbs-2', {
//          spaceBetween: 0,
//          paginationClickable: true,
//          paginationType: 'progress',
//          autoHeight: true,
//          onSlideChangeEnd: function(swiper) {
//              var j = swiper.activeIndex;
//              $('.contrast div').removeClass('galleryTop_on').eq(j).addClass('galleryTop_on');
//          }
//         });
// 	   
//         $('.contrast div').on('click', function() {
//          var i = $(this).index();
//  		console.log($(this).index())
//          $('.contrast div').removeClass('galleryTop_on').eq(i).addClass('galleryTop_on');
//          galleryThumbs.slideTo(i, 1000, false);
//         })

//
var gallerytL = new Swiper('.gallerytT', {
			direction: "horizontal",/*横向方向*/
			slidesPerView:6,
			freeMode:true,
			slideToClickedSlide:false,
			normalizeSlideIndex:false,
			breakpoints: { 
            //当宽度小于等于320
            320: {
            slidesPerView: 1,
            spaceBetween: 1
            },
		   //当宽度小于等于480
			480: { 
			  slidesPerView: 2,
			  spaceBetween: 1
			},
			//当宽度小于等于640
			640: {
			  slidesPerView: 3,
			  spaceBetween: 1
			}
		  }
				})
		var gallerytR = new Swiper('.gallery-thumbs-2', {
			direction: "horizontal",/*横向方向*/
			slidesPerView:1,
			freeMode:false,
			autoHeight:true,
			// spaceBetween:,
			on:{
				slideChange:function(){
					var i= this.activeIndex;
					gallerytL.slideTo(i);
					$(".gallerytT .gallery-top-2").eq(i).addClass("galleryTop_on").siblings().removeClass("galleryTop_on")
				}
			},
			pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
			},
			})
				$(".gallerytT .gallery-top-2").on("click",function(){
					var i= $(this).index();
					$(".gallerytT .gallery-top-2").eq(i).addClass("galleryTop_on").siblings().removeClass("galleryTop_on")
					gallerytR.slideTo(i);	
				})			
/*market4*/
var market4_c = new Swiper('.market4_c',{
	slidesPerView:3,
	spaceBetween:15,
	breakpoints:{ 
    //当宽度小于等于320
    768: {
      slidesPerView: 1,
      spaceBetween: 2
    },
   //当宽度小于等于480
    992: { 
      slidesPerView: 2,
      spaceBetween: 10
    },
    //当宽度小于等于640
    1199: {
      slidesPerView: 3,
      spaceBetween: 5
    }
  },
  pagination: {
    el: '.m4-pagination',
    type: 'bullets',
	color:'red',
  },
});
   