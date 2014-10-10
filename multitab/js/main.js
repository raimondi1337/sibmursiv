window.onload=function(){
	$('#bottom1').hide();
	$('#bottom2').hide();
	$('#bottom3').hide();
	$('#bottom4').hide();
	var topShowing = true;
	var botShowing1 = false;
	var botShowing2 = false;
	var botShowing3 = false;
	var botShowing4 = false;
}

function showWork(n){
		//console.log('click1');
		if($("#top").is(":visible")){	
			$( "#top" ).slideToggle("slow");
			$( "#bottom" + n).slideToggle("slow");

			console.log('got it1');
		} 
		else if($("#bottom" + n).is(":visible")){	
			$( "#top" ).slideToggle("slow");
			$( "#bottom" + n).slideToggle("slow");
		}
		else {
			if($("#bottom1").is(":visible")){
				$( "#bottom1").slideToggle("slow");
			}
			if($("#bottom2").is(":visible")){
				$( "#bottom2").slideToggle("slow");
			}
			if($("#bottom3").is(":visible")){
				$( "#bottom3").slideToggle("slow");
			}
			if($("#bottom4").is(":visible")){
				$( "#bottom4").slideToggle("slow");
			}
			$( "#bottom" + n).slideToggle("slow");
		}
		
}


/*function showWork(n){
		console.log('click1');
		if(topShowing == true){	
			$( "#top" ).slideToggle("slow");
			$( "#bottom" + n).slideToggle("slow");
			"botshowing" + n = true;
			console.log('got it1');
		} esle {
			
		
}
/*function showWork2(){
		console.log('click2');
		if($("#top").show() == true){	
			$( "#top" ).slideToggle("slow");
			$( "#bottom2").slideToggle("slow");
			console.log('got it2');
		}
}
function showWork3(){
		console.log('click3');
		if($("#top").show() == true){	
			$( "#top" ).slideToggle("slow");
			$( "#bottom3").slideToggle("slow");
			console.log('got it3');
		}
}
function showWork4(){
		console.log('click4');
		if($("#top").show() == true){	
			$( "#top" ).slideToggle("slow");
			$( "#bottom4").slideToggle("slow");
			console.log('got it4');
		}
}
/*$(document).ready(function(){
  $("button").click(function(){
    $("p").animate({width: 'toggle'}, "slow");
  });
});*/