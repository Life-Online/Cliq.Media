jQuery(document).ready(function($){

	/* ************************
	Intro animation Werk/Jobs
	************************ */
	var introAnimationTwo = new TimelineLite();

	introAnimationTwo.from('.intro-text-right .sub-title-wrapper .sub-title'	, 0.5, 	{ y:'100%', delay:0.5, ease: Power2.easeIn })
	.from('.intro-text-right .page-title-wrapper h1'							, 0.5, 	{ y:'100%', ease: Power1.easeOut }, '-=0.25')
	.from('.intro-text-right .paragraph-wrapper p'								, 0.5, 	{ y:'100%', opacity:0, ease: Power1.easeOut }, '-=0.2')
	.from('.intro-text-right .line-diagonal'									, 0.6, 	{ width: 0, ease: Power1.easeInOut }, '-=0.2')
	.staggerFrom('.intro-text-right .large-watermark span'						, 0.4, 	{ y:'25%', opacity:0, ease: Power1.easeIn }, 0.1, '-=0.75');

	var introAnimationOne = new TimelineLite();

	introAnimationOne.from('.intro-text-bottom .sub-title-wrapper .sub-title'	, 0.5, 	{ y:'100%', delay:0.5, ease: Power2.easeIn })
	.from('.intro-text-bottom .page-title-wrapper h1'							, 0.5, 	{ y:'100%', ease: Power1.easeOut }, '-=0.25')
	.from('.intro-text-bottom .paragraph-wrapper p'								, 0.5, 	{ y:'100%', opacity:0, ease: Power1.easeOut }, '-=0.2')
	.from('.intro-text-bottom .paragraph-wrapper .line-bottom'					, 0.4, 	{ x:'-100%', ease: Power2.easeIn }, '-=0.15')
	.to('.intro-text-bottom .paragraph-wrapper .line-bottom'					, 0.8, 	{ x:'100%', ease: Power2.easeOut })
	.staggerFrom('.intro-text-bottom .large-watermark span'						, 0.5, 	{ y:'25%', opacity:0, ease: Power1.easeInOut }, 0.1, '-=1.5');

	/* ************************
	Contact details parallax
	************************ */
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter', duration: '150%'
		}
	});

	new ScrollMagic.Scene(
		{ triggerElement: '.company-details-info' }
	)
		.setTween('.company-details-info'										, { y: -90, ease: Linear.easeNone })
		.addTo(controller);

	new ScrollMagic.Scene(
		{ triggerElement: '.company-details-info' }
	)
		.setTween('.company-details-info .cube-wrapper'							, { y: -60, ease: Linear.easeNone })
		.addTo(controller);


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


});

google.maps.event.addDomListener(window, 'load', function () {

	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var isDraggable = w > 1024 ? true : false;

    var mapOptions = {
        center: new google.maps.LatLng(6.4444495, 3.5548607),
		zoom: 16,
		panControl: false,
		zoomControl: false,
		scrollwheel: false,
		draggable: isDraggable,
		streetViewControl: false,
		mapTypeControl : false,
		scaleControl: false,
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    };

    var mapElement = document.getElementById('map-canvas');

    var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(6.4444495, 3.5508607),
		map: map,
		animation: google.maps.Animation.DROP,
		title: 'Cliq Media Inc',
		icon: 'images/cd-icon-location.png'
	});

});
