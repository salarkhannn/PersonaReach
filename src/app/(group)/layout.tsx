import type { Metadata } from "next";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "PersonaReach",
  description: "Write Personalized Cold Emails with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
