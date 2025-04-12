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

// Add a click event listener to each planet
// Assuming your HTML structure nests the .planet element within an orbit container that also has the planet name as a class (e.g. "saturn")
document.querySelectorAll('.planet').forEach(planetElement => {
  planetElement.addEventListener('click', function(e) {
    // Prevent click events from bubbling up if needed
    e.stopPropagation();
    
    // Find the closest parent that has an "orbit" class, which should also carry the planet name
    const parentOrbit = planetElement.closest('.orbit');
    if (parentOrbit) {
      // List of possible planet names. This assumes you use these names as classes on the orbit elements.
      const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
      
      // Check which planet name exists in the parent's class list
      let planetName = "";
      planets.forEach(name => {
        if (parentOrbit.classList.contains(name)) {
          planetName = name;
        }
      });
      
      // If a planet name was found, redirect to the corresponding HTML page
      if (planetName) {
        // For example, clicking the Saturn planet opens "saturn.html"
        window.location.href = planetName + ".html";
      }
    }
  });
});


// Function to fetch ISS current location
async function fetchISSLocation() {
  try {
    const response = await fetch('http://api.open-notify.org/iss-now.json');
    const data = await response.json();

    if (data.message === 'success') {
      const { latitude, longitude } = data.iss_position;
      document.getElementById('iss-lat').textContent = latitude;
      document.getElementById('iss-lon').textContent = longitude;
    } else {
      console.error('Failed to retrieve ISS data:', data);
    }
  } catch (error) {
    console.error('Error fetching ISS location:', error);
  }
}

// Initial fetch
fetchISSLocation();

// Update ISS location every 5 seconds
setInterval(fetchISSLocation, 5000);

