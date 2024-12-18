var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game');

var mainState = {

    preload: function() { 
        // Set the background color to red
        game.stage.backgroundColor = '#FF6A5E';

        // Load images (base64 encoded) for the bird and the pipe
        bird = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEXSvicAAABogyUZAAAAGUlEQVR4AWP4DwYHMOgHDEDASCN6lMYV7gChf3AJ/eB/pQAAAABJRU5ErkJggg==";
        pipe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEV0vy4AAADnrrHQAAAAGUlEQVR4AWP4DwYHMOgHDEDASCN6lMYV7gChf3AJ/eB/pQAAAABJRU5ErkJggg==";
        
        // Load the bird and pipe images
        game.load.image('bird', bird);  
        game.load.image('pipe', pipe); 
    },

    create: function() { 
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Create a group for pipes and enable physics for them
        this.pipes = game.add.group();
        this.pipes.enableBody = true;
        this.pipes.createMultiple(20, 'pipe');  
        this.timer = this.game.time.events.loop(1500, this.addRowOfPipes, this);           

        // Create the bird sprite and apply physics
        this.bird = this.game.add.sprite(100, 245, 'bird');
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000; 

        // New anchor position for the bird
        this.bird.anchor.setTo(-0.2, 0.5); 

        // Add spacebar control for jumping
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this); 

        // Initialize the score
        this.score = 0;
        this.labelScore = this.game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });  

        // Add the jump sound (ensure the jump sound file exists)
        // this.jumpSound = this.game.add.audio('jump');  // Uncomment if you have the jump sound file
    },

    update: function() {
        // Restart the game if the bird is out of the world
        if (this.bird.inWorld == false)
            this.restartGame(); 

        // Check for collisions between the bird and the pipes
        game.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this); 

        // Rotate the bird for smoother animation
        if (this.bird.angle < 20)
            this.bird.angle += 1;
    },

    jump: function() {
        // If the bird is dead, it can't jump
        if (this.bird.alive == false)
            return; 

        // Apply velocity for the jump
        this.bird.body.velocity.y = -350;

        // Add jump animation
        game.add.tween(this.bird).to({angle: -20}, 100).start();
    },

    hitPipe: function() {
        // If the bird has already hit a pipe, return
        if (this.bird.alive == false)
            return;

        // Set the alive property of the bird to false
        this.bird.alive = false;

        // Stop the pipes from moving
        this.game.time.events.remove(this.timer);

        // Stop all pipes' movement
        this.pipes.forEachAlive(function(p){
            p.body.velocity.x = 0;
        }, this);
    },

    restartGame: function() {
        // Restart the game by starting the 'main' state again
        game.state.start('main');
    },

    addOnePipe: function(x, y) {
        // Create a new pipe
        var pipe = this.pipes.getFirstDead();

        // Reset the pipe and set its velocity
        pipe.reset(x, y);
        pipe.body.velocity.x = -200;  
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },

    addRowOfPipes: function() {
        // Randomly generate a hole for the pipes
        var hole = Math.floor(Math.random()*5)+1;
        
        // Add pipes to the row, skipping the hole
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole + 1) 
                this.addOnePipe(400, i * 60 + 10);   

        // Update the score and display it
        this.score += 1;
        this.labelScore.text = this.score;  
    },
};

// Add the main state and start it
game.state.add('main', mainState);  
game.state.start('main');

