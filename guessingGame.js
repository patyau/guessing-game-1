var counter = 0

var question1 = prompt('Is the sky blue?');
    
	if(question1 == 'YES'||'Yes'||'yes'||'y'||'Y'){
    	alert('Correct, the sky is blue!');
    	counter++
    } else {
    	alert('Sorry, better luck on the next question.');
    }


var question2 = prompt('Is Seattle awesome?');
    
    if(question2 == 'YES'||'Yes'||'yes'||'y'||'Y'){
    	alert('Correct! Seatle is in fact awesome!');
    	counter++
    } else {
    	alert('Sorry, better luck on the next question.');
    } 


var question3 = prompt('Is the answer to this question yes, or no?');

	if(question3 == 'YES'||'Yes'||'yes'||'y'||'Y'){
		alert("Correct, the answer is yes!");
		counter++
	} else {
		alert('Sorry, better luck next time.');
	}

alert('thank you for playing the Guessing Game, you got ' + counter + ' out of 3 correct. ')



    console.log('question 1 responce: ' + question1);
	console.log('question 2 responce: ' + question2);
	console.log('question 3 responce: ' + question3);
