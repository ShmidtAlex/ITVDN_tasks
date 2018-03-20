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
	/*ways to get access to form and its elements*/
	var byId = getId('third');
	var f = document.myForm;
	/*deprecated approach*/
	f.elements[0].value = "enter your first name";
	/*two preferable approaches*/
	f.userSername.value = "enter your second name";
	byId.value = "enter your age";

	/*Input Properties Section*/
	var elemIPS = getId('getAllElem');
	var resIPS = getId('result');
	//console.log(resIPS);
	function getAllElements() {
		var message = "";
		for(var i = 0; i < form1.elements.length; i++) {
			console.log("I'm working on");
			var fE = form1.elements[i];
			message += "value: " + fE.value + "<br/>";
			message += "form: " + fE.form.name + "<br/>";
			message += "type: " + fE.type + "<br/>";
			message += "name: " + fE.name + "<br/>";
			message += "----------------------------" + "<br/>";
		}
		//console.log(resIPS);
		resIPS.innerHTML = message;
	}
	elemIPS.addEventListener('click', getAllElements);

	/*onchange section*/
	var formOCE = getId('thirdSection');
	//console.log(formOCE);
	for ( var i = 0; i < formOCE.elements.length; i++){
		//console.log(formOCE.elements[i]);
		formOCE.elements[i].onchange = function(){
			document.getElementById('output').innerHTML = "Value's been changed in " + this.name;
		}
	}
	var blurAndFocus = getId('onfocOrBlur');
	for(var i = 0; i < blurAndFocus.elements.length; i++){
		blurAndFocus.elements[i].onfocus = function () {
			this.style.border = '1px solid red';
		}
		blurAndFocus.elements[i].onblur = function () {
			this.style.border = "1px dotted green";
		}
	}
	/*water mark (by different and my own way)*/
	//but better way to use placeholder instead this shit
	// var watermarks = ["Insert Login", "Insert Email"];
	// var valField = getId("watermark");
	// var value = [];
	// for (var i = 0; i < valField.length; i++){
	// 	valField.elements[i].value = watermarks[i];
	// 	value.push(valField.elements[i].value);
	// 	//console.log(value);
	// }
	// for (var i = 0; i < valField.length; i++){
	// 	valField.elements[i].onfocus = function () {
	// 		if (this.value !== undefined){
	// 			this.value = "";
	// 			this.style.color = "black";
	// 			this.style.fontStyle = "normal";
	// 		}
	// 	}
	// }
	// for (var i = 0; i < valField.length; i++){
	// 	valField.elements[i].onblur = function () {
	// 		if (this.value === ""){
	// 			for (var j = 0; j < watermarks.length; j++){
	// 				this.value = watermarks[j];
	// 				this.style.color = "gray";
	// 				this.style.fontStyle = "italic";
	// 			}
	// 		}
	// 	}
	// }
}

