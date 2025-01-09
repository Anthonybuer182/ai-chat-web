import { Image, Card, CardFooter,Button } from "@nextui-org/react";

export default function Character({character}) {

  return (
    // <Card className="p-2.5">
    //   <CardBody className="p-0 text-center flex-row gap-2 md:flex-col">
    //       <Avatar 
    //         radius="sm"
    //         className="w-20 h-20 md:w-40 md:h-40 md:mx-auto mt-2"
    //         src={character.portrait}
    //       />
    //   </CardBody>
    // </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={character.portrait}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">{character.name}</p>
            <p className="text-black text-tiny">{character.backgroud}</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
  );
}