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



//weatherforecast for 5days, Sydney

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);
  js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs)
  ;}}(document,'script','weatherwidget-io-js');





// //5days weather forecast intenationally Starts!
// //5days weather forecast intenationally- Get all values


// //5days weather forecast intenationally - Get API key for 5days
// const API_Key1 = "996ca7a18bf86848d417a27ae94805c7";



// if(!localStorage.getItem('cities')){
//   localStorage.setItem('cities', JSON.stringify([])); 
// }

// button.addEventListener('future', (event) => {
//     event.preventDefault();

//   //get input value
//   const cityInput = inputTxt.value;
//   //check console.log
  //console.log(cityInput);


 


       


//       .then(res => res.json())
//       .then(data => {
//           console.log(data);
//       });
// });