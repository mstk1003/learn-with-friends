// 理解不足の箇所
// React Server Componentの理解（多分、以下の記事を読めば大体わかる）
//  ZEN記事：https://zenn.dev/uhyo/articles/react-server-components-multi-stage
//  公式：https://react.dev/reference/react/use-client
//  公式：https://react.dev/reference/react/use-server

// TODO 最優先：サインアップ機能
// VerselKVを利用できるようになるためにも、サインアップ、サインイン、サインアウトを実装する
// TODO 優先度2:単語登録機能
// TODO 優先度3:パラレルルーター同士で値を連携する方法を探る
const seasonIds = [
  "s01",
  "s02",
  "s03",
  "s04",
  "s05",
  "s06",
  "s07",
  "s08",
  "s09",
  "s10",
];

export default async function Home() {
  return <div>Home</div>;
  // const promisedSeasonsEpisodes = seasonIds.map(async (id) => {
  //   return await getSeasonEpisodes(id);
  // });
  // const allEpisodes = await Promise.all(promisedSeasonsEpisodes);

  // return (
  //   <>
  //     <main className="flex min-h-screen flex-col items-center p-24">Home</main>
  //   </>
  // );
}

const getSeasonEpisodes = (seasonId: string) => {
  // console.log("hello", process.env.LOCAL_URL);
  return fetch(
    `${process.env.LOCAL_URL}/converted_friends_data/${seasonId}.json`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      // TODO 型を整理する
      return myJson;
    });
};
