const page = location.pathname.split('/').pop().replace('.html', '');

fetch('../data/planets.json')
  .then(res => res.json())
  .then(data => {
    const planet = data[page];
    if (!planet) return;

    document.getElementById('planet-name').textContent = planet.name;
    document.getElementById('planet-img').src = planet.image;
    document.getElementById('planet-desc').textContent = planet.description;

    const factsList = document.getElementById('fun-facts');
    planet.funFacts.forEach(fact => {
      const li = document.createElement('li');
      li.textContent = fact;
      factsList.appendChild(li);
    });
  });