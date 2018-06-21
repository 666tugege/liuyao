var Local = function() {
    var game;
    var INTERVAL = 200;
    var timer = null;
    var bindKeyEvent = function(){
        document.onkeydown = function(e){
            if(e.keyCode == 38){
             game.rotate();
            }else if(e.keyCode == 39){ 
             game.right();
            }else if(e.keyCode == 40){ 
             game.down();
            }else if(e.keyCode == 37){
             game.left();
            }else if(e.keyCode == 32){
             game.fall();
            }
        }
    }
    var move = function(){
        if(!game.down()){
            game.fixed();
            game.checkClear();
            var gameOver =  game.checkGameOver();
            if(gameOver){
                stop();
            }else{
                game.performNext(generateType(),generateDir());
            }
        }
    }
    var generateType = function(){
        return Math.ceil(Math.random() * 7) - 1;
    }
    var generateDire = function(){
        return Math.ceil(Math.random() * 4) - 1;
    }
    var start = function(){
        var doms = {
            gameDiv:document.getElementById('game'),
            nextDiv:document.getElementById('next')
        }
        game = new Game();
        game.init(doms);
        bindKeyEvent();
        timer = setInterval(move,INTERVAL);
    }
    var stop = function(){
        if(timer){
            clearInterval(timer);
            timer = null;
        }
        document.onkeydown = null;
    }
    this.start = start;
}