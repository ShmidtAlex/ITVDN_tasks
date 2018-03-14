var theFieldIsNotEmpty = false;
window.onload = function(){
	function getId(id){
		return document.getElementById(id);
	}
	function getSel(selector){
		return document.querySelector(selector);
	}
	function getClassN(classname){
		return document.getElementsByClassName(classname);
	}
	function getSelAll(selector){
		return document.querySelectorAll(selector);
	}
	function getTags(selector){
		return document.getElementsByTagName(selector);
	}
	var saveMe = getId("saveMe");
	var saveButton = getId("saveButton");
	var fieldAroundBlocks = getId('fieldAroundBlocks');
	// var clickOnPage2 = getId('lessEx');
	// var clickOnPage3 = getId('saveMe');
	console.log(theFieldIsNotEmpty);
	function unsavedText(){
		if(saveMe.value != 0 && saveMe.value != undefined){
			theFieldIsNotEmpty = true;
			console.log(theFieldIsNotEmpty);
		}
	}
	function saving(){
		if(saveMe.value != 0 && saveMe.value != undefined){
			theFieldIsNotEmpty = false;
			console.log(theFieldIsNotEmpty);
		} else console.log("the textfield is empty");
	}
	
	saveButton.addEventListener("click", saving);
	saveMe.addEventListener('keydown', unsavedText);

	var changedTextColor = getId('changedTextColor');
	var certainP = getTags('p');
	//console.log(certainP);
	var red = getId('red');
	var green = getId('green');
	var blue = getId('blue');
	function changeToRed(){
		for(i = 0; i<certainP.length; i++){
			if(certainP[i].parentNode.id == 'changedTextColor'){
				//console.log(certainP[i].parentNode)
				certainP[i].style.color = 'rgba(112, 18, 37, 0.88)';
				certainP[i].style.backgroundColor = "darkgray";
			}
		}
	}
	function changeToGreen(){
		for(i = 0; i<certainP.length; i++){
			if(certainP[i].parentNode.id == 'changedTextColor'){
				//console.log(certainP[i].parentNode)
				certainP[i].style.color = 'green';
				certainP[i].style.backgroundColor = "lightblue";
			}
		}
	}
	function changeToBlue(){
		for(i = 0; i<certainP.length; i++){
			if(certainP[i].parentNode.id == 'changedTextColor'){
				//console.log(certainP[i].parentNode)
				certainP[i].style.color = 'blue';
				certainP[i].style.backgroundColor = "rgba(63, 140, 73, 0.66)";
			}
		}
	}
	red.addEventListener('click', changeToRed);
	green.addEventListener('click', changeToGreen);
	blue.addEventListener('click', changeToBlue);

	var runningBut = getId('runningBut');
	var wrap = getId('wrap');
	//console.log(blockStyle.position);
	function runFromMouse(e){

		var x = e.clientX, y = e.clientY;
		
		if(x<=175 || y<=200){
			console.log("x: "+ x, " y: "+y);
			runningBut.style.top = (y-130)+5 +"px";
			runningBut.style.left = (x-850)+5 + "px";
			console.log("x: " +runningBut.style.left, " y: "+runningBut.style.top);
		}
		
	}
	runningBut.addEventListener('mousemove', runFromMouse);

	/*Key Combinations*/
	var ctrlA = getId('ctrlA');
	var ctrlS = getId('ctrlS');
	var ctrlSS = getId('ctrlShiftS');
	console.log(ctrlSS);
	function saved(e){
		console.log(e.ctrlKey, e.altKey, e.shiftKey, e.key, e.keyCode);
		
		if(e.key == "s" && e.ctrlKey == true){
			e.preventDefault();
			ctrlS.style.visibility = "visible";
			setTimeout(function(){
				ctrlS.style.visibility = "hidden";
			},3000);
		}
	}
	function allChoosed(e){
		if(e.key == "a" && e.ctrlKey == true){
			e.preventDefault();
			ctrlA.style.visibility = "visible";
			setTimeout(function(){
				ctrlA.style.visibility = "hidden";
			},3000);
		}
	}
	function allSaved(e){
		if((e.ctrlKey == true && e.shiftKey == true) && e.key == "S"){
			e.preventDefault();
			ctrlSS.style.visibility = "visible";
			console.log(ctrlSS.style.visibility);
			console.log("TRUE");
			setTimeout(function(){
				ctrlSS.style.visibility = "hidden";
			},3000);
		}
	}

	window.addEventListener('keydown', saved);
	document.addEventListener('keydown', allChoosed);
	document.addEventListener('keydown', allSaved);
}

window.onbeforeunload = function(){
	if(saveMe.value == '') {
		theFieldIsNotEmpty = false;
	}
	console.log(theFieldIsNotEmpty);
	if(theFieldIsNotEmpty == true){
		console.log(theFieldIsNotEmpty);
		return "Are you sure, that you want to close the window???";
	}
}