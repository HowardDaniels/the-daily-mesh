$("#searchbutton").on("click", function(){
    var city = document.getElementById("searchinput").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=166a433c57516f51dfab1f7edaed8413";

$("#footer").attr("style", "position: sticky;");

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      
      .then(function(response) {
        console.log(response);
               /* $("#forecasttext").attr("style", "visibility: visible;");
                $("ul").attr("style", "visibility: visible;");
                $(".col-md-2").attr("style", "visibility: visible;");
                $(".citycontainer").attr("style", "visibility: visible;"); */
                $("#chosen-city").text(response.name + " "); 
                var utc = moment.tz("Atlantic/Reykjavik");
                var d = utc.add(response.timezone, 'seconds');
                d = d.toString();
                var cut = jQuery.trim(d).substring(0, 25)
                .split(" ").slice(0, -1).join(" ");
                $("#date").text(cut);
                $("#temp").text("Temperature: " + Math.round(response.main.temp - 273.15) + " " + "\xB0" + "C/" + Math.round(((response.main.temp - 273.15)* 9/5) + 32) + " " + "\xB0" + "F");
                $("#humidity").text("Humidity: " + response.main.humidity + "%");
                $("#wind").text("Wind speed: " + Math.round(response.wind.speed * 1.609) + " kph/" + Math.round(response.wind.speed) + " mph");
                $("#icon").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
                var lat = response.coord.lat;
                var lon = response.coord.lon;
      })

      var forecastquery = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=166a433c57516f51dfab1f7edaed8413";

      $.ajax({
        url: forecastquery,
        method: "GET"
      })

      .then(function(response) {
          
    var local = moment.tz("Atlantic/Reykjavik").add(response.city.timezone, 'seconds');
    var localdate1 = (moment(local, "DD-MM-YYYY").add(1, "days")).format('L');
    var localdate2 = (moment(local, "DD-MM-YYYY").add(2, "days")).format('L');
    var localdate3 = (moment(local, "DD-MM-YYYY").add(3, "days")).format('L');
    var localdate4 = (moment(local, "DD-MM-YYYY").add(4, "days")).format('L');
    var localdate5 = (moment(local, "DD-MM-YYYY").add(5, "days")).format('L');

    $("#date1").text(localdate1);
    $("#date2").text(localdate2);
    $("#date3").text(localdate3);
    $("#date4").text(localdate4);
    $("#date5").text(localdate5);

    $("#icon1").attr("src", "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + "@2x.png");
    $("#icon2").attr("src", "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png");
    $("#icon3").attr("src", "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + "@2x.png");
    $("#icon4").attr("src", "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + "@2x.png");
    $("#icon5").attr("src", "https://openweathermap.org/img/wn/" + response.list[39].weather[0].icon + "@2x.png");

    $("#temp1").text("Temp: " + Math.round(response.list[8].main.temp - 273.15) + " " + "\xB0" + "C/" + Math.round(((response.list[8].main.temp - 273.15)* 9/5) + 32) + " " + "\xB0" + "F");
    $("#temp2").text("Temp: " + Math.round(response.list[16].main.temp - 273.15) + " " + "\xB0" + "C/" + Math.round(((response.list[16].main.temp - 273.15)* 9/5) + 32) + " " + "\xB0" + "F");
    $("#temp3").text("Temp: " + Math.round(response.list[24].main.temp - 273.15) + " " + "\xB0" + "C/" + Math.round(((response.list[24].main.temp - 273.15)* 9/5) + 32) + " " + "\xB0" + "F");
    $("#temp4").text("Temp: " + Math.round(response.list[32].main.temp - 273.15) + " " + "\xB0" + "C/" + Math.round(((response.list[32].main.temp - 273.15)* 9/5) + 32) + " " + "\xB0" + "F");
    $("#temp5").text("Temp: " + Math.round(response.list[39].main.temp - 273.15) + " " + "\xB0" + "C/" + Math.round(((response.list[39].main.temp - 273.15)* 9/5) + 32) + " " + "\xB0" + "F");

    $("#humidity1").text(response.list[8].main.humidity + "%");
    $("#humidity2").text(response.list[16].main.humidity + "%");
    $("#humidity3").text(response.list[24].main.humidity + "%");
    $("#humidity4").text(response.list[32].main.humidity + "%");
    $("#humidity5").text(response.list[39].main.humidity + "%");
      });
      

});