// Constellation / Particle network background using tsParticles
// Works on GitHub Pages via CDN in index.html

window.addEventListener("load", async () => {
  if (!window.tsParticles) return;

  await tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 160, links: { opacity: 0.35 } },
        push: { quantity: 2 }
      }
    },
    particles: {
      number: { value: 80, density: { enable: true, area: 900 } },
      color: { value: "#aab6c6" },
      links: {
        enable: true,
        distance: 140,
        color: "#aab6c6",
        opacity: 0.25,
        width: 1
      },
      move: { enable: true, speed: 1.1, direction: "none", outModes: "out" },
      opacity: { value: 0.6 },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  });
});
