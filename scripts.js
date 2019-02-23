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