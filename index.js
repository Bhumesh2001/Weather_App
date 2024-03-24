const apiKey = 'c5dff14de0c912d978cdd4e8af53937c';
const tempTag = document.getElementById('temp');
const humidiyTag = document.getElementById('humidity');
const windTag = document.getElementById('wind');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', async () => {
    try {
        const cityName = document.getElementById('input-value').value;
        if(cityName != ''){
            const weather_data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
            );
            const response = await weather_data.json();
            console.log(response);
    
            const temperature = response.main.temp;
            const windSpeed = response.wind.speed;
            const humidity = response.main.humidity;
    
            tempTag.textContent = `${temperature} °C`;
            humidiyTag.textContent = `${windSpeed} m/s`;
            windTag.textContent = `${humidity} %`;
            document.getElementById('city-name').textContent = cityName;
        };
    } catch (error) {
        console.log(error);
    };
});