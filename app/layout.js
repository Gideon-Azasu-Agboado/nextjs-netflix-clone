import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '700'], });
const inter = Inter({ subsets: ["latin"], weight: ['400', '700'], });


export const metadata = {
  title: "Netflix Clone",
  description: "GNetflix Clone App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
