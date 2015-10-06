// Bonus
var whichTemp = "c";

// Fahrenheit converter
var fahrenheit = 80;
var fahrenheitTemps = [];
var fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
var fahrenheitToKelvin = (fahrenheit + 459.67) / 1.8;
fahrenheitTemps.push( fahrenheit );
fahrenheitTemps.push( fahrenheitToCelsius );
fahrenheitTemps.push( fahrenheitToKelvin );

// Celsius converter
var celsius = 25;
var celsiusTemps = [];
var celsiusToFahrenheit = celsius * 1.8 + 32;
var celsiusToKelvin = celsius + 273.15;
celsiusTemps.push( celsius );
celsiusTemps.push( celsiusToFahrenheit );
celsiusTemps.push( celsiusToKelvin );

// Kelvin converter
var kelvin = 273.15;
var kelvinTemps = [];
var kelvinToCelsius = kelvin - 273.15;
var kelvinToFahrenheit = kelvin * 1.8 - 459.67;
kelvinTemps.push( kelvin );
kelvinTemps.push( kelvinToCelsius );
kelvinTemps.push( kelvinToFahrenheit );

if (whichTemp == "f") {
    for (var i = 0; i < fahrenheitTemps.length; i++) {
    console.log(fahrenheitTemps[i]);
    }
} else if (whichTemp == "c") {
    for (var i = 0; i < celsiusTemps.length; i++) {
      console.log(celsiusTemps[i]);
    }
} else {
    for (var i = 0; i < kelvinTemps.length; i++) {
      console.log(kelvinTemps[i]);
    }
}
