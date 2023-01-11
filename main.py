@namespace
class SpriteKind:
    Sprite_anim = SpriteKind.create()
    camera = SpriteKind.create()
    cutscene_image = SpriteKind.create()
    clickable_image = SpriteKind.create()
    Sallie = SpriteKind.create()
def WinLose():
    pass

def on_b_pressed():
    pass
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def HELP():
    global game_startup_check
    game_startup_check = 4
    Sallie_walker.ay = 0
    music.set_volume(255)
    pause(500)
    color.start_fade(color.black, color.original_palette, 500)
    animation.stop_animation(animation.AnimationTypes.ALL, logo_image)
    characterAnimations.loop_frames(Sallie_walker,
        assets.animation("""
            Sallie_moving-Right
        """),
        190,
        characterAnimations.rule(Predicate.NOT_MOVING))
    logo_image.set_image(assets.image("""
        Red
    """))
    camera_cam.set_position(150, 100)
    Sallie_walker.set_position(40, 90)
    logo_image.set_position(150, 100)
    logo_image.set_flag(SpriteFlag.INVISIBLE, False)
    player_image.set_flag(SpriteFlag.INVISIBLE, True)
    Sallie_walker.set_flag(SpriteFlag.INVISIBLE, True)
    animation.stop_animation(animation.AnimationTypes.ALL, Sallie_walker)
    scene.set_background_image(assets.image("""
        Back
    """))
    tiles.set_current_tilemap(tilemap("""
        Help-room
    """))
    pause(1000)
    Sallie_walker.set_flag(SpriteFlag.INVISIBLE, False)
    characterAnimations.loop_frames(Sallie_walker,
        assets.animation("""
            No-right
        """),
        200,
        characterAnimations.rule(Predicate.MOVING_RIGHT))
    characterAnimations.loop_frames(Sallie_walker,
        assets.animation("""
            Sallie_Idle
        """),
        200,
        characterAnimations.rule(Predicate.NOT_MOVING))
    pause(200)
    story.sprite_move_to_location(Sallie_walker,
        Sallie_walker.x + 100,
        Sallie_walker.y + 0,
        55)
    pause(1000)
    Sallie_walker.set_stay_in_screen(True)
    player_image.set_flag(SpriteFlag.INVISIBLE, False)
    player_image.set_position(150, 10)
    player_image.set_image(assets.image("""
        Bingchilling
    """))
    story.sprite_move_to_location(player_image, player_image.x + 0, player_image.y + 90, 100)
    player_image.set_flag(SpriteFlag.INVISIBLE, True)
    characterAnimations.loop_frames(Sallie_walker,
        assets.animation("""
            Idle
        """),
        250,
        characterAnimations.rule(Predicate.NOT_MOVING))
    characterAnimations.loop_frames(Sallie_walker,
        assets.animation("""
            Right
        """),
        200,
        characterAnimations.rule(Predicate.MOVING_RIGHT))
    characterAnimations.loop_frames(Sallie_walker,
        assets.animation("""
            Left
        """),
        200,
        characterAnimations.rule(Predicate.MOVING_LEFT))
    
    def on_start_cutscene():
        pass
    story.start_cutscene(on_start_cutscene)
    
    game_startup_check = 4.5
    tiles.place_on_random_tile(Button_Play, assets.tile("""
        myTile2
    """))
    Button_Play.set_velocity(0, 80)
    if game_startup_check == 4.5:
        story.cancel_current_cutscene()
        controller.move_sprite(Sallie_walker, 75, 0)

def on_a_pressed():
    if game_startup_check == 1:
        Loadanim()
    if game_startup_check == 4.5:
        if Sallie_walker.vy == 0:
            music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
                    400,
                    600,
                    255,
                    0,
                    100,
                    SoundExpressionEffect.NONE,
                    InterpolationCurve.LINEAR),
                SoundExpressionPlayMode.IN_BACKGROUND)
            Sallie_walker.ay = 350
            Sallie_walker.vy = -100
    if game_startup_check == 3:
        if Sallie_walker.vy == 0:
            pass
        if Sallie_walker.vy == 0:
            music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
                    400,
                    600,
                    255,
                    0,
                    100,
                    SoundExpressionEffect.NONE,
                    InterpolationCurve.LINEAR),
                SoundExpressionPlayMode.IN_BACKGROUND)
            Sallie_walker.ay = 350
            Sallie_walker.vy = -75
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def Music():
    if game_startup_check == 1:
        print("PlayMusic:1")
        while game_startup_check == 1:
            music.play_melody("G A B C5 B F D C ", 400)
    if game_startup_check == 2:
        print("PlayMusic:2")
        while game_startup_check == 2:
            music.play_melody("G A B C5 B F D C ", 400)
    if game_startup_check == 3:
        print("PlayMusic:3")
        while game_startup_check == 3:
            music.play_melody("C D E F G E D E ", 400)
    if game_startup_check == 4:
        print("PlayMusic:4")
        while game_startup_check == 4:
            music.play_melody("F G F E D C E - ", 400)
