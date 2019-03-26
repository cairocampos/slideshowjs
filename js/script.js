var aux = 0;
var ball = document.getElementsByClassName("ball");
var slidewidth = document.getElementById("slideshow").offsetWidth;
window.onload = function()
{	
	setInterval(elapse, 2000);	
	var objs = document.getElementsByClassName("slide");

	for(var i in objs) {
		objs[i].style.width = slidewidth+"px";
	}
}

function elapse()
{
	if(aux >= 3) {
		aux = 0;
	} else {
		aux++;
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * aux)+"px";	

	for(var i = 0; i < ball.length; i++) {

		ball[i].style.backgroundColor = "#666";

		if(i == aux) {
			ball[i].style.backgroundColor = "red";
		}

	}

}

function nextSlide(pos) {
	aux = pos;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * aux)+"px";
	
	if(i == aux) {
		ball[i].style.backgroundColor = "red";
	}
}

