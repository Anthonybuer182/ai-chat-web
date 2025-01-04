import Character from "./character";
export default function My({isDisplay}) {
  const display = isDisplay?'flex':'hidden';
  const characters = [
    {
      character_id: "136cbbd19ed04d599e810050d3585177",
      name: "111",
      source: "community",
      voice_id: "EXAVITQu4vr4xnSDxMaL",
      author_name: "anonymous author",
      audio_url: "https://storage.googleapis.com/assistly/static/realchar/136cbbd19ed04d599e810050d3585177.mp3",
      portrait: "http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg",
      tts: "ELEVEN_LABS",
      is_author: true,
      location: "database",
      rebyte_project_id: null,
      rebyte_agent_id: null,
    },
  ];
  return (
    <section className="flex flex-row flex-wrap justify-center items-center gap-5 mt-10">
      {characters.map((character) => (
        <div key={character.character_id} className="flex flex-col items-center">
          <Character character={character} />
        </div>
      ))}
    </section>
  );
}
