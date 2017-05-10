(function (window) {
    'use strict';

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;

    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;

        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // TODO: 3 - YOUR DRAW CODE GOES HERE

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game

            document.body.style.backgroundImage = "url('img/BackTest2.gif')";
            document.body.style.backgroundSize = "1720px 820px";
            document.body.style.backgroundRepeat = "no-repeat";


        }





        background = new createjs.Container();
        background.resize = render;
        background.update = update;

        app.addResizeable(background);
        app.addUpdateable(background);

        render();
        //background.addChild(shape);

        var reef1 = draw.bitmap('img/REEF.png');
        reef1.x = 0;
        reef1.y = $(window).height() - 251;
        background.addChild(reef1);

        var backgroundBox = draw.rect(100,100,'Blue');
        backgroundBox.x = 500;
        backgroundBox.y = 280;
        //background.addChild(backgroundBox);
    var garbage = [];
    var groundY = 320;

for(var i=0;i<4;++i) {
    var plasticLoop = draw.bitmap('img/fishi.png');
    plasticLoop.x = 600*i;
    plasticLoop.y = Math.random()*280;
    background.addChild(plasticLoop);
    garbage.push(plasticLoop);
}


                // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var schoolOfFish = $("#multiColoredFish");

            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            backgroundBox.x = backgroundBox.x - 5;
            if(backgroundBox.x < -100) {
                     backgroundBox.x = canvasWidth;
            }
            var currentSchoolPosition = schoolOfFish.offset();

            var upDownRandom = Math.random();
            if (upDownRandom > 0.75) {
              //prefer fish to swim down since we start it up high
              upDownRandom = -upDownRandom;
            }

            if ((currentSchoolPosition.top > canvasHeight) || (currentSchoolPosition.left > canvasWidth)) {
              //reset needed
              console.log('reset')
              schoolOfFish.offset({top:-5, left:-5})
            } else {
              //move normally.
              schoolOfFish.offset({top:200, left:(currentSchoolPosition.left + 0.5)})
            }


             for(var i=0;i < garbage.length;i++) {
                 var thisBuilding = garbage[i];
                 thisBuilding.x -= Math.random() * 3.5;
                 if (thisBuilding.x < 0){
                   thisBuilding.x = canvasWidth;
                 }
            }
        }
        return background;

    };
}(window));
