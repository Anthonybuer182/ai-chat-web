import Character from "./character";
export default function Tool({isDisplay}) {
  const display = isDisplay?'flex':'hidden';
  const characters = [
    {
      character_id: "136cbbd19ed04d599e810050d3585177",
      name: "111",
      source: "community",
      voice_id: "EXAVITQu4vr4xnSDxMaL",
      author_name: "anonymous author",
      audio_url: "https://storage.googleapis.com/assistly/static/realchar/136cbbd19ed04d599e810050d3585177.mp3",
      portrait: "http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",
      tts: "ELEVEN_LABS",
      is_author: true,
      location: "database",
      rebyte_project_id: null,
      rebyte_agent_id: null,
    },
  ];
  return (
    <section className={`flex flex-row flex-wrap justify-center mt-10 gap-5 ${display}`}>
      {characters.map((character) => (
        <div key={character.character_id} className="flex flex-col items-center">
          <Character character={character} />
        </div>
      ))}
    </section>
  );
}
