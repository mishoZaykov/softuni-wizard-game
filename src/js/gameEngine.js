function start(state, game){
  game.createWizard(state.wizard);

  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game){
  const { wizard } = state;
  const { wizardElement } = game;


  if(state.keys.KeyD){
    console.log(state.keys);
    wizard.posX += 10;
  }

  wizardElement.style.left = wizard.posX + 'px'; 

  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}