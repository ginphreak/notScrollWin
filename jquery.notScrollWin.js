(function ($){
	$.fn.notScrollWin = function(){
		var initPageY = 0;
		var initScroll = 0;
		$(this).bind('touchstart', function(event){
			$(window).bind('touchmove',function(e){return false});
			initPageY = event.originalEvent.changedTouches[0].pageY;
			initScroll = $(this).scrollTop();
		});
		$(this).bind('touchend', function(event){
			$(window).unbind('touchmove');
			initPageY = $(this).scrollTop();
		});
		$(this).bind('touchmove',function(event){
			var maxD = $(this)[0].scrollHeight-$(this).height();
			var delta = initScroll+((initPageY - event.originalEvent.changedTouches[0].pageY));
			if(delta<0) delta = 0;
			if(delta>maxD) delta = maxD;
			$(this).scrollTop(delta);
		});
	}
}(jQuery));
