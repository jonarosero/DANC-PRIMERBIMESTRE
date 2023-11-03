//Listener al botón de busqueda
document.querySelector(".search button").addEventListener("click", () => {
  weather.search();
});

//Listener al presionar enter
document.querySelector(".search-bar").addEventListener("keyup", (event) =>{
    if(event.key == "Enter"){
        weather.search();
    }
});



//Clase clima
let weather = {
  apiKey: "45ad748d8387aeb2bae83fb1a1fa4656",
  url: "https://api.openweathermap.org/data/2.5/weather?q=",

  //Función de busqueda
  search: function () {
    const city = document.querySelector(".search-bar").value;
    if (city) {
      this.fetchWeather(city);
    } else {
      alert("Por favor, ingrese una ciudad.");
    }
  },

  //Función de Fetch a la API
  fetchWeather: async function (city) {
    try {
      const response = await fetch(
        `${this.url}${city}&units=metric&appid=${this.apiKey}`
      );

      if (!response.ok) {
        alert(`No se encontró el clima para la ciudad de ${city}.`);
        throw new Error(`No se encontró el clima para la ciudad de ${city}.`);
      }

      const data = await response.json();
      console.log(data);
      
      this.displayWeather(data);
    } catch (error) {
      console.error(error);
    }
  },


  //Función de renderizado de datos
  displayWeather: function(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    
    console.log(name, icon, description, temp, humidity, speed);
    //Manejo del DOM
    document.querySelector(".city").textContent = `Clima en ${name}`;
    document.querySelector(".temp").textContent = `${temp}°C`;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").textContent = description;
    document.querySelector(".humidity").textContent = `Humedad al ${humidity}%`;
    document.querySelector(".wind").textContent = `Velocidad del Viento: ${speed} km/h`;
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')";
  }
};


//Inicializar siempre con la ciudad de Quito
weather.fetchWeather("Quito");