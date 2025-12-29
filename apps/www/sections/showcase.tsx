"use client";

import { Container } from "@repo/ui/components/ui/container";
import { useEffect, useRef, useState, useCallback } from "react";

const GRAVITY = 0.5;
const JUMP_FORCE = -12;
const GROUND_HEIGHT = 60;
const DINO_WIDTH = 30;
const DINO_HEIGHT = 40;
const OBSTACLE_WIDTH = 20;
const OBSTACLE_MIN_HEIGHT = 25;
const OBSTACLE_MAX_HEIGHT = 40;
const GAME_SPEED_INITIAL = 4.5;
const GAME_SPEED_INCREMENT = 0.001;
const BASE_OBSTACLE_GAP = 300;

type Obstacle = {
  x: number;
  height: number;
};

type IntroText = {
  milestone: number;
  text: string;
  distance: number; // 1-10, higher = more reading time = longer gap
};

const introTexts: IntroText[] = [
  {
    milestone: 0,
    text: "Oh hey, you're actually playing! I'm Zai, nice to meet you.",
    distance: 6,
  },
  {
    milestone: 30,
    text: "So what do I do? I'm a developer and an entrepreneur.",
    distance: 7,
  },
  {
    milestone: 60,
    text: "Mostly into AI and machine learning these days. Fascinating stuff.",
    distance: 7,
  },
  {
    milestone: 100,
    text: "I'm currently based in Chiang Mai, Thailand. Beautiful place.",
    distance: 6,
  },
  {
    milestone: 130,
    text: "What drives me? Making tech that actually helps people.",
    distance: 6,
  },
  {
    milestone: 170,
    text: "I love open source. There's something special about building together.",
    distance: 7,
  },
  {
    milestone: 210,
    text: "When I'm not coding, I'm probably learning something new.",
    distance: 6,
  },
  {
    milestone: 250,
    text: "I'm always open to new opportunities and collaborations.",
    distance: 6,
  },
  {
    milestone: 300,
    text: "So if you have any, I'm happy to be a part of it.",
    distance: 5,
  },
  {
    milestone: 400,
    text: "At this point, we're basically friends. Hi friend.",
    distance: 5,
  },
  {
    milestone: 500,
    text: "You absolute legend. I'm really happy to have you here. Thanks for your time.",
    distance: 4,
  },
];

