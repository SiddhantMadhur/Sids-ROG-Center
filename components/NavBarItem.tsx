import React from "react";

interface Props {
  title: string;
  href: string;
  key: number;
}

function NavBarItem({ title, href, key }: Props) {
  return (
    <a
      className="bg-[#44475a] font-bold py-1.5 px-4 rounded-md hover:bg-[#313446] transition "
      href={href}
    >
      {title}
    </a>
  );
}

export default NavBarItem;
