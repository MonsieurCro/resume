<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import smileImg from "../assets/smile.svg";

export default {
  components: {},
  props: {
    draw: {
      // Useless, but required to have one prop
      type: Boolean,
      default: true,
    },
  },
  emits: [],
  data() {
    return {
      config: {
        emojis: 0,
        gravity: 0.2,
        friction: 0.001,
      },
      drawn: false,
      emojis: [] as any[],
    };
  },
  computed: {
    canvas() {
      return this.$refs.canvas as HTMLCanvasElement;
    },
    context() {
      return this.canvas.getContext("2d") as CanvasRenderingContext2D;
    },
    image() {
      const image = new Image() as HTMLImageElement;
      image.src = smileImg;
      return image;
    },
  },
  mounted() {
    if (this.drawn) return;

    this.resizeCanvas(this.canvas);

    window.addEventListener("resize", () => this.resizeCanvas(this.canvas));
    window.addEventListener("orientationchange", () =>
      this.resizeCanvas(this.canvas)
    );

    this.generateEmojis();

    this.canvas.addEventListener("click", (e) => {
      const clickX =
        e.pageX - (this.canvas.getBoundingClientRect().left + window.scrollX);
      const clickY =
        e.pageY - (this.canvas.getBoundingClientRect().top + window.scrollY);

      for (let i = 0; i < this.emojis.length; i++) {
        const emoji = this.emojis[i];
        if (
          clickY >= emoji.y - emoji.size / 2 &&
          clickY <= emoji.y + emoji.size / 2 &&
          clickX >= emoji.x - emoji.size / 2 &&
          clickX <= emoji.x + emoji.size / 2
        ) {
          emoji.speedY = 10 + Math.abs(emoji.speedY);
          emoji.speedY /= emoji.elasticity;
        }
      }
    });
  },
  methods: {
    resizeCanvas(container: HTMLCanvasElement) {
      this.canvas.width = container.offsetWidth;
      this.canvas.height = container.offsetHeight;
    },
    generateEmojis() {
      this.config.emojis = Math.ceil(
        Math.max(this.canvas.width, this.canvas.height) / 50
      );
      this.emojis = [];

      for (let i = 0; i < this.config.emojis; i++) {
        this.emojis.push({
          x: Math.floor(Math.random() * this.canvas.width),
          y: Math.floor(this.canvas.height),
          size: Math.ceil(
            (0.5 + Math.random() / 2) *
              (Math.min(this.canvas.width, this.canvas.height) / 7.5)
          ),
          rotation: (Math.random() * 60 - 30) * (Math.PI / 180),
          // Between 30° and -30°
          speedX:
            (5 + Math.random() * 15) * (Math.floor(Math.random() * 2) || -1),
          speedY: 5 + Math.random() * 25,
          elasticity: parseFloat((0.5 + Math.random() / 4).toFixed(2)),
        });
      }

      this.drawCanvas();
      this.drawn = true;
    },
    drawCanvas() {
      // Clean Canvas
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Add Emojis
      for (let i = 0; i < this.emojis.length; i++) {
        const emoji = this.emojis[i];

        // Transform, draw, reset
        this.context.translate(emoji.x, emoji.y);
        this.context.rotate(emoji.rotation);
        this.context.drawImage(
          this.image,
          -emoji.size / 2,
          -emoji.size / 2,
          emoji.size,
          emoji.size
        );
        this.context.rotate(-emoji.rotation);
        this.context.translate(-emoji.x, -emoji.y);

        // Move
        emoji.speedX -= this.config.friction;
        emoji.speedY += this.config.gravity;
        emoji.x += emoji.speedX;
        emoji.y += emoji.speedY;

        // Bounce
        if (
          emoji.x + emoji.size / 2 >= this.canvas.width ||
          emoji.x - emoji.size / 2 <= 0
        ) {
          emoji.speedX = -emoji.speedX;
          emoji.speedX *= emoji.elasticity;
        }
        if (
          emoji.y + emoji.size / 2 >= this.canvas.height ||
          emoji.y - emoji.size / 2 <= 0
        ) {
          emoji.speedY = -emoji.speedY;
          emoji.speedY *= emoji.elasticity;
        }

        // Walls
        if (emoji.x - emoji.size / 2 <= 0) {
          emoji.x = emoji.size / 2;
        }
        if (emoji.x + emoji.size / 2 >= this.canvas.width) {
          emoji.x = this.canvas.width - emoji.size / 2;
        }
        if (emoji.y - emoji.size / 2 <= 0) {
          emoji.y = emoji.size / 2;
        }
        if (emoji.y + emoji.size / 2 >= this.canvas.height) {
          emoji.y = this.canvas.height - emoji.size / 2;
        }

        // Animate
        this.context.beginPath();
        this.context.arc(emoji.x, emoji.y, emoji.size, 0, Math.PI * 2);
      }

      // Loop
      requestAnimationFrame(() => this.drawCanvas());
    },
  },
};
</script>

<style scoped></style>
