/**
 * Created by  on 18/07/2015.
 */
var TicTactoe = require('./../app/mainGame.js');
//console.log('hola');

describe('TicTactoe', function(){
    it('Should set the name of player 1',function(){
        var tictactoe = TicTactoe;
        tictactoe.setNamePlayer1('Manu');
        var actRes = 'Manu';
        var expRes = tictactoe.player1.getPlayer1();
        expect(actRes).toBe(expRes);
    });

    it('Should set the name of player 1',function(){
        var tictactoe = TicTactoe;
        tictactoe.setNamePlayer2('Luis');
        var actRes = 'Luis';
        var expRes = tictactoe.player2.getPlayer1();
        expect(actRes).toBe(expRes);
    });





    //it('Should say than the player 2 wins',function(){
    //    var tictac = TicTactoe;
    //    var actres = tictac.gameResults();
    //    var expRes = tictac.player2;
    //    expect(actres).toContain(expRes);
    //});
});

describe('TicTactoe', function(){
    it('Should draw table shown espacio ',function(){
        var tictactoe = TicTactoe;
        var actual = tictactoe.drawTable().toString();
        expect(actual).toBe('');
    });





});