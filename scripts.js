function mathfact() {
  var num = document.getElementById("num").value;
  window.alert(num);
  window.alert('http://numbersapi.com/' + num + '/math?notfound=floor&fragment');
  $.get('http://numbersapi.com/' + num + '/math?notfound=floor&fragment', function (data) {
    $('#number').text(data);
  });
}

function randomfact() {
  $.get('http://numbersapi.com/random/trivia', function (data) {
    $('#number').text(data);
  });
}



/*
 * Code for Bing Web Search API
 * Author egyptianf
 */
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=70c238bc7688af78c117e3f64df92ba7';

//This only works in debugging mode! I can't figure out why!!
//Update: For God's Sake! There was a form in HTML that when I removed the code just worked!
function bingSearch() {
  alert('We have stepped inside BingSearch().');
  $.getJSON(url, function (result) {
    $(".parag1").append(result.coord.lon);
    console.log("hhaha");
    console.log(result);


  });
}