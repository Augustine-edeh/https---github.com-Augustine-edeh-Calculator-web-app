const operationDisplay = document.querySelector(".operation"),
  solutionDisplay = document.querySelector(".solution");

const operandKeys = [...document.querySelectorAll(".operand-key")],
  operatorKeys = [...document.querySelectorAll(".operator-key")];

const operationKeys = [...operandKeys, ...operatorKeys];

const clearKey = document.querySelector(".reset-key");
const equalsKey = document.querySelector(".equals-key");

// || ADDING EVENT LISTENER FOR ALL OPERATION-KEYS
operationKeys.forEach((key) =>
  key.addEventListener(
    "click",
    (e) => (operationDisplay.value += e.target.value)
  )
);

// || CLEAR FUNCTION
const clear = () => {
  (operationDisplay.value = ""), (solutionDisplay.value = "");
};
clearKey.addEventListener("click", () => clear());

// || EVALUATION FUNCTION
const evaluate = () => {
  solutionDisplay.value = eval(operationDisplay.value);
};
equalsKey.addEventListener("click", () => evaluate());