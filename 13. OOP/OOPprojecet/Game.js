class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = [...document.querySelectorAll('div.color')];
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render();
    }

    render(colors = ['grey', 'grey', 'grey'], money = this.wallet.getWalletValue(), result = "", stats = [0,0,0], bid = 0, wonMoney = 0) {

        this.boards.forEach((board, index) =>
        board.style.backgroundColor = colors[index] )

        this.spanWallet.textContent = money;
        if(result) {
            result = `You've won ${wonMoney}$.`;
        } else if (!result && result !== "") {
            result = `You lose ${bid}$. :(`;
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];

        this.inputBid.value = "";
    }

    startGame() {
        if(this.inputBid.value < 2 ) return alert("Your bid is to low");
        const bid = Math.floor(this.inputBid.value);
        // do you have enouht money?
        if(!this.wallet.checkCanPlay(bid)) {
            return alert("You do not have enought money or you have inserted wrong value")
        }

        this.wallet.changeWallet(bid, '-');
        //draw and check u win or not
        this.draw =  new Draw();
        const colors = this.draw.drawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        //update statistics
        this.stats.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, 
            this.stats.showGameStatistics(), bid, wonMoney);
    }
}