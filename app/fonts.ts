import LocalFont from "next/font/local";
import { Open_Sans } from "next/font/google";

const aeroport = LocalFont({
  src: "./fonts/Aeroport-bold-trial.otf",
  variable: "--font-aeroport",
});

const aeroportRegular = LocalFont({
  src: "./fonts/Aeroport-regular-trial.otf",
  variable: "--font-aeroportRegular",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["cyrillic"],
  variable: "--font-sans",
});

export { aeroport, aeroportRegular, openSans };
