(function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
            ]
        };
        
        for (var i = 1; i < 50; i++) {
            var theX = i * 450;
            var someRandom = Math.random()
            var theY;
            if (someRandom > 0.50) {
                theY = groundY-25;
            } else {
                theY = groundY-50;
            }
            levelData.gameItems.push({type: 'sawblade',x:theX,y:theY})
        }
        
        
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        var hitZoneSize = 25;
       var damageFromObstacle = 10;
       
        var createSawBlade = function(x,y) {
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle); 
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        }
        

        
        
            var reward = game.createGameItem('enemy',100);
            var whiteSquare = draw.bitmap("img/reward.png");
            whiteSquare.x = -25;
            whiteSquare.y = -25;
            reward.x = 7500;
            reward.y = groundY - 250;
            reward.velocityX  = -15;
            reward.onPlayerCollision = function() {
                this.fadeOut()
                game.changeIntegrity(500);
                alert("You Won!")
            }
            game.addGameItem(reward)
            reward.addChild(whiteSquare)


    
        for (var i = 1;i < 10; i++) {
            var enemy = game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.x = i * 1400;
            enemy.y = groundY - 40;
            enemy.velocityX  = -5;
            enemy.rotationalVelocity = 5;
            enemy.onPlayerCollision = function() {
                this.fadeOut()
                game.changeIntegrity(-10);
            }
            
            enemy.onProjectileCollision = function() {
                game.changeIntegrity(10)
                this.fadeOut()
            }
    
            game.addGameItem(enemy);
            enemy.addChild(redSquare) 
        }
        

    levelData.gameItems.forEach(function(element) {
      createSawBlade(element.x,element.y);
    });
    
    };
})(window);
