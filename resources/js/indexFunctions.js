const TOPNAV_ID = "topnav";
const TOPNAV_CLASS = "topnav";

function myFunction() {
	var x = document.getElementById(TOPNAV_ID);
	if (x.classname === TOPNAV_CLASS) {
		x.classname += " responsive";
	}
	else {
		x.classname = TOPNAV_CLASS;
	}
}