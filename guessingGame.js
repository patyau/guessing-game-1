var counter = 0

var question1 = prompt('Is the sky blue?');
    
	if(question1 == 'YES'|| question1 == 'Yes'|| question1 == 'yes'|| question1 == 'y'|| question1 == 'Y'){
    	alert('Correct, the sky is blue!');
    	counter++
    } else {
    	alert('Sorry, better luck on the next question.');
    }
console.log('question 1 responce: ' + question1);

var question2 = prompt('Is Seattle awesome?');
    
    if(question2 == 'YES'|| question2 == 'Yes'|| question2 == 'yes'|| question2 == 'y'|| question2 == 'Y'){
    	alert('Correct! Seatle is in fact awesome!');
    	counter++
    } else {
    	alert('Sorry, better luck on the next question.');
    } 
console.log('question 2 responce: ' + question2);

var question3 = prompt('Is the answer to this question yes, or no?');

	if(question3 == 'YES'|| question3 == 'Yes'|| question3 == 'yes'|| question3 == 'y'|| question3 == 'Y'){
		alert("Correct, the answer is yes!");
		counter++
	} else {
		alert('Sorry, better luck next time.');
	}

console.log('question 3 responce: ' + question3);


alert('thank you for playing the Guessing Game, you got ' + counter + ' out of 3 correct. ')

