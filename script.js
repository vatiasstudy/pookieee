let pages = document.querySelectorAll(".page");
let index = 0;

function nextPage() {
    pages[index].classList.remove("active");
    index++;
    if (index < pages.length) {
        pages[index].classList.add("active");
    }
}

/* Flower & rose sprinkle */
const items = ["🌸", "🌹", "💖", "✨", "⭐", "💫"];

setInterval(() => {
    const s = document.createElement("div");
    s.innerHTML = items[Math.floor(Math.random() * items.length)];
    s.style.position = "absolute";
    s.style.left = Math.random() * window.innerWidth + "px";
    s.style.top = "-30px";
    s.style.fontSize = (18 + Math.random() * 15) + "px";
    s.style.animation = "fall 5s linear";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 5000);
}, 220);

/* Flying butterflies */
setInterval(() => {
    const b = document.createElement("div");
    b.innerHTML = "🦋";
    b.style.position = "absolute";
    b.style.left = "-30px";
    b.style.top = Math.random() * window.innerHeight + "px";
    b.style.fontSize = "30px";
    b.style.animation = "fly 8s linear";
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 8000);
}, 1200);

/* Animations */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(110vh); opacity: 0; }
}
@keyframes fly {
    to { transform: translateX(110vw); opacity: 0; }
}`;
document.head.appendChild(style);
