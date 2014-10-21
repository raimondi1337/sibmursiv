var atTop = true;

window.onload=function(){
	//hide the bottom section and the up
	$('#bottom').hide();
	$('#upButton').hide();

	//create alide toggles on click
	$('#upButton').click(function(){
		toggle();
	});
	$('#upButton').children().addClass("clickable");
	$('#tabs').children().on("click", function(){
		toggle();
	});
	$('#tabs').children().addClass("clickable");
	$('#pics').children().on("click", function(){
		toggle();
	});
	$('#pics').children().addClass("clickable");
}

function toggle(){
		$( "#top" ).slideToggle("fast");
		$( "#bottom" ).slideToggle("fast");
		$( "#upButton" ).slideToggle("fast");

		if(atTop){
			$("html, body").animate({ scrollTop: 0 }, "fast");
			$("#tabs").children().off("click");
			$('#tabs').children().removeClass("clickable");
			$("#pics").children().off("click");
			$('#pics').children().removeClass("clickable");
			atTop=false;
		} else {
			$("html, body").animate({ scrollTop: $(document).height() }, "fast");
			$("#tabs").children().on("click", function(){
				toggle();
			});
			$('#tabs').children().addClass("clickable");
			$('#tabs').children().addClass("clickable");
			$('#pics').children().on("click", function(){
				toggle();
			});
			$('#pics').children().addClass("clickable");
			atTop=true;
		}
}