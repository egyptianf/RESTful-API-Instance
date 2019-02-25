var fact;

function mathfact() {
  var num = document.getElementById("num").value;
  $.get('http://numbersapi.com/' + num + '/math?notfound=floor&fragment', function (data) {
    fact = data;
    $('#number').text(data);
    $('#number').append('<a href="" onclick="bingSearch();"> Get a result!</a>');
  });
}

function randomfact() {
  $.get('http://numbersapi.com/random/trivia', function (data) {
    $('#number').text(data);
    $('#number').append('<a href="" onclick="bingSearch();"> Get a result!</a>');
    fact = data;
  });
}



/*
 * Code for Google Custom Web Search API
 * Author egyptianf
 */
//This only works in debugging mode! I can't figure out why!!
//Update: For God's Sake! There was a form in HTML that when I removed the code just worked!
function bingSearch() {
  alert('We have stepped inside BingSearch().');
  var realurl = 'https://www.googleapis.com/customsearch/v1?';
  var key = 'AIzaSyDmptAWny2K5sffaNe5jKts2DF6ZgTBs2g';
  var customSearchEngine = '017505848282137967180:eexzoloxdao';
  var apiQuery = realurl + "&key=" + key + "&cx=" + customSearchEngine + "&q=" + fact;

  var searchResult;

  $.get(apiQuery, function (result) {
    searchResult = result.items[0].link;
    $('#number').text(result.items[0].link);
    $('#number').append(result.items[0].link);
  }, 'json');

  /*   $.getJSON(realurl, function (result) {
      $('#number').append(result.totalCount);
      console.log("hhaha");
      console.log(result);


    });*/
  return searchResult;
}