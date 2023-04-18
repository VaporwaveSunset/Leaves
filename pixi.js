// Create the application helper and add its render target to the page
let app = new PIXI.Application({
  autoResize: true,
  width: 800, height: 600,
  backgroundColor: 0x1099bb,
  resolution: window.devicePixelRatio || 1,
});

// Add it to the stage
document.body.appendChild(app.view);

// Listen for window resize events
window.addEventListener('resize', resize);

// Create the sprite and add it to the stage
let sprite = PIXI.Sprite.from('images/sample.png');
app.stage.addChild(sprite);

function resize() {
  // Resize the renderer
  app.renderer.resize(window.innerWidth, window.innerHeight);
}

resize();


// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {
elapsed += delta;
sprite.x = 100.0 + Math.tan(elapsed/50.0) * 100.0;
});
