//Load the Visualization API and the corechart package.

$(document).ready(function() {
	displayCategoryAccordingly();
	displayCountriesAccordingly();
	google.charts.load('current', {'packages':['corechart']});
});

var typeViolence = ["Physical", "Sexual"];
var typeEmployment = ["Leadership", "Salary"];
var typeEducation = ["Literacy", "Skills"];

var violencePhysicalcountries = ["India", "Japan", "Singapore"];
var employmentLeadershipcountries = ["China", "Japan", "Singapore"]; 
var educationLiteracycountries = ["Singapore"];

var beforeViolence = ["Q1: Who do you think has a higher chance of being violated?"];
var beforeEmployment = ["Q1: Who would you prefer to be your supervisor?", "Q2: Do you think it matters what gender your superior is?"];
var beforeEducation = ["Q1: Which gender do you think will fare better in arts?"];
var beforePerception = ["Q1: What do you think of a female who does not shave?", "Q2: Do you believe that the world is able to achieve gender equality?"];

var beforeViolenceOpts = ["Childen", "Women", "Men", "Anyone", "Elderly"];
var beforeEducationOpts = ["Male", "Female"];
var beforeEmploymentOpts = [["Female", "Male", "Either"], ["Yes", "No"]];
var beforePerceptionOpts = [["Gross", "It's fine", "Everybody can do what they want"], ["Yes", "No"]];

