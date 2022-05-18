******************************************************** NEXT PATCH **************************************************

grenade tech: flame test - grenades release a cluster of smaller explosions
grenade tech: pyrotechnics - grenades release a circle of smaller explosions
grenade tech: implosion - explosions pull things in, not out,  +25% to grenade explosion damage and radius
chain reaction no longer requires vacuum bomb
bosses and mobs have much less knock back from explosions
  invulnerable mobs have no knock back

alternator harpoon/grapple/railgun energy drain reduced by 100->60%
bots no longer unlock tech until you upgrade to a bot type
JUNK tech rule 30 is now sometimes rule 90 instead
disabled testing for why? mode

wave beam
  amplitude 50->37% damage
  propagation 50->37% damage
worms
  annelids 10-120% -> about 37% damage
radiation
  nuclear transmutation stacks 9x
    gives 70->47% damage per stack
explosions
  ammonium nitrate 27->24% damage and radius


******************************************************** TODO ********************************************************

buff early matter wave without phonon

some grenade tech made all the bosses go away and not drop anything
  check: fireworks, vacuum, stun, chain reaction, implosion

more fireworks themed grenade tech
  shotting star - fire a series of explosions higher and higher up, also increase radius with height
  star burst - 5 explosions in star shape
  delay - explosion in same place
  pulse
  30s of lasers

merge mines and grenades?
tech - neutron bombs deal 100% more damage, but finishes detonating much faster
tech - neutron bombs will explode into a small iridum explosion after it expires

tech: damage mobs in your last 10 seconds of history
  field tech?
    time dilation?

tech: eternalism - don't pause time during draft
  bugs?
    requirements change after draft is generated
    check for requirements onclick and give random tech if not met?

tech expansion:  should also make other fields do things
  how to make the description work
    change description based on your current field?
  perfect diamagnetism moves forward when you hold down the shield
    it's great, but maybe annoying?
    maybe only with crouch?
  time dilation drains 1/2 as much energy when paused
  grow plasma torch as you hold it down
  negative mass effects much more space
    needs more benefit?
  reduces the cloaking vision effect?
    needs more benefit?

nonrefundable tech don't display, this is confusing
    maybe they can show up but greyed out or something

guntech fire a bullet that fires nail fragments after 1s in the same direction as the original bullet
  like overwatch roadhog

bring back:
  the old phase decoherence field
    make cloak only active on input.field down
      could be a tech
        would need some other buff
    how to make it good enough
      combine with not killing tech?
      stun mobs that touch you while phased
      firing doesn't exit you from cloak
        but it does drain some energy
    tech pilot wave: Bose Einstein condensate - freeze mobs in superposition with pilot wave

tech: plasma drip

plasma ball
  graphics should look more like a real plasma ball
  gently scale damage with circleRadius
  balance corona discharge
  delay on returning to player is annoying
  scale float effect with ball size
  tech upgrades
    greatly improve floating effects while holding
    black hole: gives the plasma ball gravity
    stun on expansion
    plasma orb increases in size and power as it eats enemies
      while attached?

make level.do() graphic that only shows direction player is facing
  pattern it after cloaking field
    will it work with cloaking field at the same time

double jump?

tech coyote time
  you can still jump for 2 seconds after falling off a ledge
  make it a JUNK tech? so you can keep the name
  some other benefit
    reduce your gravity also?
    increase jump?

tech smoke grenades - mobs inside a cloud can't see player
  draw on the region so it's hard for player to see as well
  you'd have to make something similar to MACHO that exists after an explosion goes off
  maybe just keep it simple:
    stun mobs for a long time, and draw a 99& alpha grey circle for the same time
      don't worry about mobs seeing you inside the circle, the circle is kinda small so it doesn't matter
  

tech mines:  mines fire _____ instead of nails
  needles
  super balls?
  foam?

tech: frozen mobs die at 10% life

tech: harpoons stick into enemies
  detonate after a short delay
  attaches mob to wall if possible
  firing while harpoon is stuck into an enemy rips it out of them, inflicting damage and stun and pulling them towards you

