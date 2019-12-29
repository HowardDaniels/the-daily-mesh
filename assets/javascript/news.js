// var languageBank={
// "English":"alpha2",
// "Afar":"aa",
// "Abkhazian":"ab",
// Avestan:ae,
// Afrikaans:af,
// Akan:ak,
// Amharic:am, 
// Aragonese:an,
// Arabic:ar,
// Assamese:as,
// Avaric:av,
// Aymara:ay,
// Azerbaijani:az,
// Bashkir:ba,
// Belarusian:be,
// Bulgarian:bg,
// Bihari:bh,
// Bislama:bi,
// Bambara:bm,
// Bengali:bn,
// Tibetan:bo,
// Breton:br,
// Bosnian:bs,
// Catalan:ca,
// Valencian:ca, 
// Chechen:ce,
// Chamorro:ch,
// Corsican:co,
// Cree:cr,
// Czech:cs,
// Church Slavic:cu,
//  Old Slavonic:cu,
// Church Slavonic:cu,
 // Old Bulgarian:cu,
  //Old Church Slavonic:cu,
// Chuvash:cv,
// Welsh:cy,
// Danish:da,
// German:de,
// Divehi:dv,
// Dhivehi:dv,
// Maldivian:dv, 
// Dzongkha:dz,
// Ewe:ee,
// Greek:el,
// English:en,
// Esperanto:eo,
// Spanish:es,
// Castilian:es, 
// Estonian:et,
// Basque:eu,
// Persian:fa,
// Fulah:ff,
// Finnish:fi,
// Fijian:fj,
// Faroese:fo,
// French:fr,
// Western Frisian:fy,Western Frisian
// ga,Irish
// gd,Gaelic; Scottish Gaelic
// gl,Galician
// gn,Guarani
// gu,Gujarati
// gv,Manx
// ha,Hausa
// he,Hebrew
// hi,Hindi
// ho,Hiri Motu
// hr,Croatian
// ht,Haitian; Haitian Creole
// hu,Hungarian
// hy,Armenian
// hz,Herero
// ia,Interlingua (International Auxiliary Language Association)
// id,Indonesian
// ie,Interlingue; Occidental
// ig,Igbo
// ii,Sichuan Yi; Nuosu
// ik,Inupiaq
// io,Ido
// is,Icelandic
// it,Italian
// iu,Inuktitut
// ja,Japanese
// jv,Javanese
// ka,Georgian
// kg,Kongo
// ki,Kikuyu; Gikuyu
// kj,Kuanyama; Kwanyama
// kk,Kazakh
// kl,Kalaallisut; Greenlandic
// km,Central Khmer
// kn,Kannada
// ko,Korean
// kr,Kanuri
// ks,Kashmiri
// ku,Kurdish
// kv,Komi
// kw,Cornish
// ky,Kirghiz; Kyrgyz
// la,Latin
// lb,Luxembourgish; Letzeburgesch
// lg,Ganda
// li,Limburgan; Limburger; Limburgish
// ln,Lingala
// lo,Lao
// lt,Lithuanian
// lu,Luba-Katanga
// lv,Latvian
// mg,Malagasy
// mh,Marshallese
// mi,Maori
// mk,Macedonian
// ml,Malayalam
// mn,Mongolian
// mr,Marathi
// ms,Malay
// mt,Maltese
// my,Burmese
// na,Nauru
// nb,"BokmÃ¥l, Norwegian; Norwegian BokmÃ¥l"
// nd,"Ndebele, North; North Ndebele"
// ne,Nepali
// ng,Ndonga
// nl,Dutch; Flemish
// nn,"Norwegian Nynorsk; Nynorsk, Norwegian"
// no,Norwegian
// nr,"Ndebele, South; South Ndebele"
// nv,Navajo; Navaho
// ny,Chichewa; Chewa; Nyanja
// oc,Occitan (post 1500); ProvenÃ§al
// oj,Ojibwa
// om,Oromo
// or,Oriya
// os,Ossetian; Ossetic
// pa,Panjabi; Punjabi
// pi,Pali
// pl,Polish
// ps,Pushto; Pashto
// pt,Portuguese
// qu,Quechua
// rm,Romansh
// rn,Rundi
// ro,Romanian; Moldavian; Moldovan
// ru,Russian
// rw,Kinyarwanda
// sa,Sanskrit
// sc,Sardinian
// sd,Sindhi
// se,Northern Sami
// sg,Sango
// si,Sinhala; Sinhalese
// sk,Slovak
// sl,Slovenian
// sm,Samoan
// sn,Shona
// so,Somali
// sq,Albanian
// sr,Serbian
// ss,Swati
// st,"Sotho, Southern"
// su,Sundanese
// sv,Swedish
// sw,Swahili
// ta,Tamil
// te,Telugu
// tg,Tajik
// th,Thai
// ti,Tigrinya
// tk,Turkmen
// tl,Tagalog
// tn,Tswana
// to,Tonga (Tonga Islands)
// tr,Turkish
// ts,Tsonga
// tt,Tatar
// tw,Twi
// ty,Tahitian
// ug,Uighur; Uyghur
// uk,Ukrainian
// ur,Urdu
// uz,Uzbek
// ve,Venda
// vi,Vietnamese
// vo,VolapÃ¼k
// wa,Walloon
// wo,Wolof
// xh,Xhosa
// yi,Yiddish
// yo,Yoruba
// za,Zhuang; Chuang
// zh,Chinese
// zu,Zulu};


