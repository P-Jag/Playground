class Result {
    static moneyWinInGame(result, bid) {
    // we are creating static method. Only from class level= result.checkResult
           if (result) return 3 * bid;
           else return 0;
    }

    static checkWinner(draw) {
        if(draw[0] === draw[1] && draw[1] === draw[2] || 
            draw[0] !== draw[1] && draw[1] !== draw[2] && draw[2] !== draw[0])
        return true;
        else return false;
    }
}