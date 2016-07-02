(function() {

setTimeout(function(){
  $('h1').addClass('animated rotateOut');
}, 500);

setTimeout(function(){
  $('h2').addClass('animated rotateOut');
}, 1000);

setTimeout(function(){
  $('h3').addClass('animated rotateOut');
}, 1500);
setTimeout(function(){
  $('p').addClass('animated rotateOut');
}, 2000);
setTimeout(function(){
  $('div').addClass('animated hinge');
}, 2500);
setTimeout(function(){
  $('li').addClass('animated lightSpeedOut');
}, 3000);
setTimeout(function(){
  $('img').addClass('animated hinge');
}, 3500);
setTimeout(function(){
  $('select').addClass('animated lightSpeedOut');
}, 4000);
setTimeout(function(){
  $('a').addClass('animated lightSpeedOut');
}, 4500);
setTimeout(function(){
  $('body').addClass('animated hinge');
}, 5000);

$('html').css('background',  'url(http://animexico.com.mx/wp-content/uploads/2016/06/Campus-Party-2016-579x360.jpg)');
$('html').css('-webkit-background-size', 'cover');
$('html').css('-moz-background-size', 'cover');
$('html').css('background-size', 'cover');



})();
