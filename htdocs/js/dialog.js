/* Dialog box javascript */

function CustomAlert() {
  this.render = function(boxhead,dialog) {
    var winW = window.innerWidth;
	var winH = window.innerHeight;
	var diaglogoverlay = document.getElementById('dialogoverlay');
	var diaglogbox = document.getElementById('dialogbox');
	diaglogoverlay.style.display = "block";
	diaglogoverlay.style.height = winH+"px";
	dialogbox.style.left = (winW/2) - (500 * .5)+"px";
	dialogbox.style.top = "100px";
	dialogbox.style.display = "block";
	document.getElementById('dialogboxhead').innerHTML = boxhead;
	document.getElementById('dialogboxbody').innerHTML = dialog;
	document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">Okay</button>';
  }
  this.ok = function() {
    document.getElementById('dialogbox').style.display="none";
	document.getElementById('dialogoverlay').style.display="none";  
  }
}
var Alert = new CustomAlert();
