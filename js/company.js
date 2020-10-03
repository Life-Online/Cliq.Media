jQuery(document).ready(function($){

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter', duration: '200%'
		}
	});

	/* ************************
	Intro animation Bedrijf
	************************ */
	var introAnimationOne = new TimelineLite();

	introAnimationOne.from('.intro-text-bottom .sub-title-wrapper .sub-title'	, 0.5, 	{ y:'100%', delay:0.5, ease: Power2.easeIn })
	.from('.intro-text-bottom .page-title-wrapper h1'							, 0.5, 	{ y:'100%', ease: Power1.easeOut }, '-=0.25')
	.from('.intro-text-bottom .paragraph-wrapper p'								, 0.5, 	{ y:'100%', opacity:0, ease: Power1.easeOut }, '-=0.2')
	.from('.intro-text-bottom .paragraph-wrapper .line-bottom'					, 0.4, 	{ x:'-100%', ease: Power2.easeIn }, '-=0.15')
	.to('.intro-text-bottom .paragraph-wrapper .line-bottom'					, 0.8, 	{ x:'100%', ease: Power2.easeOut })
	.staggerFrom('.intro-text-bottom .large-watermark span'						, 0.5, 	{ y:'25%', opacity:0, ease: Power1.easeInOut, onComplete:inViewAniamations }, 0.1, '-=1.5')
	.to('#top-bar'																, 1, 	{ y:0, ease: Power1.easeInOut }, '-=1');


		// Image animation
		var imageAnimation = new TimelineLite();

		imageAnimation.from('.image-animation-wrapper'							, 0.6, 	{ width:'0%', delay:0.5, ease: Power1.easeOut })
		.to('.image-animation-wrapper .color-inner'								, 0.8, 	{ x:'100%', ease: Power3.easeOut }, '-=0.25')
		.from('.image-animation-wrapper .image-inner'							, 0.8, 	{ x:'-25%', ease: Power2.easeOut }, '-=0.8')
		.from('.image-animation-wrapper .cube-wrapper'							, 0.8, 	{ y:'-10%', opacity:0, ease: Power2.easeOut, onComplete:redBarAnimation }, '-=0.5')
		.pause();


			// Text animation culture
			var barAnimation = new TimelineLite();

			barAnimation.from('.image-animation-wrapper .bar-wrapper'			, 0.4, 	{ width:0, ease: Power1.easeOut })
			.from('.image-animation-wrapper .bar-wrapper .bar-inner.black'		, 0.2, 	{ x:'0%', ease: Power1.easeIn }, '-=0.25')
			.to('.image-animation-wrapper .bar-wrapper .bar-inner.black'		, 0.3, 	{ x:'100%', ease: Power1.easeOut })
			.pause();


		// Text animation culture
		var textAnimationCulture = new TimelineLite();

		textAnimationCulture.from('.culture-text-inner h3'						, 0.6, 	{ y:'100%', ease: Power1.easeOut })
		.from('.culture-text-inner .fade-in-text'								, 1, 	{ opacity:0, ease: Power1.easeOut }, '-=0.25')
		.pause();


		/* ************************
		Timeline
		************************ */

		// Timeline	Text Animation
		var textAnimationTimeline = new TimelineLite();

		textAnimationTimeline.from('.timeline-text-inner h5'					, 0.5, 	{ y:'100%', delay:0.5, ease: Power2.easeIn })
		.from('.timeline-text-inner h2'											, 0.5, 	{ y:'100%', ease: Power1.easeOut }, '-=0.25')
		.from('.timeline-text-inner .fade-in-text'								, 1, 	{ opacity:0, ease: Power1.easeOut }, '-=0.25')
		.staggerFrom('.timeline-watermark span'									, 0.8, 	{ y:'25%', opacity:0, ease: Power1.easeIn}, 0.05, '-=1.5')
		.from('.timeline-section .cube-wrapper'									, 0.8, 	{ opacity:0, ease: Power2.easeOut, onComplete:redBarAnimation }, '-=0.5')
		.pause();

		// Timeline Slider Animation
		var sliderTimeline = new TimelineLite();

		sliderTimeline.from('.timeline-slider'									, 1, 	{ opacity:0, delay:0.5, ease: Power1.easeInOut })
		.pause();

		// Timeline Animations
		new ScrollMagic.Scene(
			{ triggerElement: '.timeline-section' }
		)
			.setTween('.timeline-section .large-watermark'	, { y: '-100%', ease: Linear.easeNone })
			.addTo(controller);

		new ScrollMagic.Scene(
			{ triggerElement: '.timeline-section' }
		)
		.setTween('.timeline-section .cube-wrapper'			, { y: '75%', ease: Linear.easeNone })
		.addTo(controller);

		new ScrollMagic.Scene(
			{ triggerElement: '.timeline-section' }
		)
		.setTween('.timeline-section .circle-wrapper'		, { y: -150, ease: Linear.easeNone })
		.addTo(controller);


		// Gallery animation
		var galleryImages = new TimelineLite();

		galleryImages.staggerFrom('.gallery-section img'						, 1.5, 	{ opacity:0, ease: Power1.easeInOut }, 0.4)
		.from('.gallery-section .bar-wrapper'									, 0.4, 	{ width:0, ease: Power1.easeOut }, '-=0.25')
		.from('.gallery-section .bar-wrapper .bar-inner.black'					, 0.2, 	{ x:'0%', ease: Power1.easeIn }, '-=0.25')
		.to('.gallery-section .bar-wrapper .bar-inner.black'					, 0.3, 	{ x:'100%', ease: Power1.easeOut })
		.pause();


		// Text animation team
		var textAnimationTeam = new TimelineLite();

		textAnimationTeam.from('.team-text-inner h5'							, 0.5, 	{ y:'100%', delay:0.5, ease: Power2.easeIn })
		.from('.team-text-inner h2'												, 0.5, 	{ y:'100%', ease: Power1.easeOut }, '-=0.25')
		.from('.team-text-inner .fade-in-text'									, 1, 	{ opacity:0, ease: Power1.easeOut }, '-=0.25')
		//.staggerFrom('.team-watermark span'										, 0.8, 	{ y:'25%', opacity:0, ease: Power1.easeIn}, 0.05, '-=1.5')
		.pause();

		/* ************************
		Team slider
		************************ */
		$('.team-slider').slick({
			prevArrow: '<div class="arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13"> <path d="M1242.69,5069.37l-4.58-4.87,4.64-4.93h0a0.936,0.936,0,0,0-.62-1.57,0.854,0.854,0,0,0-.61.26h0l-5.25,5.57h0a0.945,0.945,0,0,0-.27.67h0a0.928,0.928,0,0,0,.27.67h0l5.25,5.57h0a0.854,0.854,0,0,0,.61.26,0.9,0.9,0,0,0,.87-0.93A0.936,0.936,0,0,0,1242.69,5069.37Z" transform="translate(-1236 -5058)"/> </svg></div>',
			nextArrow: '<div class="arrow-next"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13"> <path class="cls-1" d="M667.305,990.367l4.584-4.865-4.644-4.929h0a0.955,0.955,0,0,1-.245-0.645,0.9,0.9,0,0,1,.875-0.928,0.842,0.842,0,0,1,.607.261h0l5.249,5.572h0a0.954,0.954,0,0,1,.268.668v0a0.953,0.953,0,0,1-.268.668h0l-5.249,5.571,0,0a0.848,0.848,0,0,1-.605.258,0.9,0.9,0,0,1-.875-0.928A0.95,0.95,0,0,1,667.305,990.367Z" transform="translate(-667 -979)"/> </svg></div>',
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			focusOnSelect: false,
			draggable: true,
			autoplay: true,
			swipeToSlide: true,
			responsive: [
				{
					breakpoint: 1920,
					settings: { slidesToShow: 4 }
				},
				{
					breakpoint: 1400,
					settings: { slidesToShow: 3 }
				},
				{
					breakpoint: 900,
					settings: { slidesToShow: 2 }
				},
				{
					breakpoint: 767,
					settings: { slidesToShow: 1 }
				}
			]
		});

			// Team animation
			var sliderTeam = new TimelineLite();

			sliderTeam.to('.team-slider-wrapper .bar-inner.gray'						, 0.5, 	{ width:0, ease: Power1.easeIn })
			.to('.team-slider-wrapper .bar-inner.red'									, 0.5, 	{ width:0, ease: Power1.easeOut })
			.to('.team-slider-wrapper .bar-wrapper'										, 0.5, 	{ width:0, ease: Power1.easeIn })
			.from('.team-slider-wrapper .slick-arrow'									, 0.75, { y:20, opacity:0, ease: Power1.easeInOut }, '-=0.75')
			.from('.team-watermark'														, 0.75, { y:20, opacity:0, ease: Power1.easeInOut }, '-=1.25')
			.pause();

			new ScrollMagic.Scene(
				{ triggerElement: '.team-section' }
			)
			.setTween('.team-section .circle-wrapper'									, { y: -350, ease: Linear.easeNone })
			.addTo(controller);

			/* ****************
			IV Image/Text animation
			**************** */
			function inViewAniamations(){

				var scene = new ScrollMagic.Scene(
					{ triggerElement: '.culture-text-inner', offset: 100 }
				)
					.addTo(controller)
					.on('start', function (e) {
						// Image animation
						imageAnimation.play();

						// Text animation culture
						textAnimationCulture.play();
					});

				var scene = new ScrollMagic.Scene(
					{ triggerElement: '.timeline-text-inner', offset: 100 }
				)
					.addTo(controller)
					.on('start', function (e) {
							// Text animation timeline
							textAnimationTimeline.play();
					});

				var scene = new ScrollMagic.Scene(
					{ triggerElement: '.team-text-inner', offset: 100 }
				)
					.addTo(controller)
					.on('start', function (e) {
							// Text animation Timeline
							textAnimationTeam.play();
					});

				var scene = new ScrollMagic.Scene(
					{ triggerElement: '.timeline-slider', offset: 100 }
				)
					.addTo(controller)
					.on('start', function (e) {
							// Text Timeline Slider
							sliderTimeline.play();
					});

				var scene = new ScrollMagic.Scene(
					{ triggerElement: '.team-slider', offset: 100 }
				)
					.addTo(controller)
					.on('start', function (e) {
							// Team Slider
							sliderTeam.play();
					});

				var scene = new ScrollMagic.Scene(
					{ triggerElement: '.gallery-section', offset: 100 }
				)
					.addTo(controller)
					.on('start', function (e) {
							// Gallery Images
							galleryImages.play();
					});

			}
			function redBarAnimation(){

				var scene = new ScrollMagic.Scene(
					{ triggerElement: '.image-animation-wrapper .bar-wrapper', offset: 100 }
				)
					.addTo(controller)
					.on('start', function (e) {
							// Bar Animation
							barAnimation.play();
					});

			}

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

	// Team
	new ScrollMagic.Scene(
		{ triggerElement: '.team-section' }
	)
		.setTween('.team-section .large-watermark'		, { y: '-100%', ease: Linear.easeNone })
		.addTo(controller);

	// Gallery section
	new ScrollMagic.Scene(
		{ triggerElement: '.gallery-section' }
	)
		.setTween('.gallery-section .bar-wrapper'		, { y: '-100%', ease: Power1.easeInOut })
		.addTo(controller);

	$('#cultuur, #team, #timeline').waypoint({
		offset: 200,
		handler: function(direction) {
			if(direction == 'down')
			{
				$('ul.navigationables-nav li a').removeClass('active').filter('[href="#'+this.id+'"]').addClass('active');
			}
			else
			{
				$('ul.navigationables-nav li a').removeClass('active').filter('[href="#'+this.id+'"]').parent().prev().find('a').addClass('active');
			}
		}
	});

});
