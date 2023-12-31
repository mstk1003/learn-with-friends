import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + "flex min-h-screen flex-col items-center p-16"
        }
      >
        {/* ヘッダー部 */}
        <div className="flex justify-center font-mono font-bold">
          <div className="mb-8">
            <span className="text-6xl">
              Learn with F<span className="text-red-500">&middot;</span>R
              <span className="text-blue-400">&middot;</span>I
              <span className="text-yellow-500">&middot;</span>E
              <span className="text-red-500">&middot;</span>N
              <span className="text-yellow-500">&middot;</span>D
              <span className="text-blue-400">&middot;</span>S
            </span>
          </div>
        </div>
        <div className="flex w-full mt-8">
          {/* サイドメニュー */}
          <div className="w-2/12">
            <SideMenu />
          </div>
          {/* コンテンツ部 */}
          <div className="w-10/12">{children}</div>
        </div>
      </body>
    </html>
  );
}
