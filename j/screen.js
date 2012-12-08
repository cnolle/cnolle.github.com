jQuery(function($){

	$('.nav-work')
	   // test the menu to see if all items fit horizontally
	   .bind('testfit', function(){
	         var nav = $(this),
	             items = nav.find('a');
	               
	         $('body').removeClass('nav-menu');                    
	               
	         // when the nav wraps under the logo, or when options are stacked, display the nav as a menu              
	         if ( (nav.offset().top > nav.prev().offset().top) || ($(items[items.length-1]).offset().top > $(items[0]).offset().top) ) {
				$('body').addClass('nav-menu');
	         };                    
	      })
	   
	   // toggle the menu items' visiblity
	   .find('h3')
	      .bind('click focus', function(){
	         $(this).parent().toggleClass('expanded')
	      });   
	
	// ...and update the nav on window events
	$(window).bind('load resize orientationchange', function(){
	   $('.nav-work').trigger('testfit');
	});

	$('#totop').click(function() {
			$('body,html').animate({scrollTop:0},800);
	});	
			
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#totop').fadeIn();	
		} else {
			$('#totop').fadeOut();
		}
	});
		
	$(window).resize(function() {
		if($(window).width() < 1100) {
			$('#totop').fadeOut();
		} else {
			$('#totop').fadeIn();
		}
	});
			
	$("section article.panel:nth-of-type(3n)").addClass("last");		
	
     var elements = $("ul#imagelist li");
     var next = 0;
     var max = elements.length;
     $('a.next').click(function(){
        if(next+1 < max) {
            next++;
            $(window).scrollTo(elements[next], 500, { axis:'y' });
        }
     });

     $('a.previous').click(function(){
        if(next-1 > -1) {
            next--;
            $(window).scrollTo(elements[next], 500, { axis:'y' });
        }
     });
	
	$(document).keyup(function(e){
		switch( e.keyCode ){
			case 39:

				if(next+1 < max) {
				    next++;
				    $(window).scrollTo(elements[next], 500, { axis:'y' });
				}

        	break;
        	case 37://left (<-)

				if(next-1 > -1) {
				    next--;
				    $(window).scrollTo(elements[next], 500, { axis:'y' });
				}

        	break;
        }
   });
	
}); 	 