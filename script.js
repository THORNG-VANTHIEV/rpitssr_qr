// Array of your links
const links = [
  { name: "FaceBook Page", url: "https://www.rpitssr.edu.kh/" },
  { name: "Telegram", url: "https://www.rpitssr.edu.kh/" },
  { name: "Website", url: "https://www.rpitssr.edu.kh/" },
  { name: "Contact Me", url: "https://www.rpitssr.edu.kh/" },
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
