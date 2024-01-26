const sketch = (p5:any) => {
    let rotationAngle = 0;
    let shapeSize = 10;
    let shapeType = 0;
  
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.background(33, 33, 33);
      p5.colorMode(p5.HSB, 255);
    };
  
    p5.draw = () => {
      p5.noStroke();
      p5.translate(p5.width / 2, p5.height / 2);
  
      let numDrops = 10;
      for (let i = 0; i < numDrops; i++) {
        p5.fill(255);
        let dropX = p5.random(-shapeSize, shapeSize);
        let dropY = p5.random(-shapeSize, shapeSize);
        p5.ellipse(dropX, dropY, shapeSize * 2, shapeSize * 2);
      }
  
      p5.rotate(rotationAngle);
  
      if (shapeType === 0) {
        p5.ellipse(0, 0, shapeSize * 2, shapeSize * 2);
      } else {
        let radius = shapeSize * 0.7;
        let x1 = -radius * p5.cos(p5.PI / 6);
        let y1 = radius * p5.sin(p5.PI / 6);
        let x2 = 0;
        let y2 = -radius;
        let x3 = radius * p5.cos(p5.PI / 6);
        let y3 = radius * p5.sin(p5.PI / 6);
  
        p5.triangle(x1, y1, x2, y2, x3, y3);
      }
  
      shapeSize += 2;
  
      if (shapeSize > p5.max(p5.width, p5.height)) {
        shapeSize = 10;
        p5.background(33, 33, 33);
        shapeType = (shapeType + 1) % 2;
        rotationAngle = 0;
      }
  
      rotationAngle += p5.radians(1);
    };
  };
  
  export default sketch;
  