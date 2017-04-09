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
//var violenceSexualcountries = ["China", "India", "Japan", "Singapore"];
var employmentLeadershipcountries = ["China", "Japan", "Singapore"]; 
//var employmentSalarycountries = ["China", "Japan", "Singapore"];
var educationLiteracycountries = ["India", "Singapore"];
//var educationSkillscountries = ["India", "Singapore"];

var beforeViolenceDomestic = "Q1: What do you think is the percentage of women suffering from domestic violence in Singapore?"
var beforeViolenceSexual = "Q1: What is your perception of sexual violence in Singapore?"
var beforeEmployment = "Q1: What is your perception of women employment status in Singapore?"

var pencentageArr = ["Below 10%", "11% - 30%", "31% - 50%", "51% - 70%", "Above 70%"];

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

function displayBeforeAccordingly(catType) {
	switch(catType) {
		case "violencePhysical": 
			//Create the new question
			var getLabel = document.getElementById("beforePerceptionLbl");
			getLabel.innerHTML = beforeViolenceDomestic;

			var whereToPut = document.getElementById('beforePerception');
			var newRadio = document.createElement("label");
			newRadio.innerHTML = '<input type="radio" name="percentage" value="1" style="margin:3px;">' + pencentageArr[0];
			whereToPut.appendChild(newRadio);
			//need to destroy the old radio btn if user change category TO DO
			break;

		case "violenceSexual": 
			break;

		case "employmentLeadership" :
			break;

		case "employmentSalary": 
			break;

		case "educationLiteracy": 
			break;

		case "educationSkills" :
			break;
	}
}

function btnSubmit() {
	var value = document.getElementById("categoryDD").value; 
	value += document.getElementById("typeDD").value;
	console.log(value);
	displayBeforeAccordingly(value);
}