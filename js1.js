      const img1 = document.getElementById('one');
    	const img2 = document.getElementById('two');
    	const img3 = document.getElementById('three');

    	const user = document.getElementById('user-selected');
    	
    	const computer = document.getElementById('comp-selected');
    	
    	const result = document.getElementById('result');

    	
      // FUNCTION FOR COMPUTER CHOICE-------------------------

    	const compChoice = function () {
        let comp = Math.floor(Math.random()*3);
        
    		if (comp === 0) {
                computer.setAttribute("src", "rock.jpg");        
    		} else if (comp === 1){
                computer.setAttribute("src", "paper.jpg");        
    		} else {
                computer.setAttribute("src", "scissor.jpg");       
    		}
    	};

      
      // STAGING USER SRC AND COMPUTER SRC AND SETTING THE GAME--------------------

    	img1.addEventListener('click', function() {
    		
            user.setAttribute("src", "rock.jpg");
            
            setTimeout(function () {
            	compChoice();
            }, 100);

            setTimeout(function () {
              compare();
            }, 300);

            setTimeout(function () {
              clearChoice();
              result.innerHTML = "";
              user.style.border = 0;
              computer.style.border = 0;
            }, 1000); 
    	});

    	
      img2.addEventListener('click', function() {
    		
            user.setAttribute("src", "paper.jpg");
            setTimeout(function () {
            	compChoice();
            }, 100);

            setTimeout(function () {
              compare();
            }, 300);

            setTimeout(function () {
              clearChoice();
              result.innerHTML = "";
              user.style.border = 0;
              computer.style.border = 0;
            }, 1000); 
    	});


    	img3.addEventListener('click', function() {
    		
    		    user.setAttribute("src", "scissor.jpg");
    		    setTimeout(function () {
                compChoice();
            }, 100);

            setTimeout(function () {
              compare();
            }, 300);

            setTimeout(function () {
              clearChoice();
              result.innerHTML = "";
              user.style.border = 0;
              computer.style.border = 0;
            }, 1000); 
    	});


    	// SETTING FUNCTION FOR COMPARING USER CHOICE AND COMPUTER CHOICE -----------

    	const compare = function() {

            var useeer = user.src;
            var compu = computer.src;
    		   
             if (useeer === compu) {
               	result.innerHTML= "draw";
             }else if (useeer === "file:///D:/Web%20Development/js-practice/rock.jpg") {
               if (compu === "file:///D:/Web%20Development/js-practice/scissor.jpg") {
               	result.innerHTML= "you won";
                user.style.border = "8px solid green";
                computer.style.border = "8px solid red";
                counting();
               } 
               else {
               	result.innerHTML= "you lost";
                user.style.border = "8px solid red";
                computer.style.border = "8px solid green";
                countting();
               }
            }else if (useeer === "file:///D:/Web%20Development/js-practice/paper.jpg") {
               if (compu === "file:///D:/Web%20Development/js-practice/rock.jpg") {
                result.innerHTML= "you won";
                user.style.border = "8px solid green";
                computer.style.border = "8px solid red";
                counting();
               } 
               else {
                result.innerHTML= "you lost";
                user.style.border = "8px solid red";
                computer.style.border = "8px solid green";
                countting();
               }
            }else if (useeer === "file:///D:/Web%20Development/js-practice/scissor.jpg") {
               if (compu === "file:///D:/Web%20Development/js-practice/paper.jpg") {
                result.innerHTML= "you won";
                user.style.border = "8px solid green";
                computer.style.border = "8px solid red";
                counting();
               } 
               else {
                result.innerHTML= "you lost";
                user.style.border = "8px solid red";
                computer.style.border = "8px solid green";
                countting();
               }
            }else {
              console.log("invalid selection");
            }
    	};


      // SETTING FUNCTION FOR CLEARING IMG SRC AFTER COMPARING ------------

    	const clearChoice = function () {
    		user.setAttribute("src", "");
    		computer.setAttribute("src", "");
    	};
      

      // CREATING FUNCTIONS FOR RESULT COUNTING--------------------------------------------

      
      const count = document.getElementById('count');
      const countt = document.getElementById('countt');
      let cnt = 0;
      let cntt = 0;
      const counting = function() {
         cnt++;
         count.innerHTML = cnt;
      };

      const countting = function() {
         cntt++;
         countt.innerHTML = cntt;
      };