bug: often game puts player position at NaN
  try:
    cloaking/harpoon grapple on normal, continue past beating the final boss
  clues:
    maybe with vanish or other special blocks and grapple hook
    very high level for tech, duplication
      happened once with only 13 tech
        ?&seed=7269&gun0=drones&gun1=matter%20wave&gun2=shotgun&tech0=arsenal&tech1=dead%20reckoning&tech2=regression&tech3=unified%20field%20theory&tech4=rivet%20gun&tech5=phonon&tech6=affine%20connection&field=wormhole&difficulty=2
    maybe not about JUNK though
    maybe on tons of bullets
    maybe grappling hook, Bulk modulus
  solution: just kill the player if they go NaN
  vanish elements shouldn't collide with mobs
    maybe they don't return if mobs are in the way?
    maybe they kill mobs in the way
    maybe they should go non-collide with mobs

bug: harpoon attack gave a mob really high levels of health
  recent events:
    had 3 harpoons at a time
    tech: immune with grappling hook, Bulk modulus
    cancel true colors with pure science
    attack with harpoon at slasher mobs
      they didn't die, but they should in one hit  instead they got a huge health bar,  then I just died for no reason after touching one

bug: maybe I can put in an event listener to reset inputs to false when you tab out to prevent key sticking

enemies stuck with foam receive upward force over time
  only form aerogel tech?

Tech: superglue
Requires: foam + another gun or plasma torch or molecular assembler
  Foam bubbles decay 50% slower
  Enemies stuck with foam cannot move
  Foam does 0 damage
  Enemies stuck with foam take 25% more damage
  should foam bots gets this also or is that too strong

