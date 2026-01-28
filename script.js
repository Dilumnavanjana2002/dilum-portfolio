// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const windowHeight = window.innerHeight;
    const revealTop = r.getBoundingClientRect().top;
    if(revealTop < windowHeight - 100){ r.classList.add("active"); }
  });
});

// Dark / Light Mode
const toggle = document.getElementById("toggleMode");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});

// Kinetic typography
const heroText = document.querySelector(".kinetic");
window.addEventListener("mousemove", (e)=>{
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  heroText.style.transform = `translate(${x}px, ${y}px)`;
});
