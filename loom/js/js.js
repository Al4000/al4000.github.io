
function change_radius() {
	var ul  = document.getElementById("UL").value;
	var	ur  = document.getElementById("UR").value;
	var	dl  = document.getElementById("DL").value;
	var	dr  = document.getElementById("DR").value;
   	var div = document.getElementById("sq");

	div.style.borderRadius = ul + 'px ' + ur + 'px ' + dr + 'px ' + dl + 'px ';
}
