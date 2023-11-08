/**
 * オリジナルの会話データをエピソード毎に分割するためだけのスクリプト
 * アプリの動作に何も影響しない。
 *
 * node convert.jsを一度だけ実行すれば、もうこのスクリプトを使用する必要はない。
 *
 */

const fs = require("fs"); // モジュールの読み込み

// 全シーズン10
const seasons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

seasons.forEach((season) => {
  // オリジナルのセリフデータを取得する
  const json = fs.readFileSync(
    `./public/original_friends_data/friends_season_${season}.json`,
    "utf8"
  );
  const seasonData = JSON.parse(json);

  var seasonNum = ("00" + `${season}`).slice(-2);

  // シーズン毎のエピソードIDリストを作成する
  const episodeIds = [];
  for (let idx = 0; idx < seasonData.episodes.length; idx++) {
    episodeIds.push(seasonData.episodes[idx].episodeId);
  }

  // シーズン毎にでファイルを分割して、convert後のファイル置き場に置く（s03：シーズン3）
  fs.writeFile(
    `./public/converted_friends_data/s${seasonNum}.json`,
    JSON.stringify({ seasonId: `s${seasonNum}`, episodes: episodeIds }),
    (err, data) => {
      if (err) console.log(err);
      else console.log("write end");
    }
  );

  // シーズン+エピソード毎にでファイルを分割して、convert後のファイル置き場に置く（s03_e15：シーズン3のエピソード5）
  for (let idx = 0; idx < seasonData.episodes.length; idx++) {
    // ファイル名とepisodeIdと合わせるためにゼロパディングして2桁表示する
    var episodeNum = ("00" + `${idx + 1}`).slice(-2);

    fs.writeFile(
      `./public/converted_friends_data/s${seasonNum}_e${episodeNum}.json`,
      JSON.stringify({ scenes: seasonData.episodes[idx].scenes }),
      (err, data) => {
        if (err) console.log(err);
        else console.log("write end");
      }
    );
  }
});
