let main = document.getElementById("main");
let footer = document.getElementById("footer");
let active = document.getElementById("active");
let bar = document.querySelector(".bar");
let cancel = document.querySelector(".cancel")

/*
document.getElementById("nav-btn").onclick=function(){
	main.style.display = "none";
	footer.style.display = "none";
	active.style.display = "flex";
	bar.style.display = "none";
	cancel.style.display = "block";
} */

$('#nav-btn').click(function(){
		$('#navbar .title-tab').toggleClass("active");
		$('#nav-btn i').toggleClass("active");
	});