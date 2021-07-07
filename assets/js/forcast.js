//Get all values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');


//get API key by Login to openweather.org

const API_Key = "72a6ec4becabdca55cf6654df7c049f9";

//Now add event listener

button.addEventListener('click', () => {

    //get input value
    const cityInput = inputTxt.value;
    console.log(cityInput);
})