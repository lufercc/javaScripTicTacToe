/**
 * Created by Manu on 18/07/2015.
 */
var Board = function(){
    this.grid = [];
};

Board.prototype.initGrid = function(){
    var clearGrid = 1;
    for(var i = 0 ; i<3 ; i++)
    {
        this.grid[i] = new Array(3);
    }
    for(var i = 0 ; i<3 ; i++)
    {
        for(var j = 0 ; j<3 ; j++)
        {
            this.grid[i][j] = clearGrid.toString();
            clearGrid++;
        }
    }
};

Board.prototype.setValue = function (pos,val) {
    var res = false;
    for(var i = 0 ; i<3 ; i++)
    {
        for(var j = 0 ; j<3 ; j++)
        {
            if(this.grid[i][j]==pos)
            {
                this.grid[i][j]=val;
                res = true;
            }
        }
    }
    return res;
};

Board.prototype.checkifWin = function(winString){
    if((this.grid[0][0]+this.grid[0][1]+this.grid[0][2])==winString)
    {
        return true;
    }
    else if((this.grid[1][0]+this.grid[1][1]+this.grid[1][2])==winString)
    {
        return true;
    }
    else if((this.grid[2][0]+this.grid[2][1]+this.grid[2][2])==winString)
    {
        return true;
    }
    else if((this.grid[0][0]+this.grid[1][0]+this.grid[2][0])==winString)
    {
        return true;
    }
    else if((this.grid[0][1]+this.grid[1][1]+this.grid[2][1])==winString)
    {
        return true;
    }
    else if((this.grid[0][2]+this.grid[1][2]+this.grid[2][2])==winString)
    {
        return true;
    }
    else if((this.grid[0][0]+this.grid[1][1]+this.grid[2][2])==winString)
    {
        return true;
    }
    else if((this.grid[0][2]+this.grid[1][1]+this.grid[2][0])==winString)
    {
        return true;
    }
    else
    {
        return false;
    }
};


module.exports = new Board();