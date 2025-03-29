
// if(!(e.getVehicle() instanceof Boat boat)) return;
// FlyingBoat fboat = FlyingBoat.boatMap.get(boat);
// if(fboat == null) return;

// Vector vec = e.getTo().toVector().subtract(e.getFrom().toVector());

// double speed = vec.length();
// Location loc = boat.getLocation();
// loc.setPitch(0);

// double speedBoost = fboat.getMaxSpeed()/20;
// Vector boostVector = loc.getDirection().multiply(speedBoost);


// if(speed>fboat.lastSpeed){
//     if(speed < fboat.getMaxSpeed()){
//         vec.add(boostVector);
//     }
// }


// fboat.lastSpeed = vec.length();

// boat.setVelocity(vec);


PlayerEvents.chat(event => {
    // Check if message equals creeper, ignoring case
    if (event.message.trim().toLowerCase() != 'creeper') {
      // Schedule task in 1 tick, because if you reply immediately, it will print before player's message
      event.server.scheduleInTicks(1, event.server, ctx => {
        // Tell everyone "Aw man", colored green. Callback data is the server
        ctx.data.tell(Text.green('Aw man'))
      })
    }
  })

  PlayerEvents.decorateChat(event => {
    // Remove the letter "g"
    event.setMessage(event.message.replace('g', ''))
  })

  PlayerEvents.decorateChat(event => {
    // Replace `:sword:` with the sword emoji
    event.setMessage(event.message.replace(':sword:', '⚔'))
  })

  ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    
    event.register(Commands.literal('fly') // The name of the command
      .requires(s => s.hasPermission(2)) // Check if the player has operator privileges
      .executes(c => fly(c.source.player)) // Toggle flight for the player that ran the command if the `target` argument isn't included
      .then(Commands.argument('target', Arguments.PLAYER.create(event))
        .executes(c => fly(Arguments.PLAYER.getResult(c, 'target'))) // Toggle flight for the player included in the `target` argument
      )
    )
    
    // Helper function
    let fly = (player) => {
      console.log(player)
      if (player.abilities.mayfly) {
        player.abilities.mayfly = false
        player.abilities.flying = false
        player.displayClientMessage(Component.gold('Flying: ').append(Component.red('disabled')), true)
      } else {
        player.abilities.mayfly = true
        player.displayClientMessage(Component.gold('Flying: ').append(Component.green('enabled')), true)
      }
      player.onUpdateAbilities()
      return 1
    }
  })