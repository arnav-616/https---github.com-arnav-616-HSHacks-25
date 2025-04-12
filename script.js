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

  function createStars() {
    const container = document.querySelector("body");
    for(let i = 0; i < 1200; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = (Math.random() * 1.5 + 0.5) + "px";
      star.style.height = star.style.width;
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();