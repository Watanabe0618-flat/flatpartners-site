import React, { useEffect, useRef } from 'react';

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // The sky needs to be larger than the screen so it covers the corners when rotating
    const skyRadius = Math.max(window.innerWidth, window.innerHeight) * 1.5;

    // --- Static Stars ---
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
    for (let i = 0; i < 400; i++) {
      stars.push({
        x: (Math.random() * 2 - 1) * skyRadius,
        y: (Math.random() * 2 - 1) * skyRadius,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: 0.01 + Math.random() * 0.03,
      });
    }

    // --- Milky Way Stars (天の川) ---
    const milkyWayStars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
    for (let i = 0; i < 1200; i++) { // Increased count for denser Milky Way
      // Gaussian distribution around the center line (x=0)
      const u = Math.random() + Math.random() + Math.random() - 1.5;
      const x = u * 500; // Wider spread
      const y = (Math.random() * 2 - 1) * skyRadius;
      milkyWayStars.push({
        x,
        y,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.9,
        speed: 0.02 + Math.random() * 0.05, // Speed for flowing animation
      });
    }

    // --- Shooting Stars ---
    const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; active: boolean; delay: number }[] = [];
    for (let i = 0; i < 5; i++) {
      shootingStars.push({
        x: 0, y: 0, length: 0, speed: 0, opacity: 0, active: false, delay: Math.random() * 200
      });
    }

    const resetShootingStar = (star: any) => {
      star.x = Math.random() * canvas.width * 1.5;
      star.y = -canvas.height * 0.5;
      star.length = 80 + Math.random() * 100;
      star.speed = 15 + Math.random() * 15;
      star.opacity = 1;
      star.active = true;
      star.delay = Math.random() * 200;
    };

    // --- Accurate Gemini Constellation (正確なふたご座) ---
    const geminiScale = 3.0;
    const geminiOffset = { x: 200, y: -200 }; // Position in the rotating sky
    const geminiPoints = [
      { id: 'pollux', x: 15, y: -40, size: 4.5 },
      { id: 'castor', x: -15, y: -35, size: 4 },
      { id: 'kappa', x: 10, y: -20, size: 2 },
      { id: 'tau', x: -10, y: -15, size: 2 },
      { id: 'wasat', x: 5, y: 0, size: 2.5 },
      { id: 'mekbuda', x: -15, y: 5, size: 2.5 },
      { id: 'alhena', x: 20, y: 30, size: 3.5 },
      { id: 'alzirr', x: 30, y: 50, size: 2 },
      { id: 'tejat', x: -20, y: 20, size: 2.5 },
      { id: 'propus', x: -30, y: 35, size: 2 },
    ];

    const geminiLines = [
      ['pollux', 'kappa'],
      ['kappa', 'wasat'],
      ['wasat', 'alhena'],
      ['alhena', 'alzirr'],
      ['castor', 'tau'],
      ['tau', 'mekbuda'],
      ['mekbuda', 'tejat'],
      ['tejat', 'propus'],
      ['wasat', 'mekbuda'] // Connect the twins
    ];

    let time = 0;

    const render = () => {
      time += 0.005; // Animation speed
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#020617'); // slate-950
      bgGradient.addColorStop(1, '#0f172a'); // slate-900
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      // Move to center to rotate the entire sky
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(time * 0.05); // Slow rotation of the night sky

      // --- Draw Milky Way Glow (天の川の淡い光 - 動く・目立つ) ---
      ctx.save();
      ctx.globalCompositeOperation = 'screen'; // Make it glow brightly against the dark sky

      // Layer 1: Deep Purple Base (Slow drift)
      ctx.save();
      ctx.translate(Math.sin(time * 0.2) * 100, 0);
      const mwGrad1 = ctx.createLinearGradient(-400, 0, 400, 0);
      mwGrad1.addColorStop(0, 'rgba(0, 0, 0, 0)');
      mwGrad1.addColorStop(0.5, `rgba(107, 33, 168, ${0.4 + Math.sin(time * 0.5) * 0.1})`); // purple-800
      mwGrad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = mwGrad1;
      ctx.fillRect(-500, -skyRadius, 1000, skyRadius * 2);
      ctx.restore();

      // Layer 2: Bright Blue Core (Faster drift opposite direction)
      ctx.save();
      ctx.translate(Math.cos(time * 0.3) * 150, 0);
      const mwGrad2 = ctx.createLinearGradient(-250, 0, 250, 0);
      mwGrad2.addColorStop(0, 'rgba(0, 0, 0, 0)');
      mwGrad2.addColorStop(0.5, `rgba(29, 78, 216, ${0.5 + Math.cos(time * 0.8) * 0.15})`); // blue-700
      mwGrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = mwGrad2;
      ctx.fillRect(-350, -skyRadius, 700, skyRadius * 2);
      ctx.restore();

      // Layer 3: Cyan Highlights (Pulsing)
      ctx.save();
      ctx.translate(Math.sin(time * 0.5) * 50, 0);
      const mwGrad3 = ctx.createLinearGradient(-150, 0, 150, 0);
      mwGrad3.addColorStop(0, 'rgba(0, 0, 0, 0)');
      mwGrad3.addColorStop(0.5, `rgba(14, 165, 233, ${0.3 + Math.sin(time * 1.2) * 0.2})`); // sky-500
      mwGrad3.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = mwGrad3;
      ctx.fillRect(-200, -skyRadius, 400, skyRadius * 2);
      ctx.restore();

      ctx.restore(); // End screen composite

      // --- Draw Milky Way Stars (Flowing along the river) ---
      milkyWayStars.forEach((star) => {
        // Flow movement along the Y axis
        star.y += star.speed * 15;
        if (star.y > skyRadius) {
          star.y = -skyRadius;
          // Re-randomize X slightly to keep it organic
          const u = Math.random() + Math.random() + Math.random() - 1.5;
          star.x = u * 500;
        }

        star.opacity += Math.sin(time * 10 * star.speed) * 0.05;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 1) star.opacity = 1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // --- Draw Static Stars ---
      stars.forEach((star) => {
        star.opacity += Math.sin(time * 10 * star.speed) * 0.02;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 1) star.opacity = 1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // --- Draw Gemini Constellation ---
      ctx.save();
      ctx.translate(geminiOffset.x, geminiOffset.y);
      
      // Draw lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1.5;
      geminiLines.forEach(([id1, id2]) => {
        const p1 = geminiPoints.find(p => p.id === id1);
        const p2 = geminiPoints.find(p => p.id === id2);
        if (p1 && p2) {
          ctx.beginPath();
          ctx.moveTo(p1.x * geminiScale, p1.y * geminiScale);
          ctx.lineTo(p2.x * geminiScale, p2.y * geminiScale);
          ctx.stroke();
        }
      });

      // Draw constellation stars
      geminiPoints.forEach((p) => {
        const isHead = p.id === 'castor' || p.id === 'pollux';
        const glow = isHead ? 15 : 8;

        ctx.shadowBlur = glow;
        ctx.shadowColor = isHead ? 'rgba(250, 204, 21, 0.9)' : 'rgba(255, 255, 255, 0.9)'; // Yellowish glow for Castor/Pollux
        ctx.beginPath();
        ctx.arc(p.x * geminiScale, p.y * geminiScale, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + Math.sin(time * 20 + p.x) * 0.2})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      ctx.restore(); // Restore from Gemini translation

      ctx.restore(); // Restore from Sky rotation

      // --- Draw Shooting Stars (Unrotated, screen space) ---
      shootingStars.forEach((star) => {
        if (!star.active) {
          star.delay--;
          if (star.delay <= 0) resetShootingStar(star);
          return;
        }

        star.x -= star.speed;
        star.y += star.speed;
        star.opacity -= 0.015;

        if (star.opacity <= 0) {
          star.active = false;
          return;
        }

        const tailX = star.x + star.length;
        const tailY = star.y - star.length;

        const grad = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
