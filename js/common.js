$(function() {

	$(".toggle-mnu").click(function(){
          $(this).toggleClass("on");
          $(".menu").slideToggle();
        });

	$(".popup").magnificPopup();

	$(".menu ul li a, .button").mPageScroll2id();

	$(".prosm_cat").click(function() {
		$("html, body").animate({ scrollTop: $(".main_head").height()+50 }, "slow");
		return false;
	});

	$(".itemcat__descr p").equalHeights();
	$(".equal_sect4").equalHeights();

	$(".slider").owlCarousel({
        	navigation: true,
        	navigationText: "",
        	items: 5
        	
        });

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.open({
        items: {
          src: '.done'
        },
        type: 'inline'
      });
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
