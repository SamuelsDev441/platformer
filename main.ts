controller.player2.onEvent(ControllerEvent.Connected, function () {
    controller.player2.moveSprite(other, 100, 0)
})
controller.combos.attachCombo("up up", function () {
    mySprite.setVelocity(0, -200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverPlayable(true, music.melodyPlayable(music.beamUp), true)
    game.gameOver(true)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.setVelocity(0, -100)
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (other.isHittingTile(CollisionDirection.Bottom)) {
        other.setVelocity(0, -100)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("" + mySprite.x + "World" + mySprite.y)
})
let other: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 150
controller.moveSprite(mySprite, 100, 0)
other = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
other.ay = 150
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(9)
info.setLife(3)
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        mySprite.setVelocity(0, -200)
    }
    if (mySprite.y > 216) {
        info.changeLifeBy(-1)
        game.splash("You lost a life! be careful")
        mySprite.setPosition(10, 0)
    }
})
