var fact; //Produced from Numbers API and passed to Web Search API
var searchResult; //Produced from Web Search API to FB API
var linkTag = '<a href="javascript:bingSearch()"> Get a result!</a>';
/*
 * Code for Numbers API
 * Author: MlHisham
 */
function mathfact() {
  var num = document.getElementById("num").value;
  $.get('http://numbersapi.com/' + num + '/math?notfound=floor&fragment', function (data) {
    fact = data;
    $('#number').text(data);
    $('#number').append(linkTag);
  });
}
function randomfact() {
  $.get('http://numbersapi.com/random/trivia', function (data) {
    $('#number').text(data);
    $('#number').append(linkTag);
    fact = data;
  });
}



/*
 * Code for Google Custom Web Search API
 * Author: egyptianf
 */
//This only works in debugging mode! I can't figure out why!!
//Update: For God's Sake! There was a form in HTML that when I removed the code just worked!
function bingSearch() {
  var realurl = 'https://www.googleapis.com/customsearch/v1?';
  var key = 'AIzaSyDmptAWny2K5sffaNe5jKts2DF6ZgTBs2g';
  var customSearchEngine = '017505848282137967180:eexzoloxdao';
  var apiQuery = realurl + "&key=" + key + "&cx=" + customSearchEngine + "&q=" + fact;

  $.get(apiQuery, function (result) {
    $('#number').text(result.items[0].link);
    location.href = result.items[0].link;
    searchResult = result.items[0].link;
  }, 'json');

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
  FB.api('/me/feed', 'post', { message: searchResult }, function (response) {
    document.getElementById('status').innerHTML = response.id;
  });
}
