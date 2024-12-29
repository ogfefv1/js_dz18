const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
let table = document.querySelector("#weather");
let btn = document.querySelector("#add");
let city = document.querySelector("#textCity");

function addCity() 
{
    if 
    (!city.value) return;
    table.removeAttribute("style");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric&lang=uk`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => 
            {
            const { name, main, weather, sys } = data;
            const tr = document.createElement("tr");
            
            tr.innerHTML = `
                <td>${name}</td>
                <td>${main.temp}°C</td>
                <td>${main.feels_like}°C</td>
                <td class="desc">
                    <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png">
                    ${weather[0].description}
                </td>
                <td>${main.humidity}%</td>
                <td>${new Date(sys.sunrise).toLocaleTimeString("uk-UA")}</td>
            `;
            
            table.append(tr);
        }
    );
}

btn.addEventListener("click", addCity);