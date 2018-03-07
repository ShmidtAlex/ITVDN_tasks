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
	var vector = false;
	function greener(e){
		this.style.backgroundColor = "green";
		alert("Listener div 1");
		//e.stopPropagation();
	}
	function yellower(e){
		this.style.backgroundColor = "yellow";
		//console.log(this);
		alert("Listener div 2");
		//e.stopPropagation();
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
	
	/*classwork 3 Examples for preventDefault */
	var guard = getId("guardFromUnwantedInput");
	console.log(guard);
	function filtration(e){
		if(String.fromCharCode(e.charCode) !=1 && String.fromCharCode(e.charCode) !=0){
			e.preventDefault();
		}
	}
	guard.addEventListener('keypress', filtration, true);
	/*classwork 4 using e.target instead of "this"*/
	var wrapper = getId('wrapper');
	function changeTargetColor(e){
		e.target.style.backgroundColor = "#de5497";
	}
	wrapper.addEventListener("click", changeTargetColor, false);

	/*classwork 2.1 event's properties*/
	var button1 = getId('button1');

	function handler(e){
		//type of event
		var message = "type = " + e.type + "\r<br>";
		//node of DOMe might doesn't match with  currentTarget
		message += "target = " + e.target +  ". " + "\n";
		//node, which listener is workin in process
		message += "currentTarget = " + e.currentTarget + "\r<br>";
		//nubber, which means the phase. one from these constants:
		//Event.CAPTURING_PHASE =1, Event.AT_TARGET = 2, Event.BUBLING_PHASE = 3
		message += "eventPhase = " + e.eventPhase +  ". " + "\r<br>";
		//Date Object, pointing out when event happend
		message += "timeStamp = " + e.timeStamp +  ". " + "\r<br>";
		//shows true if event is able to surface up to DOM, notice:
		//blur, focuse, load and unload never might to surface 
		message += "bubbles = " + e.bubbles +  ". " + "\r<br>";
		//shows true, if default action which is bound with running event
		//can be canseled with preventDefault()
		message += "cancelable = " + e.cancelable +  ". " + "\r<br>";

		descriptionEvProp.innerHTML = message;
	}
	button1.addEventListener('click', handler, false);

	var button2 = getId('descriptionMouseEvProp');
	function mouseHandler(e){
		var message = '';
		//а это не работало e.button
		message += e.buttons + "<br/>";
		message += "Alt: " + e.altKey + " true если клавиша Alt нажата" + "<br/>";
		message += "Ctrl: " + e.ctrlKey + " true если клавиша ctrl нажата" + "<br/>";
		message += "Shift: " + e.shiftKey + " true если клавиша shift нажата" + "<br/>";
		message += "X: " + e.clientX + " коорд. относ. окна браузера " + "<br/>";
		message += "Y: " + e.clientY + " коорд. относ. окна браузера "+ "<br/>";
		message += "screen X: " + e.screenX + " коорд. относ. экрана "+"<br/>";
		message += "screen Y: " + e.screenY + " коорд. относ. экрана "+"<br/>";
		message += "offset X: " + e.offsetX + " коорд. относ. элемента в кот. события "+"<br/>";
		message += "offset Y: " + e.offsetY + " коорд. относ. элемента в кот. события "+"<br/>";
		//препод не объяснил
		//message += "keyCode : " + e.keyCode + " код зажатой клавиши"+"<br/>";
		
		descriptionMouseEvProp.innerHTML = message;
	}
	button2.addEventListener('mousemove', mouseHandler, false);
	
	/*mouseout mouseover example*/
	var square = getId('square');
	function out(){
		this.style.backgroundColor = '#f0ae16';
	}
	function over(){
		this.style.backgroundColor = '#16f0ab';
	}
	square.addEventListener('mouseover', over, false);
	square.addEventListener('mouseout', out, false);

	/*mousedown/ mousemove/ mouseup events*/
	var one = getId('one');
	var two = getId('two');
	var three = getId('three');
	function down(e){
		//e.layerX for Firefox
		this.innerHTML = "onmouse<b>down</b> event X:" + e.offsetX + " Y:"+ e.offsetY;
		this.style.color ="whitesmoke";
	}
	function move(e){
		//e.layerX for Firefox
		this.innerHTML = "onmouse<b>move</b> event X:" + e.offsetX + " Y:"+ e.offsetY;
		this.style.color ="whitesmoke";
	}
	function up(e){
		//e.layerX for Firefox
		this.innerHTML = "onmouse<b>up</b> event X:" + e.offsetX + " Y:"+ e.offsetY;
		this.style.color ="whitesmoke";
	}
	one.addEventListener('mousedown', down, false);
	two.addEventListener('mousemove', move, false);
	three.addEventListener('mouseup', up, false);

	/*Keyboard events*/
	var field = getId('main');
	console.log(field);
	function print(message){
		var output = getId('output');
		output.innerHTML += message + "<br/>";
	}//print();
	function push(){
		//console.log("i'm working now");
		print("keydown event");
		output.style.color = 'red';
	}
	function keyUp(){
		print("keyup event");
		output.style.color = 'green';
	}
	function press(){
		print("keypress event");
		output.style.color = 'orange';
	}
	field.addEventListener('keypress', press);
	field.addEventListener('keydown', push);
	field.addEventListener('keyup', keyUp)

	/*information from keyboard events*/
	//field the same, function print(message) the same
	var anotherField = getId('main');
	var output2 = getId("output2")
	function clear(){
		output2.innerHTML = "";
	}
	function printInfo(message){
		output2.innerHTML += message + "<br/>";
	}
	function pushForInfo(e){
		clear();
		if(e.keyCode >= 112 && e.keyCode<=123){
			console.log(e.charCode);
			e.preventDefault();
		}
		//console.log(e.charCode);
		printInfo('alt = ' + e.altKey);
		printInfo('ctrl = ' + e.ctrlKey);
		printInfo('shift = ' + e.shiftKey);
		printInfo('charCode = ' + e.charCode);// code of symbol
		printInfo('keyCode = ' + e.keyCode);
		
	}
	anotherField.addEventListener('keydown', pushForInfo);
	anotherField.addEventListener('keypress', pushForInfo);
}
