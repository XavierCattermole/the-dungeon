let mySprite = sprites.create(img`
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
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
mySprite.y += -5
let myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
forever(function () {
    if (controller.left.isPressed() == true) {
        myEnemy.follow(mySprite, 55)
        pause(500)
        myEnemy.follow(mySprite, 0)
    } else if (controller.up.isPressed() == true) {
        myEnemy.follow(mySprite, 55)
        pause(500)
        myEnemy.follow(mySprite, 0)
    } else if (controller.right.isPressed() == true) {
        myEnemy.follow(mySprite, 55)
        pause(500)
        myEnemy.follow(mySprite, 0)
    } else if (controller.down.isPressed() == true) {
        myEnemy.follow(mySprite, 55)
        pause(500)
        myEnemy.follow(mySprite, 0)
    } else {
        myEnemy.follow(mySprite, 0)
    }
})
forever(function () {
    mySprite.setStayInScreen(true)
    scene.cameraFollowSprite(mySprite)
})
forever(function () {
    if (controller.down.isPressed() == true) {
        mySprite.y += 16
        pause(500)
    } else {
        mySprite.y += 0
    }
})
forever(function () {
    if (controller.up.isPressed() == true) {
        mySprite.y += -16
        pause(500)
    } else {
        mySprite.y += 0
    }
})
forever(function () {
    if (controller.right.isPressed() == true) {
        mySprite.x += 16
        pause(500)
    } else {
        mySprite.x += 0
    }
})
forever(function () {
    if (controller.left.isPressed() == true) {
        mySprite.x += -16
        pause(500)
    } else {
        mySprite.x += 0
    }
})
