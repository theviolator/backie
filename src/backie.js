/*
* Backie
* by Georgi Kalaydzhiev, Web Designer & Front-end Developer http://joro.me/
* 
* Copyright (c) 2014.
* Licensed under the MIT License http://www.opensource.org/licenses/mit-license.php
*
* Description: Very, very, very simple "Back to top" plugin.
* URL: http://joro.me/lab/backie/
* Version: 1.0, Oct 05, 2014
*/

$.backie = function(userSettings) {

	var defaultSettings = { backgroundColor: '#000', width: '40px', height: '40px', radius: '50%', opacity: '0.2', opacityOnHover: '0.4', enableAfter: '300', enableAfterEl: null };
	var settings = $.extend({}, defaultSettings, userSettings);
	
	var is_chrome = window.chrome;
	var is_safari = navigator.userAgent.indexOf('Safari') > -1;

	if (is_chrome || is_safari)
		var el = $('body');
	else
		var el = $('html');
	
	var backieStyle = {
		'position' : 'fixed',
		'bottom' : '50px',
		'right' : '50px',
		'zIndex' : '10000',
		'opacity' : settings.opacity,
		'width' : settings.width,
		'height' : settings.height,
		'background-color' : settings.backgroundColor,
		'background-image' : 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAYAAACEJVa/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NTA1M0Y5NDNGODExRTNBNTNDQzY0NDY3Mzg0M0M0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM4NTA1M0ZBNDNGODExRTNBNTNDQzY0NDY3Mzg0M0M0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzg1MDUzRjc0M0Y4MTFFM0E1M0NDNjQ0NjczODQzQzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzg1MDUzRjg0M0Y4MTFFM0E1M0NDNjQ0NjczODQzQzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4tjYo8AAAAsklEQVR42mL8//8/AwFgAMTXgPgXThUgQ/BgGyD+DMRLgZgZlzp8BlhCDYCBaaQagm4ADFQQawguA2AglpAhIAM+oGl6i8b/A8R+uAzBZsBJIOYH4jlo4t+A2AzdEDM8BjBAY2YjmvwrINaFGaJCwAAY5gTiA2jqngCxBEiyiAgDYBgkfglNfQ4D1EmfiTAAhiWA+DZybDFCk70EEGsB8UEg/stAGMgBcQgQfwHiuQABBgBOUVA7tidv6gAAAABJRU5ErkJggg==)',
		'background-position' : 'center center',
		'background-repeat' : 'no-repeat',
		'borderRadius' : settings.radius,
		'cursor' : 'pointer'
	};
	
	$('<span class="backie"></span>').css(backieStyle).appendTo('body').hide();

	var backieButton = $('.backie');

	if (settings.enableAfterEl != null) {
		settings.enableAfter = $(settings.enableAfterEl).offset().top;
	}
	
	function getScrollPos() {
		scrollPos = $(document).scrollTop();
		if (scrollPos > settings.enableAfter)
			backieButton.fadeIn();
		else
			backieButton.fadeOut();
	}

	getScrollPos();

	$(document).scroll( function() {
		getScrollPos();
	});

	backieButton.on({
		click: function(e) {
			var elPos = el.scrollTop();
		
			if (elPos != 0)
			  el.animate({scrollTop: 0}, 300);
			  
			e.preventDefault();
		},
		mouseover: function() {
			$(this).animate({'opacity': settings.opacityOnHover}, 200);
		},
		mouseout: function() {
			$(this).animate({'opacity': settings.opacity}, 200);
		}
	});
	
};