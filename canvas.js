document.addEventListener('DOMContentLoaded', function(){
  var canvas = document.getElementById('congrats');
  var context = canvas.getContext('2d');
  var image = new Image();

  var emojis = [];
  var emojiCount = 0;
  const gravity = .1;
  //const friction = .001;

  // Canvas (re)size
  function resize(container){
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  };
  // Define elements
  function init(){
    emojiCount = Math.ceil(canvas.width / 20) < 20 ? Math.ceil(canvas.width / 20) : 20;

    for(var i = 0; i < emojiCount; i++){
      x = Math.floor(Math.random() * canvas.width);
      y = Math.floor(canvas.height);
      size = 15 + (Math.random() * (canvas.width / 15));
      speed = 2 + Math.random();
      angle = Math.random() * -45 * (Math.PI / 180);
      side = (Math.floor(Math.random() -.5) +.5) * 2;
      rotation = angle * side;
      speedX = (2 + Math.cos(angle) * speed) * side;
      speedY = 13.5 + Math.sin(angle) * speed;
      elasticity = .5 + (Math.random() / 4);

      emojis.push({
        x: x,
        y: y,
        size: size,
        rotation: rotation,
        speedX: speedX,
        speedY: speedY,
        elasticity: elasticity
      });
    };
  };
  // Render
  function draw(){
    // Clean Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Add elements
    for(var i = 0; i < emojiCount; i++){
      var emoji = emojis[i];
      // Rotate and draw
      //context.save();
      //context.translate(emoji.x + emoji.width / 2, emoji.y + emoji.height / 2);
      //context.rotate(emoji.rotation);
      context.drawImage(image, emoji.x - (emoji.size / 2), emoji.y - (emoji.size / 2), emoji.size, emoji.size);
      //context.restore();
      // Move
      //emoji.speedX -= emoji.speedX * friction;
      emoji.speedY += gravity;
      emoji.x += emoji.speedX;
      emoji.y += emoji.speedY;
      // Bounce
      if(emoji.x + (emoji.size / 2) >= canvas.width || emoji.x - (emoji.size / 2) <= 0){
        emoji.speedX = -emoji.speedX;
        emoji.speedX *= emoji.elasticity;
      };
      if(emoji.y + (emoji.size / 2) >= canvas.height || emoji.y - (emoji.size / 2) <= 0){
        emoji.speedY = -emoji.speedY;
        emoji.speedY *= emoji.elasticity;
      }
      // Stop
      if(emoji.x - (emoji.size / 2) <= 0){
      	emoji.x = emoji.size / 2;
      };
      if(emoji.x + (emoji.size / 2) >= canvas.width){
        emoji.x = canvas.width - emoji.size / 2;
      };
      if(emoji.y - (emoji.size / 2) <= 0){
      	emoji.y = emoji.size / 2;
      };
      if(emoji.y + (emoji.size / 2) >= canvas.height){
        emoji.y = canvas.height - emoji.size / 2;
      };
      // Animate
      context.beginPath();
      context.arc(emoji.x, emoji.y, emoji.size, 0, Math.PI * 2);
    };
    requestAnimationFrame(draw);
  };

  window.addEventListener('draw', function(){ //load
    resize(canvas);
    init();
    image.onload = function(){
      draw();
    };
    image.src = './assets/smile.svg';
  }, {once: true});
  window.addEventListener('resize', function(){
    resize(canvas);
    init();
  });
  window.addEventListener('orientationchange', function(){
    resize(canvas);
    init();
  });
  canvas.addEventListener('click', function(event){ //mouseover
    var clickX = event.pageX - (canvas.getBoundingClientRect().left + window.scrollX);
    var clickY = event.pageY - (canvas.getBoundingClientRect().top + window.scrollY);

    for(var i = 0; i < emojiCount; i++){
      var emoji = emojis[i];
      // if(clickX >= emoji.x - emoji.size && clickX <= emoji.x + emoji.size){
      //   emoji.speedX = emoji.speedX * Math.random() * 2;
      //   emoji.speedX /= emoji.elasticity;
      // };
      if(clickY >= emoji.y - emoji.size && clickY <= emoji.y + emoji.size){
        emoji.speedY = Math.abs(emoji.speedY) + (Math.random() * 5);
        emoji.speedY /= emoji.elasticity;
      };
    };
  });
});