"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderLogo() {
  const [animate, setAnimate] = useState(" start");

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 5);
      if (rand !== 1) setAnimate("");
      else setAnimate((prev) => (prev === "" ? " animate" : ""));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Link className="logo" href={"/"}>
      <div className={`logo_img${animate}`}>
        <img alt={"logo"} src={"/images/template/logo.svg"} />
      </div>
      <span>Squal</span>
    </Link>
  );
}