var weatherAPIKey = "166a433c57516f51dfab1f7edaed8413";
var APIKey= "7aebe552e805454298262f34ba67146b";
var methodSelect;
var searchWord;
var queryURL;
var sortBy;
var formatedDateStart;
var formatedDateEnd;
var newsBoxImage=document.querySelectorAll(".newsImage");
var articleTitle=document.querySelectorAll(".articleTitle");
var sourceTitle=document.querySelectorAll(".sourceTitle");
var disabledOption=document.querySelectorAll(".sortBySelection");
var newsBox= $(".newsBox");
var boxValue;
var capturedResponse;

// var articleTitle=$(".articleTitle");
// var sourceTitle=$(".sourceTitle");
  






function searchNews(event){
  event.stopPropagation();
  event.preventDefault();
  methodSelect=$(".selectionMethod").val();
  searchWord=$("#searchWord").val().trim("");
  formatedDateStart=$("#publicationDateSearchStart").val();
  formatedDateEnd=$("#publicationDateSearchEnd").val();
  sortBy = $(".sortBySelection").val();

  if(searchWord&&formatedDateStart&&formatedDateEnd){
    queryURL= "https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&from="+ formatedDateStart+"&to="+ formatedDateEnd+"&sortBy="+ sortBy +"&apiKey=" + APIKey;}
  else if(searchWord&&formatedDateStart){
    queryURL= "https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&from="+ formatedDateStart+"&sortBy="+ sortBy +"&apiKey=" + APIKey;}
  else if(searchWord){
    queryURL="https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&sortBy="+ sortBy + "&apiKey=" + APIKey;}
  else{queryURL="https://newsapi.org/v2/everything?"+methodSelect+"="+"USA"+"&sortBy="+sortBy+"&apiKey="+APIKey;};
deployNewsScroll();
}

function searchNewsInitial(){
  
  methodSelect=$(".selectionMethod").val();
  searchWord=$("#searchWord").val().trim("");
  formatedDateStart=$("#publicationDateSearchStart").val();
  formatedDateEnd=$("#publicationDateSearchEnd").val();
  sortBy = $(".sortBySelection").val();

  if(searchWord&&formatedDateStart&&formatedDateEnd){
    queryURL= "https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&from="+ formatedDateStart+"&to="+ formatedDateEnd+"&sortBy="+ sortBy +"&apiKey=" + APIKey;}
  else if(searchWord&&formatedDateStart){
    queryURL= "https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&from="+ formatedDateStart+"&sortBy="+ sortBy +"&apiKey=" + APIKey;}
  else if(searchWord){
    queryURL="https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&sortBy="+ sortBy + "&apiKey=" + APIKey;}
  else{queryURL="https://newsapi.org/v2/everything?"+methodSelect+"="+"USA"+"&sortBy="+sortBy+"&apiKey="+APIKey;};
deployNewsScroll();
}

  function deployNewsScroll(){
  $.ajax({
    
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    capturedResponse=response;
    console.log("captured!");
    console.log(capturedResponse);
    console.log(response);
    $(".newsImage").empty();
 
    for(var i=0; i<4;i++){
      boxValue=newsBox[i].getAttribute("value");
    console.log(boxValue);
    sourceTitle[i].textContent=response.articles[boxValue].source.name;
    articleTitle[i].textContent=response.articles[boxValue].title;
    
    var newsImage = document.createElement("img");
    newsImage.setAttribute("src",response.articles[boxValue].urlToImage);
    newsBoxImage[i].appendChild(newsImage);}
    deployArticleInitial();

})}


