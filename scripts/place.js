let temp = document.querySelector("#temp");
let windspeed = document.querySelector("#windspeed");
let windchill = document.querySelector("#windchill");
let tempvar = 22.22;
let windspeedvar = 19;

temp.innerHTML = `${tempvar.toFixed(1)} °C`;
windspeed.innerHTML = `${windspeedvar.toFixed(1)} km/h`;

if (tempvar <= 10 && windspeedvar > 4.8) {
    windchill.innerHTML = calculateWindChill(tempvar, windspeedvar).toFixed(1) + "°C";
} else {
    windchill.innerHTML = "N/A";
}

function calculateWindChill(temp, windspeed) {
        return 13.12 + (0.6215 * temp) - (11.37 * windspeed ** 0.16) + (0.3965 * temp * windspeed ** 0.16);
}
