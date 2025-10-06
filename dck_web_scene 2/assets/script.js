const mascots = document.querySelectorAll('.mascot');
mascots.forEach((m, i) => {
  let angle = 0;
  function animate() {
    angle += 0.02;
    const y = Math.sin(angle + i) * 5;
    m.style.transform = `translateY(${y}px) scale(${m.matches(':hover') ? 1.05 : 1})`;
    requestAnimationFrame(animate);
  }
  animate();
});
mascots.forEach(m => {
  m.addEventListener('click', () => {
    alert("You clicked " + m.querySelector('img').alt);
  });
});
