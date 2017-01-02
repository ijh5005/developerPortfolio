"use strict";

$(document).ready( function () {
	var dot = 1;
	var page = 2;
	var currentPage = 2;
	var mouseovers = function (selector, pic, returnPic) {
		$(selector).mouseover( function () {
			$("" + selector + " img").attr("src", pic);
		});

		$(selector).mouseout( function () {
			$("" + selector + " img").attr("src", returnPic);
		});
	};

	mouseovers(".turn", "helloPic.jpg", "profilePic.jpg");
	mouseovers("#one", "logicPuzzle2.jpg", "logicPuzzle.jpg");
	mouseovers("#two", "sas2.jpg", "sas.jpg");

	$("#aboutMe").click( function () {
		currentPage = 1;
		if( page === currentPage ){

		} else if ( page = 1 ) {
			$(".gallery").animate({
				left: "-100vw"
			}, {
				duration: 1000,
				complete: function () {
					$("#galleryProjects").css("display", "none");
					$("#galleryAbout").css("display", "block");
					$(".gallery").animate({
						left: "0vw"
					}, 1000);
				}
			});
		}
	});
	
	$("#projects").click( function () {
		currentPage = 2;
		if( page === currentPage ){

		} else if ( page = 2 ) {
			$(".gallery").animate({
				left: "-100vw"
			}, {
				duration: 1000,
				complete: function () {
					$("#galleryAbout").css("display", "none");
					$("#galleryProjects").css("display", "block");
					$(".gallery").animate({
						left: "0vw"
					}, 1000);
				}
			});
		}
	});

	var spinProject = function () {
		$(".turnRight").click( function () {
			var thisData = $(this).attr("data");
			var link = $("a[data="+thisData+"]").attr("href");

		    $(this).css("transform", "perspective( 600px ) rotateY(-900deg )");

		    setTimeout(function(){
		         window.location = link;
		    }, 500);       
		});
		$(".turnLeft").click( function () {
			var thisData = $(this).attr("data");
			var link = $("a[data="+thisData+"]").attr("href");

			$(this).css("transform", "perspective( 600px ) rotateY(900deg )");

			setTimeout(function(){
		         window.location = link;
		    }, 500);
		});
	};
	spinProject();

	var dotFunction = function () {
		if ( dot == 1 ){
			$(".dotOne, .dotTwo, .dotThree").css("display", "none");
		} else if ( dot == 2 ) {
			$(".dotOne").css("display", "inline-block");
		}  else if ( dot == 3 ) {
			$(".dotTwo").css("display", "inline-block");
		}  else if ( dot == 4 ) {
			$(".dotThree").css("display", "inline-block");
			dot = 0;
		}
		dot++;
	};

	window.setInterval(function(){
		dotFunction();
	}, 1000);
});