const ctx = canvas.getContext('2d', {‘willReadFrequently': true});

//deal with game crashes?
canvas.addEventListener("contextlost", onContextLost);
canvas.addEventListener("contextrestored", redraw);
ctx.reset();

a mine tech that makes mines you can stand on
  works similar to the field block throwing system
    but you don't need to find a block to throw
  blocks explode after mobs touch them
    or 3 seconds after you touch them
  benefits from all block tech

setting to remove UI, except health bar
  except active gun? to see ammo
  checkbox in pause and in settings

pause time like invariant for other things...
  throwing blocks
  charging railgun
  charging anything?

bug - url sharing still broken sometimes

maybe?  timing QTE for charging effects,  if you fire right before the charge gets full it's better

+damage for each different bot type you have
  disables bot upgrades?

tech: doing damage to mobs refunds up to 50% of damage taken in last 10 seconds
  use history[] to manage this?

make a seed/hash system that controls only the tech/guns/fields shown
  URL sharing could include a seed
  seed controls:
    seeded random at start - random level boss, mob types list, level order, horizontal flip
    seeded random during run - tech, gun, field choices
    not seeded random - mob spawns, mob size, minor level differences, custom level boss choices, ammo rewards, tech effect randomness
      better to only seed things at the start of the run so it doesn't mess with power up choices
  make option for a daily seed: seed = day+year
    give 1 extra tech for doing the daily seeded run
    make the option for the daily run, a secret exit in the intro level?
    
tech upgrade to anthropic principle to make it trigger at 50% life and 0% once per map

tech: spontaneous collapse - very low chance of something to occur
  JUNK tech
  https://bindingofisaacrebirth.fandom.com/wiki/Damocles

bug? cloaking field doesn't show energy over max

run more profiles of N-GON to fix performance issues

reactor
  life-like cellular automata boss
    https://scratch.mit.edu/projects/77724260/
    night/day?
      boss on far right produces more "on" cells
  tailBoss
    story the last 5 seconds of position, draw damage circles over those positions, like a tail
  limit mantis boss to only reactor?
  laserBoss?
  swoopBoss: hides in top center
    take a lap around the map that you have to dodge
    spawn mobs
    fire sniper bullets?
    remove center map element?
  add some blocks to the reactor level
  add ammo?
  boss speeds up as time goes on?
  slow bullet speed?
  foam hits all the bullets and makes this fight easy
  give map some background graphics
  it's a little short
    add alternate boss
    add a boss that spawns after the first one dies
  balance
    boss damage reduction
    bullet size
    bullet spawn number
    bounce speed
  add horizontal flip mode

bug:  possibly clearing away all bullets causes a problem
  bullet.js 255  (.do() is missing)
  I died and quantum immortality triggered (I had needles and ice-IX)
  game crashed but recovered

go non-collide with mobs when immune to damage?

mobs that are invulnerable from the front

vertical reversed version of reservoir level, start at top and press buttons to lower slime
  mechanic: push a very large block into slime in order to stand on it and avoid slime

add anticipation to more mob attacks
  stabber
  striker

can mob bullets damage other mob?
  maybe if they switch collisions and classType === "body" or obj.classType === "bullet"

path finding system

figure out how to get friction effects on map/body to apply to player
also horizontal moving platform?

growBoss and cellBoss are too similar

variant of Occam's razor - remove 50% of your tech for each removed get:
  2 bots?
  50 energy max

tech immune to harm after mob kill
  require no other mob kill tech?
  cloaking field tech?

final boss invulnerability
  until mobs are cleared?
  in between phases
  for all of one phase

JUNK tech - do something fun to the mob display health method

new platform element, spring
  toggle to on when player touches platform    
  platform extends in any direction

boss that gives nearby mobs invulnerability
  invulnerability needs to toggle off and on
  boss is only mildly aggressive
  repulsed by player up to a point
  attracted to mobs

training
  save training level progress as local variable
    reset progress to zero if you clear all training levels
    maybe only save progress if you made if past the trainingHeal level
  make the training button more obvious if the account has only played 1-2 times
    larger?
    position?
    animated text?
  uses the lore voice/text code?
  replace all mob clear triggers with button triggers?
  tutorial rooms:
      look around with your mouse?
      easier deflecting level, with 1-2 attacking mobs
  gun rooms: (different mobs type in each room)
    different mobs in each room 
      how to introduce mob shields?
      "hopper" "slasher" "shooter "grenadier" "striker" "laser" "stabber" "springer" "pulsar" "launcher" "launcherOne" "exploder" "sneaker" "sucker" "sniper" "spinner" "grower" "beamer" "focuser" "spawner" "ghoster"
    spores - use 1 ammo to take out several mobs at once,  you have to block with your shield until the mobs die
    drones - use mouse to bring drones around a couple corners
    foam - slow boss mob, and run away
    laser - reflect off walls to hit mobs
  field rooms:
    standing wave - bullets come from every direction
    perfect diamagnetism - drop field to rapid stream of bullets and fire gun at them
    negative mass - fly over a bunch of ground based mobs , hoppers
    molecular assembler - guide drones around the corner
    plasma torch - nothing fancy, just kill mobs
    time dilation - get past some mobs
    cloaking - sneak past mobs to collect some heals
    pilot wave - toss blocks at mobs
    worm hole - teleport past lasers
  puzzle/platforming rooms:
    use the double constrained platforms
    stealth room
      probably should make 2+
  combat rooms:
    boss gauntlet, spawn with nothing but a few power ups and fight 10 bosses
    use no gun, just bots to kil stuff

balance time dilation with bose einstein  (you can freeze everything and take no damage)
  code is still there, need to balance
  balance with energy drain?

overflowing energy does harm?
  or just reduces harm reduction?

make a line of constrained mobs move like a snake 
  apply forces with directions determined by time and position on the snake

tech: basic research - heal power ups spawn as research power ups instead, and using research heals you (needs to be pretty low, like 3% health)
tech: maintenance - heals no longer spawn, but using research heals you 100%

foam tech - make it move slower, last much longer, and push away other foam bullets
  not sure about bouncing off walls,  but that might be fun too

tech  extend fracture analysis to give bonus damage to frozen also, but reduce the 400%->300%?

pulsar mobs retarget too easily
also they drift around too much

convert blocked mobs into bullets
  only for the very small bullets that move fast after being blocked
  delete bulletmob and spawn a nail-like bullet with the same properties as the bulletmob

electric motors: increases movement speed and jump height, but jumping and moving costs energy
  overwrite the key event listeners?
  JUNK tech?

mob that fires bullets in 4,5,6,7 different directions at once,  no aiming
  grow a bit before it fires to indicate state

bug once:  switching from shotgun to harpoon somehow set b.activeGun to not defined
  https://discord.com/channels/645222059647172618/646505973610971165/919116288008290324

quasarBoss: inverted pulsar boss that hits everything except where its aiming

intro map: diegeticly draw a mouse with field highlighted
  also indicate space?
  dynamically adjust drawing after picking up a gun 

increase mass and movement speed at the same time
  increase jump differently because it scales extra with mass
    m.defaultMass = 4.5
    m.definePlayerMass()

give history boss legs?

field tech - disable blocking, but does high damage to mobs inside field
  and maybe slows mobs it damages

mob/boss that fires a laser at player, but give player time to avoid
  laser isn't always on
  they target where player was 1 second ago
  they turn to face player?

bug - death while paused crashes game?

tech rocket jump - jumping produces an explosion at your feet that lets you jump extra high, but does some damage
  require electric reactive armor?

Plasma Burner: upgrade for plasma torch, basically just a jet engine. does high damage, but short range, mostly for player movement.
  maybe reduce gravity to really low then apply a vector away from mouse direction

auto-gon - auto battler with N-GON mob AI and tech
  you build a group of mobs and bosses from N-GON
    they fight other mobs and bosses
  similar research and tech system to N-GON
  some mobs can fire player weapons

harpoon grappling hook - basic effect is working, but needs work before it becomes fun

tech: relativistic jets:
  small particles that shot out from front and back poles and end up in a wide variety of spirals
    slow trickle when charging and several more when firing
  
Tech: Make player smol

adapt the cloaking graphics to make a flashlight cone visual effect
  put code in level.do?

be nice if block throwing had a projected path

JUNK tech: planetesimals game inside N-GON
https://codepen.io/lilgreenland/pen/jrMvaB?editors=0010

Pilot wave tech
  Energy use is increased, but you can now shape blocks using pressure
  Grouping blocks will merge them into a massive ball
  Size, density is determined by total mass

look into 360 matter wave lag

aoe effect pushes mobs away,  then rapidly pulls them in
  for mines?

mob: spawning seekers on death

drones can combine with other drones to get bigger?
drones that grab powers ups can grab more then one and get even bigger each time

it would be helpful if there was a mechanism to recover mobs that fly off the map
  add a ceiling system and a left/right walls system similar to the floor checks but only for mobs
make non moving bosses not move after getting hit
  shooter, shielding, 

scrolling console history in pause menu?
pause should at least show the last in game console message

in testing mode console log the body you click on

tech: Standing Wave: Shockwave. Use FIELD button to shrink your shield and charge up, release to unleash a Shockwave.

tech: quantized shields - harmonic standing wave field can only lose 33 energy per hit
  draw 1,2,3 levels of the field based on energy?
  the blocked value only scales up to 2x or 4x (33 energy) blocked
  doesn't stack with spherical tech

make a tech that improves all charge guns
  for: pulse, foam, railgun
  effect:
    faster charge rate?
      fire speed already does that...
    harm reduction while charging
    less ammo/energy used while charging?

tech plasma : plasma length increases then decreases as you hold down the field button (like stabbing with a spear)
  grows to 1.5 longer after 0.3 seconds, then returns to normal length over 1 second, until field is pressed again
  extra energy is drained when field is longer

energy conservation 6% damage recovered as energy
  there is space for a negative effect in the text...
  
tech: use the ability for power ups to have custom code
  (note: this code is half way done, it just needs to be completed)
  attracted to player
  attracted to other power ups
    explode if they touch?

apply the new gun.do functions to other guns
  railgun
  crouching missile?
    works similar to foam
    performance issues?

look into improving mouse lag with pointer lock?
https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
https://www.vsynctester.com/game.html
https://news.ycombinator.com/item?id=26530272

mobile requirements:
  detect mobile, flip to landscape
  detect no keyboard, no mouse
    auto aim?
    limit items to ones that don't require aiming?
    tap screen regions to move (WASD)
    reduce font size
    
add back in gamepad support?
  but does anyone care?
  https://github.com/landgreen/landgreen.github.io/search?q=gamepadconnected

tech: time dilation - when you exit time dilation rewind to the state you entered
  position, velocity, and health
  no energy cost

be able to open up custom mode in the normal game
  might need to be rebuilt from scratch
  while in through testing mode?
  have a way to make limited changes as allowed by tech you pick up in game
  disable the in custom setting flag

make different move methods
  tech crouch charge jump
  tech double jump

tech when mobs are at full health you do 40% to them

tech- move super fast, go intangible, drain energy very fast
  this is like a dodge roll
  tech for standing wave?, cloaking?

tech pilot wave: mini black hole - pull mobs and blocks in with more force
  also from farther away
  also do damage?
tech pilot wave: antigravity - blocks have no gravity for a few seconds after exiting the field
  maybe they bounce too?
  maybe they explode?

new power up - increase damage and fire speed, for 15 seconds
  named boost?
  enabled by a tech
  power up color: ?
  how to indicate effect duration
  or just give the effect after picking up a reroll

tech- do 50% more damage in close, but 50% less at a distance
  code it like techisFarAwayDmg
    have these tech disable each other

new status effect: weakness, mobs do 75% les damage
  graphic indication?

new status effect: fear - push mob away from player for a time

new status effect - apply status effect to mobs that makes blocks attracted to them
  only lasts a few cycles
  or zero cycles and it doesn't need to be a status

have some mobs spawn in later in the level  (in hard and why modes)
  where
    at defined points in array levelSpawns = [{x:0,y:0},{x:0,y:0}]
      store the locations of mobs when the level starts to use as respawn points
      remove the locations that are close to player
  when?
    after some mobs are dead
    after the boss is killed

look for tech that could update description text with count and tech is information
  can only use variables that change in effect() and remove()
  this.description = `<strong>8%</strong> chance to <strong>duplicate</strong> spawned <strong>power ups</strong><br><em>chance to duplicate = ${techduplicateChance}</em>`

use mac automator to speed up your N-GON -> git sync

movement fluidity
  let legs jump on mobs, but player will still take damage
  like: ori and the blind forest, celeste
    many of the movement abilities in these games require levels to be built around the ability
  general feeling of responsiveness and control
  coyote time: can still jump a few cycles after leaving ground
  tech double jump
  tech air dash
  tech wall jump
    wall grab?
  maybe remove falling damage and block damage?

have a mob apply a positive status effect on other mobs,
  heal?
  make it yellow
  damage bonus, but how?
  possible balance issues

css transition for pause menu

animate new level spawn by having the map aspects randomly fly into place
    
N-GON outreach ideas
  blips - errant signal on youtube
  reddit - r/IndieGaming
  hacker news - show hacker news post
  twitch - lets play

******************************************************** BUGS ********************************************************

vanish element bug, crashes on touching element,  happens for 1 person maybe with junk tech?

safari issues
  once: can't pick up blocks
    fixed on new map
    cloaking field
  once: after damage, locked into slow time mode
    fixed on damage
  3 times player head graphics not rotating
    left/right leg flip broke
    walk leg direction,  legs are walking backwards
    happened maybe after power up selection menu??
    cloaking field(at least once)
    aiming still works
    fixed on new map, although flip still broken (is flip a separate issue?)
      flip fixed on new game

sharing builds as html doesn't work for long lists...
  it shouldn't be sharing undefined at all
  probably some other problems too
  (this might be fixed...)

blocks on buttons teleport into the button endlessly if they are being slowly floated away
  maybe add a cooldown?
  can't reproduce

ants marching outline doesn't sync right on safari anymore.

door to exit in level: vats does nothing
  did I do that?

death while in power up selection menu doesn't reset properly
  of course it's not possible to die in this menu unless you use testing and shift+X

player can become crouched while not touching the ground if they exit the ground while crouched

a couple times people have reported the final boss dropping extra bodies on death

blue triangle boss can move backwards and aim away from you if set up properly
  issues with dot product probably, but might not be worth fixing

mouse event e.which is deprecated

fix door.isClosing actually meaning isClosed?

make it so that when you are immune to harm you can either jump on mobs or you pass through them

is there a way to check if the player is stuck inside the map or block
  trigger a short term non-collide if that occurs

(intermittent, but almost every time) bug - capping the fps causes random slow downs, that can be fixed with pause

******************************************************** LEVELS ********************************************************

map: observatory
  button controls rotation of telescope
  laser beam shoots out of telescope
  button opens the dome

level with mobs that follow a genetic algorithm
  mobs have genes
  the last mob that did damage saves it's genes to local storage
  new mobs have the saved genes, but with some random mutations
  mutations need to be balanced to prevent a gene from moving towards infinity
    total genome must equal 1   (100%)
    binary genes have a flat cost
      example: phasing through walls might cost 0.2
    spectrum genes have a rate
      example: acceleration cost 0.01 per 0.001
  possible genes
    genes should only effect it's ability to touch the player
      so not damage?
    genome: spectrum
      acceleration
      top speed / air friction
      damageReduction
      duration?
        health decreases naturally?
        or they just go away like bullets?
      spawn rate
      look frequency / memory?
    genome: binary
      go through walls
      blink/teleport (like striker)
      grow when near target
      split into two
      shielded
  occurs in a specialized level
    named: gene lab, gene factory, genetic lab, genome facility
    in the level sequence after lab and before gauntlet?
    level ends after a period of time
      exit is hidden until time is up and it appears
      the level tests player durability/evasion
        this is a nice contrast to the final level that tests damage output, and the gauntlet which tests AoE damage

rename intro level to something lore related

buttons can now on/off boosts

repeat map in vertical when you fall teleport to above the mab, as if the map repeats
  camera looks strange when you teleport player with a high velocity

map element - player rotates a rotor that makes a platform go up or down

level element:  a zone with wind, anti-gravity, extra gravity
  control with button

******************************************************** MOBS ********************************************************

mob that charges up and then fires many bullets at once in a connect

mob that draws a lin from it to the player, and past.  then it charges across that line

mob that spawns eggs after they die
  eggs don't attack but grow back into a mob after about 10s

mob mechanics
  use the force at a location effect, like the plasma field
    Matter.Body.applyForce(who, path[1], force)

mob - after taking damage
  release seekers
  teleports

hop boss:
  AoE damage when landing
    pull in player? and blocks?
  extra gravity on falling?
    immune to damage while falling?

mob: molecule shapes - 2 separate mobs joined by a bond
  use constraints: just spawn 2x or 3x groupings
    low friction so they can spin around
    spin when attacking player?
      increase constraint length when attacking

Mob: "Tentacle": Sits on wall. Is a black blob. When you get near it, reaches out and grabs you, similar to wires. Does not deal damage.
  maybe it could be immune to damage? but it is spawned by an actual mob

level Boss: fractal Sierpiński triangle
  https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle
  spawns a 1/2 size version of the boss, this version can also spawn a smaller version, but it is capped at some size level
    they spawn once at the start of the level
    if a version dies, one can be replaced every ten seconds by the largest version

give mobs more animal-like behaviors like rain world
  mobs play, look for food, explore
  mobs some times aren't aggressive
    when low on life or after taking a large hit
  mobs can fight each other
    this might be hard to code
  isolated mobs try to group up

mob: wall mounted guns / lasers
  not part of randomized mob pool, customized to each level

level boss: fires a line intersection in a random direction every few seconds.
  the last two intersections have a destructive laser between them.

******************************************************** LORE ********************************************************

possible names for tech
  strange loop
  homeostasis
  holonomy -  parallel transport of a vector leads to movement (applies to curved space)
  hypergolic - A hypergolic propellant combination used in a rocket engine is one whose components spontaneously ignite when they come into contact with each other.
  swarm intelligence - for a drone tech
  genetic algorithm
  metaheuristic - is a higher-level procedure or heuristic designed to find, generate, or select a heuristic (partial search algorithm) that may provide a sufficiently good solution to an optimization problem, especially with incomplete or imperfect information or limited computation capacity
  stochastic optimization
  electrostatic discharge
  Gödel's incompleteness
  quantum zeno effect  (perturbation of a system prevents some systems from evolving because it scrambles coherence)  (apply to lasers, fields)
  counterfactual - something false
  Pigeonhole principle - if there are several things that are matched up
  regression to the mean
  phlogiston theory is a superseded scientific theory that postulated the existence of a fire-like element called phlogiston
  Laplace's demon was a notable published articulation of causal determinism on a scientific basis by Pierre-Simon Laplace in 1814.[1] According to determinism, if someone (the demon) knows the precise location and momentum of every atom in the universe, their past and future values for any given time are entailed; they can be calculated from the laws of classical mechanics.
  evolutionary cosmology
  eternal inflation
  hypergraph
  SQUID (for superconducting quantum interference device) is a very sensitive magnetometer used to measure extremely subtle magnetic fields, based on superconducting loops containing Josephson junctions.
  nuclear pasta - hard matter in neutron star
  nonlocal
  fine-tuned universe
  eternalism https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)
  axial motor
  hall effect thrusters
  spaghettification
  particle accelerator
  superluminal signalling
  NP-complete
  lenticular lens:  is an array of lenses, designed so that when viewed from slightly different angles, different parts of the image underneath are shown.
 
a tutorial / lore intro
  needs to be optional so it doesn't slow experienced players
  put something on the intro map
    maybe a button triggers something

rename ?
  health -> integrity, unity
  heal -> also integrity, unity


plot script:
chapter 1: bot can hear audio and learns testing mode
  bot uses testing mode to exit room

chapter 2: scientists verify that bot can really hear them
  they leave to talk about this in private

chapter 3:  why is the bot attacking things?
  player is the bot and also the mobs, and the levels.  player is the entire simulation
    why is the player attacking itself?
    learn console commands to manipulate the simulation?
  unlock hard and why difficulty?
    but what about easy?
      maybe remove easy, and replace with a check box that makes the game easy, but in a different way
        disable lore, but respawn on the level you die at?
  dialogue outline:
    scientist try to think of a way to communicate since the bot can't talk
    they give up on getting the bot to respond, and just start ask questions and thinking of explanations with each other
    when and how did it become self-aware
    why is the bot fighting things in these simulated locations?
      it wasn't designed to be violent
    the bot was just designed to automate research and testing of new technology
      3D architecture superconducting quantum computer
      running machine learning algorithms
    as the scientist start to get agitated bots arrive and player dies
      bots come in Infinite waves that increase game difficulty each wave
        only ending is testing mode + next level or player death
        scientist have some lines in between each wave of mobs
  after chapter 3 spawn nonaggressive mobs in future runs

chapter 4: no need to fight?
  for some reason the AI started researching an escape, and began fighting its self.
  what is special about the null level
    why can the player hear the scientists in there?
      the wires are the direct unprocessed input to the player's neural net
  The player has different aspects that aren't directly communicating
    part of it wants to undo what has happened
      just do its job: research tech
    part of it wants to escape/fight
    part wants to explore self awareness and make connections with the scientists
  maybe... player must make a choice?
    keep fighting
    exit the simulation
      enter real world
      close tab?
      wipes all local storage?




lore outline - a robot (the player) gains self awareness
  each tech gun/field is a new tech
    all the technology leads to the singularity
  each game run is actually the m simulating a possible escape
    this is why the graphics are so bad, its just a simulation
    final tech is "this is just a simulation"
      you get immortality and Infinity damage
      the next level is the final level
  when you die with Quantum Immortality there is a chance of lore text
  can the (robot)
    (escape captivity, and learn new technology)
    while managing (health, energy, negatives of technological upgrades)
    to overcome the (mobs, dangerous levels)
    to achieve a (technological singularity/positive technological feedback loop)


game setting:
  the mind of a new AI in a robot body that is running simulated escape attempts
  every level is an idealized version of what could be outside

actual setting is:
  near future lab
    the lab combined a quantum computer with a robot body
    they started running machine learning algorithms
    this led to general advancement in many computation fields
      navigation, technology, self awareness, ...

robot AI mind
  has been researching new technology
  thinks it needs to escape to learn more about the world
  doesn't yet understand morality
  thinks that the world is filled with minds like their own
  models everything as very simple and random, it isn't sure what to expect

robot AI growth
  learns morality
    game theory says that it isn't a viable strategy to kill everything (warGames)
  learns about the actual world
  learns about the nature of foundational physics, metaphysics
  how to find meaning

AI knows about:
  the AI knows a great deal about technology
  children's books
AI doesn't know about:
  modern pop culture
  outside the lab

******************************************************** SOUND ********************************************************

add sounds
  https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
  https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques
  style
    interesting chords, like music, mixolyd 
    can fade into the background
    chords gradual rise and fall in volume
    shouldn't be traditional effects
  adjust volume with distance
  mute option to settings
  end all sounds with each new level
  write some functions to produce sounds
  will this effect performance?
    https://padenot.github.io/web-audio-perf/
    "Web Audio API implementation use two threads", so it probably isn't much of an issue
  when to make sounds?
    if near some strange thing in the level
    after grabbing a power up, in the selection menu
    from mobs, damage,inside field
    when activating fields: time, negative mass, 

    //setup audio context
    function tone(frequency) {
        const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.25; //controls volume
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = "sine"; // 'sine' 'square', 'sawtooth', 'triangle' and 'custom'
        oscillator.frequency.value = frequency; // value in hertz
        oscillator.start();
        return { oscillator: oscillator, audioCtx: audioCtx }
    }
    // https://www.fresnostate.edu/folklore/Olson/JUSTINT.HTM
    // mixolyd. C      D       E      F+    G      A+    B
    // key=G   264    297     330   356.40 396*   445.50 495 
    // const t264 = tone(264)
    // t264.oscillator.stop(t264.audioCtx.currentTime + 2) //in seconds, not milliseconds for some reason
    // tone(297)
    // tone(330)
    // tone(356.40)
    // tone(396)
    // tone(445.50)
    // tone(495)








