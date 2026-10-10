import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "[Vansh] | Full Stack MERN Developer",
  description:
    "Fresher full-stack developer building MERN applications with React, Next.js, Node.js, Express and MongoDB.",
  openGraph: {
    title: "[Vansh] | Full Stack MERN Developer",
    description:
      "Full-stack MERN applications: authentication, payments, multilingual interfaces and clean APIs.",
    type: "website",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-base font-display text-fg antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}