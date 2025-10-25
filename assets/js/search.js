const projectLinks = {
  "home": "index.html",
  // "paper": "publications.html",
  "career": "experiences.html",
  "portfolio": "projects.html",
  "robotics": "projects.html",
  // "publications": "publications.html",
};

// Show suggestions in the dropdown
function showSuggestions() {
  const input = document.getElementById("query");
  const suggestions = document.getElementById("suggestions");
  const value = input.value.toLowerCase();

  // Filter keywords that match current input
  let matches = Object.keys(projectLinks).filter(key => key.toLowerCase().includes(value));

  matches = matches.slice(0, 3);

  if (matches.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  suggestions.innerHTML = ""; // Clear previous suggestions

  matches.forEach(key => {
    const li = document.createElement("li");
    li.textContent = key;
    li.style.padding = "5px";
    li.style.cursor = "pointer";

    // Click to redirect
    li.addEventListener("click", () => {
      window.location.href = projectLinks[key];
    });

    suggestions.appendChild(li);
  });

  suggestions.style.display = "block";
}

// Search function (triggered on Enter)
function searchProject(event) {
  const input = document.getElementById("query");
  const query = input.value.toLowerCase().trim();
  const suggestions = document.getElementById("suggestions");

  if (event.key === "Enter") {
    let found = false;
    for (let key in projectLinks) {
      if (key.toLowerCase() === query) {
        window.location.href = projectLinks[key]; // redirect
        found = true;
        break;
      }
    }

    if (!found) {
      alert(`No results for "${input.value}"`);
    }

    suggestions.style.display = "none"; // hide suggestions after Enter
  } else {
    showSuggestions(); // update dropdown as you type
  }
}

// Hide suggestions if clicked outside
document.addEventListener("click", (e) => {
  const suggestions = document.getElementById("suggestions");
  const input = document.getElementById("query");
  if (!suggestions.contains(e.target) && e.target !== input) {
    suggestions.style.display = "none";
  }
});