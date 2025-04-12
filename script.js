function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1200; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".78px";
    star.style.height = ".78px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}
createStars();

createStars();

document.querySelectorAll('.planet').forEach(planetElement => {
  planetElement.addEventListener('click', function(e) {
    // Prevent click events from bubbling up if needed
    e.stopPropagation();

    // Find the closest parent that has an "orbit" class, which should also carry the planet name
    const parentOrbit = planetElement.closest('.orbit');
    if (parentOrbit) {
      // List of possible planet names
      const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
      
      let planetName = "";

      // Check which planet name exists in the parent's class list
      planets.forEach(name => {
        if (parentOrbit.classList.contains(name)) {
          planetName = name;
        }
      });

      // If a planet name was found, redirect to the corresponding HTML page
      if (planetName) {
        console.log("Redirecting to " + planetName + ".html");
        window.location.href = planetName + ".html";
      } else {
        console.log("Planet not found in parentOrbit class list.");
      }
    }
  });
});