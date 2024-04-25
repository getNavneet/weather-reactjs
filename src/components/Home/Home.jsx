import React, { useState, useRef, useEffect } from "react";
import "./home.css";
import { API_KEY } from "../../../api";
function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [date,setDate]=useState(null)
  const [errorMsg,setErrorMsg]=useState(null)
  
  const weatherApi = {
    key: "key",
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}
useEffect(() => {
  setDate(new Date());
}, []);
function getTime(todayDate) {
  let hour =addZero(todayDate.getHours());
  let minute =addZero(todayDate.getMinutes());
  return `${hour} : ${minute}`;
}
function addZero(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}

function manageDate(dateArg) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];  //dateArg.getMonth()--this method returns (0-11)
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];  //dateArg.getDay()--this method returns (0-6)
  return `${date} ${month} (${day}) , ${year}`
}
const search = () => {
  setData(null)
  setLoading(true)
  const city = inputRef.current.value;
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => {
      return response.json();
    })
    .then(weatherData => {
      if(weatherData.cod==400){
        setErrorMsg("Please , Enter any city ")
      }
      else if(weatherData.cod==404){
        setErrorMsg("Sorry, city not found")

      }
      else if (weatherData.cod==200){
        setData(weatherData);
        setErrorMsg(null)
      }
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
    });
    setLoading(false)
};
  const inputRef = useRef(null);
  return (
    <>
      <div className="home-section"></div>
        <div className="containerr">
          <div className="search-box">
            <h2 className="container-title">Get Weather</h2>
            <input
              className="inputcity"
              placeholder="Enter city here"
              ref={inputRef}
              // onChange={search}
              autoFocus
            />
            <button type="button" onClick={search} className="Search-btn">
              Search
            </button>
          </div>
          <div className="w-box">
            {data &&  (
            <div className="w-report">
        <div className="location-details">
        <div className="city"><strong>{data.name}, {data.sys.country}</strong></div>
        <div className="date">{manageDate(date)}</div>
        </div>
        <div className="temp"> <strong>{Math.round(data.main.temp)} &deg;C </strong>  </div>
        <div className="condition">{data.weather[0].main}</div>
        <div className="updateTime">Updated As of :<strong> {getTime(date)}</strong></div>
        <hr/>
        <div className="day-details">
        <div className="basic">Feels like {Math.round(data.main.feels_like)}&deg;C | Humidity {data.main.humidity}%  <br/> Pressure {data.main.pressure} mb | Wind {data.wind.speed} KMPH</div>
    </div>
    </div>
      )
      }
       {errorMsg && (
  <div className="w-report">
    <h1 > error occured while fetching data </h1>
    <h1 className="error-msg" >{errorMsg}</h1>
    {/* You can add additional content or components here */}
  </div>
)}
          </div>
        </div>
      
        <div class="tut">
        <h2>How To Use</h2>
        <p>There is no such Usage guide just Enter name of your city and click on search button and you are done data of your city will be displayed within few seconds</p>
        <p>please enter correct spelling without any space</p>
        <p>name of the city can be in capital or small</p>
        <p>for any Query/Complain connect to-<strong>navneetkumar.html@gmail.com</strong></p>
    </div>
    </>
  );
}

export default Home;
