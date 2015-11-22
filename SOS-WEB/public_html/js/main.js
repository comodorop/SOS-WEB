	function jsparalax(elemento){
		window.onscroll = function(){		
			document.getElementById(elemento).
			style.backgroundPosition = 
			"0px " + (0 - (document.body.scrollTop / 5)) + "px";
		}
	}
	window.onload = function(){
		jsparalax('uno'); // id
	}

	
	window.onload = function(){
		jsparalax('section:nth-of-type(1) > .opacity');

		$('a[href*=#]:not([href=#])').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	            if (target.length) {
	                $('html,body').animate({
	                    scrollTop: target.offset().top
	                }, 1000);
	                return false;
	            }
	        }
    	});
        }