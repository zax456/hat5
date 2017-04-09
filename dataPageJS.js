//Load the Visualization API and the corechart package.

$(document).ready(function() {
	displayAccordingly();
	displayCountriesAccordingly();
	google.charts.load('current', {'packages':['corechart']});
});

var typeViolence = ["Physical", "Sexual"];
var typeEmployment = ["Leadership", "Salary"];
var typeEducation = ["Literacy", "Skills"];

var violencePhysicalcountries = ["China", "India", "Japan", "Singapore"];
var employmentLeadershipcountries = ["China", "Japan", "Singapore"]; 
var educationLiteracycountries = ["India", "Singapore"];

var beforeViolence = ["Q1: Who do you think has a higher chance of being violated?"];
var beforeEmployment = ["Q1: Who would you prefer to be your supervisor?", "Q2: Do you think it matters what gender your superior is?"];
var beforeEducation = ["Q1: Which gender do you think will fare better in arts?"];
var beforePerception = ["Q1: What do you think of a female who does not shave?", "Q2: Do you believe that the world is able to achieve gender equality?"];

var beforeViolenceOpts = ["Childen", "Women", "Men", "Anyone", "Elderly"];
var beforeEducationOpts = ["Male", "Female"];
var beforeEmploymentOpts = [["Female", "Male", "Either"], ["Yes", "No"]];
var beforePerceptionOpts = [["Gross", "It's fine", "Everybody can do what they want"], ["Yes", "No"]];

var created = 0;
function displayAccordingly() {
	if (created == 1) {
		removeDrop();
	}

	//Call mainMenu the main dropdown menu
	var mainMenu = document.getElementById("categoryDD");

	//Create the new dropdown menu
	var whereToPut = document.getElementById('typeDiv');
	var newDropdown = document.createElement('select');
	newDropdown.setAttribute('id',"typeDD");
	newDropdown.setAttribute("name", "typeDD");
	newDropdown.setAttribute("onchange", "displayCountriesAccordingly()")
	whereToPut.appendChild(newDropdown);

	if (mainMenu.value == "employment") { 
		var counter = 0;
		for(; counter<typeEmployment.length; counter++) {
			if(counter == 0) {
				var optionPublic=document.createElement("option");
				optionPublic.text = typeEmployment[counter];
				optionPublic.value = typeEmployment[counter];
				optionPublic.setAttribute("selected", "true");
				newDropdown.add(optionPublic,newDropdown.options[null]);
			} else {
				var optionPublic=document.createElement("option");
				optionPublic.text = typeEmployment[counter];
				optionPublic.value = typeEmployment[counter];
				newDropdown.add(optionPublic,newDropdown.options[null]);
			}
			
		}

	} else if (mainMenu.value == "violence") { 
		var counter = 0;
		for(; counter<typeViolence.length; counter++) {
			if(counter == 0) {
				var optionPublic=document.createElement("option");
				optionPublic.text = typeViolence[counter];
				optionPublic.value = typeViolence[counter];
				optionPublic.setAttribute("selected", "true");
				newDropdown.add(optionPublic,newDropdown.options[null]);
			} else {
				var optionPublic=document.createElement("option");
				optionPublic.text = typeViolence[counter];
				optionPublic.value = typeViolence[counter];
				newDropdown.add(optionPublic,newDropdown.options[null]);
			}

		}
	} else if (mainMenu.value == "education") { 
		var counter = 0;
		for(; counter<typeViolence.length; counter++) { 
			if(counter == 0) {
				var optionPublic=document.createElement("option");
				optionPublic.text = typeEducation[counter];
				optionPublic.value = typeEducation[counter];
				optionPublic.setAttribute("selected", "true");
				newDropdown.add(optionPublic,newDropdown.options[null]);
			} else {
				var optionPublic=document.createElement("option");
				optionPublic.text = typeEducation[counter];
				optionPublic.value = typeEducation[counter];
				newDropdown.add(optionPublic,newDropdown.options[null]);
			}
		}
	}
	created = 1;
	displayCountriesAccordingly();

}

var createdCountry = 0;
function displayCountriesAccordingly() {
	if (createdCountry == 1) {
		removeDropCountry();
	}

	var mainMenu = document.getElementById("typeDD");

	//Create the new dropdown menu
	var whereToPut = document.getElementById('countryDiv');
	var newDropdown = document.createElement('select');
	newDropdown.setAttribute('id',"countryDD");
	newDropdown.setAttribute("name", "countryDD");
	whereToPut.appendChild(newDropdown);

	if(mainMenu.value == "Physical" || mainMenu.value == "Sexual") {
		var counter = 0;
		for(; counter<violencePhysicalcountries.length; counter++) {
			var optionPublic=document.createElement("option");
			optionPublic.text = violencePhysicalcountries[counter];
			optionPublic.value = violencePhysicalcountries[counter];
			newDropdown.add(optionPublic,newDropdown.options[null]);
		}

	} else if(mainMenu.value == "Leadership" || mainMenu.value == "Salary") {
		var counter = 0;
		for(; counter<employmentLeadershipcountries.length; counter++) {
			var optionPublic=document.createElement("option");
			optionPublic.text = employmentLeadershipcountries[counter];
			optionPublic.value = employmentLeadershipcountries[counter];
			newDropdown.add(optionPublic,newDropdown.options[null]);
		}

	} else if(mainMenu.value == "Literacy" || mainMenu.value == "Skills") {
		var counter = 0;
		for(; counter<educationLiteracycountries.length; counter++) {
			var optionPublic=document.createElement("option");
			optionPublic.text = educationLiteracycountries[counter];
			optionPublic.value = educationLiteracycountries[counter];
			newDropdown.add(optionPublic,newDropdown.options[null]);
		}
	}

	createdCountry = 1;
}

