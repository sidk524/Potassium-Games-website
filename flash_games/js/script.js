var images = ["example.jfif", "example1.jfif", "example2.jfif"];
var index = 0;
var darkMode = false;
function changeImage (){
	index = index + 1
	document.getElementById("image").src = images[index];
	if (index == 2){
		index = -1;
	}
}

setInterval(changeImage, 7000)

function changeTheme (){
	if (document.getElementById("darkModeCheck").checked == true){
		document.getElementById("slideContent").style = "background-color:#121212";
		for (var i = 0; i<document.getElementsByClassName("infoText").length; i++){
			document.getElementsByClassName("infoText")[i].style.color = "white";
		}
		for (var i = 0; i<document.getElementsByClassName("infoButton").length; i++){
			document.getElementsByClassName("infoButton")[i].style = "background-color:rgba(0,0,0,1);";
		}
		for (var i = 0; i<document.getElementsByClassName("infoButton").length; i++){
			document.getElementsByClassName("infoButton")[i].style.color = "white";
		}
		for (var i = 0; i<document.getElementsByClassName("infoBox").length; i++){
			document.getElementsByClassName("infoBox")[i].style.color = "white";
		}
		for (var i = 0; i<document.getElementsByClassName("infoBox").length; i++){
			document.getElementsByClassName("infoBox")[i].style = "background-color:#121212";
		}

		for (var i = 0; i<document.getElementsByClassName("infoBoxText").length; i++){
			document.getElementsByClassName("infoBoxText")[i].style = "background-color:rgba(0,0,0,1)";
		}
		for (var i = 0; i<document.getElementsByClassName("infoBoxText").length; i++){
			document.getElementsByClassName("infoBoxText")[i].style.color = "white";
		}
		for (var i = 0; i<document.getElementsByClassName("learnMore").length; i++){
			document.getElementsByClassName("learnMore")[i].style.color = "white";
		}
		for (var i = 0; i<document.getElementsByClassName("learnMore").length; i++){
			document.getElementsByClassName("learnMore")[i].style = "background-color:#121212";
		}
	} else{
		document.getElementById("slideContent").style = "background-color:#9CC3D5FF";
		for (var i = 0; i<document.getElementsByClassName("infoText").length; i++){
			document.getElementsByClassName("infoText")[i].style.color = "black";
		}
		for (var i = 0; i<document.getElementsByClassName("infoButton").length; i++){
			document.getElementsByClassName("infoButton")[i].style.color = "black";
		}
		for (var i = 0; i<document.getElementsByClassName("infoButton").length; i++){
			document.getElementsByClassName("infoButton")[i].style = "background-color:#0063B2FF";
		}
		for (var i = 0; i<document.getElementsByClassName("infoBox").length; i++){
			document.getElementsByClassName("infoBox")[i].style.color = "black";
		}
		for (var i = 0; i<document.getElementsByClassName("infoBox").length; i++){
			document.getElementsByClassName("infoBox")[i].style = "background-color:#FCF6F5FF";
		}
		for (var i = 0; i<document.getElementsByClassName("infoBoxText").length; i++){
			document.getElementsByClassName("infoBoxText")[i].style = "background-color:#FAEBD7";
		}
		for (var i = 0; i<document.getElementsByClassName("infoBoxText").length; i++){
			document.getElementsByClassName("infoBoxText")[i].style.color = "black";
		}
		for (var i = 0; i<document.getElementsByClassName("learnMore").length; i++){
			document.getElementsByClassName("learnMore")[i].style.color = "black";
		}
		for (var i = 0; i<document.getElementsByClassName("learnMore").length; i++){
			document.getElementsByClassName("learnMore")[i].style = "background-color: #0063B2FF;";
		}

	}
}
//setInterval(changeTheme, 100)



	

