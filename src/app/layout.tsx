import type { Metadata } from "next";
import HeaderNavigation from "@/components/HeaderNavigation";
import FooterGlobal from "@/components/FooterGlobal";
import "../styles/styles.scss";
import PictureWatcher from "@/components/PictureWatcher";

export const metadata: Metadata = {
  title: "Squal | Illustration",
  description:
    "Retrouvez sur ce site les illustrations et les projets de Squal | Pascale Bernasconi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://squal.art",
    siteName: "Squal | Illustration",
    title: "Squal | Illustration",
    description:
      "Retrouvez sur ce site les illustrations et les projets de Squal | Pascale Bernasconi",
    images: [
      {
        url: "https://squal.art/images/gallery/zelda.webp",
        width: 1080,
        height: 1080,
        alt: "Squal | Illustration",
      },
    ],
  },
  icons: "favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <PictureWatcher />
        <HeaderNavigation />
        {children}
        <FooterGlobal />
      </body>
    </html>
  );
}