function scrollBackwards(deployNewsScroll){
  $(".newsImage").empty();

    if(capturedResponse){
      console.log("thereis");
      console.log(capturedResponse);
  
    for(var i=0; i<4;i++){
    var initialBoxValue=parseInt(newsBox[i].getAttribute("value"))-1;
    var arrayArticleLength=capturedResponse.articles.length-1;
    if(initialBoxValue<0){initialBoxValue=arrayArticleLength};
    newsBox[i].setAttribute("value",initialBoxValue);
    boxValue=newsBox[i].getAttribute("value");
    $(".newsBoxImage").empty();
    console.log(boxValue);
    sourceTitle[i].textContent=capturedResponse.articles[boxValue].source.name;
    articleTitle[i].textContent=capturedResponse.articles[boxValue].title;
    
    var newsImage = document.createElement("img");
    newsImage.setAttribute("src",capturedResponse.articles[boxValue].urlToImage);
    newsBoxImage[i].appendChild(newsImage);}

  }}

  function scrollForward(deployNewsScroll){
    $(".newsImage").empty();

    if(capturedResponse){
      
      console.log("thereis");
      console.log(capturedResponse);
  
    for(var i=0; i<4;i++){
    var initialBoxValue=parseInt(newsBox[i].getAttribute("value"))+1;
    var arrayArticleLength=capturedResponse.articles.length-1;

    if(initialBoxValue>arrayArticleLength){initialBoxValue=0};


    newsBox[i].setAttribute("value",initialBoxValue);
    console.log("this shit");
    boxValue=newsBox[i].getAttribute("value");
    $(".newsBoxImage").empty();
    console.log(boxValue);
    sourceTitle[i].textContent=capturedResponse.articles[boxValue].source.name;
    articleTitle[i].textContent=capturedResponse.articles[boxValue].title;
    
    var newsImage = document.createElement("img");
    newsImage.setAttribute("src",capturedResponse.articles[boxValue].urlToImage);
    newsBoxImage[i].appendChild(newsImage);}

  }}

  function deployArticle(event){
    alert("clickworks!");
    event.preventDefault();
    event.stopPropagation();
    var articleValue=$(this).attr("value");
    console.log("articlevale");
    console.log(articleValue);
    $(".mainArticleTitle").html(capturedResponse.articles[articleValue].title);
    $(".authorName").html(capturedResponse.articles[articleValue].author);
    $(".articleText").html(capturedResponse.articles[articleValue].description+"at");
    var outLink= $("<a>");
    outLink.attr("href",capturedResponse.articles[articleValue].url);
    outLink.text(capturedResponse.articles[articleValue].url)
    $(".articleText").append(outLink);


  }
  function deployArticleInitial(){
   
    
    $(".mainArticleTitle").html(capturedResponse.articles[0].title);
    $(".authorName").html("author: "+capturedResponse.articles[0].author);
    $(".articleText").html(capturedResponse.articles[0].description+"at");
    var outLink= $("<a>");
    outLink.attr("href",capturedResponse.articles[0].url);
    outLink.text(capturedResponse.articles[0].url)
    $(".articleText").append(outLink);

  }







$(".backwardsButton").on("click",scrollBackwards);
$(".forwardButton").on("click",scrollForward);
$(document).on("click",".newsBox",deployArticle);




function deployWeather(position){
var lat=position.coords.latitude;
var lon= position.coords.longitude;
var weatherQueryURL=  queryURL="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+weatherAPIKey;


$.ajax({
  url:weatherQueryURL,
  method:"GET"
}).then(function(response){
  console.log("weather");
  console.log(response);



})}
function weatherDisplay(){
    if (navigator.geolocation){
      console.log("has geo location");
      navigator.geolocation.getCurrentPosition(deployWeather);}}

    
 







$(document).ready(weatherDisplay);
$(document).ready(function(){
  $(".sortBySelection").attr("style","visibility:hidden")
})
$("#searchForm").on("submit",searchNews);
$(".selectionMethod").on("change",function(event){
  event.preventDefault();
  event.stopPropagation();
  $(".sortBySelection").attr("style","visibility:visible");

  if($(".selectionMethod").val()!=="q"){
     disabledOption[0].options[2].disabled=true;
  }
  else{disabledOption[0].options[2].disabled=false;

}});

$(document).ready(searchNewsInitial);

var snowFlakes =[];
function snow(){
  createCanvas(width, height);
  fill(0);
  


}

snow();






// https://newsapi.org/v2/everything?q=apple&from=2019-12-20&to=2019-12-20&sortBy=popularity&apiKey=API_KEY

// https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-16&sortBy=publishedAt&apiKey=7aebe552e805454298262f34ba67146b


// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7aebe552e805454298262f34ba67146b
// ttps://newsapi.org/v2/everything?q=apple&from=2019-12-16&to=2019-12-16&sortBy=popularity&apiKey=7aebe552e805454298262f34ba67146b 
// https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7aebe552e805454298262f34ba67146b

// https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7aebe552e805454298262f34ba67146b
// Keyword or phrase. Eg: find all articles containing the word 'Microsoft'.
// Date published. Eg: find all articles published yesterday.
// Source name. Eg: find all articles by 'TechCrunch'.
// Source domain name. Eg: find all articles published on nytimes.com.
// Language

// curl https://newsapi.org/v2/top-headlines -G \
//     -d country=us \
//     -d apiKey=7aebe552e805454298262f34ba67146b





// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) 


// 