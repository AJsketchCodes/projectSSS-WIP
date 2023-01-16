namespace SpriteKind {
    export const Sprite_anim = SpriteKind.create()
    export const camera = SpriteKind.create()
    export const cutscene_image = SpriteKind.create()
    export const clickable_image = SpriteKind.create()
    export const Sallie = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.player2.moveSprite(camera_cam)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game_startup_check == 1) {
        music.baDing.play()
        pause(100)
        Loadanim()
    }
    if (game_startup_check == 4.5) {
        if (Sallie_walker.vy == 0) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
            Sallie_walker.ay = 350
            Sallie_walker.vy = -100
        }
    }
    if (game_startup_check == 3) {
        if (Sallie_walker.vy == 0) {
        	
        }
        if (Sallie_walker.vy == 0) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
            Sallie_walker.ay = 350
            Sallie_walker.vy = -75
        }
    }
})
function HELP () {
    game_startup_check = 4
    Sallie_walker.ay = 0
    music.setVolume(255)
    pause(500)
    color.startFade(color.Black, color.originalPalette, 500)
    animation.stopAnimation(animation.AnimationTypes.All, logo_image)
    characterAnimations.loopFrames(
    Sallie_walker,
    assets.animation`Sallie_moving-Right`,
    190,
    characterAnimations.rule(Predicate.NotMoving)
    )
    logo_image.setImage(assets.image`Red`)
    camera_cam.setPosition(150, 100)
    Sallie_walker.setPosition(40, 90)
    logo_image.setPosition(150, 100)
    logo_image.setFlag(SpriteFlag.Invisible, false)
    player_image.setFlag(SpriteFlag.Invisible, true)
    Sallie_walker.setFlag(SpriteFlag.Invisible, true)
    animation.stopAnimation(animation.AnimationTypes.All, Sallie_walker)
    scene.setBackgroundImage(assets.image`Back`)
    tiles.setCurrentTilemap(tilemap`Help-room`)
    pause(1000)
    Sallie_walker.setFlag(SpriteFlag.Invisible, false)
    characterAnimations.loopFrames(
    Sallie_walker,
    assets.animation`No-right`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Sallie_walker,
    assets.animation`Sallie_Idle`,
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
    pause(200)
    story.spriteMoveToLocation(Sallie_walker, Sallie_walker.x + 100, Sallie_walker.y + 0, 55)
    pause(1000)
    Sallie_walker.setStayInScreen(true)
    player_image.setFlag(SpriteFlag.Invisible, false)
    player_image.setPosition(150, 10)
    player_image.setImage(assets.image`Bingchilling`)
    story.spriteMoveToLocation(player_image, player_image.x + 0, player_image.y + 90, 100)
    player_image.setFlag(SpriteFlag.Invisible, true)
    characterAnimations.loopFrames(
    Sallie_walker,
    assets.animation`Idle`,
    250,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Sallie_walker,
    assets.animation`Right`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Sallie_walker,
    assets.animation`Left`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    story.startCutscene(function () {
    	
    })
    game_startup_check = 4.5
    tiles.placeOnRandomTile(Button_Play, assets.tile`myTile2`)
    Button_Play.setVelocity(0, 80)
    if (game_startup_check == 4.5) {
        story.cancelCurrentCutscene()
        controller.moveSprite(Sallie_walker, 75, 0)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.clickable_image, function (sprite, otherSprite) {
    if (otherSprite == Button_Help && (game_startup_check == 2 && controller.A.isPressed())) {
        game_startup_check = 4
        controller.moveSprite(player_image, 0, 0)
        Loadanim()
    }
    if (otherSprite == Button_Play && (game_startup_check == 2 && controller.A.isPressed())) {
        game_startup_check = 3
        controller.moveSprite(player_image, 0, 0)
        Loadanim()
    }
    if (Sallie_walker.overlapsWith(Button_Play) && game_startup_check == 3) {
        music.pewPew.play()
        tiles.placeOnRandomTile(Button_Play, assets.tile`myTile2`)
        Button_Play.setVelocity(0, randint(60, 80))
        if (Math.percentChance(50)) {
            Button_Play.setImage(assets.image`Strawberry`)
        }
        if (Math.percentChance(50)) {
            Button_Play.setImage(assets.image`Mint`)
        }
        if (Math.percentChance(50)) {
            Button_Play.setImage(assets.image`Cotten Candy`)
        }
        if (Math.percentChance(50)) {
            Button_Play.setImage(assets.image`Vanilla`)
        }
        if (Math.percentChance(50)) {
            Button_Play.setImage(assets.image`Strawberry`)
        }
        if (Math.percentChance(50)) {
            Button_Play.setImage(assets.image`Grape`)
        }
        if (Math.percentChance(50)) {
            Button_Play.setImage(assets.image`Orange`)
        }
        if (Math.percentChance(50)) {
            Button_Play.setImage(assets.image`Blueberry`)
        }
        if (Math.percentChance(50)) {
            Button_Play.setImage(assets.image`Cherry`)
        }
        tiles.placeOnRandomTile(Button_Play, assets.tile`myTile2`)
        info.changeScoreBy(1)
    }
})
function Cutscenes () {
    if (game_startup_check == 1.1) {
        controller.moveSprite(Sallie_walker, 50, 0)
        player_image.follow(Sallie_walker, 150)
        player_image.setFlag(SpriteFlag.GhostThroughSprites, false)
        Sallie_walker.setFlag(SpriteFlag.Invisible, false)
        camera_cam.setPosition(152, 100)
        Sallie_walker.setPosition(142, 106)
        player_image.setPosition(145, 106)
        player_image.setImage(assets.image`Cone_Hitbox`)
        characterAnimations.loopFrames(
        Sallie_walker,
        assets.animation`Idle`,
        250,
        characterAnimations.rule(Predicate.NotMoving)
        )
        scroller.scrollBackgroundWithSpeed(20, 20, scroller.BackgroundLayer.Layer1)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`Menu`)
        characterAnimations.loopFrames(
        Sallie_walker,
        assets.animation`Right`,
        150,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        Sallie_walker,
        assets.animation`Left`,
        150,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        scene.cameraFollowSprite(camera_cam)
        tiles.setCurrentTilemap(tilemap`level5`)
        scene.setBackgroundImage(assets.image`White`)
    }
    scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Blue`)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`Mountains`)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`Hills`)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer3, assets.image`Trees`)
    scroller.setCameraScrollingMultipliers(0.1, 0.3, scroller.BackgroundLayer.Layer1)
    scroller.setCameraScrollingMultipliers(0.2, 0.2, scroller.BackgroundLayer.Layer2)
    scroller.setCameraScrollingMultipliers(0.3, 0.1, scroller.BackgroundLayer.Layer3)
    Sallie_walker.setPosition(150, 114)
    Sallie_walker.setFlag(SpriteFlag.Invisible, false)
    tiles.setCurrentTilemap(tilemap`level11`)
    story.startCutscene(function () {
        characterAnimations.loopFrames(
        Sallie_walker,
        assets.animation`Sallie_moving-Right`,
        150,
        characterAnimations.rule(Predicate.MovingRight)
        )
    })
}
function Music () {
    if (game_startup_check == 1) {
        console.log("PlayMusic:1")
        while (game_startup_check == 1) {
            if (game_startup_check == 1) {
                music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 332, 332, 171, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
                music.playMelody("G A C A F - F - ", 400)
                music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
                music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 432, 432, 171, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
                music.playMelody("D G E A - G D - ", 400)
                music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
                music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 400, 400, 171, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
            }
            if (game_startup_check == 1) {
                music.playMelody("G B D G - E C - ", 400)
                music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
                music.playMelody("D B G - A F E - ", 400)
                music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
            }
        }
    }
    if (game_startup_check == 2) {
        console.log("PlayMusic:2")
        while (game_startup_check == 2) {
            if (game_startup_check == 2) {
                music.playMelody("C D G E D C D F ", 250)
                music.playMelody("E D E G E D G F ", 250)
                music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
            }
            if (game_startup_check == 2) {
                music.playMelody("E D C - C F E G ", 250)
                music.playMelody("A G E D C F E D ", 250)
                music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
            }
        }
    }
    if (game_startup_check == 3) {
        console.log("PlayMusic:3")
        while (game_startup_check == 3) {
            music.playMelody("C D E F G E D E ", 400)
            music.playMelody("F E D E G B A G ", 400)
            music.playMelody("F E F C D C G A ", 400)
        }
    }
    if (game_startup_check == 4) {
        console.log("PlayMusic:4")
        while (game_startup_check == 4) {
            music.playMelody("F G F E D C E - ", 400)
        }
    }
}
function Loadanim () {
    console.log("Call:Load-Anim")
    color.startFade(color.originalPalette, color.Black, 500)
    pause(450)
    music.setVolume(100)
    player_image.setImage(assets.image`Sallie`)
    controller.moveSprite(Sallie_walker, 0, 0)
    music.setTempo(500000)
    Button_Play.setPosition(150, 0)
    Button_Help.setPosition(150, 0)
    player_image.setPosition(215, 142)
    camera_cam.setPosition(150, 100)
    Sallie_walker.setFlag(SpriteFlag.Invisible, true)
    logo_image.setFlag(SpriteFlag.Invisible, true)
    Button_Play.setFlag(SpriteFlag.Invisible, true)
    Button_Help.setFlag(SpriteFlag.Invisible, true)
    player_image.setFlag(SpriteFlag.Invisible, false)
    scene.setBackgroundImage(assets.image`Black_void`)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`Black_void`)
    tiles.setCurrentTilemap(tilemap`load_anim`)
    color.startFade(color.Black, color.originalPalette, 500)
    if (Math.percentChance(40)) {
        animation.runImageAnimation(
        player_image,
        assets.animation`Sallie_moving-Right`,
        200,
        true
        )
    }
    if (Math.percentChance(40)) {
        player_image.setPosition(214, 142)
        animation.runImageAnimation(
        player_image,
        assets.animation`Sallie_moving-Left`,
        200,
        true
        )
    }
    if (Math.percentChance(29)) {
        player_image.setPosition(212, 142)
        animation.runImageAnimation(
        player_image,
        assets.animation`Sallie_sleep`,
        250,
        true
        )
    }
    if (Math.percentChance(1)) {
        animation.runImageAnimation(
        player_image,
        assets.animation`Spin`,
        55,
        true
        )
    }
    if (game_startup_check == 1) {
        game_startup_check = 2
    }
    pause(2000)
    color.startFade(color.originalPalette, color.Black, 500)
    music.setTempo(120)
    pause(500)
    music.setVolume(255)
    animation.stopAnimation(animation.AnimationTypes.All, player_image)
    if (game_startup_check == 2) {
        color.startFade(color.Black, color.originalPalette, 500)
        game_startup_check = 2
        music.setVolume(255)
        logo_image.setFlag(SpriteFlag.Invisible, false)
        Sallie_walker.setFlag(SpriteFlag.Invisible, true)
        Button_Help.setFlag(SpriteFlag.Invisible, false)
        Button_Play.setFlag(SpriteFlag.Invisible, false)
        player_image.setImage(assets.image`Player_orb`)
        player_image.setStayInScreen(true)
        player_image.setPosition(150, 100)
        camera_cam.setPosition(150, 100)
        controller.moveSprite(player_image, 150, 150)
        scroller.scrollBackgroundWithSpeed(20, -15, scroller.BackgroundLayer.Layer1)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`Menu`)
        animation.runImageAnimation(
        Button_Play,
        assets.animation`Play-anim`,
        110,
        true
        )
        animation.runImageAnimation(
        Button_Help,
        assets.animation`Help-anim`,
        110,
        true
        )
        animation.runImageAnimation(
        logo_image,
        assets.animation`S E L E C T`,
        500,
        false
        )
        Button_Help.setPosition(111, 120)
        Button_Play.setPosition(150, 145)
    }
    if (game_startup_check == 4) {
        game.reset()
    }
    if (game_startup_check == 3) {
        PLAY()
    }
}
function PLAY () {
    game_startup_check = 3
    color.startFade(color.Black, color.originalPalette, 500)
    controller.moveSprite(Sallie_walker, 50, 0)
    player_image.follow(Sallie_walker, 150)
    player_image.setFlag(SpriteFlag.GhostThroughSprites, false)
    logo_image.setPosition(170, 150)
    camera_cam.setPosition(152, 100)
    Sallie_walker.setPosition(142, 106)
    player_image.setPosition(145, 106)
    player_image.setImage(assets.image`Cone_Hitbox`)
    characterAnimations.loopFrames(
    Sallie_walker,
    assets.animation`Idle`,
    250,
    characterAnimations.rule(Predicate.NotMoving)
    )
    scroller.scrollBackgroundWithSpeed(20, 20, scroller.BackgroundLayer.Layer1)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`Menu`)
    characterAnimations.loopFrames(
    Sallie_walker,
    assets.animation`Right`,
    150,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Sallie_walker,
    assets.animation`Left`,
    150,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    scene.cameraFollowSprite(camera_cam)
    tiles.setCurrentTilemap(tilemap`level5`)
    scene.setBackgroundImage(assets.image`White`)
    player_image.setFlag(SpriteFlag.Invisible, true)
    Sallie_walker.setFlag(SpriteFlag.Invisible, false)
    logo_image.setFlag(SpriteFlag.Invisible, true)
    animation.stopAnimation(animation.AnimationTypes.All, Button_Play)
    pause(1500)
    logo_image.setFlag(SpriteFlag.Invisible, false)
    music.baDing.play()
    animation.runImageAnimation(
    logo_image,
    assets.animation`3 2 1`,
    150,
    false
    )
    Button_Play.setFlag(SpriteFlag.GhostThroughWalls, false)
    Button_Play.setImage(assets.image`Vanilla`)
    pause(2500)
    story.spriteMoveToLocation(logo_image, logo_image.x + 0, logo_image.y - 200, 150)
    info.setScore(0)
    player_image.follow(Sallie_walker)
    logo_image.setFlag(SpriteFlag.Invisible, true)
    Button_Play.setFlag(SpriteFlag.GhostThroughWalls, true)
    Button_Play.setFlag(SpriteFlag.Invisible, false)
    tiles.placeOnRandomTile(Button_Play, assets.tile`myTile2`)
    Button_Play.setVelocity(0, 80)
}
controller.combos.attachCombo("badown", function () {
    info.setLife(50)
})
scene.onOverlapTile(SpriteKind.clickable_image, assets.tile`myTile0`, function (sprite2, location) {
    music.smallCrash.play()
    if (game_startup_check == 3) {
        if (game_startup_check == 3) {
            if (Math.percentChance(65)) {
                Button_Play.setImage(assets.image`Strawberry`)
            }
            if (Math.percentChance(65)) {
                Button_Play.setImage(assets.image`Mint`)
            }
            if (Math.percentChance(65)) {
                Button_Play.setImage(assets.image`Cotten Candy`)
            }
            if (Math.percentChance(65)) {
                Button_Play.setImage(assets.image`Vanilla`)
            }
            if (Math.percentChance(65)) {
                Button_Play.setImage(assets.image`Strawberry`)
            }
            if (Math.percentChance(65)) {
                Button_Play.setImage(assets.image`Grape`)
            }
            if (Math.percentChance(65)) {
                Button_Play.setImage(assets.image`Orange`)
            }
            if (Math.percentChance(65)) {
                Button_Play.setImage(assets.image`Blueberry`)
            }
            if (Math.percentChance(65)) {
                Button_Play.setImage(assets.image`Cherry`)
            }
            info.changeLifeBy(-0.01)
            info.changeScoreBy(-0.01)
        }
        tiles.placeOnRandomTile(Button_Play, assets.tile`myTile2`)
    }
    if (game_startup_check == 4.5) {
        tiles.placeOnRandomTile(Button_Play, assets.tile`myTile2`)
        Button_Play.setVelocity(0, randint(40, 70))
    }
})
let game_startup_check = 0
let camera_cam: Sprite = null
let logo_image: Sprite = null
let player_image: Sprite = null
let Button_Play: Sprite = null
let Sallie_walker: Sprite = null
let Button_Help: Sprite = null
Button_Help = sprites.create(assets.image`Help`, SpriteKind.clickable_image)
Sallie_walker = sprites.create(assets.image`Sallie`, SpriteKind.Sallie)
Button_Play = sprites.create(assets.image`Play`, SpriteKind.clickable_image)
player_image = sprites.create(assets.image`Sallie`, SpriteKind.Player)
logo_image = sprites.create(assets.image`logo_AJ`, SpriteKind.Sprite_anim)
camera_cam = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.camera)
Button_Play.setFlag(SpriteFlag.Invisible, true)
Button_Help.setFlag(SpriteFlag.Invisible, true)
Sallie_walker.setFlag(SpriteFlag.Invisible, true)
player_image.setFlag(SpriteFlag.Invisible, true)
pause(200)
music.zapped.play()
animation.runImageAnimation(
logo_image,
assets.animation`Logo_AJ fade-in`,
50,
false
)
pause(1500)
animation.runImageAnimation(
logo_image,
assets.animation`Logo_AJ fade-out`,
50,
false
)
pause(150)
logo_image.setFlag(SpriteFlag.Invisible, true)
pause(200)
animation.runImageAnimation(
logo_image,
assets.animation`Logo_PGW_idle`,
100,
true
)
logo_image.setFlag(SpriteFlag.Invisible, false)
color.startFade(color.Black, color.originalPalette)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`Clouds`)
scene.setBackgroundImage(assets.image`Backround-Blue`)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(camera_cam)
console.log("Area1")
scroller.scrollBackgroundWithSpeed(-10, 0, scroller.BackgroundLayer.Layer1)
animation.runImageAnimation(
logo_image,
assets.animation`Logo_PGW_idle`,
100,
true
)
logo_image.setImage(assets.image`logo_PGW`)
camera_cam.setPosition(150, 100)
logo_image.setPosition(152, 104)
pause(550)
game_startup_check = 1
pause(100)
Music()
