//Get all values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');



//get API key by Login to openweather.org

const API_Key = "4f2668c377a67ee3025ef5adbb087cea";

//Now add event listener

button.addEventListener('click', (event) => {
    event.preventDefault();

    //get input value
    const cityInput = inputTxt.value;
    //check console.log
    //console.log(cityInput);


    //Now Fetch Through Get API

    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&units=metric&appid=4f2668c377a67ee3025ef5adbb087cea') 
     
    
    
      .then(res => res.json())
      .then(data => {
          console.log(data);

    //when fill input field then clear input field
            inputTxt.value = " ";

        //Now Show All Date value
     


            showData.innerHTML = `

            
                    
                    <ul>  
                          <h2 class="city">${data.name}</h2>            
                          <li class="icon"><img src="https://openweathermap.org/img/wn/${ data.weather[0].icon }.png"/></li>        
                          <li class="desc">${data.weather[0].description}</li>
                          <li class="temp">Temperature: ${data.main.temp} °C</li>
                          <li class="humidity">Humidity: ${data.main.humidity} %</li>
                          <li class="wind">Wind Speed: ${data.wind.speed}</li>
                    </ul> 
                    `;
                                

     });
});



// Current Time //
var d = new Date();
document.getElementById('currentTime').innerHTML = d.toLocaleString();