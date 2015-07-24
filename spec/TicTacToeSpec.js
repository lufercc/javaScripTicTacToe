/**
 * Created by  on 18/07/2015.
 */
var TicTactoe = require('./../app/mainGame.js');
//console.log('hola');

describe('TicTactoe', function(){
    it('Should return the name of player 1',function(){
        var tictactoe = new TicTactoe;
        tictactoe.setNamePlayer1('Manu');
        var actRes = 'Manu';
        var expRes = tictactoe.player1;
        expect(actRes).toBe(expRes);
    });
    //it('Should say than the player 2 wins',function(){
    //    var tictac = TicTactoe;
    //    var actres = tictac.gameResults();
    //    var expRes = tictac.player2;
    //    expect(actres).toContain(expRes);
    //});
});