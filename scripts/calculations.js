// document.querySelector('button').addEventListener('click', (event) => {
//     event.preventDefault();
//     performCaculations();
// });

document.getElementById("clear").onclick = function() {clear()};

function performCalculations() {
    // Year
    var startYear = document.getElementById("startYear").value;
    var endYear = document.getElementById("endYear").value;
    var yearChange = endYear - startYear;
    
    document.getElementById("yearChange").innerHTML = yearChange;

    // Price
    var startPrice = document.getElementById("startPrice").value;
    var endPrice = document.getElementById("endPrice").value;
    var priceChange = endPrice - startPrice;
    var percentagePriceChange = priceChange / startPrice * 100;
    
    document.getElementById("priceChange").innerHTML = priceChange.toFixed(2);
    document.getElementById("percentageChange").innerHTML = percentagePriceChange.toFixed(1)+"%";

    // Hourly Compensation
    var startComp = document.getElementById("startComp").value;
    var endComp = document.getElementById("endComp").value;
    var compChange = endComp - startComp;
    var percentageCompChange = compChange / startComp * 100;
    
    document.getElementById("compChange").innerHTML = compChange.toFixed(2);
    document.getElementById("percentageCompChange").innerHTML = percentageCompChange.toFixed(1)+"%";
    
    // Population
    var startPop = document.getElementById("startPop").value;
    var endPop = document.getElementById("endPop").value;
    var popChange = endPop - startPop;
    var percentagePopChange = popChange / startPop * 100;
    
    document.getElementById("popChange").innerHTML = popChange;
    document.getElementById("percentagePopChange").innerHTML = percentagePopChange.toFixed(1)+"%";

    // Time Price
    var startTimePrice = startPrice / startComp
    var endTimePrice = endPrice / endComp
    var timePriceChange = endTimePrice - startTimePrice
    var timePricePercentageChange = timePriceChange / startTimePrice * 100;
   
    document.getElementById("startTimePrice").innerHTML = startTimePrice.toFixed(7);
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
    var personalElasticity = personalMultiplierPercentageChange/popChange/100;
    var populationElasticity = populationMultiplierPercentageChange/popChange/100;

    document.getElementById("personalElasticity").innerHTML = personalElasticity.toFixed(2);
    document.getElementById("populationElasticity").innerHTML = populationElasticity.toFixed(2);
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
}


// $("input[data-type='currency']").on({
//     keyup: function() {
//       formatCurrency($(this));
//     },
//     blur: function() { 
//       formatCurrency($(this), "blur");
//     }
// });

// function formatNumber(n) {
//   // format number 1000000 to 1,234,567
//   return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
// }

// function formatCurrency(input, blur) {
//   // appends $ to value, validates decimal side
//   // and puts cursor back in right position.
  
//   // get input value
//   var input_val = input.val();
  
//   // don't validate empty input
//   if (input_val === "") { return; }
  
//   // original length
//   var original_len = input_val.length;

//   // initial caret position 
//   var caret_pos = input.prop("selectionStart");
    
//   // check for decimal
//   if (input_val.indexOf(".") >= 0) {

//     // get position of first decimal
//     // this prevents multiple decimals from
//     // being entered
//     var decimal_pos = input_val.indexOf(".");

//     // split number by decimal point
//     var left_side = input_val.substring(0, decimal_pos);
//     var right_side = input_val.substring(decimal_pos);

//     // add commas to left side of number
//     left_side = formatNumber(left_side);

//     // validate right side
//     right_side = formatNumber(right_side);
    
//     // On blur make sure 2 numbers after decimal
//     if (blur === "blur") {
//       right_side += "00";
//     }
    
//     // Limit decimal to only 2 digits
//     right_side = right_side.substring(0, 2);

//     // join number by .
//     input_val = "$" + left_side + "." + right_side;

//   } else {
//     // no decimal entered
//     // add commas to number
//     // remove all non-digits
//     input_val = formatNumber(input_val);
//     input_val = "$" + input_val;
    
//     // final formatting
//     if (blur === "blur") {
//       input_val += ".00";
//     }
//   }
  
//   // send updated string to input
//   input.val(input_val);

//   // put caret back in the right position
//   var updated_len = input_val.length;
//   caret_pos = updated_len - original_len + caret_pos;
//   input[0].setSelectionRange(caret_pos, caret_pos);
// }

// function addDollarSign(input) {
//     if (input.value !== '' && !input.value.startsWith('$')) {
//       input.value = '$' + input.value;
//     }
//   }

// const currencyInput = document.getElementById('')