var userName = prompt('What is your name?');
var counter = 0;

function ques1() {
    var question1 = prompt('Is the sky blue?');
    if(question1.toUpperCase() === 'YES'|| question1.toUpperCase() === 'Y') {
        alert('Correct ' + userName + ', the sky is blue!');
        counter++
    } else {
        alert('Sorry ' + userName + ', better luck on the next question.');
    }
    console.log('question 1 response: ' + question1);
}

function ques2() {
    var question2 = prompt('Is Seattle awesome?');
    if(question2.toUpperCase() === 'YES'|| question2.toUpperCase() === 'Y'){
        alert('Correct ' + userName + '! Seatle is in fact awesome!');
        counter++
    } else {
        alert('Sorry ' + userName + ', better luck on the next question.');
    } 
    console.log('question 2 response: ' + question2);
}

function ques3() {
    var question3 = prompt('Is the answer to this question yes, or no?');
    if(question3.toUpperCase() === 'YES'|| question3.toUpperCase() === 'Y'){
        alert('Correct ' + userName + ', the answer is yes!');
        counter++
    } else {
        alert('Sorry ' + userName + ', better luck next time.');
    }
    console.log('question 3 response: ' + question3);
}

ques1();
ques2();
ques3();

alert('thank you for playing the Guessing Game ' + userName + ', you got ' + counter + ' out of 3 correct.')


