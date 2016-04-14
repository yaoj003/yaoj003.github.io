$(document).ready(function(){

    var inputColor = getParameterByName("color");
    console.log(inputColor);    

    var inputNumber = getParameterByName("number");
    console.log(inputNumber); 
    
    var inputSize = getParameterByName("size");
    console.log(inputSize);
    
    var inputTime = getParameterByName("time");
    console.log(inputTime);  

    var red= "<img src='img/red.png'>";
    var orange= "<img src='img/orange.png'>";
    var pink= "<img src='img/pink.png'>";
    var purple= "<img src='img/purple.png'>";
    var yellow= "<img src='img/yellow.png'>";
    var blue= "<img src='img/blue.png'>";
    
    var sunrise= "<img src='img/sunrise.png'>";
    var morning= "<img src='img/morning.png'>";
    var noon= "<img src='img/noon.png'>";
    var afternoon= "<img src='img/afternoon.png'>";
    var sunset= "<img src='img/sunset.png'>";
    var night= "<img src='img/night.png'>";

    
    var audio = new Audio('audio/sound.mp3');
    audio.play();

    //number
   
                     if(inputColor =="orange"){
                           for(i=0; i < inputNumber; i++){
                              console.log(inputNumber);
                              addToPage();
                        }

                         function getRandomPosition(element) {
                            	var x = document.body.offsetHeight-element.clientHeight;
                            	var y = document.body.offsetWidth-element.clientWidth;
                            	var randomX = (Math.floor(Math.random()*x));
                            	var randomY = (Math.floor(Math.random()*y));
                            	console.log(randomX);
                            	console.log(randomY);
                            	return [randomX,randomY];
                         }
                         
                        function addToPage() {
                            	var img = document.createElement('img');
                            	img.setAttribute("style", "position:absolute;");
                            	img.setAttribute("class", "flower-size");
                            	img.setAttribute("src", "img/orange.png");
                            	document.body.appendChild(img);
                            	var y = getRandomPosition(img);
                            	var x = getRandomPosition(img);
                            	img.style.top = y[1]+ 100+ 'px';
                            	img.style.left = x[1] + 'px';
                         }
                     }
                     
                      if(inputColor =="red"){
                           for(i=0; i < inputNumber; i++){
                              console.log(inputNumber);
                              addToPage();
                        }
                    
                         function getRandomPosition(element) {
                            	var x = document.body.offsetHeight-element.clientHeight;
                            	var y = document.body.offsetWidth-element.clientWidth;
                            	var randomX = (Math.floor(Math.random()*x));
                            	var randomY = (Math.floor(Math.random()*y));
                            	console.log(randomX);
                            	console.log(randomY);
                            	return [randomX,randomY];
                         }
                         
                        function addToPage() {
                            	var img = document.createElement('img');
                            	img.setAttribute("style", "position:absolute;");
                            	img.setAttribute("class", "flower-size");
                            	img.setAttribute("src", "img/red.png");
                            	document.body.appendChild(img);
                            	var y = getRandomPosition(img);
                            	var x = getRandomPosition(img);
                            	img.style.top = y[1]+ 100 + 'px';
                            	img.style.left = x[1] + 'px';
                         }
                     }
                     
                      if(inputColor =="yellow"){
                           for(i=0; i < inputNumber; i++){
                              console.log(inputNumber);
                              addToPage();
                        }
                    
                         function getRandomPosition(element) {
                            	var x = document.body.offsetHeight-element.clientHeight;
                            	var y = document.body.offsetWidth-element.clientWidth;
                            	var randomX = (Math.floor(Math.random()*x));
                            	var randomY = (Math.floor(Math.random()*y));
                            	console.log(randomX);
                            	console.log(randomY);
                            	return [randomX,randomY];
                         }
                         
                        function addToPage() {
                            	var img = document.createElement('img');
                            	img.setAttribute("style", "position:relative;");
                            	img.setAttribute("class", "flower-size");
                            	img.setAttribute("src", "img/yellow.png");
                            	document.body.appendChild(img);
                            	var y = getRandomPosition(img);
                            	var x = getRandomPosition(img);
                            	img.style.top = y[1]+ 100 + 'px';
                            	img.style.left = x[1] + 'px';
                         }
                     }
                     
                      if(inputColor =="pink"){
                           for(i=0; i < inputNumber; i++){
                              console.log(inputNumber);
                              addToPage();
                        }
                    
                         function getRandomPosition(element) {
                            	var x = document.body.offsetHeight-element.clientHeight;
                            	var y = document.body.offsetWidth-element.clientWidth;
                            	var randomX = (Math.floor(Math.random()*x));
                            	var randomY = (Math.floor(Math.random()*y));
                            	console.log(randomX);
                            	console.log(randomY);
                            	return [randomX,randomY];
                         }
                         
                        function addToPage() {
                            	var img = document.createElement('img');
                            	img.setAttribute("style", "position:absolute;");
                            	img.setAttribute("class", "flower-size");
                            	img.setAttribute("src", "img/pink.png");
                            	document.body.appendChild(img);
                                var y = getRandomPosition(img);
                            	var x = getRandomPosition(img);
                            	img.style.top = y[1]+ 100 + 'px';
                            	img.style.left = x[1] + 'px';
                         }
                     }
                    
                     if(inputColor =="purple"){
                           for(i=0; i < inputNumber; i++){
                              console.log(inputNumber);
                              addToPage();
                        }
                    
                         function getRandomPosition(element) {
                            	var x = document.body.offsetHeight-element.clientHeight;
                            	var y = document.body.offsetWidth-element.clientWidth;
                            	var randomX = (Math.floor(Math.random()*x));
                            	var randomY = (Math.floor(Math.random()*y));
                            	console.log(randomX);
                            	console.log(randomY);
                            	return [randomX,randomY];
                         }
                         
                        function addToPage() {
                            	var img = document.createElement('img');
                            	img.setAttribute("style", "static;");
                            	img.setAttribute("class", "flower-size");
                            	img.setAttribute("src", "img/purple.png");
                            	document.body.appendChild(img);
                                var y = getRandomPosition(img);
                            	var x = getRandomPosition(img);
                            	img.style.top = y[1]+ 100 + 'px';
                            	img.style.left = x[1] + 'px';
                         }
                     }                
                     
                      if(inputColor =="blue"){
                           for(i=0; i < inputNumber; i++){
                              console.log(inputNumber);
                              addToPage();
                        }
                    
                         function getRandomPosition(element) {
                            	var x = document.body.offsetHeight-element.clientHeight;
                            	var y = document.body.offsetWidth-element.clientWidth;
                            	var randomX = (Math.floor(Math.random()*x));
                            	var randomY = (Math.floor(Math.random()*y));
                            	console.log(randomX);
                            	console.log(randomY);
                            	return [randomX,randomY];
                         }
                         
                        function addToPage() {
                            	var img = document.createElement('img');
                            	img.setAttribute("style", "position:absolute;");
                            	img.setAttribute("class", "flower-size");
                            	img.setAttribute("src", "img/blue.png");
                            	document.body.appendChild(img);
                                	var y = getRandomPosition(img);
                            	var x = getRandomPosition(img);
                            	img.style.top = y[1]+ 100 + 'px';
                            	img.style.left = x[1] + 'px';
                         }
                     }
                  
          //size        
          if(inputSize == "xsmall"){
            console.log(inputSize);
            $('.flower-size').css('max-width', '80px');
            
          }
          
           if(inputSize == "small"){
            console.log(inputSize);
            $('.flower-size').css('max-width', '160px');
          }
          
           if(inputSize == "medium"){
            console.log(inputSize);
            $('.flower-size').css('max-width', '240px');
          }
          
           if(inputSize == "large"){
            console.log(inputSize);
            $('.flower-size').css('max-width', '360px');
          }
          
           if(inputSize == "xlarge"){
            console.log(inputSize);
            $('.flower-size').css('max-width', '480px');
          }

          //time
          if(inputTime== "sunrise"){
            console.log(inputTime);
            $('body').append(sunrise);
          }
          
          if(inputTime== "morning"){
            console.log(inputTime);
            $('body').append(morning);
          }
          
          if(inputTime== "noon"){
            console.log(inputTime);
            $('body').append(noon);
          }
          
          if(inputTime== "afternoon"){
            console.log(inputTime);
            $('body').append(afternoon);
          }
          
          if(inputTime== "sunset"){
            console.log(inputTime);
            $('body').append(sunset);
          }
          
          if(inputTime== "night"){
            console.log(inputTime);
            $('body').append(night);
          }

        function getParameterByName(name) {
            url = window.location.href;
            url = url.toLowerCase();
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        
});