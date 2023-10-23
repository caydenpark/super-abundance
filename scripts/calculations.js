// document.querySelector('button').addEventListener('click', (event) => {
//     event.preventDefault();
//     performCaculations();
// });


document.getElementById("clear").onclick = function() {clear()};

// Loads JSON
data = null;
window.addEventListener("load", (event) => {
  data = fetch('./Data/data.json')
    .then((response) => response.json())
    .then((result) => (this.data = result));
});

function getHourlyComp(){
    var selectElement = document.getElementById('dropDownWages');
    let startComp;
    let endComp;

    switch (selectElement.value) {
      case "Custom Wage":
        startComp = document.getElementById("startComp").value;
        endComp = document.getElementById("endComp").value;
        break;
      case "U.S. Blue Collar":
        startComp = data.data[startYear.value - 1800].usBlueCollar;
        endComp = data.data[endYear.value - 1800].usBlueCollar;
        break;
      case "U.S. Unskilled":
        startComp = data.data[startYear.value - 1800].usUnskilled;
        endComp = data.data[endYear.value - 1800].usUnskilled;
        break;
      case "U.S. Upskilling":
        startComp = data.data[startYear.value - 1800].usUnskilled;
        endComp = data.data[endYear.value - 1800].usBlueCollar;
        break;
      case "U.K. Wage":
        startComp = data.data[startYear.value - 1800].ukWage;
        endComp = data.data[endYear.value - 1800].ukWage;
        break;
    }
    
    document.getElementById("startComp").value = startComp.toFixed(2).toString();
    document.getElementById("endComp").value = endComp.toFixed(2).toString();

    var compChange = endComp - startComp;
    var percentageCompChange = compChange / startComp * 100;

    document.getElementById("compChange").innerHTML = compChange.toFixed(2);
    document.getElementById("percentageCompChange").innerHTML = percentageCompChange.toFixed(1)+"%";

    performCalculations();
  }

function getPopulation(){
  var selectElement2 = document.getElementById('dropDownPopulation');
  let startPop;
  let endPop;

  switch (selectElement2.value) {
    case "Custom Population":
      startPop = document.getElementById("startPop").value;
      endPop = document.getElementById("endPop").value;
      break;
    case "U.S.":
      startPop = data.data[startYear.value - 1800].usPopulation;
      endPop = data.data[endYear.value - 1800].usPopulation;
      break;
    case "World":
      startPop = data.data[startYear.value - 1800].worldPopulation;
      endPop = data.data[endYear.value - 1800].worldPopulation;
      break;
  }

  // document.getElementById("startPop").value = startPop.trim();
  // document.getElementById("endPop").value = endPop.trim();
  startPop = parseInt(startPop.replace(/,/g, ''), 10);
  endPop = parseInt(endPop.replace(/,/g, ''), 10);

  document.getElementById("startPop").value = (startPop/1000000).toFixed(3);
  document.getElementById("endPop").value = (endPop/1000000).toFixed(3);

  var popChange = endPop - startPop;
  var percentagePopChange = popChange / startPop * 100;
    
  document.getElementById("popChange").innerHTML = popChange;
  document.getElementById("percentagePopChange").innerHTML = percentagePopChange.toFixed(1)+"%";

  performCalculations();
}

function resetCustomPopulationDropDown() {
  document.getElementById('dropDownPopulation').value = "Custom Population";
}

function resetCustomWageDropDown() {
  document.getElementById('dropDownWages').value = "Custom Wage";
}

