"use client";
import Link from "next/link";
import { useState } from "react";

export default function SideMenuSeason({
  season,
  episodes,
}: {
  season: number;
  episodes: string[];
}) {
  const [isHiddenSeason, setIsHiddenSeason] = useState(true);

  return (
    <>
      <div
        className="font-bold text-lg my-2"
        onClick={() => setIsHiddenSeason(!isHiddenSeason)}
      >
        Season{season + 1}
      </div>
      {!isHiddenSeason && (
        <div className="ml-4">
          {episodes.map((episode, idx) => {
            return (
              <>
                <div>
                  <Link key={episode} href={`/episode/${episode}`}>
                    Episode{idx + 1}
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
