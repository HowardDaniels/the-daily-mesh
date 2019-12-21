
      var queryURL = "https://api.worldtradingdata.com/api/v1/stock?symbol=" + "AMZN" + "&api_token=if5qo5SkSbR7QWK2jE4QlqXXFzkkiM47AVu0nQQfDQLswL1k3d55gHhjZFej";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {


        console.log(response);
  });

  var queryURL = "https://api.worldtradingdata.com/api/v1/stock?symbol=" + "GOOGL" + "&api_token=if5qo5SkSbR7QWK2jE4QlqXXFzkkiM47AVu0nQQfDQLswL1k3d55gHhjZFej";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {


        console.log(response);
  });

  var queryURL = "https://api.worldtradingdata.com/api/v1/stock?symbol=" + "AAPL" + "&api_token=if5qo5SkSbR7QWK2jE4QlqXXFzkkiM47AVu0nQQfDQLswL1k3d55gHhjZFej";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {


        console.log(response);
  });