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

    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&appid=4f2668c377a67ee3025ef5adbb087cea')
    .then(res => res.json())
    .then(data => {
        //console.log(data);

    //when fill input field then clear input field
        inputTxt.value = " ";

        //Now Show All Date value
        showData.innerHTML = `
                    <ul>
                        <li class="desc">${data.weather[0].description}</li>
                        <li class="city">${data.name}</li>
                        <li class="temp">${data.main.temp}°C</li>
                        <li class="wind">${data.wind.deg}°</li>
                     
                    </ul> 
                    `;
    });
});