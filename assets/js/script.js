$(document).ready(function(){



$("#landing-container").height($(window).height());

$("#gallery-container").css("top", $("#landing-container").height());


$("#photo-1").hover(function() {
	$("#text-1").css("visibility", "visible"); 
});

$("#photo-1").mouseleave(function() {
	$("#text-1").css("visibility", "hidden");
});

$("#photo-2").hover(function() {
	$("#text-2").css("visibility", "visible");
});

$("#photo-2").mouseleave(function() {
	$("#text-2").css("visibility", "hidden");
});

$("#photo-3").hover(function() {
	$("#text-3").css("visibility", "visible");
});

$("#photo-3").mouseleave(function() {
	$("#text-3").css("visibility", "hidden");
});

$("#photo-4").hover(function() {
	$("#text-4").css("visibility", "visible");
});

$("#photo-4").mouseleave(function() {
	$("#text-4").css("visibility", "hidden");
});

$("#photo-5").hover(function() {
	$("#text-5").css("visibility", "visible");
});

$("#photo-5").mouseleave(function() {
	$("#text-5").css("visibility", "hidden");
});

$("#photo-6").hover(function() {
	$("#text-6").css("visibility", "visible");
});

$("#photo-6").mouseleave(function() {
	$("#text-6").css("visibility", "hidden");
});

$("#photo-7").hover(function() {
	$("#text-7").css("visibility", "visible");
});

$("#photo-7").mouseleave(function() {
	$("#text-7").css("visibility", "hidden");
});

$("#photo-8").hover(function() {
	$("#text-8").css("visibility", "visible");
});

$("#photo-8").mouseleave(function() {
	$("#text-8").css("visibility", "hidden");
});

$("#photo-9").hover(function() {
	$("#text-9").css("visibility", "visible");
});

$("#photo-9").mouseleave(function() {
	$("#text-9").css("visibility", "hidden");
});




$(window).scroll(function() {
	if ($(window).scrollTop() > 100) {
		$("#scroll-up").addClass("show");
		console.log("rrrrr");
	} else {
	 	$("#scroll-up").removeClass("show");
	 }
});
	$("#scroll-up").on('click', scrollToTop);


function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}


  $("#carousel-next").click(function() {
    var margin = parseInt($('#slideshow-carousel').css('margin-left').replace("px", "")); 
    if (margin == -6720) { 
        return false;
    } else {
        $("#slideshow-carousel").css("margin-left", margin - 960);
   }
});

  $("#carousel-prev").click(function() {
    var margin = parseInt($('#slideshow-carousel').css('margin-left').replace("px", "")); 
    if (margin == 0) {
        return false;
    } else {
        $("#slideshow-carousel").css("margin-left", margin + 960);
   }
});





$("#item-2").click(function() {
	var currentPosition = parseInt($("#slideshow-carousel").css("margin-left").replace("px", ""));
	var toggleIndex = $("#item-2").index();
	var currentIndex = -(currentPosition / 960);
	var difference = (currentIndex - toggleIndex);
			$("#slideshow-carousel").css("margin-left", (currentPosition + (difference * 960)));

});

$("#item-1").click(function() {
	var currentPosition = parseInt($("#slideshow-carousel").css("margin-left").replace("px", ""));
	var toggleIndex = $("#item-1").index();
	var currentIndex = -(currentPosition / 960);
	var difference = (currentIndex - toggleIndex);
		$("#slideshow-carousel").css("margin-left", (currentPosition + (difference * 960)));

});

$("#item-3").click(function() {
	var currentPosition = parseInt($("#slideshow-carousel").css("margin-left").replace("px", ""));
	var toggleIndex = $("#item-3").index();
	var currentIndex = -(currentPosition / 960);
	var difference = (currentIndex - toggleIndex);
		$("#slideshow-carousel").css("margin-left", (currentPosition + (difference * 960)));

});

$("#item-4").click(function() {
	var currentPosition = parseInt($("#slideshow-carousel").css("margin-left").replace("px", ""));
	var toggleIndex = $("#item-4").index();
	var currentIndex = -(currentPosition / 960);
	var difference = (currentIndex - toggleIndex);
		$("#slideshow-carousel").css("margin-left", (currentPosition + (difference * 960)));

});

$("#item-5").click(function() {
	var currentPosition = parseInt($("#slideshow-carousel").css("margin-left").replace("px", ""));
	var toggleIndex = $("#item-5").index();
	var currentIndex = -(currentPosition / 960);
	var difference = (currentIndex - toggleIndex);
		$("#slideshow-carousel").css("margin-left", (currentPosition + (difference * 960)));

});

$("#item-6").click(function() {
	var currentPosition = parseInt($("#slideshow-carousel").css("margin-left").replace("px", ""));
	var toggleIndex = $("#item-6").index();
	var currentIndex = -(currentPosition / 960);
	var difference = (currentIndex - toggleIndex);
		$("#slideshow-carousel").css("margin-left", (currentPosition + (difference * 960)));

});

$("#item-7").click(function() {
	var currentPosition = parseInt($("#slideshow-carousel").css("margin-left").replace("px", ""));
	var toggleIndex = $("#item-7").index();
	var currentIndex = -(currentPosition / 960);
	var difference = (currentIndex - toggleIndex);
		$("#slideshow-carousel").css("margin-left", (currentPosition + (difference * 960)));

});

$("#item-8").click(function() {
	var currentPosition = parseInt($("#slideshow-carousel").css("margin-left").replace("px", ""));
	var toggleIndex = $("#item-8").index();
	var currentIndex = -(currentPosition / 960);
	var difference = (currentIndex - toggleIndex);
		$("#slideshow-carousel").css("margin-left", (currentPosition + (difference * 960)));

});


$("#carousel-next").click(function() {
	$("#slideshow-togglebar").find(".focus").removeClass("focus");
});

$("#carousel-prev").click(function() {
	$("#slideshow-togglebar").find(".focus").removeClass("focus");
});


$(".toggle-item").click(function() {
	$("#slideshow-togglebar").find(".focus").removeClass("focus");
	$(this).addClass("focus");
	
});



});