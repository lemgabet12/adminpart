(function($) {
    "use strict";


	// ______________ Global Loader
	$(window).on("load", function(e) {
		$("#global-loader").fadeOut("slow");
	})

	// ______________ Color-skin
	$(document).ready(function() {
		$("a[data-bs-theme]").click(function() {
			$("head link#theme").attr("href", $(this).data("bsTheme"));
			$(this).toggleClass('active').siblings().removeClass('active');
		});
    });

	// ______________Full screen
	$("#fullscreen-button").on("click", function toggleFullScreen() {
		$('html').addClass('fullscreen-button');
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			}
		} else {
			$('html').removeClass('fullscreen-button');
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	})

	// ______________ File Upload
	$(document).on('change', ':file', function() {
		var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});

	// We can watch for our custom `fileselect` event like this
	$(document).ready( function() {
		$(':file').on('fileselect', function(event, numFiles, label) {
			var input = $(this).parents('.input-group').find(':text'),
			log = numFiles > 1 ? numFiles + ' files selected' : label;
			if( input.length ) {
			  input.val(log);
			} else {
			  if( log ) alert(log);
			}

		});
	});

	// We can watch for our custom `fileselect` event like this
	$(document).ready( function() {
		$(':file').on('fileselect', function(event, numFiles, label) {
			var input = $(this).parents('.input-group').find(':text'),
			log = numFiles > 1 ? numFiles + ' files selected' : label;
			if( input.length ) {
			  input.val(log);
			} else {
			  if( log ) alert(log);
			}

		});
	});

	// ______________Loader
	$(window).on("load", function(e) {
		$("#loading").fadeOut("slow");
	})

	// ______________Cover Image
	$(".cover-image").each(function() {
		var attr = $(this).attr('data-bs-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});

	// ______________ Back to Top
	$(window).on("scroll", function(e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$("#back-to-top").on("click", function(e) {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});


	// ______________Global Search
	$(document).on("click", "[data-bs-toggle='search']", function(e) {
		var body = $("body");

		if(body.hasClass('search-gone')) {
			body.addClass('search-gone');
			body.removeClass('search-show');
		}else{
			body.removeClass('search-gone');
			body.addClass('search-show');
		}
	});
	var toggleSidebar = function() {
		var w = $(window);
		if(w.outerWidth() <= 1024) {
			$("body").addClass("sidebar-gone");
			$(document).off("click", "body").on("click", "body", function(e) {
				if($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
					$("body").removeClass("sidebar-show");
					$("body").addClass("sidebar-gone");
					$("body").removeClass("search-show");
				}
			});
		}else{
			$("body").removeClass("sidebar-gone");
		}
	}
	toggleSidebar();
	$(window).resize(toggleSidebar);

	// ______________Chart-circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function() {
			let $this = $(this);
			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: '#e7e9f1',
				lineCap: ''
			});
		});
	}

	const DIV_CARD = 'div.card';

	// ___________TOOLTIP
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// __________POPOVER
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
	})
	// By default, Bootstrap doesn't auto close popover after appearing in the page
	$(document).on('click', function (e) {
		$('[data-bs-toggle="popover"]').each(function () {
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				(($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  // fix for BS 3.3.6
			}

		});
	});

	// ______________Remove Card
	$(document).on('click', '[data-bs-toggle="card-remove"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});

	// ______________Card Collapse
	$(document).on('click', '[data-bs-toggle="card-collapse"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ______________Card Fullscreen
	$(document).on('click', '[data-bs-toggle="card-fullscreen"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});
	
	
	// ______________Quantity Cart Increase & Descrease
	$(function () {
		$('.add').on('click',function(){
			var $qty=$(this).closest('div').find('.qty');
			var currentVal = parseInt($qty.val());
			if (!isNaN(currentVal)) {
				$qty.val(currentVal + 1);
			}
		});
		$('.minus').on('click',function(){
			var $qty=$(this).closest('div').find('.qty');
			var currentVal = parseInt($qty.val());
			if (!isNaN(currentVal) && currentVal > 0) {
				$qty.val(currentVal - 1);
			}
		});
	});
	
	// showing modal with effect
	$('.modal-effect').on('click', function(e) {
		e.preventDefault();
		var effect = $(this).attr('data-bs-effect');
		$('#modaldemo8').addClass(effect);
	});
		
	// hide modal with effect
	$('#modaldemo8').on('hidden.bs.modal', function(e) {
		$(this).removeClass(function(index, class) {
			return (class.match(/(^|\s)effect-\S+/g) || []).join(' ');
		});
	});

	// ______________Counterup
	$('.counter').countUp();

	// ______________Dropdown
	var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
	var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
	  return new bootstrap.Dropdown(dropdownToggleEl)
	})


	$('#myonoffswitch55').click(function() {
        if (this.checked) {
			$('body').addClass('rtl');
			$('body').removeClass('ltr');
			$("html[lang=en]").attr("dir", "rtl");
			localStorage.setItem("rtl", "True");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
			(document.getElementById("switcher-css").setAttribute("href", "../assets/switcher/css/switcher-rtl.css"));
        } else {
			$('body').addClass('ltr');
			$('body').removeClass('rtl');
			$("html[lang=en]").attr("dir", "ltr");
			localStorage.setItem("rtl", "false");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
			(document.getElementById("switcher-css").setAttribute("href", "../assets/switcher/css/switcher.css"));
         }
    });

    $('#myonoffswitch54').click(function() {
        if (this.checked) {
			$('body').addClass('ltr');
			$('body').removeClass('rtl');
			$("html[lang=en]").attr("dir", "ltr");
            localStorage.setItem("rtl", "false");
            $("head link#style").attr("href", $(this));
            (document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
			(document.getElementById("switcher-css").setAttribute("href", "../assets/switcher/css/switcher.css"));
        } else {
			$('body').addClass('rtl');
			$('body').removeClass('ltr');
			$("html[lang=en]").attr("dir", "rtl");
            localStorage.setItem("ltr", "false");
            $("head link#style").attr("href", $(this));
            (document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
			(document.getElementById("switcher-css").setAttribute("href", "../assets/switcher/css/switcher-rtl.css"));
         }
    });

})(jQuery);