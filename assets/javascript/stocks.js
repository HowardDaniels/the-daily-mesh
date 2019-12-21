function stockFinder(stock) {


      var queryURL = "https://api.worldtradingdata.com/api/v1/stock?symbol=" + stock + "&api_token=if5qo5SkSbR7QWK2jE4QlqXXFzkkiM47AVu0nQQfDQLswL1k3d55gHhjZFej";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {


        console.log(response);
  })};

  $("#searchIcon").on("click", function(event) {
    alert("hiii")
      event.preventDefault();
      var inputArtist = $("#prompt").val().trim();
  
     
      stockFinder(inputArtist);
  });

    document.querySelector('#prompt').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        event.preventDefault();
      var inputArtist = $("#prompt").val().trim();
  
     
      stockFinder(inputArtist);
      }
     });
