function stockFinder(stock) {


      var queryURL = "https://api.worldtradingdata.com/api/v1/stock?symbol=" + stock + "&api_token=if5qo5SkSbR7QWK2jE4QlqXXFzkkiM47AVu0nQQfDQLswL1k3d55gHhjZFej";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {      

        var name = response.data[0].name;
        var symbol = response.data[0].symbol;
        var price = response.data[0].price;
        var dayHigh = response.data[0].day_high;
        var dayLow = response.data[0].day_low;
        var dayChange = response.data[0].day_change;
        var changepct = response.data[0].change_pct;
        var yesterday = response.data[0].close_yesterday;
        var marketCap = response.data[0].market_cap;
        var volume = response.data[0].volume;
        var pe = response.data[0].pe;
        var eps = response.data[0].eps;

        
        $(".results").html(name);
        var tBody = $("tbody");
        var tRow = $("<tr>");
     
      var titleTd = $("<td>").text(symbol);
      var priceTd = $("<td>").text(price);
      var changeTd = $("<td>").text(dayChange);
      // Append the newly created table data to the table row
      tRow.append(titleTd, priceTd, changeTd);
      // Append the table row to the table body
      tBody.append(tRow);


        console.log(response);
        console.log(name)
        console.log(dayLow)
  })};

  $(".searchBtn").on("click", function(event) {
      event.preventDefault();
      var inputArtist = $("#prompt").val().trim();
  
     
      stockFinder(inputArtist);
  });

    document.querySelector('#prompt').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
      event.preventDefault();
      var inputArtist = $("#prompt").val().trim();
      $(".stocks").remove();
      event.preventDefault();
  
     
      stockFinder(inputArtist);
      }
     });

     $(".searchBtn").on("click", function(event) {
      $(".stocks").remove();
      event.preventDefault();
      
  });
