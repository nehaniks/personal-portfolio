import { useEffect, useRef } from "react";

let particleArray = [];

const mouse = {
  x: null,
  y: null,
  radius: 15,
};

const mousePosition = ({ nativeEvent }) => {
  mouse.x = nativeEvent.offsetX;
  mouse.y = nativeEvent.offsetY;
};

function particle(canvas) {
  const context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#111827";
  context.font = "900 4rem Nunito";
  context.fillText("Neha", "10", "50");
  context.fillText("Nikhat", "10", "110");

  const textCoordinates = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = Math.random() * 30 + 1;
    }

    draw() {
      context.fillStyle = "#111827";
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      context.closePath();
      context.fill();
    }

    update() {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance;
      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;
      if (distance < mouse.radius) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        this.size = 1;
        if (this.x !== this.baseX) {
          let dx = this.x - this.baseX;
          this.x -= dx / 10;
        }
        if (this.y !== this.baseY) {
          let dy = this.y - this.baseY;
          this.y -= dy / 10;
        }
      }
    }
  }

  const init = () => {
    particleArray = [];
    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
      for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
        if (
          textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
        ) {
          let positionX = x;
          let positionY = y;
          particleArray.push(new Particle(positionX * 1, positionY * 1));
        }
      }
    }
  };

  init();

  const animate = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].draw();
      particleArray[i].update();
    }
    requestAnimationFrame(animate);
  };

  animate();
}

export default function PixelEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    canvasRef.current.width = 550;
    canvasRef.current.height = 150;
    particle(canvasRef.current);
  });

  return (
    <div>
      <canvas ref={canvasRef} onMouseMove={mousePosition}></canvas>
    </div>
  );
}