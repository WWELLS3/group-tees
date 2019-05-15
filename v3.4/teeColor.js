function start(){
	document.getElementById("teeWhite").onclick = function() {whiteTee()};
	document.getElementById("teeGray").onclick = function() {grayTee()};
	document.getElementById("teeRed").onclick = function() {redTee()};
	document.getElementById("teeBlue").onclick = function() {blueTee()};
}
function whiteTee(){
	document.getElementById('shirt').style.backgroundColor = 'white'
}
function grayTee(){
	document.getElementById('shirt').style.backgroundColor = 'lightgray'
}
function redTee(){
	document.getElementById('shirt').style.backgroundColor = 'red'
}
function blueTee(){
	document.getElementById('shirt').style.backgroundColor = 'lightblue'
}
window.addEventListener("load",start,false);