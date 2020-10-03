jQuery(document).ready(function($){

	$('.lightbox-gallery').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			titleSrc: 'title',
			verticalFit: true
		}
	});

	$(".lightbox-video").magnificPopup();
	
	/* ************************
	Top Bar Animation
	************************ */
	var introAnimationOne = new TimelineLite();

	introAnimationOne.from('.page-intro-top .button-wrapper'					, 0.5, { y:20, opacity: 0, ease: Power1.easeInOut })
	.from('.intro-text-bottom .page-title-wrapper h1'							, 0.75, { opacity: 0, ease: Power1.easeOut }, '-=0.1')
	.from('.intro-text-bottom .sub-title-wrapper .sub-title'					, 0.5, 	{ opacity: 0, ease: Power1.easeIn }, '-=0.15')
	.to('#top-bar'																, 1, { y:'-=70', ease: Power1.easeInOut }, '-=0.75');

	/* ************************
	Contact Details Parallax
	************************ */
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter', duration: '150%'
		}
	});

			var mapAnimation = new TimelineLite();

			mapAnimation.to('.map-wrapper .bar-inner.gray'						, 0.5, 	{ width:0, ease: Power1.easeIn })
			.to('.map-wrapper .bar-inner.red'									, 0.5, 	{ width:0, ease: Power1.easeOut })
			.to('.map-wrapper .bar-wrapper'										, 0.5, 	{ width:0, ease: Power1.easeIn })
			.pause();

				var scene = new ScrollMagic.Scene(
					{ triggerElement: '.map-wrapper', offset: 100 }
				)
					.addTo(controller)
					.on('start', function (e) {
							// Team Slider
							mapAnimation.play();
					});

	/* ************************
	Logo Animation
	************************ */
/*
	var logoAnimation = new TimelineLite();

	logoAnimation.from('.word-left .word'									, .6, { y:32, opacity:0, delay:3, ease: Power1.easeInOut })
	.staggerFrom('.circle'													, 1, { scale:0, ease: Power1.easeInOut }, 0.1, '-=0.8')
	.from('.word-right .word'												, .6, { y:32, opacity:0, ease: Power1.easeInOut }, '-=1')
	.pause();
*/

	var logoAnimation = new TimelineLite();

	logoAnimation.from('.made-with-passion p'								, .5, { y: 32, ease: Power1.easeOut })
	.staggerFrom('.path'													, .4, { y:8, opacity:0, ease: Power1.easeInOut }, 0.1, '-=0.3')
	.staggerFrom('.circle'													, .8, { scale:0, ease: Power1.easeInOut }, 0.1, '-=0.8')
	.pause();

	$('.made-with-passion').waypoint(function() {
	 	logoAnimation.play();
	},	{ offset: '75%' });

	$('.top-bar .top-bar-inner .post-navigation a').click(function(){
		TweenLite.to($('.post-navigation-overlay')				, .8, { opacity:0, ease:Power1.easeOut });
	});
	$('.top-bar .top-bar-inner .post-navigation a.next').hover(
		function() {
			$('.post-navigation-overlay .next .service-title, .post-navigation-overlay').addClass('hover');
		},
		function() {
			$('.post-navigation-overlay .next .service-title, .post-navigation-overlay').removeClass('hover');
		}
	);
	$('.top-bar .top-bar-inner .post-navigation a.previous').hover(
		function() {
			$('.post-navigation-overlay .previous .service-title, .post-navigation-overlay').addClass('hover');
		},
		function() {
			$('.post-navigation-overlay .previous .service-title, .post-navigation-overlay').removeClass('hover');
		}
	);


});
