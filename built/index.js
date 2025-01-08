"use strict";
const app = document.getElementById("app");
const p = document.createElement("p");
p.textContent = "Bonjour, Y'all!";
if (app) {
    app.appendChild(p);
}
// 2. Create a new <ul> element programmatically
const ul = document.createElement("ul");
// 3. Add some list items to the <ul>
const items = ["Beep", "Beep", "Boop"];
items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
});
// 4. Append the <ul> element to the div element
app === null || app === void 0 ? void 0 : app.appendChild(ul);
// 5. Query the list items using querySelectorAll
const allItems = document.querySelectorAll("li");
console.log("All List Items:", allItems); // This will log the NodeList of all <li> elements
// 6. Query the first list item using querySelector
const firstItem = document.querySelector("li");
console.log("First List Item:", firstItem); // This will log the first <li> element
