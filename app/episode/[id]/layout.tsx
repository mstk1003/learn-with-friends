export default async function Page(params: {
  children: React.ReactNode;
  dialogue: React.ReactNode;
  chat: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <div className="min-w-[50%] max-w-[50%]">{params.dialogue}</div>
        {/* TODO チャット欄実装 */}
        {/* Next.jsのページにページ分割の話があったはず。Paralle Routesというのか。参考になるかも。 */}
        {/* リンク：https://nextjs.org/docs/app/building-your-application/routing/parallel-routes */}
        <div className="w-full bg-blue-50 rounded-md ml-4 p-4">
          {/* Ask your questions about the friends talk to Chat-GPT! */}
          {params.chat}
        </div>
      </div>
    </>
  );
}
