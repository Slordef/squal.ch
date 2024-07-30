"use client";

import HeaderLogo from "@/components/HeaderLogo";
import Link from "next/link";
import { useState } from "react";

export default function HeaderNavigation() {
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }

  const navOpened = open ? "header open" : "header";
  return (
    <div className={navOpened}>
      <HeaderLogo />
      <nav>
        <div className="nav-elem">
          <Link href={"/"}>Galerie</Link>
        </div>
        <div className="nav-elem">
          <Link href={"/covers"}>Couvertures</Link>
        </div>
        <div className="nav-elem">
          <Link href={"/cards"}>Cartes</Link>
        </div>
        <div className="nav-elem">
          <Link href={"/contact"}>Contact</Link>
        </div>
      </nav>
      <button className={"menu"} onClick={openMenu}>
        <div />
        <div />
        <div />
      </button>
    </div>
  );
}
