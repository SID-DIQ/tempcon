function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var conversionType = document.getElementById("conversion").value;
    var resultElement = document.getElementById("result");
    
    if (isNaN(temperature)) {
        resultElement.innerHTML = "Please enter a valid temperature.";
        return;
    }
    
    var result;
    if (conversionType === "CtoF") {
        result = (temperature * 9/5) + 32;
        resultElement.innerHTML = `${temperature}°C is equal to ${result.toFixed(2)}°F`;
    } else if (conversionType === "FtoC") {
        result = (temperature - 32) * 5/9;
        resultElement.innerHTML = `${temperature}°F is equal to ${result.toFixed(2)}°C`;
    }
}
