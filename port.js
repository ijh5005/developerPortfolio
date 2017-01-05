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
																		$("#two").animate({ left: "500px" }, { 
																												duration: 200,
																												start: function () {
																													$("#one img").attr("src", "tease.jpg");
																													$("#profilePicHolder").addClass("playNice");
																													$("#profilePicHolder img").attr("src", "playNice.jpg");
																												}
																											});
																		$("#one").animate({
																			left: "0px"
																		}, {
																			duration: 100,
																			complete: function () {
																				$("#two").addClass("turnFast").addClass("neg20degs");
																				$("#two img").attr("src", "hey.jpg");
																				setTimeout( function () {
																					$("#two").removeClass("turnFast").addClass("turnMed");
																					setTimeout( function () {
																						$("#one img").attr("src", "logicPuzzle.jpg");
																						setTimeout( function () {
																							$("#profilePicHolder").removeClass("playNice");
																							$("#profilePicHolder img").attr("src", "profilePic.jpg");
																						}, 500);
																					}, 500);
																				}, 500);
																				setTimeout( function () {
																					$("#two img").attr("src", "sas.jpg");
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
																											start: function () {
																												$("#two img").attr("src", "smile.jpg");
																											},
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
																														}, { 
																															duration: 500,
																															complete: function () {
																																animateVar = "false";
																																setTimeout( function () {
																																	$("#two img").attr("src", "sas.jpg");
																																}, 500);
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
		if ( animateVar == "false" && width > 1199 && currentPage === 2) {
			animate();
		}
	}, 1000);

	//check for background requirements
	window.setInterval( function () {
		width = $(window).width();
		if ( width > 1199 ) {
			$("#aboutMe, #projects").css("background-image", "url('comic.jpg')");
		} else {
			$("#aboutMe, #projects").css("background-image", "url('')");
		}
	}, 1000);

	//animate pic on about page
	window.setInterval( function () {
		if ( currentPage === 1 ) {
			setTimeout( function () {
				$(".turn img").attr("src", "helloPic.jpg");
				$("#profilePicHolder").addClass("animateTurn");
				setTimeout( function () {
					$(".turn img").attr("src", "profilePic.jpg");
					$("#profilePicHolder").removeClass("animateTurn");
				}, 4500);
			}, 1000);
		}
	}, 15000);

	//about page slide down effect
	$("#projects").click( function () {
		setTimeout( function () {
			$(".aboutP").css("display", "none");
		}, 2000);
	});
	$("#aboutMe").click( function () {
		setTimeout( function () {
			$(".aboutP.one").slideDown(1000, function () {
				$(".aboutP.two").slideDown(500, function () {
					$(".aboutP.three").slideDown(1000, function () {
						$(".aboutP.four").slideDown(1000);
					});
				});
			});
		}, 2000);

	});
});