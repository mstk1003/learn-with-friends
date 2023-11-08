# 設計

## React Server Component とは

React Server Component の理解（多分、以下の記事を読めば大体わかる）

- [一言で理解する React Server Components](https://zenn.dev/uhyo/articles/react-server-components-multi-stage)
- [公式：use client](https://react.dev/reference/react/use-client)
- [公式：use server](https://react.dev/reference/react/use-server)

## 設計方針

### SC で極力開発

なるべくファイル構造の末端をユーザーリクエストを受ける CC（クライアントコンポーネント）とする。
そうすることで、できる限り SC（サーバーコンポーネント）を使用するつくりとなるはず。

### コンポーネントに状態をなるべく持たせない

コンポーネント内部の状態を極力持たせないように工夫する。
出力は外部から与えられる引数(Props)のみに依存させる。

### 技術

- Versel KV
- Versel AI SDK
