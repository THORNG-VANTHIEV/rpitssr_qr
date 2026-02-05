// Array of your links
const links = [
  { name: "FaceBook Page", url: "https://example.com" },
  { name: "Telegram", url: "https://github.com" },
  { name: "Website", url: "https://linkedin.com" },
  { name: "Contact Me", url: "mailto:hello@example.com" },
];

const container = document.getElementById("link-container");

// Function to render links
function renderLinks() {
  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.className = "link-card";
    anchor.innerText = link.name;
    // Open in new tab
    anchor.target = "_blank";

    container.appendChild(anchor);
  });
}

renderLinks();
