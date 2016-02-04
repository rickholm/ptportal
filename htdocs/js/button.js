/* display or hide next page button javascript */
function nextPageButton() {
  this.render = function(showButton) {
	var dialogButton = document.getElementById('dialogbutton');
	/*  none  = button is not displayed  */
	/*  block = button is displayed     */
	dialogButton.style.display = showButton;
  }
}

var setButton = new nextPageButton();
