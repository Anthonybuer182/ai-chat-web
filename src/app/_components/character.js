import { Image, Card, CardFooter,CardHeader, Button } from "@nextui-org/react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io"; // 导入设置图标
import { useAppStore } from "@/zustand/store";

export default function Character({ character }) {
  const { user } = useAppStore();

  const playSound = () => {
    const audio = new Audio(character.soundUrl);
    audio.play();
  };

  return (
    <Card>
      <Image
        removeWrapper
        alt="Card example background"
        className="w-60 h-80 md:mx-auto object-cover"
        src={character.portrait}
      />
      {user.id===character.user_id&&<CardHeader className="absolute top-0 flex justify-end items-center">
        <IoIosSettings className="text-white w-6 h-6 cursor-pointer" />
      </CardHeader>
      }
      <CardFooter className="absolute bottom-0 border-zinc-100/50 z-10 justify-between">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center mb-2">
            <p className="text-white text-lg font-semibold">{character.name}</p>
            <IoPlayCircleOutline
              className="text-white w-7 h-7 cursor-pointer"
              onClick={playSound}
            />
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