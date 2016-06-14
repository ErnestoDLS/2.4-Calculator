document.addEventListener("DOMContentLoaded",
(function(e){
  var clear = document.querySelector("[data-js='clear']");
  var number = document.querySelector("[data-js='number']");
  var output = document. querySelector("[data-js='output']");
  var operator = document.querySelector("[data-js='operator']");
  var equate = document.querySelector("[data-js='equate']");
  var numbersString = "";
  var calcLog = "";

  clear.addEventListener("click", function(e){
    var outputClear = "";
    numbersString = "";
    output.textContent = outputClear;
    e.preventDefault();
  });

function setOutputText(text){
  output.textContent += text
};

for(var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e){
    var value = e.currentTarget.dataset.number;
    setOutputText(value);
    numbersString += value;
    e.preventDefault();
  })
};

for (var i = 0; i < operator.length; i ++) {
  operator[i].addEventListener("click", function(e){
  operator = e.currentTarget.dataset.type;
  setOutputText(e.currentTarget.textContent);
  e.preventDefault();
  })
};

equate.addEventListener("click", function(e){
  var soultion = eval(numbersString);

  var displaySolution = eval(numbersString);
  output.textContent = displaySolution;

  var shortSolution = output.textContent;
  e.preventDefault();
  calcLog += numbersString;
  calcLog += operator;
  calcLog += "=";
  calcLog += soultion;
  calcLog += ",";

  if(Math.floor(displaySolution) != displaySolution) {
    shortSolution = displaySolution.toFixed(3);
    output.textContent = shortSolution;
  }else {
    output.textContent =shortSolution;
  };

});

}));
