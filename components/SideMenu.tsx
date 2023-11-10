import SideMenuSeason from "@/components/SideMenuSeason";

// TODO 型定義を整理する
type Season = {
  seasonId: string;
  episodes: string[];
};

const seasons = [
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

// サイドメニュー
export default async function SideMenu() {
  const seasonsData = [] as Season[];
  for (let idx = 0; idx < seasons.length; idx++) {
    const res = await getEpisodeList(seasons[idx]);
    seasonsData.push(res);
  }

  return seasonsData.map((episodes, idx) => {
    return (
      <SideMenuSeason
        key={episodes.seasonId}
        season={idx}
        episodes={episodes.episodes}
      />
    );
  });
}

/**
 * シーズン毎のエピソードのリストを取得
 * @param seasonId
 * @returns
 */
const getEpisodeList = (seasonId: string) => {
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
      return myJson as Season;
    });
};
