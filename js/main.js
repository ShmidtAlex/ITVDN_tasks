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
	/*validation form*/
	var validForm = getId("validForm");
	var notific = getId("notification");

	function validation(e){
		var isValid = true;
		var listFields = validForm.getElementsByTagName('input');
		for (var i = 0; i < listFields.length; i++) {
			if (listFields[i].value.length === 0) {
				isValid = false;
			}
			if (!isValid) {
				e.preventDefault();
				notific.style.color = "red";
				notific.innerHTML = "all fields are  required";
			}
		}
	}
	validForm.addEventListener('submit', validation);

	// var h5form = getId('h5');
	// var html5 = getId('phonecheck');

	

	// function checkPattern(e) {
	// 	e.preventDefault();
	// 	var str = html5.value;
	// 	var pat1 = /\+\d{4}-\d{3}-\d{3}-\d{2}-\d{2}/;
	// 	console.log(pat1)
	// 	html5.setAttribute("pattern", "\\+\\d{4}-\\d{3}-\\d{3}-\\d{2}-\\d{2}");
	// 	console.log('standart format');
	// 	//var pat2 = /\+\d{1,4}-\d{3}-\d{3}-\d{2}-\d{2}/;
	// 	//var standartPat = pat1;
	// 	console.log(str.match(pat1));
	// 	//console.log(str.match(pat2));

	// 	if (str.match(pat1) === null) {
	// 		html5.setAttribute("pattern", "\\+\\d{4}-\\d{3}-\\d{3}-\\d{2}-\\d{2}");
	// 		console.log('standart format');
	// 	}
	// }
	//+7-495-411-46-46
	//+1356-654-55-12
	//h5form.addEventListener('submit', checkPattern);

	/*VALIDATION FORM HOMEWORK*/
	var failFill = getId("failFill"),
		firstName = getId("fName"),
		secondName = getId("sName"),
		login = getId("login"),
		pass = getId("pass"),
		confirmPass = getId("confPass"),
		emailAddr = getId("email"),
		prevSubm = true,
		subm = getId("submitHomW");
	var passwordValue = "";
	function checkNames() {
		var symbArr = this.value.split('');
		var allowedSymb = /[A-Za-z]/;
		for (var i = 0; i < symbArr.length; i++) {
			if(symbArr[i].match(allowedSymb) === null){
				failFill.innerHTML = "Your name contains disallowed symbols";
				failFill.style.visibility = "visible";
				this.style.border = "2px solid red";
				this.style.backgroundColor = "rgba(225, 0, 100, 0.3)";
				break;
			}
			else {
				failFill.style.visibility = "hidden";
				this.style.border = "2px solid gray";
				this.style.backgroundColor = "white";
				continue;
			}
		}
	}
	function checkLogin() {
		var val = login.value.split('');
		var allowedSymb = /[A-Za-z0-9._]/;
		for (var i = 0; i < val.length; i++) {
			if (val[i].match(allowedSymb) === null) {
				failFill.innerHTML = "Login contains disallowed symbols";
				failFill.style.visibility = "visible";
				login.style.border = "2px solid red";
				this.style.backgroundColor = "rgba(225, 0, 100, 0.3)";
				break;
			}
			else {
				console.log("allowed");
				failFill.style.visibility = "hidden";
				login.style.border = "1px solid gray";
				this.style.backgroundColor = "rgba(225, 0, 100, 0.3)";
				continue;
			}
		}
	}
	function checkPass() {
		passwordValue = pass.value.split('');
		var requiredSymb = /[A-Za-z0-9]/;
		//HOW TO IMPLEMENT CHECKING FOR REQUIRED CUPS LETTERS???
		for (var i = 0; i < passwordValue.length; i++) {
			if (passwordValue[i].match(requiredSymb) === null) {
				failFill.innerHTML = "Password contains disallowed symbols";
				failFill.style.visibility = "visible";
				pass.style.border = "2px solid red";
				this.style.backgroundColor = "rgba(225, 0, 100, 0.3)";
				break;
			}
			else {
				failFill.style.visibility = "hidden";
				pass.style.border = "1px solid gray";
				this.style.backgroundColor = "white";
				continue;
			}
		}
	}
	function checkConfirm() {
		var val = confirmPass.value.split('');
		for (var i = 0; i < val.length; i++) {
			console.log("I'm passwordValue[i] "+passwordValue[i]);
			if (val[i] !== passwordValue[i]) {
				console.log("I'm val[i] "+val[i]);
				failFill.innerHTML = "Password doesn't match";
				failFill.style.visibility = "visible";
				confirmPass.style.border = "2px solid red";
				this.style.backgroundColor = "rgba(225, 0, 100, 0.3)";
				break;
			}
			else {
				failFill.style.visibility = "hidden";
				confirmPass.style.border = "1px solid gray";
				this.style.backgroundColor = "white";
				continue;
			}
		}
	}
	function checkEmailAddr() {
		var val = emailAddr.value;
		var pat = /[a-z0-9._]+@[a-z0-9]+[.]+[a-z{2-4}]/;
		if (val.match(pat) === null){
			prevSubm = false;
			emailAddr.setAttribute("title", "somthing wrong with e-address");
			emailAddr.style.border = "2px solid red";
			this.style.backgroundColor = "rgba(225, 0, 100, 0.3)";
		}
		else {
			prevSubm = true;
			emailAddr.setAttribute("title", "now it's OK");
			emailAddr.style.border = "1px solid gray";
			this.style.backgroundColor = "white";
		}
	}
	function preventSubmit(e) {
		if (prevSubm === false){
			e.preventDefault();
		}
	}
	firstName.addEventListener("blur", checkNames);
	secondName.addEventListener("blur", checkNames);
	login.addEventListener("blur", checkLogin);
	pass.addEventListener("blur", checkPass);
	confirmPass.addEventListener("blur", checkConfirm);
	emailAddr.addEventListener("blur", checkEmailAddr);
	subm.addEventListener("click", preventSubmit);
}

