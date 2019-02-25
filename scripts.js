var fact;
function mathfact() {
  var num = document.getElementById("num").value;
  window.alert(num);
  window.alert('http://numbersapi.com/' + num + '/math?notfound=floor&fragment');
  $.get('http://numbersapi.com/' + num + '/math?notfound=floor&fragment', function (data) {
    fact = data;
    $('#number').text(data);
    $('#number').append('<a href="" onclick="add your function here">  get result</a>');
  });
}
function randomfact() {
  $.get('http://numbersapi.com/random/trivia', function (data) {
    $('#number').text(data);
    $('#number').append('<a href="" onclick="add your function here"> get result</a>');
    fact = data;
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



/*
 * Code for Facebook API.
 * Permission denied from Facebook.
 * Author: ahmedkamalmohamed
 */

window.fbAsyncInit = function () {
  FB.init({
    appId: '2230988630507670',
    cookie: true,
    xfbml: true,
    version: 'v3.2'
  });
  FB.getLoginStatus(function (response) {
    if (response.status === 'connected') {
      document.getElementById('status').innerHTML = 'We are connected.';
      document.getElementById('login').style.visibility = 'hidden';
    } else if (response.status === 'not_authorized') {
      document.getElementById('status').innerHTML = 'We are not logged in.'
    } else {
      document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
    }
  });
};
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function login() {
  FB.login(function (response) {
    if (response.status === 'connected') {
      document.getElementById('status').innerHTML = 'We are connected.';
      document.getElementById('login').style.visibility = 'hidden';
    } else if (response.status === 'not_authorized') {
      document.getElementById('status').innerHTML = 'We are not logged in.'
    } else {
      document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
    }
  }, { scope: 'publish_actions' });
}


function post() {
  FB.api('/me/feed', 'post', { message: }, function (response) {
    document.getElementById('status').innerHTML = response.id;
  });
}