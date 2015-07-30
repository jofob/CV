window.onload = setup;

var header;
var aboutDiv;
var skillDiv;
var experiDiv;
var contactDiv;

function setup(){
	header = document.getElementById("hdr");
	aboutDiv = document.getElementById("about");
	skillDiv = document.getElementById("skills");
	experiDiv = document.getElementById("experience");
	contactDiv = document.getElementById("contact");
	
	header.onclick=reset;
	aboutDiv.onclick=aboutOn;
	skillDiv.onclick=skillsOn;
	experiDiv.onclick=experiOn;
	contactDiv.onclick=contactOn;
}	
/* 	window.addEventListener('scroll', function(event){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        if (distanceY >= 100 && distanceY <= 300) {
			aboutOn();
		} else if (distanceY > 300 && distanceY <= 500){
			skillsOn();
		} else if (distanceY > 500 && distanceY <= 700){
			experiOn();		
        }else if (distanceY > 700 && distanceY <= 900){
			contactOn();		
        }else if (header.classList.contains("small")){
        	reset();
        }
    });
} */
 
function aboutOn(){
	header.className= "headAbout small"
	aboutDiv.className= "big aboutBig" ;
	skillDiv.className= "sect";
	experiDiv.className="sect";
	contactDiv.className="sect";
}

function skillsOn(){
	header.className= "headSkills small"
	aboutDiv.className= "sect aboutDone";
	skillDiv.className= "big skillBig" ;
	experiDiv.className="sect";
	contactDiv.className="sect";
}


function experiOn(){
	header.className = "small headExperi";
	aboutDiv.className= "sect aboutDone";
	skillDiv.className = "sect skillDone";
	experiDiv.className = "big experiBig";
	contactDiv.className="sect";
}

function contactOn(){
	header.className = "small headContact";
	aboutDiv.className= "sect aboutDone";
	skillDiv.className = "sect skillDone";
	experiDiv.className = "sect experiDone";
	contactDiv.className="big contactBig";
}

function reset(){
	header.className= "";
	aboutDiv.className="sect";
	skillDiv.className="sect";
	experiDiv.className="sect";
	contactDiv.className="sect";
}