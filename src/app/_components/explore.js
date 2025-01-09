import React, { useEffect, useState } from "react";
import Character from "./character";
import { getCharacters } from "@/api/character";

export default function Explore({ isDisplay }) {
  const [characters, setCharacters] = useState([]);
  const display = isDisplay ? "flex" : "hidden";

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters({
          page: 1,
          page_size: 10,
          "visibility": true
        });
        setCharacters(data.records);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <section className={`flex flex-row flex-wrap justify-center mt-10 gap-5 ${display}`}>
      {characters.map((character) => (
        <div key={character.id} className="flex flex-col items-center">
          <Character character={character} />
        </div>
      ))}
    </section>
  );
}