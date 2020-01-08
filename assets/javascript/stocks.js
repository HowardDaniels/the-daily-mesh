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
        
        var priceResults = $("<h2>");
        priceResults.addClass("price1");
        $(".results").append(priceResults);
        priceResults.html("Current Price:" + price)

        

        $(".hist").prepend("<li class='list-item-group active' id="+stock+">"+name+ ", - "+ symbol+"</li>");
        
        


        console.log(response);
        console.log(name)
        console.log(dayLow)
        console.log(price);
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

  var queryURL2 = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7aebe552e805454298262f34ba67146b";
      $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function(response){
        console.log(response)
        
        var title1 = response.articles[0].title;
        var title2 = response.articles[1].title;
        var title3 = response.articles[2].title;
        var url1 = response.articles[0].url;
        var url2 = response.articles[1].url;
        var url3 = response.articles[2].url;
        var img1 = response.articles[0].urlToImage;
        var img2 = response.articles[1].urlToImage;
        var img3 = response.articles[3].urlToImage;

        $(".article1").html(title1);
        $(".article2").html(title2);
        $(".article3").html(title3);

        

        
        
       var articleimg1 = $("<img>");
        articleimg1.attr("src", img1);
        articleimg1.addClass("artimg1");
        $(".article1").prepend(articleimg1);
        

        var articleimg2 = $("<img>");
        articleimg2.attr("src", img2);
        articleimg2.addClass("artimg2");
        $(".article2").prepend(articleimg2)

        var articleimg3 = $("<img>");
        articleimg3.attr("src", img3);
        articleimg3.addClass("artimg3");
        $(".article3").prepend(articleimg3)

        
        $(".img1").click(function() {
          window.open(url1)
        });

        $(".img2").click(function() {
          window.open(url2)
        });

        $(".img3").click(function() {
          window.open(url3)
        });


        
      

  

        
        

      })

      


