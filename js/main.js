window.onload = function(){
	function getId(id){
		return document.getElementById(id);
	}
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
	/*classwork 1*/
	var elem1 = getId('first');
	var elem2 = getId('second');
	var elem3 = getId('third');
	var vector = true;
	function greener(e){
		this.style.backgroundColor = "green";
		alert("Listener div 1");
		//e.stopPropagation();
	}
	function yellower(e){
		this.style.backgroundColor = "yellow";
		//console.log(this);
		alert("Listener div 2");
		e.stopPropagation();
	}
	function redder(e){
		this.style.backgroundColor = "red";
		//console.log(this);
		alert("Listener div 3");
		e.stopPropagation();
	}
	elem1.addEventListener('click', greener, vector);
	elem2.addEventListener('click', yellower, vector);
	elem3.addEventListener('click', redder, vector);
/*classwork 2*/
var element = getId("nameInput");
//console.log(element.value.length);
	// window.addEventListener("load", function(){
		//variable 'e' is event, which will happend in browser
		document.forms[0].addEventListener('submit', function(e){
			console.log(e);
			if(element.value.length == 0){
				e.preventDefault();
				alert("Enter your name, please");
			}
		}, false);
	// }, false);
}