def Error():
    scene.set_background_image(assets.image("""
        Menu
    """))
def Loadanim():
    global game_startup_check
    print("Call:Load-Anim")
    music.set_volume(1)
    color.start_fade(color.original_palette, color.black, 500)
    pause(500)
    player_image.set_image(assets.image("""
        Sallie
    """))
    animation.run_image_animation(player_image,
        assets.animation("""
            Sallie_moving-Right
        """),
        150,
        True)
    controller.move_sprite(Sallie_walker, 0, 0)
    music.set_tempo(400)
    Button_Play.set_position(150, 0)
    Button_Help.set_position(150, 0)
    player_image.set_position(215, 142)
    camera_cam.set_position(150, 100)
    Sallie_walker.set_flag(SpriteFlag.INVISIBLE, True)
    logo_image.set_flag(SpriteFlag.INVISIBLE, True)
    Button_Play.set_flag(SpriteFlag.INVISIBLE, True)
    Button_Help.set_flag(SpriteFlag.INVISIBLE, True)
    player_image.set_flag(SpriteFlag.INVISIBLE, False)
    scene.set_background_image(assets.image("""
        Black_void
    """))
    tiles.set_current_tilemap(tilemap("""
        load_anim
    """))
    color.start_fade(color.black, color.original_palette, 500)
    if Math.percent_chance(40):
        animation.run_image_animation(player_image,
            assets.animation("""
                Sallie_moving-Right
            """),
            200,
            True)
    if Math.percent_chance(40):
        player_image.set_position(214, 142)
        animation.run_image_animation(player_image,
            assets.animation("""
                Sallie_moving-Left
            """),
            200,
            True)
    if Math.percent_chance(29):
        player_image.set_position(212, 142)
        animation.run_image_animation(player_image,
            assets.animation("""
                Sallie_sleep
            """),
            250,
            True)
    if Math.percent_chance(1):
        animation.run_image_animation(player_image, assets.animation("""
            Spin
        """), 55, True)
    pause(2000)
    color.start_fade(color.original_palette, color.black, 500)
    music.set_tempo(120)
    pause(500)
    music.set_volume(300)
    animation.stop_animation(animation.AnimationTypes.ALL, player_image)
    if game_startup_check == 1:
        color.start_fade(color.black, color.original_palette, 500)
        game_startup_check = 2
        scene.set_background_image(assets.image("""
            Menu
        """))
        music.set_volume(255)
        logo_image.set_flag(SpriteFlag.INVISIBLE, False)
        Sallie_walker.set_flag(SpriteFlag.INVISIBLE, True)
        Button_Help.set_flag(SpriteFlag.INVISIBLE, False)
        Button_Play.set_flag(SpriteFlag.INVISIBLE, False)
        player_image.set_image(assets.image("""
            Player_orb
        """))
        player_image.set_stay_in_screen(True)
        player_image.set_position(150, 100)
        camera_cam.set_position(150, 100)
        controller.move_sprite(player_image, 150, 150)
        scene.set_background_image(assets.image("""
            Menu
        """))
        scroller.scroll_background_with_speed(50, -50)
        animation.run_image_animation(Button_Play,
            assets.animation("""
                Play-anim
            """),
            110,
            True)
        animation.run_image_animation(Button_Help,
            assets.animation("""
                Help-anim
            """),
            110,
            True)
        animation.run_image_animation(logo_image,
            assets.animation("""
                S E L E C T
            """),
            500,
            False)
        Button_Help.set_position(111, 120)
        Button_Play.set_position(150, 145)
    if game_startup_check == 4:
        game.reset()
    if game_startup_check == 3:
        PLAY()