var created = 0;
function displayCategoryAccordingly() {
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

function removeDropChart() {
	var d = document.getElementById('chartArea');

	var oldmenu = document.getElementById('chartDiv');

	d.removeChild(oldmenu);

	var newmenu = document.createElement('div');
	newmenu.setAttribute('id', 'chartDiv');

	d.appendChild(newmenu)
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

	var graph = value + " " + document.getElementById("countryDD").value;
	drawChart(graph);
}

var createdChart = 0;
function drawChart(category) {
	console.log(category);

	if (createdChart == 1) {
		removeDropChart();
		createdChart = 0;
	}

  switch(category) {
    case "violence Physical Singapore":
    	var numOfGraphs = 3;
    	var graphsURL = ["https://docs.google.com/spreadsheets/d/1uhh7d5oAUXaQMX7SeqrCC39DCHkLwDdh_s_HQ34ny7o/gviz/tq?range=A:B", "https://docs.google.com/spreadsheets/d/1UtWiiUXKtLmXRcJiXISE6qlrDTYyeKAvMammsVjZd0A/gviz/tq?range=A1:D6", "https://docs.google.com/spreadsheets/d/1B1iGs7YlxE7unDMc3xD-r5iVvEV6J8dUW-zX0NrI1ag/gviz/tq?range=A:B"];
      	//draw data from google spreadsheet to create graph 
      	for(var i = 0; i<numOfGraphs; i++) {
      		var q = new google.visualization.Query(graphsURL[i]);
      		q.send(handleQueryResponse2);
      	}

      	createdChart = 1;
      	break;

    case "violence Physical Japan": 
    	var graphsURL = "https://docs.google.com/spreadsheets/d/1Kg-otTTr5ZbSolu5-CnubXnb1qol5-jicfFhF5MfI3k/gviz/tq?range=A:B";
    	var q = new google.visualization.Query(graphsURL);
    	q.send(handleQueryResponse2);

    	createdChart = 1;
    	break;

    case "violence Physical India": 
    	var graphsURL = "https://docs.google.com/spreadsheets/d/1Tq224nGPkvNZD2h8UQDCpwKtmhveQ0hCoDaiSSoR_vQ/gviz/tq?range=A:B";
    	var q = new google.visualization.Query(graphsURL);
    	q.send(handleQueryResponse2);

    	createdChart = 1;
      	break;

    case "violence Sexual Singapore":
    	var graphsURL = ["https://docs.google.com/spreadsheets/d/1LEAF596FA3vK37phBlk9I1lv7wtN3P_-LxvMSyy5HIo/gviz/tq?range=A1:C7",
    					"https://docs.google.com/spreadsheets/d/1STJ1u9EB_PpS77FrVjl-dLKGBpwFRxrwcgcF8ZBYbjI/gviz/tq?range=A1:D5", 
    					"https://docs.google.com/spreadsheets/d/19e4d6AM00VeAzDArLNmrxr-T9qHnUmiDMQj4JVcN7QI/gviz/tq?range=A1:B3"];
    	var numOfGraphs = 3;
    	for(var i = 0; i<numOfGraphs; i++) {
      		var q = new google.visualization.Query(graphsURL[i]);
      		q.send(handleQueryResponse2);
      	}

    	createdChart = 1;
      	break;

    case "violence Sexual Japan": 
    	var q = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1d4feYuCgHlA2dH_vEu8wxhhQT3KdGNacg-9sd9Vd3fI/gviz/tq?range=A1:B4");
    	q.send(handleQueryResponse2);

    	createdChart = 1;
    	break;

    case "violence Sexual India":
    	var graphsURL = ["https://docs.google.com/spreadsheets/d/1da2Gcg7omkfDnWcgTrBGBytxDd1MNphYsU5w_4nlx9g/gviz/tq?range=A1:C6", "https://docs.google.com/spreadsheets/d/165cetp2dy5VyTTmduRQ5NsfyMU7Fyq3LT0x_reLTcf0/gviz/tq?range=A1:C4"];
    	var numOfGraphs = 2;
    	for(var i = 0; i<numOfGraphs; i++) {
      		var q = new google.visualization.Query(graphsURL[i]);
      		q.send(handleQueryResponse2);
      	}

    	createdChart = 1;
    	break;

    case "employment Leadership Singapore":
    	var q = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1w0dXHg9H4kk-YacosxFcijAaV5h6RleDEkTwSD7THQg/gviz/tq?range=A1:B4");
    	q.send(handleQueryResponse2);

    	createdChart = 1;
    	break;

    case "employment Leadership China": 
    	var q = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1MafD6FxJbQ9WjoLzqGfawn9RvJucS8YXvh-bfqW2mQQ/gviz/tq?range=A1:B4");
    	q.send(handleQueryResponse2);

    	createdChart = 1;
    	break;

    case "employment Leadership Japan": 
    	var q = new google.visualization.Query("https://docs.google.com/spreadsheets/d/141udVjAT4hOSfBS3q61TX7BBxvHEj2j6vXVyMKGwWig/gviz/tq?range=A1:B4");
    	q.send(handleQueryResponse2);

    	createdChart = 1;
    	break; 

    case "employment Salary Singapore": 
    	var q = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1oQram8qoTdiVjEwCct2vqL68uKQjBFO_TDDfe6MOqeo/gviz/tq?range=A1:B3");
    	q.send(handleQueryResponse2);

    	createdChart = 1;
    	break; 

    case "employment Salary Japan": 
    	var q = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1aKhIf-a6gj-bFVKUSW62mEKtbGSCTcYQTfzFwAB6OIs/gviz/tq?range=A1:B16");
    	q.send(handleQueryResponse3);
    	
    	createdChart = 1;
    	break;

    case "employment Salary China": 
    	var graphsURL = ["https://docs.google.com/spreadsheets/d/1qQBwa-9MnP1NUpEzWh6oSgdOGU4D148IQGL_2BwBP4o/gviz/tq?range=A1:B3", "https://docs.google.com/spreadsheets/d/1H80BOVkDL_uBiO2v4Zrrgok7VqI0RO26UMBjN7P_j14/gviz/tq?range=A1:C3"];
    	var numOfGraphs = 2;
    	for(var i = 0; i<numOfGraphs; i++) {
      		var q = new google.visualization.Query(graphsURL[i]);
      		q.send(handleQueryResponse2);
      	}

    	createdChart = 1;
    	break;

    case "education Literacy Singapore":
    	var graphsURL = ["https://docs.google.com/spreadsheets/d/1pFCxzFl6TUH2HvFJk4Iu5rDEHoKXmzKBqV2SvDByXAY/gviz/tq?range=A1:B5", 
    						"https://docs.google.com/spreadsheets/d/1cNzeilEHTjboMDJIcXNZBk2ZCNUEuAMdmpxA34Gw-1I/gviz/tq?range=A1:G7", 
    						"https://docs.google.com/spreadsheets/d/1Yw_URqMiu2Xepso1SNmhFEXOmBPiq1skB-km1yn27r8/gviz/tq?range=A1:B3"];
    	var numOfGraphs = graphsURL.length;
    	for(var i = 0; i < numOfGraphs; i++) {
    		var q = new google.visualization.Query(graphsURL[i]);
    		q.send(handleQueryResponse2);
    	}

    	createdChart = 1;
    	break;

    var handlerType = [handleQueryResponse2, handleQueryResponse3]
    case "education Literacy India":
    	var graphsURL = ["https://docs.google.com/spreadsheets/d/1J9XPeQnHwd5aGM4O7UJqweR-UpaCx6BlUUSiGlFaFaE/gviz/tq?range=A1:C3", "https://docs.google.com/spreadsheets/d/1d25rCYFoUrZJGTHRf4-PKnDYfumM0xRrLqIRDRM9Xbk/gviz/tq?range=A1:D4"];
    	var graphType = [0, 0, 1]
    	var numOfGraphs = graphsURL.length;
    	for(var i = 0; i < numOfGraphs; i++) {
    		var q = new google.visualization.Query(graphsURL[i]);
    		q.send(handlerType[i]);
    	}

    	createdChart = 1;
    	break;

    case "education Skills Singapore":
    	var graphsURL = ["https://docs.google.com/spreadsheets/d/1HqqCaHsElNTOrM9jtYmqRBTU-6AOU7LhCeMZWw3ZQws/gviz/tq?range=A1:B3", 
    					"https://docs.google.com/spreadsheets/d/18UvI6x2EtnKVN9MAnl9Tb86alp1e51_sYSAco21EtIc/gviz/tq?range=A1:C11"];
    	var numOfGraphs = graphsURL.length;
    	for(var i = 0; i < numOfGraphs; i++) {
    		var q = new google.visualization.Query(graphsURL[i]);
    		q.send(handleQueryResponse2);
    	}

    	createdChart = 1;
    	break;

    case "education Skills India": 
    	var q = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1DXEk4OZ78x-HjA7lQsiQ0l2Jjpa5Q8zFrL5r9caU7zU/gviz/tq?range=B1:G8");
    	q.send(handleQueryResponse2);

    	createdChart = 1;
    	break;
  }
}

function handleQueryResponse2(response) { //for bar charts
	//for debugging purpose
	if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

    var data = response.getDataTable();
    var areaToAppendChart = document.getElementById("chartDiv");
    var helper = document.createElement('div');
    helper.setAttribute('style', 'width:100%; height:100%;');


    var chart = new google.visualization.ColumnChart(helper);
    // Set chart options
    var options = {'width': 860, 'height': '400', pieSliceText:'percentage','backgroundColor': 'lightblue'};
    chart.draw(data, options);
    areaToAppendChart.appendChild(helper);
  } 

 function handleQueryResponse3(response) { //for line charts
 	var data = response.getDataTable();
    var areaToAppendChart = document.getElementById("chartDiv");
    var helper = document.createElement('div');
    helper.setAttribute('style', 'width:100%; height:100%;');


    var chart = new google.visualization.LineChart(helper);
	// Set chart options
	var options = {title: 'Gender wage gap vs. Year', width: 860, height: '400',backgroundColor: 'lightblue'};
	chart.draw(data, options);
	areaToAppendChart.appendChild(helper);

 }