//Get all values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');



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

    // var history = localStorage.getItem('cities');
    // JSON.parse
    // history.push (cityInput)
    // localStorage.setItem(cities, history)  

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


// store  in localstorage with an arrya
// create a diynamic el with the city name 


// Current Time //
var d = new Date();
document.getElementById('currentTime').innerHTML = d.toLocaleString();



// Add Datepicker widget here //
$( function() {
  $( "#datepicker" ).datepicker({
    showButtonPanel: true
  });
} );



//Local Storage function //

var formEl = $('#cityform');
var nameInputEl = $('#cityname');
var dateInputEl = $('#datepicker');
var trackListEl = $('#trackList');


var printCities = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('trackList').text(listDetail);
  listEl.appendTo(trackListEl);
};


var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();



  if (!nameInput || !dateInput) {
    console.log("Please fill the city name that you are searching for");
    return;
  }


  printCities(nameInput, dateInput);
  

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);



