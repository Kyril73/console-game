const heroes = ['spooderman', 'bootman', 'poopman'],
villains = ['jooker', 'trump', 'humans'];

function battle (pl1, pl2){
  console.log(`1 player is: ${pl1}`)
  console.log(`2 player is: ${pl2}`)

  let amountOfTimes = 3,
  playerOneCounter = 0,
  playerTwoCounter = 0;

  for (let index = 0; index < amountOfTimes; index++) {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    
    if(randomNumber === 1){
      playerOneCounter++
    }else if (randomNumber === 2){
      playerTwoCounter++
    }
  }
  if (playerOneCounter > playerTwoCounter) {
      console.log(`🏅 the winnder is ${pl1}`);
  }else if (playerOneCounter < playerTwoCounter){
    console.log(`🏅 the winnder is ${pl2}`);  
  }else {
    console.log("it was a tie");
  }
}

battle(heroes[0],villains[2])