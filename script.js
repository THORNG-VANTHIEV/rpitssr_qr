// Array of your links
// NOTE: You may need to update the icon paths to match your files in the 'image' folder.
const links = [
  {
    name: "ហ្វេកប៊ុក - Facebook",
    url: "https://web.facebook.com/rpitssr.edu",
    icon: "image/facebook.png",
  },
  {
    name: "តេឡេក្រាម - Telegram",
    url: "https://t.me/+Pp7hxjppYSkyYTJl",
    icon: "image/telegram.png",
  },
  {
    name: "គេហទំព័រ - Website",
    url: "https://www.rpitssr.edu.kh/",
    icon: "image/website.png",
  },
  { name: "ព័ត៌មានបន្ថែម - Information", url: "https://t.me/RPITSSR", icon: "image/information.png" },
];

const container = document.getElementById("link-container");

// Function to render links
function renderLinks() {
  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.className = "link-card";
    // Open in new tab
    anchor.target = "_blank";

    // Create icon element
    const icon = document.createElement("img");
    icon.src = link.icon;
    icon.alt = ""; // Alt text is empty as the link text describes the destination
    icon.className = "link-icon";

    const linkText = document.createElement("span");
    linkText.textContent = link.name;
    linkText.style.fontFamily = '"Kantumruy Pro", sans-serif';

    anchor.appendChild(icon);
    anchor.appendChild(linkText);

    container.appendChild(anchor);
  });
}

renderLinks();
