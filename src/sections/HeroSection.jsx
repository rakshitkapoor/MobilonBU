import React, { useEffect } from "react";

export function HeroSection() {
  useEffect(() => {
    const tilesContainer = document.querySelector(".tiles");

    function createTile() {
      const tile = document.createElement("div");

      tile.classList.add("tile");

      tile.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "#c559f7";

        setTimeout(() => {
          e.target.style.backgroundColor = "transparent";
        }, 1000);
      });
      return tile;
    }

    function createGrid() {
      tilesContainer.innerHTML = "";

      const columns = Math.floor(window.innerWidth / 50);
      const rows = Math.floor(window.innerHeight / 50);

      tilesContainer.style.setProperty("--columns", columns);
      tilesContainer.style.setProperty("--rows", rows);

      for (let i = 0; i < columns * rows; i++) {
        tilesContainer.appendChild(createTile());
      }
    }

    createGrid();

    window.onresize = () => createGrid();

    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <section className="">
      <div>
        hi
      </div>
    </section>
  );
}
