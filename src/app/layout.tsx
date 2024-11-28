import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Defender of Democracy";
const description =
  "In a not-so-distant past, the world’s most powerful systems of governance and democracy teeter on the brink of collapse. Amid rising tensions, rampant misinformation, and the erosion of fundamental rights, a new force emerges to protect the people’s will and fight back against the growing darkness. This group is known as the Defenders of Demography (Dod).";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="og:image" content="/image_og.jpg?v=5" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/image_og.jpg" />

        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="DOD" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
