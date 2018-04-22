var theFieldIsNotEmpty = false;
window.onload = function(){
	function getId(id){
		return document.getElementById(id);
	}
	function getSel(selector){
		return document.querySelector(selector);
	}
	function getClassN(selector){
		return document.getElementsByClassName(selector);
	}
	function getSelAll(selector){
		return document.querySelectorAll(selector);
	}
	function getTags(selector){
		return document.getElementsByTagName(selector);
	}
	function getName(selector) {
		return document.getElementsByName(selector);
	}
	const PIZZAS = [
		{name: 'margarita', size: 'small', cost: 2.50, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		{name: 'margarita', size: 'middle', cost: 3.00, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		{name: 'margarita', size: 'large', cost: 3.50, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},

		{name: 'peperoni', size: 'small', cost: 2.50, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		{name: 'peperoni', size: 'middle', cost: 3.00, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		{name: 'peperoni', size: 'large', cost: 3.50, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},

		{name: 'napoli', size: 'small', cost: 2.50, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		{name: 'napoli', size: 'middle', cost: 3.00, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		{name: 'napoli', size: 'large', cost: 3.50, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},

		{name: 'season4', size: 'small', cost: 2.50, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		{name: 'season4', size: 'middle', cost: 3.00, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		{name: 'season4', size: 'large', cost: 3.50, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},

		{name: 'calzone', size: 'small', cost: 2.50, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		{name: 'calzone', size: 'middle', cost: 3.00, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		{name: 'calzone', size: 'large', cost: 3.50, availableExtras: ['Mozzarella', 'tomatoes', 'basil', 'olives', 'beef', 'bacon', 'mashrooms', 'chicken', 'onion', 'oregano', 'hot red peper']},
		/*template for creation new untis*/
		// {name: 'newpizza', size: 'small', cost: 'newcost', availableExtras: ['extra1', 'extra2']},
		// {name: 'newpizza', size: 'middle', cost:'newcost', availableExtras: ['extra1', 'extra2']},
		// {name: 'newpizza', size: 'large', cost: 'newcost', availableExtras: ['extra1', 'extra2']},

	]
	const EXTRAS = [
		{name: "Mozzarella", cost: 0.4},
		{name: "tomatoes", cost: 0.3},
		{name: "basil", cost: 0.3},
		{name: "olives", cost: 0.3},
		{name: "beef", cost: 0.5},
		{name: "bacon", cost: 0.5},
		{name: "mashrooms", cost: 0.3},
		{name: "chicken", cost: 0.4},
		{name: "onion", cost: 0.3},
		{name: "oregano", cost: 0.3},
		{name: "hot red peper", cost: 0.3}
	]
	console.log(EXTRAS[0].name);
	function renderPizza(pizzaData, pizzaNode) {

	}
	// var pizzaUnit = [
	// 		size = {small, middle, large},
	// 		pictures = 
	// ]
	var redactButs;
		extra = getSelAll(".costOfAdds"),
		priceInitial = getSelAll(".cost"),
		sizeButtons = document.querySelectorAll(".sizeButton"),
		order = getId("order");
	var liHeight, itemM, itemP, itemN, itemF, itemC, costM, costP, costN, costF, costC;
		//counter = 0,
		size = "";
	function initialValues() {
		for (var i = 0; i < extra.length; i++) {
		extra[i].innerHTML = "for 0.3$ each"
		};
		for (var i = 0; i < priceInitial.length; i++) {
			priceInitial[i].firstElementChild.innerHTML = 0;
		};
	}
	initialValues();
	function currencySettings() {
		var curr = getSelAll("#currency");
		console.log(curr);
		for (var i = 0, max = curr.length; i < max; i++) {
			curr[i].innerHTML = "$";
		}
	}
	currencySettings();
	//PIZZA'S UNIT FACTORY
	function PizzaUnit(priceSmall, priceMid, priceLarge, pizzaName, idCount, idPrice, totUnCost) {
		this.small = priceSmall;
		this.middle = priceMid;
		this.large = priceLarge;
		this.pizzaName = pizzaName;
		this.idCount = idCount;
		this.idPrice = idPrice;

		this.addSmall = function() {
			var countId = getId(this.idCount);
			var priceId = getId(this.idPrice);
			countId.innerHTML++;
			//console.log(priceId.innerHTML);
			if(priceId.innerHTML === "0"){
				priceId.innerHTML = this.small.toFixed(2);;
				console.log(priceId.innerHTML);
			}
			else {
				priceId.innerHTML = Number(priceId.innerHTML) + this.small;
				console.log(priceId.innerHTML)
			}
			//counter += this.small;
			totalCost.innerHTML = Number(totalCost.innerHTML) + Number(this.small);
			size = " small " + this.pizzaName;
		}.bind(this);
		this.addMiddle = function() {
			var countId = getId(this.idCount),
				priceId = getId(this.idPrice);
			countId.innerHTML++;
			if(priceId.innerHTML === "0"){
				priceId.innerHTML = this.middle.toFixed(2);
			}
			else {
				var forFixed = Number(priceId.innerHTML) + this.middle;
				priceId.innerHTML = forFixed.toFixed(2);
			}
			//counter += this.middle;
			totalCost.innerHTML = Number(totalCost.innerHTML) + Number(this.middle.toFixed(2));
			size = " middle " + this.pizzaName;
		}.bind(this);
		this.addLarge = function() {
			var countId = getId(this.idCount);
			var priceId = getId(this.idPrice);
			countId.innerHTML++;
			if(priceId.innerHTML === "0"){
				priceId.innerHTML = this.large.toFixed(2);
			}
			else {
				var forFixed = Number(priceId.innerHTML) + this.large;
				priceId.innerHTML = forFixed.toFixed(2);
			}
			//counter += this.large;
			totalCost.innerHTML = Number(totalCost.innerHTML) + Number(this.large.toFixed(2));
			size = " large " + this.pizzaName;
		}.bind(this);
	};
	//PizzaUnit.prototype.totalUnitcost = 0;
	var margo = new PizzaUnit(2.5, 3, 3.5, "margarita", "margoNumb", "margaritasCost", 0);
	var peperoni = new PizzaUnit(3, 3.5, 4, "peperoni", "peperNumb", "peperoniCost", 0);
	var napoli = new PizzaUnit(3.25, 3.75, 4.25, "napoli", "napoNumb", "napoliCost", 0);
	var season4 = new PizzaUnit(3.5, 4, 4.5, "season4", "seas4Numb", "fourSeasonCost", 0);
	var calzone = new PizzaUnit(3.15, 3.65, 4.15, "calzone", "calzNumb", "calzoneCost", 0);
	//MANAGE MAIN UNIT SECTION
	var curr = getId("currency");
	var totalCost = getId("totalCost");
	var margaritaSmall = getId("margaritaSmall"),
		margaritaMiddle = getId("margaritaMiddle"),
		margaritaLarge = getId("margaritaLarge"),
		peperSmall = getId("peperoniSmall"),
		peperMiddle = getId("peperoniMiddle"),
		peperLarge = getId("peperoniLarge"),
		napoliSmall = getId("napoliSmall"),
		napoliMiddle = getId("napoliMiddle"),
		napoliLarge = getId("napoliLarge"),
		season4Small = getId("season4Small"),
		season4Middle = getId("season4Middle"),
		season4Large = getId("season4Large"),
		calzoneSmall = getId("calzoneSmall"),
		calzoneMiddle = getId("calzoneMiddle"),
		calzoneLarge = getId("calzoneLarge");
	var minuses,
		extraCost,
		targetField,
		light;

	function defineTarget() {
		var parelem = this.parentElement;
		if(parelem.parentElement.id === "margoUnit"){
			targetField = "margaritasCost";
			targetLine = costM;
		}
		else if(parelem.parentElement.id === "peperUnit"){
			targetField = "peperoniCost";
			targetLine = costP;
		}
		else if(parelem.parentElement.id === "napoliUnit"){
			targetField = "napoliCost";
			targetLine = costN;
		}
		else if(parelem.parentElement.id === "season4Unit"){
			targetField = "fourSeasonCost";
			targetLine = costF;
		}
		else if(parelem.parentElement.id === "calzoneUnit"){
			targetField = "calzoneCost";
			targetLine = costC;
		}
		return targetField;
	}
	function defineExtrasCost() {
		var names = this.name;
		if(names === "beef" || names === "bacon"){
			extraCost = 0.5;
		} else if (names === "chicken" || names === "cheese") {
			extraCost = 0.4;
		} else { 
			extraCost = 0.3;
		}
		return extraCost;
	}
	
	function extraCostToTargetFields(){
		var f = getId(targetField);
		if(f.innerHTML === "0") {
			return f.innerHTML;
		}else {
			var forFixed = Number(f.innerHTML) + extraCost;
			f.innerHTML = forFixed.toFixed(2);
			forFixed = Number(totalCost.innerHTML) + extraCost;
			totalCost.innerHTML = forFixed.toFixed(2);
		} return f.innerHTML;
	}
	//MANAGE SHOPPING CHART SECTION
	function checkIndexOf(str, constr){
		var cost;
		if(str.indexOf("small") === 1) {
			cost = constr.small;
		}
		if (str.indexOf("middle") === 1){
			cost = constr.middle;
		} 
		if (str.indexOf("large") === 1){
			cost = constr.large;
		}
		return cost;
	}
	function addToChart() {
		var parelem = this.parentElement;
		if(parelem.parentElement.id === "margoUnit") {
			itemM = document.createElement("li");
			itemM.setAttribute("class", "light");
			itemM.setAttribute("name", "margoLine");
			var textItem = document.createTextNode(size);
			var sizeName = itemM.appendChild(textItem);
			order.appendChild(itemM);
			redactM = document.createElement("input");
			redactM.setAttribute("type", "button");
			redactM.setAttribute("value", "delete");
			redactM.setAttribute("class", "redactBut");
			redactM.setAttribute("id", "redactM");
			order.appendChild(redactM);
			costM = checkIndexOf(size, margo);
		}
		else if(parelem.parentElement.id === "peperUnit") {
			itemP = document.createElement("li");
			itemP.setAttribute("class", "light");
			itemP.setAttribute("name", "peperLine");
			var textItem = document.createTextNode(size);
			var sizeName = itemP.appendChild(textItem);
			order.appendChild(itemP);
			redactP = document.createElement("input");
			redactP.setAttribute("type", "button");
			redactP.setAttribute("value", "delete");
			redactP.setAttribute("class", "redactBut");
			redactP.setAttribute("id", "redactP");
			order.appendChild(redactP);
			costP = checkIndexOf(size, peperoni);
		}
		else if(parelem.parentElement.id === "napoliUnit") {
			itemN = document.createElement("li");
			itemN.setAttribute("class", "light");
			itemN.setAttribute("name", "napoliLine");
			var textItem = document.createTextNode(size);
			var sizeName = itemN.appendChild(textItem);
			order.appendChild(itemN);
			redactN = document.createElement("input");
			redactN.setAttribute("type", "button");
			redactN.setAttribute("value", "delete");
			redactN.setAttribute("class", "redactBut");
			redactN.setAttribute("id", "redactN");
			order.appendChild(redactN);
			costN = checkIndexOf(size, napoli);
		}
		else if(parelem.parentElement.id === "season4Unit") {
			itemF = document.createElement("li");
			itemF.setAttribute("class", "light");
			itemF.setAttribute("name", "season4Line");
			var textItem = document.createTextNode(size);
			var sizeName = itemF.appendChild(textItem);
			order.appendChild(itemF);
			redactF = document.createElement("input");
			redactF.setAttribute("type", "button");
			redactF.setAttribute("value", "delete");
			redactF.setAttribute("class", "redactBut");
			redactF.setAttribute("id", "redactF");
			order.appendChild(redactF);
			costF = checkIndexOf(size, season4);
		}
		else if(parelem.parentElement.id === "calzoneUnit") {
			itemC = document.createElement("li");
			itemC.setAttribute("class", "light");
			itemC.setAttribute("name", "calzoneLine");
			var textItem = document.createTextNode(size);
			var sizeName = itemC.appendChild(textItem);
			order.appendChild(itemC);
			redactC = document.createElement("input");
			redactC.setAttribute("type", "button");
			redactC.setAttribute("value", "delete");
			redactC.setAttribute("class", "redactBut");
			redactC.setAttribute("id", "redactC");
			order.appendChild(redactC);
			costC = checkIndexOf(size, calzone);
		}
		redactButs = document.querySelectorAll(".redactBut");
		redactButs.forEach(redactBut => redactBut.addEventListener('click', removeFromChart));
		light = getSelAll('.light');
	}
	function addToCertainOrder() {
		var parelem = this.parentElement;
		if(parelem.id === "margoExt"){
			var inputItemMinus = document.createElement("input");
			inputItemMinus.setAttribute("type", "button");
			inputItemMinus.setAttribute("value", "-");
			inputItemMinus.setAttribute('class', "minus");
			var textItem = document.createTextNode(", " + this.value);
			inputItemMinus.setAttribute("name", this.value);
			itemM.appendChild(textItem);
			itemM.appendChild(inputItemMinus);
			liHeight = getComputedStyle(itemM).height;
			getId("redactM").style.height = liHeight;
			costM = costM + extraCost;
			costM = Number(costM.toFixed(2));
		}
		if(parelem.id === "peperExt"){
			var inputItemMinus = document.createElement("input");
			inputItemMinus.setAttribute("type", "button");
			inputItemMinus.setAttribute("value", "-");
			inputItemMinus.setAttribute('class', "minus");
			var textItem = document.createTextNode(", " + this.value);
			inputItemMinus.setAttribute("name", this.value);
			itemP.appendChild(textItem);
			itemP.appendChild(inputItemMinus);
			liHeight = getComputedStyle(itemP).height;
			getId("redactP").style.height = liHeight;
			costP = costP + extraCost;
			costP = Number(costP.toFixed(2));
		}
		if(parelem.id === "napoliExt"){
			var inputItemMinus = document.createElement("input");
			inputItemMinus.setAttribute("type", "button");
			inputItemMinus.setAttribute("value", "-");
			inputItemMinus.setAttribute('class', "minus");
			var textItem = document.createTextNode(", " + this.value);
			inputItemMinus.setAttribute("name", this.value);
			itemN.appendChild(textItem);
			itemN.appendChild(inputItemMinus);
			liHeight = getComputedStyle(itemN).height;
			getId("redactN").style.height = liHeight;
			costN = costN + extraCost;
			costN = Number(costN.toFixed(2));
		}
		if(parelem.id === "season4Ext"){
			var inputItemMinus = document.createElement("input");
			inputItemMinus.setAttribute("type", "button");
			inputItemMinus.setAttribute("value", "-");
			inputItemMinus.setAttribute('class', "minus");
			var textItem = document.createTextNode(", " + this.value);
			inputItemMinus.setAttribute("name", this.value);
			itemF.appendChild(textItem);
			itemF.appendChild(inputItemMinus);
			liHeight = getComputedStyle(itemF).height;
			getId("redactF").style.height = liHeight;
			costF = costF + extraCost;
			costF = Number(costF.toFixed(2));
		}
		else if(parelem.id === "calzoneExt"){
			var inputItemMinus = document.createElement("input");
			inputItemMinus.setAttribute("type", "button");
			inputItemMinus.setAttribute("value", "-");
			inputItemMinus.setAttribute('class', "minus");
			var textItem = document.createTextNode(", " + this.value);
			inputItemMinus.setAttribute("name", this.value);
			itemC.appendChild(textItem);
			itemC.appendChild(inputItemMinus);
			liHeight = getComputedStyle(itemC).height;
			getId("redactC").style.height = liHeight;
			costC = costC + extraCost;
			costC = Number(costC.toFixed(2));
		}
		minuses = getSelAll(".minus");
		minuses.forEach(minus => minus.addEventListener("click", removeFromOrder));
		//MAKE A COUNTER OF PIECES SAME ADDS
	}
	function removeFromChart() {
		var countRes;
		if(this.id === "redactM"){
			var margoDel = getId(margo.idPrice);
			order.removeChild(itemM);
			order.removeChild(redactM);
			totalCost.innerHTML = (Number(totalCost.innerHTML) - costM).toFixed(2);
			margoDel.innerHTML = (Number(margoDel.innerHTML) - costM).toFixed(2);
			costM = 0;
			countRes = getId(margo.idCount).innerHTML--;
		}
		if(this.id === "redactP") {
			var peperDel = getId(peperoni.idPrice);
			order.removeChild(itemP);
			order.removeChild(redactP);
			totalCost.innerHTML = (Number(totalCost.innerHTML) - costP).toFixed(2);
			peperDel.innerHTML = (Number(peperDel.innerHTML) - costP).toFixed(2);
			costP = 0;
			countRes = getId(peperoni.idCount).innerHTML--;
		}
		if(this.id === "redactN"){
			var napoliDel = getId(napoli.idPrice);
			order.removeChild(itemN);
			order.removeChild(redactN);
			totalCost.innerHTML = (Number(totalCost.innerHTML) - costN).toFixed(2);
			napoliDel.innerHTML = (Number(napoliDel.innerHTML) - costN).toFixed(2);
			costN = 0;
			countRes = getId(napoli.idCount).innerHTML--;
		}
		if(this.id === "redactF") {
			var season4Del = getId(season4.idPrice);
			order.removeChild(itemF);
			order.removeChild(redactF);
			totalCost.innerHTML = (Number(totalCost.innerHTML) - costF).toFixed(2);
			season4Del.innerHTML = (Number(season4Del.innerHTML) - costF).toFixed(2);
			costF = 0;
			countRes = getId(season4.idCount).innerHTML--;
		}
		if(this.id === "redactC") {
			var calzoneDel = getId(calzone.idPrice);
			order.removeChild(itemC);
			order.removeChild(redactC);
			totalCost.innerHTML = (Number(totalCost.innerHTML) - costC).toFixed(2);
			calzoneDel.innerHTML = (Number(calzoneDel.innerHTML) - costC).toFixed(2);
			costC = 0;
			countRes = getId(calzone.idCount).innerHTML--;
		}
	}
	function defineExtrasCostToRemove(element){
		if(element.indexOf("beef") !== -1 || element.indexOf("bacon") !== -1){
				extraCost = 0.5;
			} 
			else if (element.indexOf("chicken") !== -1 || element.indexOf("cheese") !== -1) {
				extraCost = 0.4;
			} 
			else { 
				extraCost = 0.3;
			}
			return extraCost;
	}
	function removeFromOrder(){
		if(this.class = "minus"){
			var margoDel = getId(margo.idPrice), 
				peperDel = getId(peperoni.idPrice),
				napoliDel = getId(napoli.idPrice),
				season4Del = getId(season4.idPrice),
				calzoneDel = getId(calzone.idPrice);
			var parelem = this.parentElement;
			var name = parelem.getAttribute("name");
			defineExtrasCostToRemove(this.name);
			console.log(margoDel.innerHTML);
			switch(name){
				case "margoLine": costM = costM - extraCost;
								  totalCost.innerHTML = (Number(totalCost.innerHTML) - extraCost).toFixed(2);
								  margoDel.innerHTML = (Number(margoDel.innerHTML) - extraCost).toFixed(2);
				break;
				case "peperLine": costP = costP - extraCost;
								  totalCost.innerHTML = (Number(totalCost.innerHTML) - extraCost).toFixed(2);
								  peperDel.innerHTML = (Number(peperDel.innerHTML) - extraCost).toFixed(2);
				break;
				case "napoliLine": costN = costN - extraCost;
								  totalCost.innerHTML = (Number(totalCost.innerHTML) - extraCost).toFixed(2);
								  napoliDel.innerHTML = (Number(napoliDel.innerHTML) - extraCost).toFixed(2);
				break;
				case "season4Line": costF = costF - extraCost;
								  totalCost.innerHTML = (Number(totalCost.innerHTML) - extraCost).toFixed(2);
								  season4Del.innerHTML = (Number(season4Del.innerHTML) - extraCost).toFixed(2);
				break;
				case "calzoneLine": costC = costC - extraCost;
								  totalCost.innerHTML = (Number(totalCost.innerHTML) - extraCost).toFixed(2);
								  calzoneDel.innerHTML = (Number(calzoneDel.innerHTML) - extraCost).toFixed(2);
				break;


			}
			parelem.removeChild(this.previousSibling);
			parelem.removeChild(this);
			
		}
	}
	//MANAGE VALIDATION SECTION:
	var name = getId("name");
	var nameMessage = getId("nameMessage");
	var emailAddr = getId("email");
	var emailMessage = getId("emailMessage");
	var phone = getId("phone");
	var phoneMessage = getId("phoneMessage");
	function checkNames() {
		var symbArr = this.value.split('');
		var allowedSymb = /[A-Za-z]/;
		for (var i = 0; i < symbArr.length; i++) {
			if(symbArr[i].match(allowedSymb) === null){
				nameMessage.innerHTML = "contains disallowed symbols";
				nameMessage.style.visibility = "visible";
				this.style.border = "2px solid red";
				this.style.backgroundColor = "rgba(225, 0, 100, 0.3)";
				break;
			}
			else {
				nameMessage.style.visibility = "hidden";
				this.style.border = "2px solid gray";
				this.style.backgroundColor = "white";
				continue;
			}
		}
	}
	function checkEmailAddr() {
		var val = emailAddr.value;
		console.log(typeof val);
		var pat = /[a-z0-9._]+@[a-z0-9]+[.]+[a-z{2-4}]/;
		if (val.match(pat) === null){
			//prevSubm = false;
			emailMessage.innerHTML = "email incomplete or wrong";
			emailMessage.style.visibility = "visible";
			emailAddr.style.border = "2px solid red";
			this.style.backgroundColor = "rgba(225, 0, 100, 0.3)";
		}
		else {
			//prevSubm = true;
			//emailMessage.setAttribute("title", "now it's OK");
			emailAddr.style.border = "1px solid gray";
			emailMessage.style.visibility = "hidden";
			this.style.backgroundColor = "white";
		}
	}
	function checkPhone(){
		var val = phone.value;
		console.log(val);
		var pat = /[0-9{3}]+[-]+[0-9{10}]/;
		if (val.match(pat) === null){
			console.log(pat);
			phoneMessage.innerHTML = "phone incomplete or wrong";
			phoneMessage.style.visibility = "visible";
			phone.style.border = "2px solid red";
			this.style.backgroundColor = "rgba(225, 0, 100, 0.3)";
		}
		else {
			//prevSubm = true;
			//emailMessage.setAttribute("title", "now it's OK");
			phone.style.border = "1px solid gray";
			phoneMessage.style.visibility = "hidden";
			this.style.backgroundColor = "white";
		}
	}
	//VALIDATION EVENTLISTENERS
	name.addEventListener('blur', checkNames);
	emailAddr.addEventListener('blur', checkEmailAddr);
	phone.addEventListener('blur', checkPhone);
	//SHOPPING CHART EVENTLISTENERS
	const pizzaAdds = document.querySelectorAll(".adds");
	
	pizzaAdds.forEach(pizzaAdd => pizzaAdd.addEventListener('click', defineExtrasCost));
	pizzaAdds.forEach(pizzaAdd => pizzaAdd.addEventListener('click', addToCertainOrder));
	pizzaAdds.forEach(pizzaAdd => pizzaAdd.addEventListener('click', defineTarget));
	pizzaAdds.forEach(pizzaAdd => pizzaAdd.addEventListener('click', extraCostToTargetFields));
	//MAIN ORDER UNIT EVENTLISTENERS
	margaritaSmall.addEventListener('click', margo.addSmall);
	margaritaMiddle.addEventListener('click', margo.addMiddle);
	margaritaLarge.addEventListener('click', margo.addLarge);
	peperSmall.addEventListener('click', peperoni.addSmall);
	peperMiddle.addEventListener('click', peperoni.addMiddle);
	peperLarge.addEventListener('click', peperoni.addLarge);
	napoliSmall.addEventListener('click', napoli.addSmall);
	napoliMiddle.addEventListener('click', napoli.addMiddle);
	napoliLarge.addEventListener('click', napoli.addLarge);
	season4Small.addEventListener('click', season4.addSmall);
	season4Middle.addEventListener('click', season4.addMiddle);
	season4Large.addEventListener('click', season4.addLarge);
	calzoneSmall.addEventListener('click', calzone.addSmall);
	calzoneMiddle.addEventListener('click',calzone.addMiddle);
	calzoneLarge.addEventListener('click', calzone.addLarge);
	sizeButtons.forEach(sizeButton => sizeButton.addEventListener("click", addToChart));
}
