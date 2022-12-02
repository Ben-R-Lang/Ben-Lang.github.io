function calc() {





    var P = document.getElementById('P').value;
    P = Number (P);
    var n = 12;
    var r = document.getElementById('r').value;
    r = Number (r);
    var t = document.getElementById('t').value;
    t = Number (t);
    var m = document.getElementById('m').value;
    m = Number (m);
    var B = P * (1 +  r / n) ** (n * t) - m * ((1 + r / n) ** (n * t) - 1) / (r / n);

    document.getElementById("out").innerHTML = "Remaining Balance: $" + B.toFixed(2);
}
function reset() {
        document.getElementById("P").value = "";
        document.getElementById("r").value = "";
        document.getElementById("t").value = "";
        document.getElementById("m").value = "";

}