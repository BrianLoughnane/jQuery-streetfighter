$(document).ready(function() {

	$(".ryu")
	.on("mouseenter", function() {
		$(".action").hide();
		$(".ryu-ready").show();
	})
	.on("mouseleave", function() {
		$(".action").hide();
		$(".ryu-still").show();
	})
	.on("mousedown", function() {
		playHadouken();
		$(".action").hide();
		$(".ryu-throwing").show();
		$(".chun")
		.show()
		.animate({"left":"700px"}, 
			2000,
			function() {
				$(this).hide();
				$(this).css("left", "50px");
			}
			);
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
		$(".action").hide();
		$(".ryu-ready").show();
	});

	$(document)
	.on(
	"keydown", 
	function(event) {
		if( event.which === 88) {
			console.log("Keydown");
			$(".action").hide();
			$(".ryu-cool").show();
		};
	})
	.on(
	"keyup",
	function(event) {
		if(event.which === 88) {
			console.log("keyup");
			$(".action").hide();
			$(".ryu-still").show();
		}
	}
	);


});

function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}