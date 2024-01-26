// // P5Sketch.js
// import { useEffect } from 'react';
// import { Sketch } from 'react-p5-wrapper';

// const sourceText = 'Life is short and art long';

// const P5Sketch = () => {
//   useEffect(() => {
//     const sketch = (p:any) => {
//       p.setup = () => {
//         p.createCanvas(400, 400);
//         p.frameRate(10);
//       };

//       p.draw = () => {
//         p.background(50);
//         p.fill(255);
//         p.textSize(32);
//         p.textAlign(p.CENTER, p.CENTER);

//         const middle = sourceText.length / 2;
//         const left = middle - ((p.mouseX / p.width) * middle);
//         const right = middle + ((p.mouseX / p.width) * middle);

//         p.text(sourceText.substring(left, right + 1), p.width / 2, p.height / 2);
//       };
//     };

//     new window.p5(sketch); // Create a new p5 instance

//     // Clean up the p5 instance on component unmount
//     return () => window.remove();
//   }, []);

//   return <Sketch />;
// };

// export default P5Sketch;
