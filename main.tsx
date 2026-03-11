@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Noto Sans JP", ui-sans-serif, system-ui, sans-serif;
}

@keyframes aurora-pan-x {
  0% { transform: translateX(-10%) scale(1.1); }
  100% { transform: translateX(0%) scale(1.1); }
}

.animate-aurora-pan-x {
  animation: aurora-pan-x 60s linear infinite alternate;
}

@keyframes aurora-flow-diagonal {
  0% { transform: translate(-10%, 10%) scale(1); opacity: 0.5; }
  50% { opacity: 0.8; }
  100% { transform: translate(10%, -10%) scale(1.1); opacity: 0.5; }
}

.animate-aurora-flow-1 { animation: aurora-flow-diagonal 20s ease-in-out infinite alternate; }
.animate-aurora-flow-2 { animation: aurora-flow-diagonal 25s ease-in-out infinite alternate-reverse; }
.animate-aurora-flow-3 { animation: aurora-flow-diagonal 30s ease-in-out infinite alternate; }

.meteor {
  position: absolute;
  width: 150px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.8));
  animation: meteor 6s linear infinite;
}

@keyframes meteor {
  0% { transform: rotate(215deg) translateX(0); opacity: 1; }
  100% { transform: rotate(215deg) translateX(-1500px); opacity: 0; }
}
