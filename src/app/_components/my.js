import React, { useEffect, useState } from "react";
import Character from "./character";
import { getMyCharacters } from "@/api/character";
import { Card, CardBody, Link } from "@nextui-org/react";
import { BsPlusLg } from 'react-icons/bs';
export default function My({ isDisplay }) {
  const [characters, setCharacters] = useState([]);
  const display = isDisplay ? "flex" : "hidden";

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getMyCharacters({
          page: 1,
          page_size: 10,
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
      <Card className='w-60 h-80'>
        <CardBody className='flex justify-center'>
          <Link href='/character/create'>
            <BsPlusLg className='w-14 h-14 block my-2.5 mx-auto fill-real-blue-500' />
          </Link>
        </CardBody>
      </Card>
      {characters.map((character) => (
        <div key={character.id} className="flex flex-col items-center">
          <Character character={character} />
        </div>
      ))}
    </section>
  );
}