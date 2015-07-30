window.onload = setup;
function setup(){
	window.addEventListener('scroll', function(event){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var	shrinkOn = 300;
        var header = document.getElementById("logo");
        if (distanceY > shrinkOn) {
        	header.classList.add("small");
        }else if (header.classList.contains("small")){
        	header.classList.remove("small");
        }
    });
}

