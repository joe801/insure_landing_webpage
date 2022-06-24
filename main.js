let main = document.getElementById("main");
let footer = document.getElementById("footer");
let active = document.getElementById("active");
let bar = document.querySelector(".bar");
let cancel = document.querySelector(".cancel")

$('#nav-btn').click(function(){
	$('#navbar .title-tab').toggleClass("active");
	$('#nav-btn i').toggleClass("active");
});