function performCalculations() {
  // Year
  var startYear = document.getElementById("startYear").value;
  var endYear = document.getElementById("endYear").value;
  var yearChange = endYear - startYear;
  
  if (startYear.length == 4 && endYear.length == 4) {
    document.getElementById("yearChange").innerHTML = yearChange;
  }

  // Price
  var startPrice = document.getElementById("startPrice").value;
  var endPrice = document.getElementById("endPrice").value;
  var priceChange = endPrice - startPrice;
  var percentagePriceChange = priceChange / startPrice * 100;
  
  if (startPrice.length > 0 && endPrice.length > 0) {
    document.getElementById("priceChange").innerHTML = priceChange.toFixed(2);
    document.getElementById("percentageChange").innerHTML = percentagePriceChange.toFixed(1)+"%";
  }
  
  // Hourly Compensation
  var startComp = document.getElementById("startComp").value;
  var endComp = document.getElementById("endComp").value;    
  var compChange = endComp - startComp;
  var percentageCompChange = compChange / startComp * 100;

  if (startComp.length > 0 && endComp > 0) {
    document.getElementById("compChange").innerHTML = compChange.toFixed(2);
    document.getElementById("percentageCompChange").innerHTML = percentageCompChange.toFixed(1)+"%";
  }
  
  // Population
  var startPop = document.getElementById("startPop").value;
  var endPop = document.getElementById("endPop").value;
  
  var popChange = (endPop - startPop).toFixed(3);
  var percentagePopChange = popChange / startPop * 100;
  
  if (startPop.length > 0 && endPop.length > 0) {
    document.getElementById("popChange").innerHTML = popChange;
    document.getElementById("percentagePopChange").innerHTML = percentagePopChange.toFixed(1)+"%";
  }
  
  if (allInputFieldsNotEmpty()){
      
      // Time Price
      var startTimePrice = startPrice / startComp
      var endTimePrice = endPrice / endComp
      var timePriceChange = endTimePrice - startTimePrice
      var timePricePercentageChange = timePriceChange / startTimePrice * 100;
      
      document.getElementById("startTimePrice").innerHTML = startTimePrice.toFixed(2);
      document.getElementById("endTimePrice").innerHTML = endTimePrice.toFixed(3);
      document.getElementById("timePriceChange").innerHTML = timePriceChange.toFixed(3);
      document.getElementById("timePricePercentageChange").innerHTML = timePricePercentageChange.toFixed(1)+"%";
      
      // Personal-Level Multiplier
      personalMultiplierStart = 1;                            // Constant value of 1
      personalMultiplierEnd = startTimePrice / endTimePrice;
      personalMultiplierChange = personalMultiplierEnd - personalMultiplierStart;
      personalMultiplierPercentageChange = personalMultiplierChange / personalMultiplierStart * 100;
      
      document.getElementById("personalMultiplierStart").innerHTML = 1;
      document.getElementById("personalMultiplierEnd").innerHTML = personalMultiplierEnd.toFixed(3);
      document.getElementById("personalMultiplierChange").innerHTML = personalMultiplierChange.toFixed(3);
      document.getElementById("personalMultiplierPercentageChange").innerHTML = personalMultiplierPercentageChange.toFixed(1)+"%";
      
      // Population-Level Multiplier
      populationMultiplierStart = 1;
      populationMultiplierEnd = personalMultiplierEnd * (1 + percentagePopChange/100);
      populationMultiplierChange = populationMultiplierEnd - populationMultiplierStart;
      populationMultiplierPercentageChange = populationMultiplierChange / populationMultiplierStart * 100;
      
      document.getElementById("populationMultiplierStart").innerHTML = populationMultiplierStart;
      document.getElementById("populationMultiplierEnd").innerHTML = populationMultiplierEnd.toFixed(3);
      document.getElementById("populationMultiplierChange").innerHTML = populationMultiplierChange.toFixed(3);
      document.getElementById("populationMultiplierPercentageChange").innerHTML = populationMultiplierPercentageChange.toFixed(1)+"%"
      
      // Compound Annual Growth Rate
      // ((End Value / Start Value)^(1 / Number of Years) - 1) * 100
      var personalGrowthRate = ((personalMultiplierEnd/personalMultiplierStart)**(1/yearChange)-1) * 100;
      var populationGrowthRate = ((populationMultiplierEnd/populationMultiplierStart)**(1/yearChange)-1) * 100;
      
      document.getElementById("personalGrowthRate").innerHTML = personalGrowthRate.toFixed(2)+"%";
      document.getElementById("populationGrowthRate").innerHTML = populationGrowthRate.toFixed(2)+"%";
      
      // Years to Double
      var personalDoubleYears = 70/(personalGrowthRate.toFixed(2));
      var populationDoubleYears = 70/(populationGrowthRate.toFixed(2));
      
      document.getElementById("personalDoubleYears").innerHTML = personalDoubleYears.toFixed(2);
      document.getElementById("populationDoubleYears").innerHTML = populationDoubleYears.toFixed(2);
      
      // Elasticity of Population
      var personalElasticity = personalMultiplierPercentageChange/percentagePopChange;
      var populationElasticity = populationMultiplierPercentageChange/percentagePopChange;
      
      document.getElementById("personalElasticity").innerHTML = personalElasticity.toFixed(2);
      document.getElementById("populationElasticity").innerHTML = populationElasticity.toFixed(2);
    
      // Illustration Calculations
      var endYearBoxNumber = document.getElementById("endYear").value;
      var startYearBoxNumber = document.getElementById("startYear").value;
    
      document.getElementById("endYearBoxNumber").textContent = endYearBoxNumber;
      document.getElementById("startYearBoxNumber").textContent = startYearBoxNumber;
      document.getElementById("endYearKey").textContent = endYearBoxNumber;
      document.getElementById("endYearKey").style.fontWeight = "bold";
      document.getElementById("startYearKey").textContent = startYearBoxNumber;
      document.getElementById("startYearKey").style.fontWeight = "bold";
    
    
      document.getElementById("personalMultiplierPercentageChangeIllustration").innerHTML = "+ "+personalMultiplierPercentageChange.toFixed(1)+"%";
      document.getElementById("populationMultiplierPercentageChangeIllustration").innerHTML = "+ "+populationMultiplierPercentageChange.toFixed(1)+"%";
      document.getElementById("percentagePopChangeIllustration").innerHTML = "+ "+percentagePopChange.toFixed(1)+"%";


      changeBoxSize(personalMultiplierPercentageChange, percentagePopChange);

      // Dashboard
      if (timePricePercentageChange > 0) {
        document.getElementById("timePricePercentageChangeDB").innerHTML = "+" + timePricePercentageChange.toFixed(1)+"%";
      } else {document.getElementById("timePricePercentageChangeDB").innerHTML = timePricePercentageChange.toFixed(1)+"%";}

      document.getElementById("personalMultiplierPercentageChangeDB").innerHTML =  "+" + personalMultiplierPercentageChange.toFixed(1)+"%";
      document.getElementById("personalGrowthRateDB").innerHTML = "+" + personalGrowthRate.toFixed(2)+"%";
      document.getElementById("personalElasticityDB").innerHTML = personalElasticity.toFixed(2);
      
      if (percentagePopChange > 0) {
        document.getElementById("percentagePopChangeDB").innerHTML = "+" + percentagePopChange.toFixed(1)+"%";
      } else {document.getElementById("percentagePopChangeDB").innerHTML = percentagePopChange.toFixed(1)+"%";}

      document.getElementById("populationMultiplierPercentageChangeDB").innerHTML =  "+" + populationMultiplierPercentageChange.toFixed(1)+"%";
      document.getElementById("populationGrowthRateDB").innerHTML = "+" + populationGrowthRate.toFixed(2)+"%";
      document.getElementById("populationElasticityDB").innerHTML = populationElasticity.toFixed(2);
    }
  }

