
window.onload = setup;


var header;
var aboutDiv;
var skillDiv;
var experiDiv;
var contactDiv;
var aboutTop;
var skillsTop;
var experiTop;
var fillDiv;
var contentDiv;
var aboutContent;
var skillContent;
var experiContent;
var contactContent;

function setup(){
	var mq = window.matchMedia('only screen and (max-device-width: 480px)');

	fillDiv = document.getElementById("filler");
	header = document.getElementById("hdr");

	aboutDiv = document.getElementById("about");
	skillDiv = document.getElementById("skills");
	experiDiv = document.getElementById("experience");
	contactDiv = document.getElementById("contact");

	aboutTop = document.getElementById("aboutTop");
	skillTop = document.getElementById("skillTop");
	experiTop = document.getElementById("experiTop");

	contentDiv = document.getElementById("content");
	aboutContent = document.getElementById("aboutContent");
	skillContent = document.getElementById("skillContent");
	experiContent = document.getElementById("experiContent");
	contactContent = document.getElementById("contactContent");

	
	header.onclick=reset;
	aboutDiv.onclick=aboutOn;
	skillDiv.onclick=skillsOn;
	experiDiv.onclick=experiOn;
	contactDiv.onclick=contactOn;

	aboutTop.onclick=aboutOn;
	skillTop.onclick=skillsOn;
	experiTop.onclick=experiOn;
	
	if (mq.matches == false){
	//only add change on scroll functionality for non-mobile devices
		window.addEventListener('scroll', function(event){
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			if (distanceY >= 100 && distanceY <= 500) {
				aboutOn();
			} else if (distanceY > 500 && distanceY <= 900){
				skillsOn();
			} else if (distanceY > 900 && distanceY <= 1300){
				experiOn();		
			}else if (distanceY > 1300){
				contactOn();		
			}else if (header.classList.contains("small")){
				reset();
			}
		});
	}
}

 
function aboutOn(){
	fillDiv.className="fillAbout";
	header.className= "headAbout small"
	aboutDiv.className= "big aboutBig" ;
	skillDiv.className= "sect"; 
	experiDiv.className= "sect";
	contactDiv.className= "sect";

	aboutContent.classList.remove("invis");
	skillContent.className="invis";
	experiContent.className="invis";
	contactContent.className="invis";
}

function skillsOn(){
	fillDiv.className="fillSkills";
	header.className= "headSkills small";
	aboutDiv.className= "shrink";
	skillDiv.className= "big skillBig" ;
	experiDiv.className="sect";
	contactDiv.className="sect";
	
	aboutContent.className="invis";
	skillContent.classList.remove("invis");
	experiContent.className="invis";
	contactContent.className="invis";

}


function experiOn(){
	fillDiv.className="fillExperience";
	header.className = "small headExperi";
	aboutDiv.className = "shrink";
	skillDiv.className= "shrink";
	experiDiv.className = "big experiBig";
	contactDiv.className="sect";

	aboutContent.className="invis";
	skillContent.className="invis";
	experiContent.classList.remove("invis");
	contactContent.className="invis";
}

function contactOn(){
	fillDiv.className="fillContact";
	header.className = "small headContact";
	aboutDiv.className= "shrink";
	skillDiv.className = "shrink";
	experiDiv.className = "shrink";
	contactDiv.className= "big contactBig";

	aboutContent.className="invis";
	skillContent.className="invis";
	experiContent.className="invis";
	contactContent.classList.remove("invis");
}

function reset(){
	fillDiv.className="";
	header.className= "";
	aboutDiv.className="sect";
	skillDiv.className="sect";
	experiDiv.className="sect";
	contactDiv.className="sect";

	aboutContent.className="invis";
	skillContent.className="invis";
	experiContent.className="invis";
	contactContent.className="invis";
}