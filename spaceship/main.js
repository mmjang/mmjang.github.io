// constant
const WIDTH = 800;
const HEIGHT = 600;
const FRAME_RATE = 30;

const DIAMETER_OF_SPACESHIP = 40;
let DISTANCE_PER_STEP = 1;

const ENEMIES_GENERATION_RATE = 2;
const ENEMY_RADIUS = 3;
const ENEMY_COLOR = "red";
const RANDOM_WALK_STEPS = 2;
const ENEMY_CHASING_STEPS = 2;
const MIN_DISTANCE_FROM_SHIP = 100;

const BOMB_RADIUS = 6;
const BOMB_COLOR = "orange";
const BOMBING_RADIUS = 200;

// dom
const $app = document.querySelector("#app");
const $spaceShip = document.querySelector("#space-ship");

// global variable
const state = {
  locationOfSpaceShip: [WIDTH / 2, HEIGHT / 2],
  enemies: [],
  locationOfBomb: [null, null],
  mousePosition: [WIDTH / 2, HEIGHT / 2],
};

// setup
const canvas = document.createElement("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
const context = canvas.getContext("2d");
$app.append(canvas);

//  functions
function render(ctx, state) {
  // clear rect
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  // set the background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  // draw space ship
  ctx.drawImage(
    $spaceShip,
    state.locationOfSpaceShip[0] - DIAMETER_OF_SPACESHIP / 2,
    state.locationOfSpaceShip[1] - DIAMETER_OF_SPACESHIP / 2,
    DIAMETER_OF_SPACESHIP,
    DIAMETER_OF_SPACESHIP
  );
  // draw enemies
  for (const [x, y] of state.enemies) {
    ctx.beginPath();
    ctx.arc(x, y, ENEMY_RADIUS, 0, 2 * Math.PI, false);
    ctx.fillStyle = ENEMY_COLOR;
    ctx.fill();
  }
  // draw bomb
  ctx.beginPath();
  ctx.arc(
    state.locationOfBomb[0],
    state.locationOfBomb[1],
    BOMB_RADIUS,
    0,
    2 * Math.PI,
    false
  );
  ctx.fillStyle = BOMB_COLOR;
  ctx.fill();
}

function handleKeys(keyCode) {
  switch (keyCode) {
    case "ArrowLeft":
      state.locationOfSpaceShip[0] -= DISTANCE_PER_STEP;
      break;
    case "ArrowRight":
      state.locationOfSpaceShip[0] += DISTANCE_PER_STEP;
      break;
    case "ArrowUp":
      state.locationOfSpaceShip[1] -= DISTANCE_PER_STEP;
      break;
    case "ArrowDown":
      state.locationOfSpaceShip[1] += DISTANCE_PER_STEP;
      break;
  }
}

function handleMouse(x, y) {
  state.mousePosition = [x, y];
}

function boundaryCheck(loc) {
  loc[0] = loc[0] < 0 ? 0 : loc[0];
  loc[0] = loc[0] > WIDTH ? WIDTH : loc[0];
  loc[1] = loc[1] < 0 ? 0 : loc[1];
  loc[1] = loc[1] > HEIGHT ? HEIGHT : loc[1];
}

function collisionCheck() {
  // check boundaries
  const loc = state.locationOfSpaceShip;
  boundaryCheck(loc);
  // check for enemies
  for (const [x, y] of state.enemies) {
    if (
      distance([x, y], state.locationOfSpaceShip) <
      DIAMETER_OF_SPACESHIP / 2
    ) {
      gameOver();
    }
  }
  // check for bomb
  if (
    distance(state.locationOfSpaceShip, state.locationOfBomb) <
    DIAMETER_OF_SPACESHIP / 2 + BOMB_RADIUS
  ) {
    // diffuse the bomb
    diffuse(state.locationOfBomb);
    generateBomb();
  }
}

function diffuse([x, y]) {
  state.enemies = state.enemies.filter((e) => {
    return distance(e, [x, y]) > BOMBING_RADIUS;
  });
}

function gameOver() {
  alert("GAME OVER");
}

async function generateObjects() {
  while (true) {
    await sleep(1000 / ENEMIES_GENERATION_RATE);
    let x = Math.random() * WIDTH;
    let y = Math.random() * HEIGHT;
    while (
      distance([x, y], state.locationOfSpaceShip) < MIN_DISTANCE_FROM_SHIP
    ) {
      x = Math.random() * WIDTH;
      y = Math.random() * HEIGHT;
    }
    state.enemies.push([x, y]);
    console.log(state);
  }
}

function generateBomb() {
  const x = Math.random() * WIDTH;
  const y = Math.random() * HEIGHT;
  state.locationOfBomb = [x, y];
}

function enemiesRandomWork() {
  for (const e of state.enemies) {
    const d = distance(state.locationOfSpaceShip, e);
    const dx = (state.locationOfSpaceShip[0] - e[0]) / d;
    const dy = (state.locationOfSpaceShip[1] - e[1]) / d;
    e[0] +=
      (Math.random() - 0.5) * RANDOM_WALK_STEPS + dx * ENEMY_CHASING_STEPS;
    e[1] +=
      (Math.random() - 0.5) * RANDOM_WALK_STEPS + dy * ENEMY_CHASING_STEPS;
    boundaryCheck(e);
  }
}

function chaseMouse() {
  const rect = canvas.getBoundingClientRect();
  const xOffset = state.mousePosition[0] - rect.x;
  const yOffset = state.mousePosition[1] - rect.y;
  //   if (xOffset > 0 && xOffset < WIDTH && yOffset > 0 && yOffset < HEIGHT) {
  const d = distance(state.locationOfSpaceShip, [xOffset, yOffset]);
  const speed = Math.max(Math.log2(d), DISTANCE_PER_STEP);
  const dx = (state.locationOfSpaceShip[0] - xOffset) / d;
  const dy = (state.locationOfSpaceShip[1] - yOffset) / d;
  state.locationOfSpaceShip[0] += -dx * speed;
  state.locationOfSpaceShip[1] += -dy * speed;
  //   }
}

async function loop() {
  while (true) {
    await sleep(1000 / FRAME_RATE);
    collisionCheck();
    enemiesRandomWork();
    chaseMouse();
    render(context, state);
  }
}

async function main() {
  bindEvents();
  generateObjects();
  generateBomb();
  loop();
}

main();

// utils
function sleep(mills) {
  return new Promise((r) => setTimeout(r, mills));
}

function bindEvents() {
  document.addEventListener("keydown", (e) => {
    handleKeys(e.code);
  });
  document.addEventListener("mousemove", (e) => {
    console.log(e);
    console.log(canvas.getBoundingClientRect());
    handleMouse(e.clientX, e.clientY);
  });
}

function distance([x1, y1], [x2, y2]) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
