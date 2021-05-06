let apiKey = "08977aa39193a995a23d906d8a27f8dc77ac8805";
let btn = document.getElementById("btn");
let geo = document.getElementById("geo");
let city = document.getElementById("city");
let pm = document.getElementById("pm");
let aqi = document.getElementById("aqi");
let health = document.getElementById("health");

/*----------------------------map------------------------*/
const map = L.map("mapid", 14);

const showMap = (lat, lng) => {
  const icon = L.icon({
    iconUrl: "./icons/icon-location.svg",
    iconSize: [30, 40],
    iconAnchor: [20, 25],
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  map.setView([lat, lng], 14);
  L.marker([lat, lng], { icon: icon }).addTo(map);
};

/*--------------------------input--------------------------*/
btn.onclick = function () {
  let location = document.getElementById("input").value;
  let uri = "https://api.waqi.info/feed/" + location + "/?token=" + apiKey;
  axios.get(uri).then((response) => {
    //console.log(response);
    //check city
    if (response.data.data.city === undefined) {
      city.innerHTML = "Sorry, we cannot find your city!";
    } else if (response.data.data.city.name !== undefined) {
      let city_name = response.data.data.city.name;
      city.innerHTML = city_name;
    }
    //check data
    if (response.data.data.iaqi === undefined) {
      pm.innerHTML = "n.d";
      aqi.innerHTML = "n.d";
      health.innerHTML = "n.d";
    }

    if (response.data.data.iaqi.pm25 === undefined) {
      pm.innerHTML = "n.d";
    } else if (response.data.data.iaqi.pm25.v !== undefined) {
      let fine_dust = response.data.data.iaqi.pm25.v;
      pm.innerHTML = fine_dust;
    }

    let air_quality = response.data.data.aqi;
    aqi.innerHTML = air_quality;
    let good = "Air quality is considered satisfactory";
    let moderate = "Air quality is acceptable";
    let mid = "Members of sensitive groups may experience health effects";
    let unhealthy = "Everyone may begin to experience health effects";
    let very_unhealthy = "Health warnings of emergency conditions";
    let poison = "Health alert";

    if (air_quality <= 50) {
      health.innerHTML = good;
      aqi.style.backgroundColor = "#019701";
    } else if (air_quality > 50 && air_quality <= 100) {
      health.innerHTML = moderate;
      aqi.style.backgroundColor = "#ffee00";
    } else if (air_quality > 100 && air_quality <= 150) {
      health.innerHTML = mid;
      aqi.style.backgroundColor = "#f08903";
    } else if (air_quality > 150 && air_quality <= 200) {
      health.innerHTML = unhealthy;
      aqi.style.backgroundColor = "#f30b3d";
    } else if (air_quality > 200 && air_quality <= 300) {
      health.innerHTML = very_unhealthy;
      aqi.style.backgroundColor = "#790d79";
    } else if (air_quality > 300) {
      health.innerHTML = poison;
      aqi.style.backgroundColor = "#8d0909";
    }

    let lat = response.data.data.city.geo[0];
    let lng = response.data.data.city.geo[1];
    showMap(lat, lng);
  });
};

/*------------------------geolocation----------------------------*/
geo.onclick = function () {
  let uri = "https://api.waqi.info/feed/here/?token=" + apiKey;
  axios.get(uri).then((response) => {
    //console.log(response);

    let city_name = response.data.data.city.name;
    city.innerHTML = city_name;

    if (response.data.data.iaqi.pm25 === undefined) {
      pm.innerHTML = "nd.";
    } else if (response.data.data.iaqi.pm25.v !== undefined) {
      let fine_dust = response.data.data.iaqi.pm25.v;
      pm.innerHTML = fine_dust;
    }

    let air_quality = response.data.data.aqi;
    aqi.innerHTML = air_quality;
    let good = "Air quality is considered satisfactory";
    let moderate = "Air quality is acceptable";
    let mid = "Members of sensitive groups may experience health effects";
    let unhealthy = "Everyone may begin to experience health effects";
    let very_unhealthy = "Health warnings of emergency conditions";
    let poison = "Health alert";

    if (air_quality <= 50) {
      health.innerHTML = good;
      aqi.style.backgroundColor = "#019701";
    } else if (air_quality > 50 && air_quality <= 100) {
      health.innerHTML = moderate;
      aqi.style.backgroundColor = "#ffee00";
    } else if (air_quality > 100 && air_quality <= 150) {
      health.innerHTML = mid;
      aqi.style.backgroundColor = "#f08903";
    } else if (air_quality > 150 && air_quality <= 200) {
      health.innerHTML = unhealthy;
      aqi.style.backgroundColor = "#f30b3d";
    } else if (air_quality > 200 && air_quality <= 300) {
      health.innerHTML = very_unhealthy;
      aqi.style.backgroundColor = "#790d79";
    } else if (air_quality > 300) {
      health.innerHTML = poison;
      aqi.style.backgroundColor = "#8d0909";
    }

    let lat = response.data.data.city.geo[0];
    let lng = response.data.data.city.geo[1];
    showMap(lat, lng);
  });
};

showMap(45.4773, 9.1815); //defaul map milan
