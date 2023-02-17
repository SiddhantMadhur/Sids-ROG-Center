import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NavBarItem from "./NavBarItem";
import { useRouter } from "next/router";

const navItems = [
  {
    title: "System Settings",
    href: "/"
  },
  {
    title: "Fan Curves",
    href: "/fancurves"
  },
  {
    title: "Keyboard Aura",
    href: "/keyboardaura"
  }
]


export default function Container({children}:any) {

  const {pathname} = useRouter();

  

  return (
    <>
      <Head>
        <title>Sids ROG Center</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text  ">
          <div className=" text-3xl  my-2 font-semibold text-center">Sids ROG Center</div>
          <div className="flex mx-2">
            <div className="text-xl flex flex-col gap-y-3">
              {navItems.map(({title, href}, key)=>(
                <NavBarItem key={key} title={title} href={href} current={pathname} />
              ))}
            </div>
            
            <div className="grow px-3">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}
