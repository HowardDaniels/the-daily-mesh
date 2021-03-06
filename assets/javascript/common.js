//var location = localStorage.getItem("location");

      var queryURL = "https://api.worldtradingdata.com/api/v1/stock?symbol=" + "AMZN" + "&api_token=if5qo5SkSbR7QWK2jE4QlqXXFzkkiM47AVu0nQQfDQLswL1k3d55gHhjZFej";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {


        console.log(response);
        $("#amazon").text(response.data[0].name + ": ");
        $("#amzndaychange").text(response.data[0].day_change)
        if(response.data[0].day_change < 0){
            $("#amzndaychange").attr("style", "color: red;");
        }
        else if (response.data[0].day_change == 0){
            $("#amzndaychange").attr("style", "color: blue;");
        }
        else if (response.data[0].day_change > 0){
            $("#amzndaychange").attr("style", "color: green");
        }
  });

  var queryURL2 = "https://api.worldtradingdata.com/api/v1/stock?symbol=" + "GOOGL" + "&api_token=if5qo5SkSbR7QWK2jE4QlqXXFzkkiM47AVu0nQQfDQLswL1k3d55gHhjZFej";
      $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function(response) {


        console.log(response);
        $("#google").text(response.data[0].name + ": ");
        $("#googldaychange").text(response.data[0].day_change)
        if(response.data[0].day_change < 0){
            $("#googldaychange").attr("style", "color: red;");
        }
        else if (response.data[0].day_change == 0){
            $("#googldaychange").attr("style", "color: blue;");
        }
        else if (response.data[0].day_change > 0){
            $("#googldaychange").attr("style", "color: green");
        }
  });

  var queryURL3 = "https://api.worldtradingdata.com/api/v1/stock?symbol=" + "AAPL" + "&api_token=if5qo5SkSbR7QWK2jE4QlqXXFzkkiM47AVu0nQQfDQLswL1k3d55gHhjZFej";
      $.ajax({
        url: queryURL3,
        method: "GET"
      }).then(function(response) {


        console.log(response);
        $("#apple").text(response.data[0].name + ": ");
        $("#aapldaychange").text(response.data[0].day_change)
        if(response.data[0].day_change < 0){
            $("#aapldaychange").attr("style", "color: red;");
        }
        else if (response.data[0].day_change == 0){
            $("#aapldaychange").attr("style", "color: blue;");
        }
        else if (response.data[0].day_change > 0){
            $("#aapldaychange").attr("style", "color: green");
        }
  });

  var x = document.getElementById("coordinates");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  getLocation();
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
   // localStorage.setItem("location", x.innerHTML);


  navigator.geolocation.getCurrentPosition(showPosition);

  console.log((position.coords.latitude).toFixed(2));

  //console.log(location);
 var weatherqueryURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + ((position.coords.latitude).toFixed(2)) + "&lon=" + ((position.coords.longitude).toFixed(2)) + "&appid=166a433c57516f51dfab1f7edaed8413";

$.ajax({
  url: weatherqueryURL,
  method: "GET"
})

.then(function(response) {
  console.log(response);
  $("#name").text(response.name);
  $("#temp").text("Temp: " + Math.round(response.main.temp - 273.15) + " " + "\xB0" + "C/" + Math.round(((response.main.temp - 273.15)* 9/5) + 32) + " " + "\xB0" + "F");
  $("#wind").text("Wind speed: " + Math.round(response.wind.speed * 1.609) + " kph/" + Math.round(response.wind.speed) + " mph");
  $("#humidity").text("Humidity: " + response.main.humidity + "%");
  $("#icon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");


})}
var newsquery =
"https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=7aebe552e805454298262f34ba67146b";

$.ajax({
  url: newsquery,
  method: "GET"
})

.then(function(response){
  console.log(response);
  $("#headline").text(response.articles[0].title);
  $("#author").text(response.articles[0].author);
  $("#source").text(response.articles[0].source.name);
  var date = jQuery.trim(response.articles[0].publishedAt).substring(0, 10).split(" ").slice(0, 5).join(" ")
  $("#date").text(date);
  $("#newsimage").attr("src", response.articles[0].urlToImage);
  $("#story").text(response.articles[0].description);
  $("#articlelink").attr("href", response.articles[0].url);
});
/*
  var query = response.name;
  console.log(query);
  var queryURLNYT = "https://api.nytimes.com/svc/semantic/v2/geocodes?query.json?latitude=13&longitude=25&api-key=jAuCXwxL8UcAQW1J1XytTNdLZek3b73p";
  
  $.ajax({
    url: queryURLNYT,
    method: "GET"
  })
  
  .then(function(response) {
    console.log(response);
    
  });

});
  } */