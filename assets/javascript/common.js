
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