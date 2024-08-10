document.addEventListener('DOMContentLoaded', function() {
    const apikey = "cb8391130b9c409bf1750b811c638880";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
       
            const data = await response.json();
            console.log(data);
    
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            if(data.weather[0].main=="Clouds"){
                weatherIcon.src="images/Clouds.png";
            }
            if(data.weather[0].main=="Clear"){
                weatherIcon.src="images/Clear.png";
            }
            if(data.weather[0].main =="Rain"){
                weatherIcon.src="images/rain.png";
            }
            if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="images/drizzle.png";
            }
            if(data.weather[0].main=="Mist"){
                weatherIcon.src="images/mist.png";
            }
    
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    
        if (searchBtn) {
            searchBtn.addEventListener("click", () => {
                checkWeather(searchBox.value);
            });
        } else {
            console.error('Element with class "search button" not found.');
        }
    });
    

     
        
     
     