def on_on_overlap(sprite, otherSprite):
    global game_startup_check
    if otherSprite == Button_Help and (game_startup_check == 2 and controller.A.is_pressed()):
        game_startup_check = 4
        controller.move_sprite(player_image, 0, 0)
        Loadanim()
    if otherSprite == Button_Play and (game_startup_check == 2 and controller.A.is_pressed()):
        game_startup_check = 3
        controller.move_sprite(player_image, 0, 0)
        Loadanim()
    if Sallie_walker.overlaps_with(Button_Play) and game_startup_check == 3:
        music.pew_pew.play()
        tiles.place_on_random_tile(Button_Play, assets.tile("""
            myTile2
        """))
        Button_Play.set_velocity(0, randint(60, 80))
        if Math.percent_chance(50):
            Button_Play.set_image(assets.image("""
                Strawberry
            """))
        if Math.percent_chance(50):
            Button_Play.set_image(assets.image("""
                Mint
            """))
        if Math.percent_chance(50):
            Button_Play.set_image(assets.image("""
                Cotten Candy
            """))
        if Math.percent_chance(50):
            Button_Play.set_image(assets.image("""
                Vanilla
            """))
        if Math.percent_chance(50):
            Button_Play.set_image(assets.image("""
                Strawberry
            """))
        if Math.percent_chance(50):
            Button_Play.set_image(assets.image("""
                Grape
            """))
        if Math.percent_chance(50):
            Button_Play.set_image(assets.image("""
                Orange
            """))
        if Math.percent_chance(50):
            Button_Play.set_image(assets.image("""
                Blueberry
            """))
        if Math.percent_chance(50):
            Button_Play.set_image(assets.image("""
                Cherry
            """))
        tiles.place_on_random_tile(Button_Play, assets.tile("""
            myTile2
        """))
        info.change_score_by(1)
    if Sallie_walker.overlaps_with(Button_Play) and game_startup_check == 4.5:
        pass
sprites.on_overlap(SpriteKind.player, SpriteKind.clickable_image, on_on_overlap)

def PLAY():
    global game_startup_check
    game_startup_check = 3
    color.start_fade(color.black, color.original_palette, 500)
    player_image.follow(Sallie_walker, 150)
    logo_image.set_position(170, 150)
    camera_cam.set_position(152, 100)
    Sallie_walker.set_position(142, 106)
    player_image.set_position(145, 106)
    player_image.set_image(assets.image("""
        Cone_Hitbox
    """))
    characterAnimations.loop_frames(Sallie_walker,
        assets.animation("""
            Sallie_Idle
        """),
        200,
        characterAnimations.rule(Predicate.NOT_MOVING))
    characterAnimations.loop_frames(Sallie_walker,
        assets.animation("""
            Right
        """),
        150,
        characterAnimations.rule(Predicate.MOVING_RIGHT))
    characterAnimations.loop_frames(Sallie_walker,
        assets.animation("""
            Left
        """),
        150,
        characterAnimations.rule(Predicate.MOVING_LEFT))
    scene.camera_follow_sprite(camera_cam)
    tiles.set_current_tilemap(tilemap("""
        level5
    """))
    scene.set_background_image(assets.image("""
        White
    """))
    player_image.set_flag(SpriteFlag.INVISIBLE, True)
    Sallie_walker.set_flag(SpriteFlag.INVISIBLE, False)
    logo_image.set_flag(SpriteFlag.INVISIBLE, True)
    animation.stop_animation(animation.AnimationTypes.ALL, Button_Play)
    pause(1500)
    logo_image.set_flag(SpriteFlag.INVISIBLE, False)
    music.ba_ding.play()
    controller.move_sprite(Sallie_walker, 55, 0)
    animation.run_image_animation(logo_image, assets.animation("""
        3 2 1
    """), 150, False)
    Button_Play.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, False)
    Button_Play.set_image(assets.image("""
        Vanilla
    """))
    pause(2500)
    story.sprite_move_to_location(logo_image, logo_image.x + 0, logo_image.y - 200, 150)
    info.set_score(0)
    logo_image.set_flag(SpriteFlag.INVISIBLE, True)
    Button_Play.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
    Button_Play.set_flag(SpriteFlag.INVISIBLE, False)
    tiles.place_on_random_tile(Button_Play, assets.tile("""
        myTile2
    """))
    Button_Play.set_velocity(0, 80)
def Credits():
    scroller.set_layer_image(scroller.BackgroundLayer.LAYER0,
        assets.image("""
            Blue
        """))
    scroller.set_layer_image(scroller.BackgroundLayer.LAYER1,
        assets.image("""
            Mountains
        """))
    scroller.set_layer_image(scroller.BackgroundLayer.LAYER2,
        assets.image("""
            Hills
        """))
    scroller.set_layer_image(scroller.BackgroundLayer.LAYER3,
        assets.image("""
            Trees
        """))
    scroller.set_camera_scrolling_multipliers(0.1, 0.3, scroller.BackgroundLayer.LAYER1)
    scroller.set_camera_scrolling_multipliers(0.2, 0.2, scroller.BackgroundLayer.LAYER2)
    scroller.set_camera_scrolling_multipliers(0.3, 0.1, scroller.BackgroundLayer.LAYER3)
    Sallie_walker.set_position(150, 114)
    Sallie_walker.set_flag(SpriteFlag.INVISIBLE, False)
    tiles.set_current_tilemap(tilemap("""
        level11
    """))
    
    def on_start_cutscene2():
        characterAnimations.loop_frames(Sallie_walker,
            assets.animation("""
                Sallie_moving-Right
            """),
            150,
            characterAnimations.rule(Predicate.MOVING_RIGHT))
    story.start_cutscene(on_start_cutscene2)
    

