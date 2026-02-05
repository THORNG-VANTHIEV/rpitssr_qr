// Array of your links
const links = [
  { name: "FaceBook Page", url: "https://web.facebook.com/rpitssr.edu" },
  { name: "Telegram", url: "https://t.me/+Pp7hxjppYSkyYTJl" },
  { name: "Website", url: "https://www.rpitssr.edu.kh/" },
  { name: "Information", url: "https://t.me/RPITSSR" },
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
