import type { Metadata } from "next";
import { Bebas_Neue, Heebo} from "next/font/google";
import "./globals.css";

const Bebas = Bebas_Neue({ 
weight: ['400'],
subsets: ["latin"], 
variable: '--font-header' 
});
const heebo = Heebo({
  weight: ['200', '400', '600'],
  subsets: ["latin"], 
  variable: '--font-main'
})

export const metadata: Metadata = {
  title: "Nextflix Application",
  description: "Netfilx Clone (not the real netflix)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Bebas.variable} ${heebo.variable}`}>{children}</body>
    </html>
  );
}
