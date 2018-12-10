$(document).ready(function() {
	document.getElementsByClassName('button')
		[0].addEventListener('click',function () {
		console.log(document.querySelector('.content-data').classList.toggle('content-data-active')   )
	}) 
});