function removeDrop() {
	var d = document.getElementById('typeDiv');

	var oldmenu = document.getElementById('typeDD');

	d.removeChild(oldmenu);
} 

function removeDropCountry() {
	var d = document.getElementById('countryDiv');

	var oldmenu = document.getElementById('countryDD');

	d.removeChild(oldmenu);
}

function removeDropBefore() {
	var d = document.getElementById('beforePerception');

	var oldmenu = document.getElementById('beforeDD');

	d.removeChild(oldmenu);
}

var createdBefore = 0;
function displayBeforeAccordingly(catType) {
	if (createdBefore == 1) {
		removeDropBefore();
	}

	var mainMenu = document.getElementById("beforePerception");

	//Create the new dropdown menu
	var whereToPut = document.getElementById('beforePerception');
	var newDropdown = document.createElement('div');
	newDropdown.setAttribute('id',"beforeDD");
	newDropdown.setAttribute("name", "beforeDD");
	whereToPut.appendChild(newDropdown);

	catType = catType.split(" ")[0];
	switch(catType) {
		case "violence": 
			var j = 0;
			//Create the new question
			//for how many questions i have in my array (N), do these steps N times
			for(var i=0; i<beforeViolence.length; i++) {
				//create the label
				var label = document.createElement('label');
				label.innerHTML = beforeViolence[i];
				newDropdown.appendChild(label);

				//create options
				var DD = document.createElement('select');
				DD.setAttribute("id", beforeViolence[i]);
				DD.setAttribute("name", beforeViolence[i]);

				for(; j<beforeViolenceOpts.length; j++) {

					if(Array.isArray(beforeViolenceOpts[j])) { //if there are mulitple questions, store each Q's opts as an array
						for(var k=0; k<beforeViolenceOpts[j].length; k++) {
							var option = document.createElement('option'); //to store each options in DD
							option.setAttribute("value", beforeViolenceOpts[j][k]);
							option.innerHTML = beforeViolenceOpts[j][k];
							DD.appendChild(option);
						}
						j++;
						break;
					} else {
						var option = document.createElement('option'); //to store each options in DD
							option.setAttribute("value", beforeViolenceOpts[j]);
							option.innerHTML = beforeViolenceOpts[j];
							DD.appendChild(option);
					}
					
				}
				var breakline = document.createElement('p'); //to create space in between questions
				newDropdown.appendChild(DD);
				newDropdown.appendChild(breakline);
			}
			break;

		case "employment" :
			var j = 0;
			for(var i=0; i<beforeEmployment.length; i++) {
				//create the label
				var label = document.createElement('label');
				label.setAttribute("style", "margin:3px;");
				label.innerHTML = beforeEmployment[i];
				newDropdown.appendChild(label);

				//create options
				var DD = document.createElement('select');
				DD.setAttribute("id", beforeEmployment[i]);
				DD.setAttribute("name", beforeEmployment[i]);
				DD.setAttribute("style", "margin:3px;");

				for(; j<beforeEmploymentOpts.length; j++) {

					if(Array.isArray(beforeEmploymentOpts[j])) { //if there are mulitple questions, store each Q's opts as an array
						for(var k=0; k<beforeEmploymentOpts[j].length; k++) {
							var option = document.createElement('option'); //to store each options in DD
							option.setAttribute("value", beforeEmploymentOpts[j][k]);
							option.innerHTML = beforeEmploymentOpts[j][k];
							DD.appendChild(option);
						}
						j++;
						break;
					} else {
						var option = document.createElement('option'); //to store each options in DD
							option.setAttribute("value", beforeEmploymentOpts[j]);
							option.innerHTML = beforeEmploymentOpts[j];
							DD.appendChild(option);
					}
					
				}
				var breakline = document.createElement('p'); //to create space in between questions
				newDropdown.appendChild(DD);
				newDropdown.appendChild(breakline);
			}
			break;

		case "education": 
			var j = 0;
			for(var i=0; i<beforeEducation.length; i++) {
				//create the label
				var label = document.createElement('label');
				label.setAttribute("style", "margin:3px;");
				label.innerHTML = beforeEducation[i];
				newDropdown.appendChild(label);

				//create options
				var DD = document.createElement('select');
				DD.setAttribute("id", beforeEducation[i]);
				DD.setAttribute("name", beforeEducation[i]);
				DD.setAttribute("style", "margin:3px;");

				for(; j<beforeEducationOpts.length; j++) {

					if(Array.isArray(beforeEducationOpts[j])) { //if there are mulitple questions, store each Q's opts as an array
						for(var k=0; k<beforeEducationOpts[j].length; k++) {
							var option = document.createElement('option'); //to store each options in DD
							option.setAttribute("value", beforeEducationOpts[j][k]);
							option.innerHTML = beforeEducationOpts[j][k];
							DD.appendChild(option);
						}
						j++;
						break; 
					} else {
						var option = document.createElement('option'); //to store each options in DD
							option.setAttribute("value", beforeEducationOpts[j]);
							option.innerHTML = beforeEducationOpts[j];
							DD.appendChild(option);
					}
					
				}
				var breakline = document.createElement('p'); //to create space in between questions
				newDropdown.appendChild(DD);
				newDropdown.appendChild(breakline);
			}
			break;
	}
	createdBefore = 1;
}

function categoryTypebtnSubmit() {
	var value = document.getElementById("categoryDD").value; 
	value += " " + document.getElementById("typeDD").value;
	console.log(value);
	displayBeforeAccordingly(value);
}