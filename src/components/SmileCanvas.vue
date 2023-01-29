<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import smile from "../assets/smile.svg";

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
      drawnCanvas: false,
    };
  },
  computed: {},
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    this.drawCanvas(canvas);
  },
  methods: {
    drawCanvas(canvas: HTMLCanvasElement) {
      if (this.drawnCanvas) return;
      this.drawnCanvas = true;

      //////

      const context = canvas.getContext("2d") as CanvasRenderingContext2D;
      const image = new Image();

      const emojis: any[] = [];
      var emojiCount = 0;
      const gravity = 0.1;
      // const friction = .001;

      // Canvas (re)size
      function resize(container: HTMLCanvasElement) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
      // Define elements
      function init() {
        emojiCount =
          Math.ceil(canvas.width / 25) < 25 ? Math.ceil(canvas.width / 25) : 25;

        for (var i = 0; i < emojiCount; i++) {
          var x = Math.floor(Math.random() * canvas.width);
          var y = Math.floor(canvas.height);
          var size = 25 + Math.random() * (canvas.width / 20);
          var speed = 2 + Math.random();
          var angle = Math.random() * -45 * (Math.PI / 180);
          var side = (Math.floor(Math.random() - 0.5) + 0.5) * 2;
          var rotation = Math.random() * angle * side;
          var speedX = (3 + Math.cos(angle) * speed) * side;
          var speedY = 13 + Math.sin(angle) * speed;
          var elasticity = 0.5 + Math.random() / 4;

          emojis.push({
            x: x,
            y: y,
            size: size,
            rotation: rotation,
            speedX: speedX,
            speedY: speedY,
            elasticity: elasticity,
          });
        }
      }
      // Render
      function draw() {
        // Clean Canvas
        context?.clearRect(0, 0, canvas.width, canvas.height);
        // Add elements
        for (var i = 0; i < emojiCount; i++) {
          var emoji = emojis[i];
          // Rotate and draw
          context?.translate(emoji.x, emoji.y);
          context?.rotate(emoji.rotation);
          context?.drawImage(
            image,
            -emoji.size / 2,
            -emoji.size / 2,
            emoji.size,
            emoji.size
          );
          context?.rotate(-emoji.rotation);
          context?.translate(-emoji.x, -emoji.y);
          // Move
          //emoji.speedX -= emoji.speedX * friction;
          emoji.speedY += gravity;
          emoji.x += emoji.speedX;
          emoji.y += emoji.speedY;
          // Bounce
          if (
            emoji.x + emoji.size / 2 >= canvas.width ||
            emoji.x - emoji.size / 2 <= 0
          ) {
            emoji.speedX = -emoji.speedX;
            emoji.speedX *= emoji.elasticity;
          }
          if (
            emoji.y + emoji.size / 2 >= canvas.height ||
            emoji.y - emoji.size / 2 <= 0
          ) {
            emoji.speedY = -emoji.speedY;
            emoji.speedY *= emoji.elasticity;
          }
          // Stop
          if (emoji.x - emoji.size / 2 <= 0) {
            emoji.x = emoji.size / 2;
          }
          if (emoji.x + emoji.size / 2 >= canvas.width) {
            emoji.x = canvas.width - emoji.size / 2;
          }
          if (emoji.y - emoji.size / 2 <= 0) {
            emoji.y = emoji.size / 2;
          }
          if (emoji.y + emoji.size / 2 >= canvas.height) {
            emoji.y = canvas.height - emoji.size / 2;
          }
          // Animate
          context?.beginPath();
          context?.arc(emoji.x, emoji.y, emoji.size, 0, Math.PI * 2);
        }
        requestAnimationFrame(draw);
      }

      //load
      resize(canvas);
      init();
      image.onload = function () {
        draw();
      };
      image.src = smile;

      window.addEventListener("resize", function () {
        resize(canvas);
        init();
      });
      window.addEventListener("orientationchange", function () {
        resize(canvas);
        init();
      });
      canvas.addEventListener("click", function (event) {
        //mouseover
        // var clickX =
        //   event.pageX - (canvas.getBoundingClientRect().left + window.scrollX);
        var clickY =
          event.pageY - (canvas.getBoundingClientRect().top + window.scrollY);

        for (var i = 0; i < emojiCount; i++) {
          var emoji = emojis[i];
          if (
            clickY >= emoji.y - emoji.size &&
            clickY <= emoji.y + emoji.size
          ) {
            emoji.speedY = Math.abs(emoji.speedY) + Math.random() * 5;
            emoji.speedY /= emoji.elasticity;
          }
        }
      });
    },
  },
};
</script>

<style scoped></style>
