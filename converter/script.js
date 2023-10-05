document.getElementById("convertButton").addEventListener("click", function () {
  const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
  const unitSelect = document.getElementById("unitSelect").value;
  let result;

  if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for temperature.");
      return;
  }

  if (unitSelect === "celsius") {
      result = `${temperatureInput} °C is equal to ${(temperatureInput * 9/5) + 32} °F and ${(temperatureInput + 273.15)} K.`;
  } else if (unitSelect === "fahrenheit") {
      result = `${temperatureInput} °F is equal to ${(temperatureInput - 32) * 5/9} °C and ${((temperatureInput - 32) * 5/9) + 273.15} K.`;
  } else if (unitSelect === "kelvin") {
      result = `${temperatureInput} K is equal to ${(temperatureInput - 273.15)} °C and ${((temperatureInput - 273.15) * 9/5) + 32} °F.`;
  }

  document.getElementById("result").textContent = result;
});
