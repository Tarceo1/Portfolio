/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying){
    
        // random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //Display the result
        var diceDOM = document.querySelector('.dice');
        //this is how we set our dice image
         diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';



        //Update the round number If the rolled number was NOT a 1
        if(dice !== 1){
            //addscore
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            //NextPlayer
            nextPlayer();

        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        //current score += current score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        if(scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //NextPlayer
            nextPlayer();
        }
    }
    
    
});

document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer(){
    //NExt Player
        //Ternary conditional (clean IF ELSE)
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        //When we switch players we set the WEB elements to zero
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //Set the grey background to the Panel in order to see active
         document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
}

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
//This changes the CSS value of our dice element.. it hides the dice in the beginnign of the game
    document.querySelector('.dice').style.display = 'none';
//This is another way for us to change all the text on our page
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    
}


//*********************OLD CODE************************
//document.querySelector('#current-' + activePlayer).textContent = dice;
//   This would change the HTML style of the Current score Number
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em> ';
//   This will cave the value in our #score-0 El to X variable
//var x = document.querySelector('#score-0').textContent;
//console.log(x);














