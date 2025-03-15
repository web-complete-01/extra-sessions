console.log('Fetch explained!');

/**
 *  fetch current forecast
 */ 
// fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=Brasov`)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(apiData){
//         console.log(apiData);
//     });

/**
 *  fetch current forecast by hour
 */ 
// fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=Brasov&days=1`)
//     .then(response => response.json())
//     .then(apiData => displayWeather(apiData));

fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=Brasov&days=1`)
    .then(function(response){
        return response.json();
    })
    .then(function(apiData){
        displayWeather(apiData);
    });

// 
function displayWeather(apiData){
    console.log(apiData);
}