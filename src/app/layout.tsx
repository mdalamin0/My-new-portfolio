import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import BackgroundDecoration from "@/components/shared/BackgroundDecoration";

const sora = Sora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al-amin Portfolio",
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
        <BackgroundDecoration />
        {children}
        <ToastContainer/>
      </body>
    </html>
  );
}
