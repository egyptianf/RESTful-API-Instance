function mathfact() {
        var num = document.getElementById("num").value;
        window.alert(num);
        window.alert('http://numbersapi.com/'+num+'/math?notfound=floor&fragment');
        $.get('http://numbersapi.com/'+num+'/math?notfound=floor&fragment', function(data) {
         $('#number').text(data);
        });      
      }
function randomfact() {
        $.get('http://numbersapi.com/random/trivia', function(data) {
         $('#number').text(data);
        });      
      }