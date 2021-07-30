//Get all values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');
const container1 = document.getElementById("container1");
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');

const recentSearchEl = document.querySelector('.recent-Search');





//get API key by Login to openweather.org

const API_Key = "4f2668c377a67ee3025ef5adbb087cea";


//Now add event listener

if (!localStorage.getItem('cities')) {
   localStorage.setItem('cities', JSON.stringify([]));
}

function recentSearch(cityInput) {
   var buttonEl = document.createElement("button");
   buttonEl.innerHTML = cityInput
   buttonEl.addEventListener('click', (event) => {
      getcurrentweather(event.target.innerHTML)

   })
   recentSearchEl.append(buttonEl)
}

button.addEventListener('click', (event) => {
   event.preventDefault();

   //get input value
   const cityInput = inputTxt.value;
   recentSearch(cityInput);
   getcurrentweather(cityInput)
   //check console.log
   //console.log(cityInput);
})
function getcurrentweather(cityInput) {

      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=metric&appid=4f2668c377a67ee3025ef5adbb087cea')



         .then(res => res.json())
         .then(data => {
            console.log(data);

            //when fill input field then clear input field
            inputTxt.value = " ";

            //Now Show All Date value   


            showData.innerHTML = `
                        
                      
                          <h2 class="city">${data.name}</h2>            
                            <p class="icon"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"/></p>        
                            <p class="desc">${data.weather[0].description}</p>
                            <p class="temp">Temperature: ${data.main.temp} °C</p>
                            <p class="humidity">Humidity: ${data.main.humidity} %</p>
                            <p class="wind">Wind Speed: ${data.wind.speed}</p>
                    
                    `;
            console.log(data.coord.lat);
            console.log(data.coord.lon);
            getfivedays(data.coord.lat, data.coord.lon);

         });
   };

function getfivedays(lat, lon) {
   var onecallAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=metric&appid=4f2668c377a67ee3025ef5adbb087cea"


   fetch(onecallAPI)
      .then(function (response) {
         return response.json()
      }).then(function (data) {
         console.log(data);
         var uviEl = document.createElement("p")
         if (data.current.uvi <= 2) {
            uviEl.innerHTML = "UV Index: " + "<span class=green>" + data.current.uvi + "</span>";
         } else if (data.current.uvi <= 5) {
            uviEl.innerHTML = "UV Index: " + "<span class=yellow>" + data.current.uvi + "</span>";
         } else if (data.current.uvi <= 7) {
            uviEl.innerHTML = "UV Index: " + "<span class=orange>" + data.current.uvi + "</span>";
         } else if (data.current.uvi <= 10) {
            uviEl.innerHTML = "UV Index: " + "<span class=red>" + data.current.uvi + "</span>";
         } else {
            uviEl.innerHTML = "UV Index: " + "<span class=purple>" + data.current.uvi + "</span>";
         }
         console.log(uviEl);



         showData.append(uviEl)



         card1.innerHTML = `
   
   <ul>
      <p class="icon"><img src="https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png"/></p>
      <p class="temp"><i class="fas fa-temperature-high"></i> ${data.daily[1].temp.day}</p>
      <p class="wind"><i class="fas fa-wind"></i> : ${data.daily[1].wind_speed}</p>
      <p class="humidity"><i class="fas fa-tint"></i> : ${data.daily[1].humidity}</p>
   </ul>
   `;

         card2.innerHTML = `

   <ul>
      <p class="icon"><img src="https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}.png"/></p>  
      <p class="temp"><i class="fas fa-temperature-high"></i>${data.daily[2].temp.day}</p>
      <p class="wind"><i class="fas fa-wind"></i> : ${data.daily[2].wind_speed}</p>
      <p class="humidity"><i class="fas fa-tint"></i> : ${data.daily[2].humidity}</p>
   </ul>
  
   `;

         card3.innerHTML = `
   
   <ul>
      <p class="icon"><img src="https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}.png"/></p>
      <p class="temp"><i class="fas fa-temperature-high"></i> ${data.daily[3].temp.day}</p>
      <p class="wind"><i class="fas fa-wind"></i> : ${data.daily[3].wind_speed}</p>
      <p class="humidity"><i class="fas fa-tint"></i> : ${data.daily[3].humidity}</p>
   </ul>
  
   `;

         card4.innerHTML = `
   
   <ul>  
      <p class="icon"><img src="https://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}.png"/></p>
      <p class="temp"><i class="fas fa-temperature-high"></i> ${data.daily[4].temp.day}</p>
      <p class="wind"><i class="fas fa-wind"></i> : ${data.daily[4].wind_speed}</p>
      <p class="humidity"><i class="fas fa-tint"></i> :  ${data.daily[4].humidity}</p>
   </ul>
  
   `;

         card5.innerHTML = `

   <ul>
      <p class="icon"><img src="https://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}.png"/></p>
      <p class="temp"><i class="fas fa-temperature-high"></i> ${data.daily[5].temp.day}</p>
      <p class="wind"><i class="fas fa-wind"></i> : ${data.daily[5].wind_speed}</p>
      <p class="humidity"><i class="fas fa-tint"></i> : ${data.daily[5].humidity}</p>
   </ul>
  
   `;
      });
}






// Current Time //
var d = new Date();
document.getElementById('currentTime').innerHTML = d.toLocaleString();



//local storage//

let cityname = {
   name: ""
};

let cityname_serialized = JSON.stringify(cityname);

localStorage.setItem("", cityname_serialized);

let cityname_deserialized = JSON.parse(localStorage.getItem("cityname"));
console.log(localStorage);