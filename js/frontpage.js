
jQuery(document).ready(function($){

	/* ************************
	Portfolio Slider
	************************ */
	$('.portfolio-slider').slick({
		prevArrow: '<div class="arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13"> <path d="M1242.69,5069.37l-4.58-4.87,4.64-4.93h0a0.936,0.936,0,0,0-.62-1.57,0.854,0.854,0,0,0-.61.26h0l-5.25,5.57h0a0.945,0.945,0,0,0-.27.67h0a0.928,0.928,0,0,0,.27.67h0l5.25,5.57h0a0.854,0.854,0,0,0,.61.26,0.9,0.9,0,0,0,.87-0.93A0.936,0.936,0,0,0,1242.69,5069.37Z" transform="translate(-1236 -5058)"/> </svg></div>',
		nextArrow: '<div class="arrow-next"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13"> <path class="cls-1" d="M667.305,990.367l4.584-4.865-4.644-4.929h0a0.955,0.955,0,0,1-.245-0.645,0.9,0.9,0,0,1,.875-0.928,0.842,0.842,0,0,1,.607.261h0l5.249,5.572h0a0.954,0.954,0,0,1,.268.668v0a0.953,0.953,0,0,1-.268.668h0l-5.249,5.571,0,0a0.848,0.848,0,0,1-.605.258,0.9,0.9,0,0,1-.875-0.928A0.95,0.95,0,0,1,667.305,990.367Z" transform="translate(-667 -979)"/> </svg></div>',
		infinite: true,
		lazyLoad: 'ondemand',
		cssEase: 'ease-in-out',
		speed: 350,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
		pauseOnHover: true,
		focusOnSelect: false,
		draggable: true,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1280,
				settings: { slidesToShow: 3 }
			},
			{
				breakpoint: 1080,
				settings: { slidesToShow: 2 }
			},
			{
				breakpoint: 640,
				settings: { slidesToShow: 1 }
			}
		]
	});

	TweenLite.set('.portfolio-item .item-inner .item-background', { borderWidth:0 });
	TweenLite.set('.portfolio-item .item-inner .button-wrapper'	, { opacity:0, y:25 });
	TweenLite.set('.portfolio-item .item-inner .hover-gradient'	, { opacity:0 });

	$('.portfolio-item .item-inner').hover(
		function() {
			var $item = $(this);

			TweenLite.to($item.find('.item-background')		, .2, { borderWidth:20, ease:Power1.easeInOut });
			TweenLite.to($item.find('.item-logo-wrapper')	, .1, { opacity:0, y:-20, ease:Power1.easeInOut });
			TweenLite.to($item.find('.hover-gradient')		, .2, { opacity:1, ease:Power1.easeInOut });
			TweenLite.to($item.find('.button-wrapper')		, .3, { opacity:1, y:0, ease:Power1.easeInOut });
			TweenLite.to($('.page-intro-top *')				, .3, { opacity:0, ease:Power1.easeInOut });
			$('#' + $(this).attr('data-client')).fadeIn(300);
			$('.item-background-image').addClass('hover');
		},
		function() {
			var $item = $(this);

			$('#' + $item.attr('data-client')).fadeOut(300);
			TweenLite.to($item.find('.item-background')		, .2, { borderWidth:0, ease:Power1.easeOut });
			TweenLite.to($item.find('.item-logo-wrapper')	, .2, { opacity:1, y:0, ease:Power1.easeInOut });
			TweenLite.to($item.find('.hover-gradient')		, .2, { opacity:0, ease:Power1.easeInOut });
			TweenLite.to($item.find('.button-wrapper')		, .2, { opacity:0, y:25, ease:Power1.easeInOut });
			TweenLite.to($('.page-intro-top *')				, .3, { opacity:1, ease:Power1.easeInOut });
			$('.item-background-image').removeClass('hover');
		}
	);

	// Fix Animations on Homepage
	$('.portfolio-slider-section').removeClass('none');

	/* ************************
	Frontpage Intro Animation
	************************ */
 	if(! $('body').hasClass('internal')){

    	$('body').addClass('lock-scroll');
    	TweenLite.set('.page-title-wrapper h1'									, { color:'#FFFFFF' });
    	TweenLite.set('.paragraph-wrapper p'									, { color:'#FFFFFF', opacity:.5 });
    	TweenLite.set('.cube-inner-black'										, { opacity:0 });

		if(jQuery(window).width() < 7000) {
			TweenLite.set('#page-header'										, { y:-80 });
		} else {
		   	TweenLite.set('#page-header'										, { x:-80 });
		}


    	TweenLite.set('.portfolio-slider-section'								, { opacity:0, y:50 });

    	var introAnimationFrontpage = new TimelineLite();

    	introAnimationFrontpage.to('.page-intro-overlay-top'					, 0.1, 	{ delay:0.5, opacity:0 })
    	.from('.page-intro-home .sub-title-wrapper .sub-title'					, 0.4, 	{ y:'100%', delay:0.5, ease: Power2.easeIn })
    	.staggerFrom('.page-intro-home .page-title-wrapper h1 span span'		, 0.4, 	{ y:'100%', ease: Power1.easeOut }, 0.2, '-=0.2')
    	.from('.page-intro-home .paragraph-wrapper p'							, 0.4, 	{ y:'100%', opacity:0, ease: Power1.easeOut }, '-=0.2')
    	.from('.page-intro-home .paragraph-wrapper .line-bottom'				, 0.3, 	{ x:'-100%', ease: Power2.easeIn }, '-=0.15')
    	.to('.page-intro-home .paragraph-wrapper .line-bottom'					, 0.7, 	{ x:'100%', ease: Power2.easeOut })
    	.from('.page-intro-home .clip-wrapper'									, 0.8, 	{ opacity:0, ease: Power1.easeIn }, '-=1')
    	.from('.page-intro-home .cube-wrapper'									, 1, 	{ y:'10%', opacity:0, ease: Power1.easeInOut, onComplete:normalizeBody }, '-=.75')
    	.to('.page-intro-home .page-title-wrapper h1'							, 0.8, 	{ color:'#2D3135', ease: Power1.easeInOut }, 'outanimation+=0.1')
    	.to('.page-intro-home .paragraph-wrapper p'								, 0.8, 	{ color:'#2D3135', opacity:1, ease: Power1.easeInOut }, 'outanimation+=0.1')
    	.to('.page-intro-home .page-intro-overlay, .cube-inner-white'			, 0.8, 	{ opacity:0, ease: Power1.easeInOut }, 'outanimation+=0.1')
    	.to('.page-intro-home .cube-inner-black'								, 0.8, 	{ opacity:1, ease: Power1.easeInOut, onComplete:normalizeAnimations }, 'outanimation+=0.1');

		function normalizeAnimations(){
			$('body').removeClass('lock-scroll');
			$('.page-intro-overlay').remove();
			setTimeout(function(){
				$('.page-intro-home').addClass('push-back');
			}, 500);
		}
		function normalizeBody(){

			if(jQuery(window).width() < 7000) {
				TweenLite.to('#page-header'										, 1.25, { y:0, delay:.4, ease:Power1.easeInOut });
			} else {
			   	TweenLite.to('#page-header'										, 1.25, { x:0, delay:.1, ease:Power1.easeInOut });
			}


			TweenLite.to('.portfolio-slider-section'							, 1.25, { y:0, delay:.4, opacity:1, ease:Power1.easeInOut });
		}

     } else {

    	var introAnimationFrontpage = new TimelineLite();

    	introAnimationFrontpage.from('.page-intro-home .sub-title-wrapper .sub-title'					, 0.5, 	{ y:'100%', delay:0.5, ease: Power2.easeIn })
    	.staggerFrom('.page-intro-home .page-title-wrapper h1 span span'		, 0.5, 	{ y:'100%', ease: Power1.easeOut }, 0.2, '-=0.2')
    	.from('.page-intro-home .paragraph-wrapper p'							, 0.5, 	{ y:'100%', opacity:0, ease: Power1.easeOut }, '-=0.2')
    	.from('.page-intro-home .paragraph-wrapper .line-bottom'				, 0.4, 	{ x:'-100%', ease: Power2.easeIn }, '-=0.15')
    	.to('.page-intro-home .paragraph-wrapper .line-bottom'					, 0.8, 	{ x:'100%', ease: Power2.easeOut })
    	.from('.page-intro-home .clip-wrapper'									, 1, 	{ opacity:0, ease: Power1.easeIn }, '-=1')
    	.from('.page-intro-home .cube-wrapper'									, 1.2, 	{ y:'10%', opacity:0, ease: Power1.easeInOut }, '-=.75')
    	.to('.page-intro-home .page-title-wrapper h1'							, 1, 	{ color:'#2D3135', ease: Power1.easeInOut }, 'outanimation+=0.75')
    	.to('.page-intro-home .paragraph-wrapper p'								, 1, 	{ color:'#2D3135', opacity:1, ease: Power1.easeInOut }, 'outanimation+=0.75')
    	.to('.page-intro-home .cube-inner-black'								, 1, 	{ opacity:1, ease: Power1.easeInOut }, 'outanimation+=0.75')
    	.from('.portfolio-slider-section'										, 1.25, { opacity:0, y:50, ease: Power1.easeInOut }, 'outanimation-=1.5');

     }

	/* ************************
	Text Animation Timeline
	************************ */
	var textAnimationTimeline = new TimelineLite();

	textAnimationTimeline.from('.culture-text-inner h5'			, 0.5, 	{ y:'100%', delay:0.5, ease: Power2.easeIn })
	.from('.culture-text-inner h2'								, 0.5, 	{ y:'100%', ease: Power1.easeOut }, '-=0.25')
	.from('.culture-text-inner .fade-in-text'					, 1, 	{ opacity:0, ease: Power1.easeOut }, '-=0.25')
	.staggerFrom('.culture-watermark span'						, 0.4, 	{ x:'-25%', opacity:0, ease: Power1.easeIn}, 0.1, '-=1.5')
	.pause();

		//var controller = new ScrollMagic.Controller();
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onEnter', duration: '200%'
			}
		});
		var scene = new ScrollMagic.Scene(
			{ triggerElement: '.culture-text-inner', offset: 100 }
		)
			.addTo(controller)
			.on('start', function (e) {
					// Text animation timeline
					textAnimationTimeline.play();
			});

	/* ************************
	Culture Animation
	************************ */
	new ScrollMagic.Scene(
		{ triggerElement: '.culture-section' }
	)
		.setTween('.culture-section .culture-watermark'	, { x: '-50%', y: 75, ease: Linear.easeNone })
		.addTo(controller);

	$('.culture-wrapper .image-wrapper').waypoint({
		offset:'75%',
		handler: function() {
			$(this).addClass('reveal');
		}
	});

	TweenLite.set('.stat-block-wrapper'							, { opacity:0, scale:.9 });
	TweenLite.set('.stat-block-wrapper .number'					, { opacity:0, y:25 });
	TweenLite.set('.stat-block-wrapper .title'					, { opacity:0, y:25 });

	$('.stat-block-wrapper').waypoint({
		offset:'75%',
		handler: function() {
			TweenLite.to($(this)								, .6, { opacity:1, scale:1, delay:.2, ease:Power1.easeInOut });
			TweenLite.to($(this).find('.number')				, .6, { opacity:1, y:0, delay:.4, ease:Power1.easeInOut });
			TweenLite.to($(this).find('.title')					, .6, { opacity:1, y:0, delay:.5, ease:Power1.easeInOut });
		}
	});


	/* ************************
	Clients Animation
	************************ */
	TweenLite.set('.client-logos .logo-wrapper'					, { opacity:0, y:75 });

	$('.client-logos .logo-wrapper').waypoint({
		offset:'95%',
		handler: function() {
			TweenLite.to($(this)								, 1, { opacity:1, y:0, ease:Power1.easeInOut });
		}
	});


	$('.logo-wrapper .client-logo:first-child').addClass('active');
    var e = 0;
    setInterval(function() {
        $(".logo-wrapper.active").removeClass("active"), 9 === e && (e = 0), e++, $("#logo-position-" + e).addClass("active");
        var t = $(".logo-wrapper.active .client-logo.active").removeClass("active");
        t.next() && t.next().length ? t.next().addClass("active") : t.siblings(":first").addClass("active")
    }, 1e3)

	/* ************************
	Buttons Animation
	************************ */
	TweenLite.set('.button-wrapper.col-1-1'						, { opacity:0, y:75 });

	$('.button-wrapper.col-1-1').waypoint({
		offset:'bottom-in-view',
		handler: function() {
			TweenLite.to($(this)								, 1, { opacity:1, y:0, ease:Power1.easeInOut });
		}
	});