function clear()
{
    document.getElementById("yearChange").innerHTML = "----";
    
    document.getElementById("priceChange").innerHTML = "----"
    document.getElementById("percentageChange").innerHTML = "----";
    
    document.getElementById("compChange").innerHTML = "----";
    document.getElementById("percentageCompChange").innerHTML = "----";
    
    document.getElementById("popChange").innerHTML = "----";
    document.getElementById("percentagePopChange").innerHTML = "----";
   
    document.getElementById("startTimePrice").innerHTML = "----";
    document.getElementById("endTimePrice").innerHTML = "----";
    document.getElementById("timePriceChange").innerHTML = "----";
    document.getElementById("timePricePercentageChange").innerHTML = "----";
    
    document.getElementById("personalMultiplierStart").innerHTML = "----";
    document.getElementById("personalMultiplierEnd").innerHTML = "----";
    document.getElementById("personalMultiplierChange").innerHTML = "----";
    document.getElementById("personalMultiplierPercentageChange").innerHTML = "----";

    // document.getElementById("populationMultiplierStart").innerHTML = "----";
    document.getElementById("populationMultiplierEnd").innerHTML = "----";
    document.getElementById("populationMultiplierChange").innerHTML = "----";
    document.getElementById("populationMultiplierPercentageChange").innerHTML = "----";

    document.getElementById("personalGrowthRate").innerHTML = "----";
    document.getElementById("populationGrowthRate").innerHTML = "----";

    document.getElementById("personalDoubleYears").innerHTML = "----";
    document.getElementById("populationDoubleYears").innerHTML = "----";

    document.getElementById("personalElasticity").innerHTML = "----";
    document.getElementById("populationElasticity").innerHTML = "----";

    // Illustration Dimensions
    greenBox.style.width = "500px";
    greenBox.style.height = "500px";
    greenBox.style.backgroundColor = "#f7f8fa"

    redBox.style.width = "250px";
    redBox.style.height = "250px";
    redBox.style.backgroundColor = "#f7f8fa"

    // Dashboard
    document.getElementById("timePricePercentageChangeDB").innerHTML = "----";
    document.getElementById("personalMultiplierPercentageChangeDB").innerHTML = "----";
    document.getElementById("personalGrowthRateDB").innerHTML = "----";
    document.getElementById("personalElasticityDB").innerHTML = "----";
    
    document.getElementById("percentagePopChangeDB").innerHTML = "----";
    document.getElementById("populationMultiplierPercentageChangeDB").innerHTML = "----";
    document.getElementById("populationGrowthRateDB").innerHTML = "----";
    document.getElementById("populationElasticityDB").innerHTML = "----";
}

