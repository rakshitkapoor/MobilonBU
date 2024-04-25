import Slider from "@/sub/infinite-logoslider";
import React, { useEffect } from "react";
import { Instagram, Linkedin, Mail } from 'lucide-react';

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
    <section className="box-border hero">
      <div className="tiles"></div>
      
      <div className="text w-fit">
        <h1 className="font-bold text-6xl md:text-9xl
          text-purple-300">MOBILON BU</h1>
        <p className="md:text-xl px-1 text-gray-400 w-fit">A Mobile App Development Club at Bennett University</p>
        <div className="py-4 flex space-x-4 text-purple-400 md:w-fit">
          <Mail className="w-12 h-12 p-1.5 border-2 border-purple-400 hover:text-purple-300 hover:border-purple-300  rounded-xl cursor-pointer"/>
          <Instagram className="w-12 h-12 p-1.5 border-2 border-purple-400 hover:text-purple-300 hover:border-purple-300 rounded-xl cursor-pointer"/>
          <Linkedin className="w-12 h-12 p-1.5 border-2 border-purple-400 hover:text-purple-300 hover:border-purple-300 rounded-xl cursor-pointer" />
        </div>
      </div>
      <Slider/>
    </section>
  );
}
