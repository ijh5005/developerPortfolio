"use strict";

$(document).ready( function () {
	var dot = 1;
	var page = 2;
	var currentPage = 2;
	var animateVar = "false";
	var width = $(window).width();

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

	//animate the page
	var animate = function () {
		animateVar = "true";
		$("#one").animate({left:"-25px"}).animate({ left: "15px"}, { 
																	duration: 100,
																	complete: function () {
																		$("#two").animate({ left: "500px" }, { duration: 200 });
																		$("#one").animate({
																			left: "0px"
																		}, {
																			duration: 100,
																			complete: function () {
																				$("#two").addClass("turnFast").addClass("neg20degs");
																				setTimeout( function () {
																					$("#two").removeClass("turnFast").addClass("turnMed");
																				}, 500);
																				setTimeout( function () {
																					$("#two").removeClass("neg20degs");
																					setTimeout( function () {
																						$("#two").animate({
																							left: "400px"
																						}, {
																							complete: function () {
																								$("#one").addClass("turnFast").addClass("pos20degs");
																								setTimeout( function () {
																									$("#one").removeClass("turnFast").addClass("turnMed");
																								}, 500);
																								setTimeout( function() {
																									$("#one").removeClass("pos20degs");
																									setTimeout( function () {
																										$("#two").animate({
																											left: "100px"
																										}, {
																											complete: function () {
																												$("#one").addClass("turnFast").addClass("pos20degs");
																												setTimeout( function () {
																													$("#one").removeClass("turnFast").addClass("turnMed");
																												}, 500);
																												setTimeout( function () {
																													$("#one").removeClass("pos20degs");
																													setTimeout( function () {
																														$("#two").animate({
																															left: "0px"
																														}, { duration: 500, complete: function () {
																															animateVar = "false";
																														}});
																													}, 200);
																												}, 800);
																											}
																										});
																									}, 200)
																								}, 800);
																							}
																						});
																					}, 800);
																				}, 1800);
																			}
																		});
																	}
		});
	};

	//watching animation window size and animateVar requirements
	window.setInterval( function () {
		width = $(window).width();
		if ( animateVar == "false" && width > 1199) {
			animate();
		}
	}, 1000);
});