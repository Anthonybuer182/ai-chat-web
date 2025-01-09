import { Image, Card, CardFooter, Button } from "@nextui-org/react";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function Character({ character }) {
  const playSound = () => {
    const audio = new Audio(character.soundUrl); 
    audio.play();
  };

  return (
    <Card>
      <Image
        removeWrapper
        alt="Card example background"
        className="w-60 h-80 md:mx-auto object-cover" // 使用 object-cover 保持图片比例并剪裁
        src={character.portrait}
      />
      <CardFooter className="absolute bottom-0 border-zinc-100/50 z-10 justify-between">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center mb-2">
            <p className="text-white text-lg font-semibold">{character.name}</p>
            <IoPlayCircleOutline className="text-white w-7 h-7" onPress={playSound} />
          </div>
          <p
            className="text-white text-tiny overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {character.background}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}