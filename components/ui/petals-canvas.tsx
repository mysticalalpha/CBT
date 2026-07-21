"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  r: number;
  speedX: number;
  speedY: number;
  angle: number;
  angleSpeed: number;
  opacity: number;
}

export default function PetalsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const windRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let petals: Petal[] = [];
    const maxPetals = 60; // Increased count for richer aesthetic

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Track mouse position to generate wind
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize petals
    for (let i = 0; i < maxPetals; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 5 + 3,
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 0.6 + 0.8,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: Math.random() * 0.01 - 0.005,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }

    const drawPetal = (c: CanvasRenderingContext2D, petal: Petal) => {
      c.save();
      c.translate(petal.x, petal.y);
      c.rotate(petal.angle);
      c.beginPath();
      c.moveTo(0, 0);
      c.quadraticCurveTo(petal.r, -petal.r * 1.5, petal.r * 2.2, 0);
      c.quadraticCurveTo(petal.r, petal.r * 1.5, 0, 0);
      
      const grad = c.createLinearGradient(0, 0, petal.r * 2.2, 0);
      grad.addColorStop(0, `rgba(255, 185, 205, ${petal.opacity})`);
      grad.addColorStop(1, `rgba(255, 130, 165, ${petal.opacity * 0.3})`);
      
      c.fillStyle = grad;
      c.fill();
      c.restore();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smoothly interpolate wind force based on horizontal mouse position
      // Mouse in center (0.5) = no wind. Left (< 0.5) = left wind. Right (> 0.5) = right wind.
      const targetWind = (mouseRef.current.x - 0.5) * 1.8;
      windRef.current += (targetWind - windRef.current) * 0.05; // smooth lerp

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        drawPetal(ctx, p);

        // Apply constant speed + dynamic wind force
        p.y += p.speedY;
        p.x += p.speedX + windRef.current + Math.sin(p.angle) * 0.15;
        p.angle += p.angleSpeed + windRef.current * 0.01;

        // Reset if petal falls below screen, drifts too far left/right, or goes off top
        if (p.y > canvas.height || p.x > canvas.width + 10 || p.x < -p.r * 3) {
          petals[i] = {
            ...p,
            x: Math.random() * canvas.width,
            y: -15,
            // Re-randomize speeds a bit
            speedX: Math.random() * 0.8 - 0.4,
            speedY: Math.random() * 0.6 + 0.8,
            angle: Math.random() * Math.PI * 2,
            opacity: Math.random() * 0.4 + 0.2,
          };
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
