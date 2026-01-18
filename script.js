// Simple animated gradient background (lightweight, GitHub Pages friendly)
const bg = document.createElement("div");
bg.className = "animated-bg";
document.body.prepend(bg);

let t = 0;
function animate() {
  t += 0.003;
  const x = Math.floor(50 + 50 * Math.sin(t));
  const y = Math.floor(50 + 50 * Math.cos(t * 1.3));
  bg.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,119,181,0.35), rgba(17,17,17,0.0) 60%),
                         radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(0,0,0,0.12), rgba(255,255,255,0.0) 55%)`;
  requestAnimationFrame(animate);
}
animate();
