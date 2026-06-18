import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const sora = Sora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al-Amin Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        {children}
        <ToastContainer/>
      </body>
    </html>
  );
}
