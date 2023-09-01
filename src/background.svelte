<script>
    import P5 from 'p5-svelte';
  
    const sketch = (p5) => {
      var acceleration = 0.098;
      var nDrops = 1000;
      var drops = [];
  
      p5.setup = () => {
        p5.createCanvas(p5.displayWidth, p5.displayHeight).class("fixed top-0 left-0 z-[-1]");
        for (var i = 0; i < nDrops; i++) {
          drops.push(new Drop(p5));
        }
        p5.frameRate(30);
      };
  
      p5.draw = () => {
        p5.clear();
        drops.forEach(function(d) {
          d.drawAndDrop();
        });
      };
  
      class Drop {
        constructor(p) {
          this.p = p;
          this.initX();
          this.y = p.random() * p.height;
          this.length = p.random() * 10;
          this.speed = p.random();
        }
  
        initX() {
          this.x = this.p.random() * this.p.width;
        }
  
        initY() {
          this.y = -this.p.random() * this.p.height / 3;
        }
  
        drawAndDrop() {
          this.draw();
          this.drop();
        }
  
        draw() {
            this.p.stroke(255, 255, 255);
          this.p.line(this.x, this.y, this.x, this.y + this.length);
        }
  
        drop() {
          if (this.y < this.p.height) {
            this.y += this.speed;
            this.speed += acceleration;
          } else {
            this.speed = this.p.random();
            this.initY();
            this.initX();
          }
        }
      }
    };
  </script>
  
  <P5 {sketch} />

  