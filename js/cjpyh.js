(function($) {
	// $(".tile img").each(function(index, el) {
	// 	var $this = $(this);
	// 	var $detail = $this.siblings('.item-detail')
	// 	$this.mousemove(function(event) {
	// 		$detail.attr('style', 'display:block');
	// 		$detail.animate({
				
	// 			top: '8px' ,
	// 		},'normal');
	// 	});
		
	// 	$this.parent('div.tile').mouseout(function(event) {
	// 		$detail.animate({
	// 			display: 'none',
	// 			top: '313px' ,
	// 		},'fast');
	// 		$detail.attr('style', 'display:none');
	// 	});
	// });
	
	// 详情提示 
    $("[data-toggle=detailtip]").tooltip("hide");

    // fix sub nav on scroll
    var $win = $(window)
      , $topnav = $('.top-nav')
      , $nav = $('.subnav')
      , navTop = $('.subnav').length && $('.subnav').offset().top - 20
      , isFixed = 0

    processScroll()

    $win.on('scroll', processScroll)

    function processScroll() {
      var i, scrollTop = $win.scrollTop()
      if (scrollTop >= navTop && !isFixed) {
        isFixed = 1
        $nav.addClass('subnav-fixed')
        // $topnav.removeClass('navbar-fixed-top')
      } else if (scrollTop <= navTop && isFixed) {
        isFixed = 0
        $nav.removeClass('subnav-fixed')
        // $topnav.addClass('navbar-fixed-top')
      }
    }
})(jQuery);