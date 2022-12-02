function calc() {
var P = document.getElementById("P").value;
var r = document.getElementById("r").value;
var t = document.getElementById("t").value;




<button onclick="
    var P = document.getElementById('P').value;
    var n = 12;
    var r = document.getElementById('r').value;
    var t = document.getElementById('t').value;
    var m = document.getElementById('m').value;
    var B = P * (1 +  r / n) ** (n * t) - m * [(1 + r / n) ** n * t - 1] / (n / 12);
    B = B.toFixed(2);
    alert ('Mortgage Balance: ' + B);
">Calculate</button>
}