def on_overlap_tile(sprite2, location):
    if game_startup_check == 3:
        if game_startup_check == 3:
            if Math.percent_chance(65):
                Button_Play.set_image(assets.image("""
                    Strawberry
                """))
            if Math.percent_chance(65):
                Button_Play.set_image(assets.image("""
                    Mint
                """))
            if Math.percent_chance(65):
                Button_Play.set_image(assets.image("""
                    Cotten Candy
                """))
            if Math.percent_chance(65):
                Button_Play.set_image(assets.image("""
                    Vanilla
                """))
            if Math.percent_chance(65):
                Button_Play.set_image(assets.image("""
                    Strawberry
                """))
            if Math.percent_chance(65):
                Button_Play.set_image(assets.image("""
                    Grape
                """))
            if Math.percent_chance(65):
                Button_Play.set_image(assets.image("""
                    Orange
                """))
            if Math.percent_chance(65):
                Button_Play.set_image(assets.image("""
                    Blueberry
                """))
            if Math.percent_chance(65):
                Button_Play.set_image(assets.image("""
                    Cherry
                """))
        tiles.place_on_random_tile(Button_Play, assets.tile("""
            myTile2
        """))
    if game_startup_check == 4.5:
        tiles.place_on_random_tile(Button_Play, assets.tile("""
            myTile2
        """))
        Button_Play.set_velocity(0, randint(40, 70))
scene.on_overlap_tile(SpriteKind.clickable_image,
    assets.tile("""
        myTile4
    """),
    on_overlap_tile)

game_startup_check = 0
camera_cam: Sprite = None
logo_image: Sprite = None
player_image: Sprite = None
Button_Play: Sprite = None
Sallie_walker: Sprite = None
Button_Help: Sprite = None
Button_Help = sprites.create(assets.image("""
    Help
"""), SpriteKind.clickable_image)
Sallie_walker = sprites.create(assets.image("""
    Sallie
"""), SpriteKind.Sallie)
Button_Play = sprites.create(assets.image("""
    Play
"""), SpriteKind.clickable_image)
player_image = sprites.create(assets.image("""
    Sallie
"""), SpriteKind.player)
logo_image = sprites.create(assets.image("""
    logo_AJ
"""), SpriteKind.Sprite_anim)
camera_cam = sprites.create(img("""
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
    """),
    SpriteKind.camera)
Button_Play.set_flag(SpriteFlag.INVISIBLE, True)
Button_Help.set_flag(SpriteFlag.INVISIBLE, True)
Sallie_walker.set_flag(SpriteFlag.INVISIBLE, True)
player_image.set_flag(SpriteFlag.INVISIBLE, True)
pause(200)
music.zapped.play()
animation.run_image_animation(logo_image,
    assets.animation("""
        Logo_AJ fade-in
    """),
    50,
    False)
pause(1500)
animation.run_image_animation(logo_image,
    assets.animation("""
        Logo_AJ fade-out
    """),
    50,
    False)
pause(150)
logo_image.set_flag(SpriteFlag.INVISIBLE, True)
animation.run_image_animation(logo_image,
    assets.animation("""
        Logo_PGW_idle
    """),
    100,
    True)
pause(200)
scroller.scroll_background_with_camera(scroller.CameraScrollMode.ONLY_HORIZONTAL)
logo_image.set_flag(SpriteFlag.INVISIBLE, False)
color.start_fade(color.black, color.original_palette)
scene.set_background_image(assets.image("""
    Backround-Blue
"""))
tiles.set_current_tilemap(tilemap("""
    level2
"""))
scene.camera_follow_sprite(camera_cam)
game_startup_check = 1
print("Area1")
scroller.scroll_background_with_speed(-10, 0, scroller.BackgroundLayer.LAYER1)
scroller.set_layer_image(scroller.BackgroundLayer.LAYER1,
    assets.image("""
        Clouds
    """))
animation.run_image_animation(logo_image,
    assets.animation("""
        Logo_PGW_idle
    """),
    100,
    True)
logo_image.set_image(assets.image("""
    logo_PGW
"""))
camera_cam.set_position(150, 100)
logo_image.set_position(152, 104)