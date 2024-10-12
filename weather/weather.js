const search = document.getElementById("search");
search.addEventListener("change", () => {
  const city = search.value;
  const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c0ff71037emsh42183715efe5161p1ab384jsn73ace912f2a7",
      "x-rapidapi-host": "weather-api138.p.rapidapi.com",
    },
  };

  async function getdata() {
    try {
      const response = await fetch(url, options);
      if (!response) {
        throw new Error(`Problem with${response.status}`);
      }

      const data = await response.json();

      const c = (data.main.temp - 273).toFixed(1);
      document.getElementById("location").innerHTML = data.name;
      document.getElementById(
        "img").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        
      document.getElementById("temp").innerHTML = `${c}°C`;
      document.getElementById("condition").innerHTML = data.weather[0].main;
      const feel = (data.main.feels_like - 273).toFixed(1);
      document.getElementById("feel").innerHTML = `Feels like ${feel}°C`;
      const uptemp = (data.main.temp_max - 273).toFixed(1);
      document.getElementById("up").innerHTML = `${uptemp}°C`;
      const downtemp = (data.main.temp_min - 273).toFixed(1);
      document.getElementById("down").innerHTML = `${downtemp}°C`;
      document.getElementById("wind").innerHTML = `${data.wind.speed} km/h`;
      document.getElementById(
        "pressure"
      ).innerHTML = `${data.main.pressure} in HG`;

      const set = data.sys.sunset * 1000;
      const settime = new Date(set);
      document.getElementById("set").innerHTML = settime.toLocaleTimeString();

      const rise = data.sys.sunrise * 1000;
      const risetime = new Date(rise);
      document.getElementById("rise").innerHTML = risetime.toLocaleTimeString();

    } catch (error) {
      console.error(`Problem with your code`);
    }
  }

  getdata();
});
