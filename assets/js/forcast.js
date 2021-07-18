//Get all values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');
const forecastEl = document.getElementById("futureform");




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
   forecastEl.innerHTML = ""
   for(var i = 1; i<6; i++){
     console.log(data.daily[i])
     var divEl = document.createElement("div");
     divEl.innerHTML = `
     <p class="weekday">${data.daily[i].dt}</p>
     <p class="tempmax">${data.daily[i].temp.day}</p>
     <p class="windspeed">${data.daily[i].wind_speed}</p>
     <p class="huminity">${data.daily[i].humidity}</p>
     ` 
     forecastEl.append(divEl)
   }
 })
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





