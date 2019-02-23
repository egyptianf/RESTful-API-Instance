var fact ;
function mathfact() {
        var num = document.getElementById("num").value;
        window.alert(num);
        window.alert('http://numbersapi.com/'+num+'/math?notfound=floor&fragment');
        $.get('http://numbersapi.com/'+num+'/math?notfound=floor&fragment', function(data) {
        fact=data;
         $('#number').text(data);
        $('#number').append('<a href="" onclick="add your function here">  get result</a>');  
        });      
      }
function randomfact() {
        $.get('http://numbersapi.com/random/trivia', function(data) {
        $('#number').text(data);
        $('#number').append('<a href="" onclick="add your function here"> get result</a>');
        fact=data;
        });      
      }



/*
 * Code for Bing Web Search API
 * Author egyptianf
 */
function bingSearch(){
	var url='http://api.openweathermap.org/data/2.5/weather?q=London&APPID=70c238bc7688af78c117e3f64df92ba7';
	$.getJSON(url, function(result){
		console.log("hhaha");
		console.log(result);
		$('.parag1').append(result.coord.lon);	
	});
}