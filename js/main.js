jQuery(document).ready(function($){

	$(this).scrollTop(0);


	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;

	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 1000, function(){
	        window.location.hash = hash;
	      });
	    } // End if
	  });
// 		/* ------------------------------------- */
// 	    /* 4. Newsletter ....................... */
// 	    /* ------------------------------------- */

// 	   // $("#notifyMe").notifyMe();

	/* ************************
	Navigation animation
	************************ */
	var navigationAnimation = new TimelineLite({reversed: true});

	if(jQuery(window).width() < 769) {
		navigationAnimation.to('#page-overlay'					, 0.2, { opacity:1, visibility:"visible", ease: Power1.easeInOut })
		.to('#page-header'										, 0.2, {  ease: Power1.easeInOut }, '-=0.2')
		.to('.cta-bottom-left'									, 0.2, { x:81, borderColor: '#E8E8E8', ease: Power1.easeInOut }, 'header-=0.2')
		.to('.cta-bottom-left'									, 0.6, { x:81 })
		.to('.navigation-icon'									, 0.35, { x:20, opacity:0,  ease: Power1.easeInOut }, '-=0.8')
		.to('.close-icon'										, 0.35, { x:0, opacity:1,  ease: Power1.easeInOut }, '-=0.8')
		.from('.page-navigation'								, 0.5, { opacity:0, ease: Power1.easeInOut }, '-=0.5')
		.from('.company-details'								, 0.5, { opacity:0, ease: Power1.easeInOut }, '-=0.4')
		.pause();
	} else {
		navigationAnimation.to('#page-overlay'					, 0.2, { opacity:1, visibility:"visible", ease: Power1.easeInOut })
		.to('#page-header'										, 0.2, {  ease: Power1.easeInOut }, '-=0.2')
		.to('.cta-bottom-left'									, 0.2, { y:81, borderColor: '#E8E8E8', ease: Power1.easeInOut }, 'header-=0.2')
		.to('.cta-bottom-left'									, 0.6, { y:81 })
		.to('.navigation-icon'									, 0.35, { x:20, opacity:0,  ease: Power1.easeInOut }, '-=0.8')
		.to('.close-icon'										, 0.35, { x:0, opacity:1,  ease: Power1.easeInOut }, '-=0.8')
		.from('.page-navigation'								, 0.5, { opacity:0, ease: Power1.easeInOut }, '-=0.5')
		.from('.company-details'								, 0.5, { opacity:0, ease: Power1.easeInOut }, '-=0.4')
		.pause();
	}

	$('#navigation-trigger').click(function(){
	  navigationAnimation.reversed() ? navigationAnimation.play():navigationAnimation.reverse();
	});

	/* ************************
	Match Height
	************************ */
	$('.match').matchHeight();

	/* ************************
	Navigation
	************************ */
	$('.page-navigation ul li a, #page-logo').click(function(){
		$('#page-overlay, #top-bar, #filter-toggle, #cta-employee-overlay').addClass('hide');
	 	TweenLite.to('#page-header'							, 0.4, { backgroundColor: '#FFFFFF', borderColor: 'rgb(232, 232, 232)', ease:Power1.easeInOut });
		TweenLite.to('.navigation-icon'						, 0.4, { x:0, opacity:1, ease:Power1.easeInOut });
		TweenLite.to('.close-icon'							, 0.4, { x:-20, opacity:0, ease:Power1.easeInOut });
		TweenLite.to('.cta-bottom-left'						, 0.4, { y:0, borderColor: 'rgb(232, 232, 232)', ease:Power1.easeInOut });
	});

	$('#top-bar a.in-house').click(function(){
		$('#top-bar').addClass('hide');
	});

    $('#menu-item-1').hover(
		function(){
			$('.background.our-work').addClass('show');
			$('.change-on .mycube').addClass('my-remove');
		},
		function(){
			$('.background.our-work').removeClass('show');
			$('.change-on .mycube').removeClass('my-remove');
		}
	);
    $('#menu-item-2').hover(
		function(){
			$('.background.about').addClass('show');
			$('.change-on .mycube').addClass('my-remove');
		},
		function(){
			$('.background.about').removeClass('show');
			$('.change-on .mycube').removeClass('my-remove');
		}
	);
    $('#menu-item-3').hover(
		function(){
			$('.background.careers').addClass('show');
			$('.change-on .mycube').addClass('my-remove');
		},
		function(){
			$('.background.careers').removeClass('show');
			$('.change-on .mycube').removeClass('my-remove');
		}
	);
	$('#menu-item-4').hover(
		function(){
			$('.background.vfx-studio').addClass('show');
			$('.change-on .mycube').addClass('my-remove');
		},
		function(){
			$('.background.vfx-studio').removeClass('show');
			$('.change-on .mycube').removeClass('my-remove');
		}
	);
	$('#menu-item-5').hover(
		function(){
			$('.background.contact').addClass('show');
			$('.change-on .mycube').addClass('my-remove');
		},
		function(){
			$('.background.contact').removeClass('show');
			$('.change-on .mycube').removeClass('my-remove');
		}
	);
	$('#menu-item-6').hover(
		function(){
			$('.background.the-future').addClass('show');
			$('.change-on .mycube').addClass('my-remove');
		},
		function(){
			$('.background.the-future').removeClass('show');
			$('.change-on .mycube').removeClass('my-remove');
		}
	);
    $('.page-navigation ul li a').hover(
		function(){
			$('body').addClass('hover-nav');
			$(this).addClass('hover-this');
		},
		function(){
			$('body').removeClass('hover-nav');
			$(this).removeClass('hover-this');
		}
	);

	if($.isFunction($.fn.placeholder)){
		$('input, textarea').placeholder();
	}

	/* ************************
	Page Transitions
	************************ */
	$('#page-container').animsition({
	    inClass: 'fade-in-up-sm',
	    outClass: 'fade-out-up-sm',
	    inDuration: 800,
	    outDuration: 800,
	    linkElement: '.in-house, .page-navigation a',
	    loading: false,
	    loadingParentElement: 'body',
	    loadingClass: 'animsition-loading',
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: [ 'animation-duration', '-webkit-animation-duration'],
	    overlay : false,
	    transition: function(url){ window.location.href = url; }
	});

	/* ************************
	Rellax
	************************ */
	var rellaxcenter = new Rellax('.lax-center', {
		center: true
	});
	var rellax = new Rellax('.lax');


	/* ************************
	Body styling
	************************ */
	$(window).on('scroll', function() {
	    var scrollTop = $(this).scrollTop();

	    $('.page-intro-top .sub-title-wrapper .sub-title').each(function() {
	        var topDistance = $(this).offset().top-80;

	        if ( (topDistance) < scrollTop ) {
	            $('body').addClass('fix-filter');
	        } else {
		        $('body').removeClass('fix-filter');
	        }
	    });
	});

	/* ************************
	Page title
	************************ */
    var originalTitle = document.title;

    var hidden, state, visibilityChange;
    if (typeof document.hidden !== "undefined") {
    	hidden = "hidden";
    	visibilityChange = "visibilitychange";
    	state = "visibilityState";
    } else if (typeof document.mozHidden !== "undefined") {
    	hidden = "mozHidden";
    	visibilityChange = "mozvisibilitychange";
    	state = "mozVisibilityState";
    } else if (typeof document.msHidden !== "undefined") {
    	hidden = "msHidden";
    	visibilityChange = "msvisibilitychange";
    	state = "msVisibilityState";
    } else if (typeof document.webkitHidden !== "undefined") {
    	hidden = "webkitHidden";
    	visibilityChange = "webkitvisibilitychange";
    	state = "webkitVisibilityState";
    }

    // Add a listener that constantly changes the title
    document.addEventListener(visibilityChange, function() {
    	if(document[hidden]){
            document.title='Cliq Media Inc'
    	} else {
        	document.title=originalTitle;
    	}
    }, false);


	/* ************************
	General Animations
	************************ */
	$('.wrapper-animation').waypoint({
		offset:'90%',
		handler: function() {
			TweenLite.to($(this).find('.wrapper-overlay')								, 1.6, { x:'100%', ease:Power1.easeInOut });
			TweenLite.to($(this).find('.object')										, 1.3, { x:'0%', ease:Power1.easeInOut }, '-=1.2');
		}
	});

	$('.fade-me-up, .fade-me-up-light').waypoint({
		offset:'90%',
		handler: function() {
			TweenLite.to($(this)														, .5, { y:'0%', opacity:1, ease:Power1.easeInOut });
		}
	});

	/* ************************
	Lazy Load
	************************ */
	$('img.lazy').lazyload({
	    effect : "fadeIn"
	});

	$('#close-icon-wrapper').click(function(){
		TweenLite.to('#page-notification'							, 0.8, { opacity:0, display:"none", ease:Power1.easeInOut });
	});

	$('.gallery-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: '<div class="gallery-slick-prev"></div>',
	  nextArrow: '<div class="gallery-slick-next"></div>'
	});

	$('.assets-content').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: '<div class="custom-slick-prev"></div>',
	  nextArrow: '<div class="custom-slick-next"></div>',
	  asNavFor: '.assets-content-pager'
	});

	$('.assets-content-pager').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows:false,
	  asNavFor: '.assets-content'
	});

	$('.method-carousel').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  prevArrow: '<div class="method-slick-prev"></div>',
	  nextArrow: '<div class="method-slick-next"></div>'
	});

	/* ************************
	Scroll Indicator
	************************ */
	  var indicator = $('#indicator');
	  var counter = indicator.find('span');

	  var win = jQuery(window);
	  if (indicator.length) {
	    var moveIndicator = debounce(function() {
	      var viewportHeight = $(window).height();
	      var documentHeight = $(document).height();
	      var hasScrolled = $(window).scrollTop();

	      var percent = (hasScrolled / (documentHeight - viewportHeight)) * 100;
	      indicator.css("top", percent + "%");
	      counter.html(Math.floor(percent) + "%");

	    }, 10);

	  }

	  win.on("resize scroll", moveIndicator);

	  function debounce(func, wait, immediate) {
	    var timeout;

	    return function() {
	      var context = this,
	        args = arguments;
	      var later = function() {
	        timeout = null;
	        if (!immediate) func.apply(context, args);
	      };
	      var callNow = immediate && !timeout;
	      clearTimeout(timeout);
	      timeout = setTimeout(later, wait);
	      if (callNow) func.apply(context, args);
	    };
	  };

});
