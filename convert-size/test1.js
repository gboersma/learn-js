function convert() {
    var number = document.getElementById("input").value;
    var numberConverted = parseInt(number, 10);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var awnser = convertUnits(inputUnit, outputUnit, numberConverted);
    document.getElementById("outputNumber").innerHTML = "Your awnser is " + awnser + outputUnit + ".";
}
