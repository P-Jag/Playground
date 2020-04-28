// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
   }
   
   const game = {
    playerHand: "",
    aiHand: "",
   }
   
   const hands = [...document.querySelectorAll('.select img')];
   
   // first fucntion - your choice
   function handSelection() {
   
    game.playerHand = this.dataset.option
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red';
   }
   
   // const handSelection = (e) => {
   //  console.log(e.target);
   //  console.log(e.currentTarget);
   // }
   
   // second function = ai choice
   function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
   }
   
   // game Result function
   function checkResult(player, ai) {
    // console.log(player, ai);
    if (player === ai) {
     return 'draw';
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
     return 'win';
    } else { return 'loss'; }
   }
   
   // Publish result function
   
   function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
   //easy way to get element by attribute
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
   
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
   
    if (result === "win") {
     document.querySelector('p.wins span').textContent = ++gameSummary.wins;
     document.querySelector('[data-summary="who-win"]').textContent = "Yeah!!! You rule!"
     document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === "loss") {
     document.querySelector('p.losses span').textContent = ++gameSummary.losses;
     document.querySelector('[data-summary="who-win"]').textContent = "Oh no, is AI smarter? :("
     document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
     document.querySelector('p.draws span').textContent = ++gameSummary.draws;
     document.querySelector('[data-summary="who-win"]').textContent = "Oh, it seems we have a draw :\\"
     document.querySelector('[data-summary="who-win"]').style.color = "orange";
    }
   }
   //end game and clear chosen options
   function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
   }
   //steering function
   function startGame() {
    if (!game.playerHand) {
     return alert("wybierz dłoń!!!!");
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame()
   }
   
   hands.forEach(hand => hand.addEventListener('click', handSelection))
   
   document.querySelector('.start').addEventListener('click', startGame)