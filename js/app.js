$(document).ready(function() {

	$(".ryu")
	.on("mouseenter", function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.on("mouseleave", function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.on("mousedown", function() {
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate(
			{"left":"300px"}, 
			300, 
			function() {
				$(this).hide();
				$(this).css("left", "-212px");	
			}
		);
	})
	.on("mouseup", function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		// $(".hadouken").hide().css({"left":"-212px"});
	});
});

function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}