
let apiKey = '483d06f6892705e9af32b83722223ab8';
    
fetchData = function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    ).then((response) => response.json())
    .then((data) => displayWeather(data)); // Question
};

displayWeather = function (data) {
    const name =  data.name;
    const description = data.weather[0].description;
    const temp = `${data.main.temp_min} / ${data.main.temp_max}`
    const  humidity = data.main.humidity;
    const speed =data.wind.speed;
    const feels_like = data.main.feels_like;
    console.log(name,description,temp,humidity,speed)
    document.querySelector('.city').innerText = `${name}'s Weather:'`
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

