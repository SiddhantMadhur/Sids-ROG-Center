import React from "react";

interface Props {
  title: string;
  href: string;
  key: number;
}

function NavBarItem({ title, href, key }: Props) {
  return (
    <div className="w-full">
      <a className="bg-[#44475a] " href={href}>{title}</a>
    </div>
  );
}

export default NavBarItem;
