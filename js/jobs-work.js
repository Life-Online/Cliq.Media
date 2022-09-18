jQuery(document).ready(function ($) {

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter', duration: '200%'
		}
	});

	/* ************************
	Intro animation Werk/Jobs
	************************ */
	var introAnimationTwo = new TimelineLite();

	introAnimationTwo.from('.intro-text-right .sub-title-wrapper .sub-title', 0.5, { y: '100%', delay: 0.5, ease: Power2.easeIn })
		.from('.intro-text-right .page-title-wrapper h1', 0.5, { y: '100%', ease: Power1.easeOut }, '-=0.25')
		.from('.intro-text-right .paragraph-wrapper p', 0.5, { y: '100%', opacity: 0, ease: Power1.easeOut }, '-=0.2')
		.from('.intro-text-right .line-diagonal', 0.6, { width: 0, ease: Power1.easeInOut }, 'line-=0.2')
		.from('.paragraph-wrapper .line-bottom', 0.4, { x: '-100%', ease: Power2.easeIn }, 'line-=0.2')
		.to('.paragraph-wrapper .line-bottom', 0.8, { x: '100%', ease: Power2.easeOut })
		.staggerFrom('.intro-text-right .large-watermark span', 0.4, { y: '25%', opacity: 0, ease: Power1.easeIn, onComplete: jobsanimation }, 0.1, '-=0.75');

	var introAnimationOne = new TimelineLite();

	introAnimationOne.from('.intro-text-bottom .sub-title-wrapper .sub-title', 0.5, { y: '100%', delay: 0.5, ease: Power2.easeIn })
		.from('.intro-text-bottom .page-title-wrapper h1', 0.5, { y: '100%', ease: Power1.easeOut }, '-=0.25')
		.from('.intro-text-bottom .paragraph-wrapper p', 0.5, { y: '100%', opacity: 0, ease: Power1.easeOut }, '-=0.2')
		.from('.intro-text-bottom .paragraph-wrapper .line-bottom', 0.4, { x: '-100%', ease: Power2.easeIn }, '-=0.15')
		.to('.intro-text-bottom .paragraph-wrapper .line-bottom', 0.8, { x: '100%', ease: Power2.easeOut })
		.staggerFrom('.intro-text-bottom .large-watermark span', 0.5, { y: '25%', opacity: 0, ease: Power1.easeInOut, onComplete: jobsanimation }, 0.1, '-=1.5');

	/* ************************
	Intro animation Jobs list
	************************ */
	var jobListAnimation = new TimelineLite();

	jobListAnimation.staggerFrom('.jobs-list .job', 0.4, { y: 25, opacity: 0, ease: Power1.easeOut }, 0.1)
		.pause();

	/* ****************
	IV Image/Text animation
	**************** */
	function jobsanimation() {

		var scene = new ScrollMagic.Scene(
			{ triggerElement: '.jobs-list', offset: 100 }
		)
			.addTo(controller)
			.on('start', function (e) {
				// Team Slider
				jobListAnimation.play();
			});
	}

	// http://www.veltenmedia.nl

	/* ************************
	Filter / MixItUp
	************************ */
	$('#filter-toggle .filter-toggle-icon').click(function () {
		$('body').toggleClass('open-portfolio-filter');
	});
	$('#portfolio-filter li').click(function () {
		$('body').toggleClass('open-portfolio-filter');
		$('#portfolio-filter li').removeClass('active');
		$(this).addClass('active');
	});

	var mixer = mixitup('.portfolio-wrapper', {
		selectors: {
			target: '.portfolio-item'
		},
		animation: {
			'duration': 401,
			'nudge': true,
			'reverseOut': false,
			'effects': 'fade scale(0.9) translateZ(-60px) stagger(30ms)'
		},
		callbacks: {
			onMixClick: function (event) {
				console.log(event.detail);
				var $target = $('.filter-toggle-text span.category');

				$target.fadeOut('fast', function () {
					var text = $('.mixitup-control-active').text();
					text = text ? text : 'alles';

					$target.text(text).fadeIn('fast');
				});

			},
		},
	});

	/* ************************
	Portfolio item hover animation
	************************ */
	TweenLite.set('.item-background', { borderWidth: 0 });
	TweenLite.set('.item-title', { opacity: 0, y: 25 });
	TweenLite.set('.button-wrapper', { opacity: 0, y: 25 });
	TweenLite.set('.item-slash-wrapper', { opacity: 0, scale: 1.5 });
	TweenLite.set(['.hover-gradient', '.item-tags'], { opacity: 0 });

	$('.portfolio-item .item-inner').hover(
		function () {
			TweenLite.to($(this).find('.item-background'), .2, { borderWidth: 10, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.item-logo-wrapper'), .1, { opacity: 0, y: -20, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.hover-gradient'), .2, { opacity: 1, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.item-title'), .2, { opacity: 1, y: 0, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.item-slash-wrapper'), .2, { opacity: 1, scale: 1, rotation: 22, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.button-wrapper'), .3, { opacity: 1, y: 0, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.item-tags'), .3, { opacity: 1, ease: Power1.easeInOut });
		},
		function () {
			TweenLite.to($(this).find('.item-background'), .2, { borderWidth: 0, ease: Power1.easeOut });
			TweenLite.to($(this).find('.item-logo-wrapper'), .2, { opacity: 1, y: 0, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.hover-gradient'), .2, { opacity: 0, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.item-title'), .2, { opacity: 0, y: 25, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.item-slash-wrapper'), .2, { opacity: 0, scale: 1.5, rotation: 0, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.button-wrapper'), .2, { opacity: 0, y: 25, ease: Power1.easeInOut });
			TweenLite.to($(this).find('.item-tags'), .2, { opacity: 0, ease: Power1.easeInOut });
		}
	);

	TweenLite.set('.portfolio-item', { opacity: 0 });

	$('.portfolio-item').waypoint({
		offset: '105%',
		handler: function () {
			TweenLite.to($(this), 1, { opacity: 1, ease: Power1.easeInOut });
		}
	});


});