/*
	$('.client-logos li').waypoint(function() {
		TweenLite.to($(this)								, 1, { opacity:1, y:0, ease:Power1.easeInOut });
	},
		{ offset: '75%'
	});
*/

//Tooltip

$(".tipped").tipper();

	/* Modal View
	-------------------------------------------------------------------------------*/
	function toggle_video_modal() {

			// Open the Video Modal
			$(".js-trigger-modal").on("click", function(event){
					event.preventDefault();
					$("body").addClass("show-video-modal");
			});

			// Close and Reset the Video Modal
			$('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
					event.preventDefault();

					$("body").removeClass("show-video-modal");

					// reset the source attribute for the iframe template - kills the video
			$("#youtube").attr('src', 'https://www.youtube.com/embed/uDKiT7l07f4?&VQ=HD720;&autoplay=0;rel=0&amp;showinfo=0');
			});
	}
	toggle_video_modal();


/* ************************
Timelineslider
************************ */
$('.timeline-slider').slick({
	prevArrow: '<div class="arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13"> <path d="M1242.69,5069.37l-4.58-4.87,4.64-4.93h0a0.936,0.936,0,0,0-.62-1.57,0.854,0.854,0,0,0-.61.26h0l-5.25,5.57h0a0.945,0.945,0,0,0-.27.67h0a0.928,0.928,0,0,0,.27.67h0l5.25,5.57h0a0.854,0.854,0,0,0,.61.26,0.9,0.9,0,0,0,.87-0.93A0.936,0.936,0,0,0,1242.69,5069.37Z" transform="translate(-1236 -5058)"/> </svg></div>',
	nextArrow: '<div class="arrow-next"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13"> <path class="cls-1" d="M667.305,990.367l4.584-4.865-4.644-4.929h0a0.955,0.955,0,0,1-.245-0.645,0.9,0.9,0,0,1,.875-0.928,0.842,0.842,0,0,1,.607.261h0l5.249,5.572h0a0.954,0.954,0,0,1,.268.668v0a0.953,0.953,0,0,1-.268.668h0l-5.249,5.571,0,0a0.848,0.848,0,0,1-.605.258,0.9,0.9,0,0,1-.875-0.928A0.95,0.95,0,0,1,667.305,990.367Z" transform="translate(-667 -979)"/> </svg></div>',
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	pauseOnHover: true,
	focusOnSelect: false,
	draggable: true,
	autoplay: false,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 1280,
			settings: { slidesToShow: 3 }
		},
		{
			breakpoint: 1080,
			settings: { slidesToShow: 2 }
		},
		{
			breakpoint: 640,
			settings: { slidesToShow: 1 }
		}
	]
});

/* Quotes Carousel */

	$(document).ready(function() {

	  $("#owl-quotes").owlCarousel({

		  navigation : false,
		  autoPlay: 5000,
		  slideSpeed : 800,
		  paginationSpeed : 800,
		  singleItem:true

	  });

	});

	/* Logos Carousel */

		$(document).ready(function() {

		  var owl = $("#owl-logos");

		  owl.owlCarousel({
			  navigation : false,
			  autoPlay: 6000,
			  pagination : false,
			  items : 6, //6 items above 1000px browser width
			  itemsDesktop : [1000,4], //4 items between 1000px and 901px
			  itemsDesktopSmall : [900,3], // betweem 900px and 601px
			  itemsTablet: [600,2], //2 items between 600 and 0
			  itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		  });

		});


});
