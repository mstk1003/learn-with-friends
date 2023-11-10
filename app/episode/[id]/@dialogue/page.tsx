import Accordion from "@/components/Accordion";

type Utterance = {
  utteranceId: string;
  speakers: string[];
  transcript: string;
  transcript_with_note: string;
};
type Scene = {
  sceneId: string;
  utterances: Utterance[];
};
type Episode = {
  title: string;
  scenes: Scene[];
};

// TODO セリフをドラッグしたら、ホバーでメニューが表示されるようにする
// メニューの内容は「1. ワードを登録する」「Chat GPTにセリフの背景と意味を質問する」の二つ
// セリフの背景と意味をChatGPTに質問する際は、promptを生成しておく。
// prompt例：「ドラマFriendsの${シーズン1}${エピソード1}の${speakers}のセリフ「${dialogue}」の背景と意味を教えてください。」

export default async function Page({ params }: { params: { id: string } }) {
  const episode = await getSeasonEpisodes(params.id);
  console.log(episode.title);

  return (
    <>
      {episode.title ? (
        <div className="text-3xl font-bold mb-8">{episode.title}</div>
      ) : (
        <span className="text-red-600 font-bold">
          管理者へ：${params.id}
          のエピソードタイトルが登録されていません。登録してください。
        </span>
      )}
      {episode.scenes.map((scene, idx) => {
        return (
          <div key={scene.sceneId}>
            <Accordion title={`Scene${idx + 1}`}>
              {" "}
              <div className="bg-red-100 p-4 rounded-md">
                {scene.utterances.map((utterance, idx) => {
                  return (
                    <div key={utterance.utteranceId}>
                      <div className="flex">
                        <div className="mr-4 font-bold w-60">
                          {utterance.speakers.length ? utterance.speakers : "-"}
                          :
                        </div>
                        <div className="w-full">
                          {utterance.transcript
                            ? utterance.transcript
                            : utterance.transcript_with_note}
                        </div>
                      </div>
                      {scene.utterances.length !== idx + 1 && (
                        <div className="border-dashed border-t my-4 border-red-300" />
                      )}
                    </div>
                  );
                })}
              </div>
            </Accordion>
          </div>
        );
      })}
    </>
  );
}
const getSeasonEpisodes = (id: string) => {
  return fetch(`${process.env.LOCAL_URL}/converted_friends_data/${id}.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      return myJson as Episode;
    });
};
