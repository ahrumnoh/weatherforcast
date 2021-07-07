//Get all values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');


//get API key by Login to openweather.org

const API_Key = "72a6ec4becabdca55cf6654df7c049f9";

//Now add event listener

button.addEventListener('click', (event) => {
    event.preventDefault();

    //get input value
    const cityInput = inputTxt.value;
    //check console.log
    //console.log(cityInput);


    //Now Fetch Through Get API

    fetch('http://api.openweathermap.org/data/2.5/weather?q=cityInput&appid=API_key')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
});