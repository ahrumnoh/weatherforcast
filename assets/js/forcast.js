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





//get API key by Login to openweather.org

const API_Key = "4f2668c377a67ee3025ef5adbb087cea";


//Now add event listener

if(!localStorage.getItem('cities')){
  localStorage.setItem('cities', JSON.stringify([])); 
}

button.addEventListener('click', (event) => {
    event.preventDefault();

    //get input value
    const cityInput = inputTxt.value;
    //check console.log
    //console.log(cityInput);

    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&units=metric&appid=4f2668c377a67ee3025ef5adbb087cea') 
    
    
    
      .then(res => res.json())
      .then(data => {
          console.log(data);

    //when fill input field then clear input field
            inputTxt.value = " ";

        //Now Show All Date value   


            showData.innerHTML = `
                        
                      
                          <h2 class="city">${data.name}</h2>            
                            <p class="icon"><img src="https://openweathermap.org/img/wn/${ data.weather[0].icon }.png"/></p>        
                            <p class="desc">${data.weather[0].description}</p>
                            <p class="temp">Temperature: ${data.main.temp} °C</p>
                            <p class="humidity">Humidity: ${data.main.humidity} %</p>
                            <p class="wind">Wind Speed: ${data.wind.speed}</p>
                    
                    `;    
                    console.log(data.coord.lat);
                    console.log(data.coord.lon);   
                    getfivedays(data.coord.lat,data.coord.lon);                     

     });
});

function getfivedays(lat,lon){
  var onecallAPI = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=minutely,hourly,alerts&units=imperial&appid=4f2668c377a67ee3025ef5adbb087cea"
 
 
  fetch(onecallAPI) 
 .then (function(response){
   return response.json()
 }).then(function(data){
   console.log(data);


   var uviEl = document.createElement("p")
   uviEl.innerHTML = "UV Index:"+ data.current.uvi;
   showData.append(uviEl)



   card1.innerHTML =`
   <p class ="weekday">${data.daily[1].dt}</p>
   <p class="tempmax">Temp: ${data.daily[1].temp.day}</p>
   <p class="windspeed">Wind: ${data.daily[1].wind_speed}</p>
   <p class="huminity">Humidity${data.daily[1].humidity}</p>
  
   `;

   card2.innerHTML =`
   <p class ="weekday">${data.daily[2].dt}</p>
   <p class="tempmax">${data.daily[2].temp.day}</p>
   <p class="windspeed">${data.daily[2].wind_speed}</p>
   <p class="huminity">${data.daily[2].humidity}</p>
  
   `;

   card3.innerHTML =`
   <p class ="weekday">${data.daily[3].dt}</p>
   <p class="tempmax">${data.daily[3].temp.day}</p>
   <p class="windspeed">${data.daily[3].wind_speed}</p>
   <p class="huminity">${data.daily[3].humidity}</p>
  
   `;

   card4.innerHTML =`
   <p class ="weekday">${data.daily[4].dt}</p>
   <p class="tempmax">${data.daily[4].temp.day}</p>
   <p class="windspeed">${data.daily[4].wind_speed}</p>
   <p class="huminity">${data.daily[4].humidity}</p>
  
   `;

   card5.innerHTML =`
   <p class ="weekday">${data.daily[5].dt}</p>
   <p class="tempmax">${data.daily[5].temp.day}</p>
   <p class="windspeed">${data.daily[5].wind_speed}</p>
   <p class="huminity">${data.daily[5].humidity}</p>
  
   `;
  });
 }   






// Current Time //
var d = new Date();
document.getElementById('currentTime').innerHTML = d.toLocaleString();



//weatherforecast for 5 days in Sydney

!function(d,s,id)

{var js,fjs=d.getElementsByTagName(s)[0];


  if(!d.getElementById(id)){js=d.createElement(s);

  js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
  fjs.parentNode.insertBefore(js,fjs);}}
  
  (document,'script','weatherwidget-io-js');





