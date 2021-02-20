/*form ricerca*/

search.onclick = function () {
  let apiKey = 'c4e10ce7b57a0085d920746d92728e42';
  let city = document.getElementById('testo').value;
  let uri = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

  var richiesta = new XMLHttpRequest();
  richiesta.open ('GET', uri, true);
  richiesta.onload = function () {
    var data = JSON.parse(this.response);

    console.log(data);

    var città = data.name;
    c = document.getElementById('c').innerHTML = "Città: " + città;

    var weather_icon = data.weather[0].icon;
    icona = document.getElementById('icona').innerHTML = `<img id='img_icona_res' src="icons-weather/${weather_icon}.png">`;

    var temp = data.main.temp;
    temp = parseInt(temp) - 273;
    t = document.getElementById('t').innerHTML = "Temperatura: " + temp + "°";

    var temp_max = data.main.temp_max;
    temp_max = parseInt(temp_max) - 273;
    t_max = document.getElementById('t_max').innerHTML = "Temperatura max.: " + temp_max + "°";

    var temp_min = data.main.temp_min;
    temp_min = parseInt(temp_min) - 273;
    t_min = document.getElementById('t_min').innerHTML = "Temperatura min.: " + temp_min + "°";

  }
  richiesta.send();
}

/*geolocalizzazione*/

geo.onclick = function () {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition (position => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      let apiKey = 'c4e10ce7b57a0085d920746d92728e42';
      let geo_uri = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + apiKey;

      var richiesta_geo = new XMLHttpRequest();
      richiesta_geo.open ('GET', geo_uri, true);
      richiesta_geo.onload = function () {
        var data = JSON.parse(this.response);

        var città = data.name;
        c = document.getElementById('c').innerHTML = "Città: " + città;

        var weather_icon = data.weather[0].icon;
        icona = document.getElementById('icona').innerHTML = `<img id='img_icona_res' src="icons-weather/${weather_icon}.png">`;

        var temp = data.main.temp;
        temp = parseInt(temp) - 273;
        t = document.getElementById('t').innerHTML = "Temperatura: " + temp + "°";

        var temp_max = data.main.temp_max;
        temp_max = parseInt(temp_max) - 273;
        t_max = document.getElementById('t_max').innerHTML = "Temperatura max.: " + temp_max + "°";

        var temp_min = data.main.temp_min;
        temp_min = parseInt(temp_min) - 273;
        t_min = document.getElementById('t_min').innerHTML = "Temperatura min.: " + temp_min + "°";

      }
      richiesta_geo.send();
    });
  } else {
    alert('Geolocalizzazione non disponibile');
  }
}
