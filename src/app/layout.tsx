import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import GeneralLayout from "@/components/General/GeneralLayout";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./providers";
import Footer from "@/components/Footer/Footer";

const DankMono = localFont({
  src: [
    {
      path: "../../public/assets/fonts/DankMono-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/assets/fonts/DankMono-Italic.otf",
      weight: "400",
      style: "italic"
    },
    {
      path: "../../public/assets/fonts/DankMono-Bold.otf",
      weight: "700",
      style: "normal"
    },
  ]
})

export const metadata: Metadata = {
  title: "Renoir",
  description: "Seu blog de animes aqui!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${DankMono.className} antialiased`}
      >
        <Providers>
          <GeneralLayout style="p-12">
            <Navbar />
            {children}
            <Footer />
          </GeneralLayout>
        </Providers>
      </body>
    </html>
  );
}
