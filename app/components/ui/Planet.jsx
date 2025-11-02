'use client';
import React, { useRef, useEffect } from 'react';

export default function PlanetSketch() {
  const sketchRef = useRef();

  useEffect(() => {
    let myP5;

    async function loadP5() {
      const p5 = (await import('p5')).default;

      const Sketch = (s) => {
        let counter = 100;
        let parity_flag = 0;

        s.setup = () => {
          const canvas = s.createCanvas(800, 600);
          canvas.parent(sketchRef.current);
          s.stroke(255);
        };

        s.draw = () => {
          s.clear();
          counter += 0.01;

          // Draw planet (even i)
          for (let i = 2000; i > 0; i -= 2) {
            parity_flag = 0;
            drawPoints(i);
          }

          // Draw ring (odd i)
          for (let i = 1999; i > 0; i -= 2) {
            parity_flag = 1;
            drawPoints(i);
          }

          function drawPoints(i) {
            let radial_offset =
              counter / Math.cos(counter / i) +
              parity_flag * (counter / 2 + (i % counter));

            let angular_phase = counter / 9 + i * i;

            let x_position =
              s.width / 2 +
              radial_offset *
                Math.sin(angular_phase) *
                Math.cos((!parity_flag * i) / counter);

            let y_position =
              300 +
              radial_offset *
                Math.cos(angular_phase + parity_flag * 2);

            let point_size = 1 - Math.cos(angular_phase);

            s.strokeWeight(point_size);
            s.point(x_position, y_position);
          }
        };
      };

      // prevent multiple instances (important for Next dev)
      const existing = sketchRef.current.querySelector('canvas');
      if (existing) existing.remove();

      myP5 = new p5(Sketch);
    }

    loadP5();

    return () => {
      if (myP5) myP5.remove();
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      style={{ width: '800px', height: '600px' }}
    />
  );
}
