"use client";
import { ReactNode, useState } from "react";

type Props = {
  title: string;
  onOpen?: () => {};
  children: ReactNode;
};
export default function Accordion({ title, onOpen, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="font-bold text-lg my-2"
        onClick={() => {
          isOpen && onOpen && onOpen();
          setIsOpen(!isOpen);
        }}
      >
        {title}
      </div>
      {isOpen && <div className="ml-4">{children}</div>}
    </>
  );
}
