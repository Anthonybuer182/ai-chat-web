import { Avatar, Card, CardBody } from "@nextui-org/react";

export default function Character({character}) {

  return (
    <Card className="p-2.5">
      <CardBody className="p-0 text-center flex-row gap-2 md:flex-col">
          <Avatar 
            radius="sm"
            className="w-20 h-20 md:w-40 md:h-40 md:mx-auto mt-2"
            src={character.portrait}
          />
      </CardBody>
    </Card>
  );
}
