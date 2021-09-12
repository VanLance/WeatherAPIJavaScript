
let apiKey = '483d06f6892705e9af32b83722223ab8';
    
fetchData = function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    ).then((response) => response.json())
    .then((data) => displayWeather(data)); // Question
};

displayWeather = function (data) {
    const name =  data.name;
    const description = data.weather[0].description;
    const the_temp = Math.round(data.main.temp);
    const temp = `${Math.round(data.main.temp_min)} / ${Math.round(data.main.temp_max)}`
    const humidity = Math.round(data.main.humidity);
    const speed =Math.round(data.wind.speed);
    const feels_like = Math.round(data.main.feels_like);
    console.log(name,description,temp,humidity,speed)
    document.querySelector('.city').innerText = `${name}'s Weather: `
    document.querySelector('.current_temp').innerText = `Current temp: ${the_temp}°F`
    document.querySelector('.temp').innerText = `Today's Highs and Lows : ${temp}°F`
    document.querySelector('.forecast').innerText =`Forecast: ${description}`
    document.querySelector(`.humidity`).innerText = `Humidity: ${humidity}%`
    document.querySelector('.wind').innerText = `Wind Speeds: ${speed}/mph`
    document.querySelector('.feels').innerText = `Currently Feels Like: ${feels_like}°F`
}

search = function (){
    fetchData(document.querySelector('.searchBar').value);
}

document.querySelector('.search button').addEventListener('click', function(){
    search();
})

// document.querySelector('searchBar')
    
fetchData('Chicago')

