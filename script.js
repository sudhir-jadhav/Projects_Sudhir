// Lightweight animated background (no libraries, GitHub Pages friendly)
const bg = document.createElement("div");
bg.className = "animated-bg";
document.body.prepend(bg);

let t = 0;

function animate() {
  t += 0.003;

  const x = Math.floor(50 + 45 * Math.sin(t));
  const y = Math.floor(50 + 45 * Math.cos(t * 1.2));
  const x2 = Math.floor(50 + 45 * Math.sin(t * 0.9 + 1.7));
  const y2 = Math.floor(50 + 45 * Math.cos(t * 0.95 + 2.2));

  bg.style.background = `
    radial-gradient(circle at ${x}% ${y}%, rgba(76,195,255,0.22), rgba(0,0,0,0) 55%),
    radial-gradient(circle at ${x2}% ${y2}%, rgba(124,92,255,0.20), rgba(0,0,0,0) 60%),
    radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(255,255,255,0.06), rgba(0,0,0,0) 50%)
  `;

  requestAnimationFrame(animate);
}

animate();
