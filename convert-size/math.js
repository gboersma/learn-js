function convertUnits(inputUnit, outputUnit, numberConverted) {
    if (inputUnit == "m" && outputUnit == "cm") {
        var awnser = numberConverted * 100; //multiply the length value by 100 
        return awnser;
    } else if (inputUnit == "cm" && outputUnit == "m") {
        var awnser = numberConverted / 100; //divide the length value by 100
        return awnser;
    } else if (inputUnit == "mm" && outputUnit == "m") {
        var awnser = numberConverted / 1000; //divide the length value by 100
        return awnser;
    } else if (inputUnit == "mm" && outputUnit == "cm") {
        var awnser = numberConverted / 10; //divide the length value by 100
        return awnser;
    } else if (inputUnit == "cm" && outputUnit == "mm") {
        var awnser = numberConverted * 10; //multiply the length value by 100 
        return awnser;
    } else if (inputUnit == "m" && outputUnit == "mm") {
        var awnser = numberConverted * 1000; //multiply the length value by 100 
        return awnser;
    } 
    else if (inputUnit == "mm" && outputUnit == "mm") {
        var awnser = numberConverted; 
        return awnser;
    }
    else if (inputUnit == "cm" && outputUnit == "cm") {
        var awnser = numberConverted; 
        return awnser;
    }
    else if (inputUnit == "m" && outputUnit == "m") {
        var awnser = numberConverted; 
        return awnser;
    }
}