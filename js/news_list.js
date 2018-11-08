
/*新闻*/
// 小轮播 轮播事件
$(".slide-3 b").hover(function() {
  $(this).css("background","#f00");
},function() {
  $(this).css("background","#000");
})
var bo = new Swiper('.slide_ul',{
    direction : 'horizontal',
    slidesPerView : 'auto',
})
var bdsggd = new Swiper('.slide_ul-3',{
    direction : 'horizontal',
    slidesPerView : 'auto',
})
// 轮播旁的新闻
$(".order-3>p").hover(function(){
  $(this).css("color","#f00")
},function() {
  $(this).css("color","#000")
})
$(".ordee-3>p").hover(function(){
  $(this).css("color","#f00")
},function() {
  $(this).css("color","#000")
})

$(".network-station-3>span").hover(function(){
  $(this).css("background","#f00")
},function() {
  $(this).css("background","")
})