export default function Showcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<"idle" | "playing" | "gameover">(
    "idle",
  );
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentFact, setCurrentFact] = useState(introTexts[0]);
  const [health, setHealth] = useState(5);

  const gameRef = useRef({
    dinoY: 0,
    dinoVelocity: 0,
    isJumping: false,
    obstacles: [] as Obstacle[],
    gameSpeed: GAME_SPEED_INITIAL,
    score: 0,
    animationId: 0,
    health: 5,
    invincible: false,
    lastObstacleX: 0,
  });

  const jump = useCallback(() => {
    const game = gameRef.current;
    if (!game.isJumping && gameState === "playing") {
      game.dinoVelocity = JUMP_FORCE;
      game.isJumping = true;
    }
  }, [gameState]);

  const startGame = useCallback(() => {
    const game = gameRef.current;
    game.dinoY = 0;
    game.dinoVelocity = 0;
    game.isJumping = false;
    game.obstacles = [];
    game.gameSpeed = GAME_SPEED_INITIAL;
    game.score = 0;
    game.health = 5;
    game.invincible = false;
    game.lastObstacleX = 0;
    setScore(0);
    setHealth(5);
    setCurrentFact(introTexts[0]);
    setGameState("playing");
  }, []);

  const handleInteraction = useCallback(() => {
    if (gameState === "idle" || gameState === "gameover") {
      startGame();
    } else if (gameState === "playing") {
      jump();
    }
  }, [gameState, startGame, jump]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleInteraction();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleInteraction]);

  // Update intro text based on score
  useEffect(() => {
    const newFact = [...introTexts].reverse().find((f) => score >= f.milestone);
    if (newFact && newFact.milestone !== currentFact?.milestone) {
      setCurrentFact(newFact);
    }
  }, [score, currentFact]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const game = gameRef.current;
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    const groundY = canvasHeight - GROUND_HEIGHT;

    const drawDino = (y: number) => {
      const x = 60;
      const dinoY = groundY - DINO_HEIGHT - y;

      // Blink when invincible
      if (game.invincible && Math.floor(Date.now() / 100) % 2 === 0) {
        return;
      }

      ctx.fillStyle = "#ffffff";

      // Body
      ctx.fillRect(x, dinoY, DINO_WIDTH, DINO_HEIGHT);

      // Head
      ctx.fillRect(x + DINO_WIDTH - 5, dinoY - 10, 15, 15);

      // Eye
      ctx.fillStyle = "#171717";
      ctx.fillRect(x + DINO_WIDTH + 5, dinoY - 6, 3, 3);

      // Legs (animated)
      ctx.fillStyle = "#ffffff";
      const legOffset =
        gameState === "playing" ? Math.sin(Date.now() / 50) * 3 : 0;
      ctx.fillRect(x + 5, dinoY + DINO_HEIGHT, 6, 8 + legOffset);
      ctx.fillRect(x + DINO_WIDTH - 11, dinoY + DINO_HEIGHT, 6, 8 - legOffset);
    };

    const drawObstacle = (obstacle: Obstacle) => {
      const obstacleY = groundY - obstacle.height;
      ctx.fillStyle = "#ffffff";

      // Cactus body
      ctx.fillRect(obstacle.x, obstacleY, OBSTACLE_WIDTH, obstacle.height);

      // Cactus arms
      ctx.fillRect(obstacle.x - 8, obstacleY + 10, 8, 6);
      ctx.fillRect(obstacle.x + OBSTACLE_WIDTH, obstacleY + 15, 8, 6);
    };

    const drawGround = () => {
      ctx.strokeStyle = "#333333";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(canvasWidth, groundY);
      ctx.stroke();

      // Ground texture
      ctx.fillStyle = "#333333";
      const offset = gameState === "playing" ? (Date.now() / 20) % 20 : 0;
      for (let i = -offset; i < canvasWidth; i += 20) {
        ctx.fillRect(i, groundY + 8, 10, 2);
        ctx.fillRect(i + 5, groundY + 16, 8, 2);
      }
    };

    const checkCollision = (): boolean => {
      const dinoX = 60;
      const dinoY = groundY - DINO_HEIGHT - game.dinoY;

      for (const obstacle of game.obstacles) {
        const obstacleY = groundY - obstacle.height;

        if (
          dinoX + DINO_WIDTH > obstacle.x &&
          dinoX < obstacle.x + OBSTACLE_WIDTH &&
          dinoY + DINO_HEIGHT > obstacleY
        ) {
          return true;
        }
      }
      return false;
    };

    const spawnObstacle = () => {
      return {
        x: canvasWidth,
        height:
          OBSTACLE_MIN_HEIGHT +
          Math.random() * (OBSTACLE_MAX_HEIGHT - OBSTACLE_MIN_HEIGHT),
      };
    };

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw ground
      drawGround();

      if (gameState === "playing") {
        // Update dino physics
        game.dinoVelocity += GRAVITY;
        game.dinoY -= game.dinoVelocity;

        if (game.dinoY <= 0) {
          game.dinoY = 0;
          game.isJumping = false;
        }

        // Update obstacles
        game.obstacles = game.obstacles.filter(
          (obs) => obs.x > -OBSTACLE_WIDTH,
        );
        game.obstacles.forEach((obs) => {
          obs.x -= game.gameSpeed;
        });

        // Spawn new obstacles based on current fact's distance
        const lastObstacle = game.obstacles[game.obstacles.length - 1];
        // Get current fact based on score
        const currentScore = Math.floor(game.score / 10);
        const activeFact = [...introTexts]
          .reverse()
          .find((f) => currentScore >= f.milestone);
        const factDistance = activeFact?.distance ?? 5;
        // Distance 1-10 maps to gap: 1=350px, 10=800px
        const distanceGap = BASE_OBSTACLE_GAP + factDistance * 50;
        const randomVariance = Math.random() * 100;

        if (
          !lastObstacle ||
          lastObstacle.x < canvasWidth - distanceGap - randomVariance
        ) {
          game.obstacles.push(spawnObstacle());
        }

        // Increase speed slowly
        game.gameSpeed += GAME_SPEED_INCREMENT;

        // Update score
        game.score += 1;
        if (game.score % 10 === 0) {
          setScore(Math.floor(game.score / 10));
        }

        // Check collision
        if (checkCollision() && !game.invincible) {
          game.health -= 1;
          setHealth(game.health);

          if (game.health <= 0) {
            setGameState("gameover");
            setHighScore((prev) => Math.max(prev, Math.floor(game.score / 10)));
            cancelAnimationFrame(game.animationId);
            return;
          }

          // Brief invincibility after hit
          game.invincible = true;
          setTimeout(() => {
            game.invincible = false;
          }, 1500);
        }
      }

      // Draw obstacles
      game.obstacles.forEach(drawObstacle);

      // Draw dino
      drawDino(game.dinoY);

      if (gameState === "playing") {
        game.animationId = requestAnimationFrame(gameLoop);
      }
    };

    if (gameState === "playing") {
      game.animationId = requestAnimationFrame(gameLoop);
    } else {
      gameLoop();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(game.animationId);
    };
  }, [gameState]);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div
          className="relative rounded-2xl bg-foreground overflow-hidden cursor-pointer select-none"
          onClick={handleInteraction}
        >
          {/* Top bar - health left, score right */}
          <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 z-10 flex items-start justify-between">
            {/* Health - top left */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-lg transition-all duration-300 ${
                    i < health ? "opacity-100 scale-100" : "opacity-30 scale-75"
                  }`}
                >
                  ❤️
                </span>
              ))}
            </div>

            {/* Score - top right */}
            <div className="flex flex-col items-end gap-1 font-mono text-sm">
              <span className="text-white/50">
                HI {highScore.toString().padStart(5, "0")}
              </span>
              <span className="text-white text-lg">
                {score.toString().padStart(5, "0")}
              </span>
            </div>
          </div>

          {/* Intro text display - only show when playing */}
          {gameState === "playing" && (
            <div className="absolute top-40 sm:top-48 left-0 right-0 z-10 flex flex-col items-center text-center px-4">
              <p className="text-sm sm:text-base text-white/90 font-medium leading-tight max-w-md">
                {currentFact?.text}
              </p>
            </div>
          )}

          {/* Game canvas */}
          <canvas ref={canvasRef} className="w-full h-[500px] sm:h-[600px]" />

          {/* Overlay messages */}
          {gameState === "idle" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-foreground/60 backdrop-blur-sm">
              <div className="text-4xl mb-4">🦖</div>
              <p className="text-xl font-bold mb-2">Ready to Play?</p>
              <p className="text-sm text-white/60 mb-4">
                Jump over the obstacles!
              </p>
              <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                <p className="text-sm">
                  Press{" "}
                  <kbd className="px-2 py-0.5 rounded bg-white/20 mx-1">
                    Space
                  </kbd>{" "}
                  or Click to Start
                </p>
              </div>
            </div>
          )}

          {gameState === "gameover" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-foreground/80 backdrop-blur-sm">
              <div className="text-4xl mb-4">💀</div>
              <p className="text-2xl font-bold mb-2">Game Over!</p>
              <p className="text-lg text-white/80 mb-1">Score: {score}</p>
              {score >= highScore && score > 0 && (
                <p className="text-sm text-primary mb-4">🎉 New High Score!</p>
              )}
              <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                <p className="text-sm">
                  Press{" "}
                  <kbd className="px-2 py-0.5 rounded bg-white/20 mx-1">
                    Space
                  </kbd>{" "}
                  to Retry
                </p>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Take a little break while you&apos;re here
        </p>
      </Container>
    </section>
  );
}