function allInputFieldsNotEmpty() {
  const inputFields = document.querySelectorAll('input[type="number"], textarea');
  
  for (const inputField of inputFields) {
    if (inputField.value.trim() === '') {
      return false; // At least one input field is empty, so return false.
    }
  }
  
  return true; // All input fields have values, so return true.
}

function changeBoxSize(personalMultiplierPercentageChange, percentagePopChange) {
  var greenBox = document.getElementById("greenBox");
  var redBox = document.getElementById("redBox");
  var boxes = document.getElementById("boxes");

  var greenHeight = 0;
  var greenWidth = 0;
  var redDimension = 0; // Width == Height (always square)

  var containerHeight = 0;
  var containerWidth = 0;

  if (personalMultiplierPercentageChange >= percentagePopChange){
    greenHeight = 500;
    greenWidth = (1+(percentagePopChange/100))/(1+(personalMultiplierPercentageChange/100))*500;
    redDimension = 500/(1+(personalMultiplierPercentageChange/100));

    containerHeight = 500;
    if (greenWidth >= redDimension){
      containerWidth = greenWidth;
    }
    else{
      containerWidth = redDimension;
    }

  } else {
    greenHeight = (1+(personalMultiplierPercentageChange/100))/(1+(percentagePopChange/100))*500;
    greenWidth = 500;
    redDimension = 500/(1+(percentagePopChange/100));

    containerWidth = 500;
    if (greenHeight >= redDimension){
      containerHeight = greenHeight;
    }
    else{
      containerHeight = redDimension;
    }
  }

  if (redDimension < 30){
    redDimension = 30;
  }

  if (greenWidth < 30){
    greenWidth = 30;
  }

  if (greenHeight < 30){
    greenHeight = 30;
  }

  if (greenWidth < 90 || greenHeight < 90){
    endYearBoxNumber.textContent = "";
  }

  if (redDimension < 90){
    startYearBoxNumber.textContent = "";
  }

  greenBox.style.width = `${greenWidth}px`;
  greenBox.style.height = `${greenHeight}px`;
  greenBox.style.backgroundColor = "green";

  redBox.style.width = `${redDimension}px`;
  redBox.style.height = `${redDimension}px`;
  redBox.style.backgroundColor = "red";

  boxes.style.width = `${containerWidth}px`;
  boxes.style.height = `${containerHeight}px`;
  if (containerHeight < 295){
    document.getElementById("personalMultiplierPercentageChangeIllustration").style.verticalAlign = "bottom";
    document.getElementById("populationMultiplierPercentageChangeIllustrationAndText").style.verticalAlign = "middle";
  }else{
    document.getElementById("personalMultiplierPercentageChangeIllustration").style.verticalAlign = "top";
    document.getElementById("populationMultiplierPercentageChangeIllustrationAndText").style.verticalAlign = "top";
  }
}