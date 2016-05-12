$(document).ready(function() {
$("#titlepage").mouseenter(
  function() {
    $("#titlepage").html( " 南锣鼓巷");
    $("#titlepage").css("font-weight", "bold")
   
  }
 
);

$("#titlepage").mouseleave(
  function() {
    $("#titlepage").html( "Nan Luo Gu Xiang");
   
  }
 
);


$( "#blue" ).hover(
  function() {
    $(".welcome").html( "bei");
    $(".welcome").css( "left", "23%");
  }
 
);
 
$( "#black" ).hover(
  function() {
    $(".welcome").html( "jing");
    $(".welcome").css( "left", "37%");
  }
 
);
 
$( "#red" ).hover(
  function() {
    $(".welcome").html( "huan");
     $(".welcome").css( "left", "58%");
  }
 
);
 
$( "#yellow" ).hover(
  function() {
    $(".welcome").html( "ying");
    $(".welcome").css( "left", "75%");
  }
 
);
 
$( "#green" ).hover(
  function() {
    $(".welcome").html( "ni");
    $(".welcome").css( "left", "95%");
  }
 
);
 
$('#womanpink').toggle(
function () {
document.getElementById('pinkaudio').play();
$("#pinksub").html("I arrived in Beijing right after Chairman Mao liberated the city. My husband and I have lived in the same location this entire time, at Garden 30 Hutong. We’ve never moved from there.");
$('#womanpink').css("opacity", "0.5");
  
},
function () {
document.getElementById('pinkaudio').pause();
$("#pinksub").html("")
$('#womanpink').css("opacity", "1.0")

}
);

$('#womanred').toggle(
function () {
document.getElementById('redaudio').play();
$("#redsub").html("I didn’t know any of my neighbors at my old house. Everyone was always so busy with work and their own stuff. But when we moved to the Hutong in 1997, we started interacting with the neighbors a lot. Everyone in the Hutong had a dish they made the best- for me, it was fish. Another person was known for their shrimp. When it was warm, we’d cook and all eat outside together.");
$('#womanred').css("opacity", "0.5");
  
},
function () {
document.getElementById('redaudio').pause();
$("#redsub").html("")
$('#womanred').css("opacity", "1.0")

}
);

$('#mangreen').toggle(
function () {
document.getElementById('greenaudio').play();
$("#greensub").html("There used to be eight fishponds here, and flowerpot with flowers inside them all around the edge. Now everything is gone. As soon as the old people based away, the old things left with them. Our courtyard used to be filled with flowers, birds, fish, and crickets. It was that kind of courtyard. This was all twenty, twenty-five years ago. Back then, the courtyard was beautiful. The house wasn’t much, but the environment around it was magnificent.");
$('#mangreen').css("opacity", "0.5");
  
},
function () {
document.getElementById('greenaudio').pause();
$("#greensub").html("")
$('#mangreen').css("opacity", "1.0")

}
);



var audio = new Audio('audio/backgroundsound.mp3');
	
function scrollTimes() {
  if(window.innerWidth>=401){
  $('html, body, #largeWrapper').animate({ scrollTop: $(document).height() }, {easing: "linear",duration:150000}).animate({ scrollTop: 0}, "slow");

  audio.play();
  }
  else{
    audio.pause();
  }
 
  
  
}
 

window.setInterval(scrollTimes, 1);




	console.log(window.innerWidth);
	console.log(window.innerHeight);
	
});


