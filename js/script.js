$(document).ready(function(){

	$('.b_btn').click(function(){
		$('.b_btn').addClass("c_btn")
	})

	$('.b_btn').click(function(){
		$('.a_btn').removeClass("c_btn")
	})

	$('.a_btn').click(function(){
		$('.a_btn').addClass("c_btn")
	})
	$('.a_btn').click(function(){
		$('.b_btn').removeClass("c_btn")
	})

	$('.counting').counterUp({
		delay:10,
		time:1000
	});
});
