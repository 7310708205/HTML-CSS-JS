function clearScreen() {
    document.getElementById("output").value = "";
}
function showValue(value) {
    document.getElementById("output").value += value;
}
function calculate() {
    let a = document.getElementById("output").value;
    let b = eval(a);
    document.getElementById("output").value = b;
}
