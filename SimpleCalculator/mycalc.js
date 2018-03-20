function addInput (value) {
    let inputBox = document.getElementById("input-box");
    inputBox.value += value;
};

function compute() {
    let inputBox = document.getElementById("input-box");
    inputBox.value = eval(inputBox.value);
};

function clearBox() {
    let inputBox = document.getElementById("input-box");
    inputBox.value = ""; 
};
