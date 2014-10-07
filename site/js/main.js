var atTop = true;

window.onload=function(){
	$('#bottom').hide();
}

function toggle(){
		$( "#top" ).slideToggle("fast");
		$( "#bottom" ).slideToggle("fast");

		if(atTop){
			$("html, body").animate({ scrollTop: 0 }, "fast");
			atTop=false;
		} else {
			$("html, body").animate({ scrollTop: $(document).height() }, "fast");
			atTop=true;
		}
}