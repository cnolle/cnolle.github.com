jQuery(function($){
	
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
			case 39: // Right

				if(next+1 < max) {
				    next++;
				    $(window).scrollTo(elements[next], 500, { axis:'y' });
				}

        	break;
        	case 37:// Left

				if(next-1 > -1) {
				    next--;
				    $(window).scrollTo(elements[next], 500, { axis:'y' });
				}

        	break;
        }
   });

	$('.activate-work a').click(function(){
		//$('.work-drawer').show();
		$(this).toggleClass('active');
		$(".work-drawer").toggleClass('show');
		
		if($(this).text() == 'Close'){
			$(this).text('Work');
		} else {
			$(this).text('Close');
		}
		
		return false;
	});
	
}); 
