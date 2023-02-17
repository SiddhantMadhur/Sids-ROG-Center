import React from "react";

interface Props {
  title: string;
  href: string;
  key: number;
  current: string;
}

function NavBarItem({ title, href, key, current }: Props) {
  if (!(current===href)) {
    return (
      <a
        className="bg-[#44475a] font-bold py-1.5 px-4 rounded-md hover:bg-[#323542] transition "
        href={href}
      >
        {title}
      </a>
    );
  } else {
    return (
      <div
        className=" font-bold py-1.5 px-4 rounded-md bg-[#323542] text-[#d4d5da] transition "
      >
        {title}{" "}
      </div>
    );
  }
}

export default NavBarItem;
