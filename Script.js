var i = 0;

function nav() {
	if (i == 0){
		document.getElementById("collapsible").style.height = "125px";
		i=1;
	}
	else {
		document.getElementById("collapsible").style.height = "0";
		i=0;
	}
}