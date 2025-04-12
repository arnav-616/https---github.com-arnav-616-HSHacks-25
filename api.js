// Use your API key here
const NASA_API_KEY = "pNOwAOkZba3l8gLAcu9vghV7Kwi4mbFApNSxtFZs";

// 1. APOD: Astronomy Picture of the Day
fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("apod-img").src = data.url;
    document.getElementById("apod-title").textContent = data.title;
    document.getElementById("apod-desc").textContent = data.explanation;
  })
  .catch(error => {
    console.error("Error fetching APOD:", error);
    document.getElementById("apod-desc").textContent = "Failed to load APOD.";
  });

// 2. Mars Rover Photos
fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const photoContainer = document.getElementById("mars-photos");
    // Show a few photos
    data.photos.slice(0, 5).forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.img_src;
      img.alt = "Mars Rover Photo";
      photoContainer.appendChild(img);
    });
  })
  .catch(error => {
    console.error("Error fetching Mars Rover Photos:", error);
    document.getElementById("mars-photos").textContent = "Failed to load Mars photos.";
  });

// 3. Near-Earth Asteroids
fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${NASA_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("asteroid-list");
    // Display data for the first date
    const dateKeys = Object.keys(data.near_earth_objects);
    if (dateKeys.length > 0) {
      const today = dateKeys[0];
      data.near_earth_objects[today].slice(0, 5).forEach(asteroid => {
        const li = document.createElement("li");
        li.textContent = `${asteroid.name} — Estimated Max Diameter: ${asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} m, Speed: ${parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)} km/h`;
        list.appendChild(li);
      });
    }
  })
  .catch(error => {
    console.error("Error fetching Near-Earth Asteroids data:", error);
    document.getElementById("asteroid-list").textContent = "Failed to load asteroid data.";
  });
