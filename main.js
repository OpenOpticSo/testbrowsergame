const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', 'https://examples.phaser.io/assets/skies/space3.png');
    this.load.image('logo', 'https://examples.phaser.io/assets/sprites/phaser3-logo.png');
    this.load.image('red', 'https://examples.phaser.io/assets/particles/red.png');
}

function create() {
    this.add.image(400, 300, 'sky');

    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    const logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}

function update() {
    // Game logic goes here
}