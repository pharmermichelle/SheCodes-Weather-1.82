let currentSearch = document.getElementById("search-form");
let cityInput = document.getElementById("city-input");
let currentCity = document.querySelector(".currentCity");
let currentDay = document.querySelector("#currentDay");
let currentTime = document.querySelector("#currentTime");
let currentTemp = document.querySelector(".currentTemp");

// Function to update the current day & time
function updateDay() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours().toString().padStart(2, "0");
  let minute = now.getMinutes().toString().padStart(2, "0");

  if (currentDay) {
    currentDay.innerHTML = day;
  }

  if (currentTime) {
    currentTime.innerHTML = `${hour}:${minute}`;
  }
}

// Run updateDay() when the page loads
updateDay();

// When the form is submitted, update the city and day without reloading the page
currentSearch.addEventListener("submit", function (today) {
  today.preventDefault();
  let city = cityInput.value.trim();
  currentCity.innerHTML = city;
  updateDay();
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=06c63cbc3e714d4fd60883of7efa4t87`;

  axios.get(apiUrl).then((response) => {
    console.log("✅ API CALL SUCCESSFUL!");
    console.log("Full API response:", response);
    console.log("Response.data:", response.data);
    console.log(
      "response.data.temperature.current:",
      response.data.temperature.current
    );
    currentTemp.innerHTML = `${response.data.temperature.current}`;
  });
});
