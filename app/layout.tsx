import type { Metadata } from "next";
import { aeroport, aeroportRegular, openSans } from "./fonts";
import "./globals.css";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"));

export const metadata: Metadata = {
  title: "BestOffer.kz - Финансовый маркетплейс для выгодных предложений",
  description:
    "BestOffer.kz - ведущий финансовый маркетплейс в Казахстане. Сравнивайте и выбирайте лучшие предложения по кредитам, депозитам и финансовым продуктам.",
  keywords:
    "финансовый маркетплейс, кредиты, депозиты, лучшие предложения, Казахстан, BestOffer.kz, сравнение финансовых продуктов, онлайн кредиты, выгодные вклады",
  openGraph: {
    title: "BestOffer.kz - Финансовый маркетплейс для выгодных предложений",
    description:
      "Сравнивайте и находите лучшие финансовые предложения на BestOffer.kz - кредитные программы, депозиты и другие услуги в Казахстане.",
    url: "https://bestoffer.kz",
    siteName: "BestOffer.kz",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BestOffer.kz Logo",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bestoffer_kz",
    title: "BestOffer.kz - Финансовый маркетплейс",
    description:
      "Лучшие предложения по кредитам и депозитам в Казахстане на BestOffer.kz.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${aeroportRegular.variable} ${aeroport.variable} ${openSans.variable} antialiased bg-background`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
