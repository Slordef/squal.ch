"use client";

import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link className="logo" href={"/"}>
      <div className={"logo_img"}>
        <img alt={"logo"} src={"/images/template/logo.svg"} />
      </div>
      <span>Squal</span>
    </Link>
  );
}
