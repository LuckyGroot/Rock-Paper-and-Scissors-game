     
      const img1 = document.getElementById('one');
    	const img2 = document.getElementById('two');
    	const img3 = document.getElementById('three');

      const imgArray = [img1, img2, img3];

    	const user = document.getElementById('user-selected');
    	
    	const computer = document.getElementById('comp-selected');
    	
    	const result = document.getElementById('result');
      const fresult = document.getElementById('final-result');
      const bg = document.getElementById('bg');

      // FUNCTION FOR COMPUTER CHOICE-------------------------

    	const compChoice = function () {
        let comp = Math.floor(Math.random()*3);
        
    		if (comp === 0) {
                computer.setAttribute("src", "rock.png");        
    		} else if (comp === 1){
                computer.setAttribute("src", "paper.png");        
    		} else {
                computer.setAttribute("src", "scissor.png");       
    		}
    	};
      
      // STAGING USER SRC AND COMPUTER SRC AND SETTING THE GAME--------------------

      imgArray.forEach(function(e) {
        e.addEventListener('click', function() {
          user.setAttribute("src", e.src);

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
            }, 2000);
      })});

    	// SETTING FUNCTION FOR COMPARING USER CHOICE AND COMPUTER CHOICE -----------

      const compare = function() {

            var useeer = user.src;
            var compu = computer.src;
           
             if (useeer === compu) {
                result.innerHTML= "draw";
             }else if (useeer = "rock.png") {
               if (compu = "scissor.png") {
                result.innerHTML= "Rock beats Scissor. You won!";
                user.style.border = "8px solid green";
                computer.style.border = "8px solid red";
                counting();
               } 
               else {
                result.innerHTML= "Paper beats Rock. You lost";
                user.style.border = "8px solid red";
                computer.style.border = "8px solid green";
                countting();
               }
            }else if (useeer = "paper.png") {
               if (compu = "rock.png") {
                result.innerHTML= "Paper beats rock. You won";
                user.style.border = "8px solid green";
                computer.style.border = "8px solid red";
                counting();
               } 
               else {
                result.innerHTML= "Scissor beats Paper. You lost";
                user.style.border = "8px solid red";
                computer.style.border = "8px solid green";
                countting();
               }
            }else if (useeer = "scissor.png") {
               if (compu = "paper.png") {
                result.innerHTML= "Scissor beats paper. You won";
                user.style.border = "8px solid green";
                computer.style.border = "8px solid red";
                counting();
               } 
               else {
                result.innerHTML= "Rock beats Scissor. You lost";
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
         setTimeout(function() {
            score();
         }, 1800);
      };

      const countting = function() {
         cntt++;
         countt.innerHTML = cntt;
         setTimeout(function() {
            score();
         }, 1800);
      };

      const score = function() {
        if (cnt === 5 && cntt < 5) {
          fresult.innerHTML = "Yeah!! .. You won the game!";
          count.style.background = 'green';
          count.style.color = 'white';
          countt.style.background = 'red';
          countt.style.color = 'white';
        }else if (cnt < 5 && cntt === 5) {
          fresult.innerHTML = "Awww. You lost the game";
          count.style.background = 'red';
          count.style.color = 'white';
          countt.style.background = 'green';
          countt.style.color = 'white';
        }
      }