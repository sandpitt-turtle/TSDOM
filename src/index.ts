const app = document.getElementById("app") as HTMLElement | null;
const p = document.createElement("p");
p.textContent = "Bonjour, Y'all!";

if (app) {
  app.appendChild(p);
}
