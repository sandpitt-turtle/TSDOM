"use strict";
const app = document.getElementById("app");
const p = document.createElement("p");
p.textContent = "Bonjour, Y'all!";
if (app) {
    app.appendChild(p);
}
