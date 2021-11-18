$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	  items: 1,
	  loop: true,
	  margin: 10,
	  autoplay: true,
	  autoplayTimeout: 5000,
	  autoplayHoverPause: false,
	  nav: true
	});
	$('.play').on('click', function() {
	  owl.trigger('play.owl.autoplay', [5000])
	})
	$('.stop').on('click', function() {
	  owl.trigger('stop.owl.autoplay')
	})
  })