$('#slider>div:gt(0)").hide();

setInterval(function() {
	$('#slider>div:first')
	.fadeOut(1000)
	.next()
	.fadIn(1000)
	.end()
	.appendTo('#slider');
}, 3000);