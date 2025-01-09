import { Image, Card, CardFooter,Button,Te } from "@nextui-org/react";

export default function Character({character}) {

  return (
    <Card >
        <Image
          removeWrapper
          alt="Card example background"
          className="w-60 h-80 md:mx-auto"
          src={character.portrait}
        />
        <CardFooter className="absolute bottom-0 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white text-tiny">{character.name}</p>
            <p className="text-white text-tiny">{character.background}</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
  );
}