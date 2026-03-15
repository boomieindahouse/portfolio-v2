import { Albert_Sans } from "next/font/google";
import "@/styles/globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const albertSans = Albert_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Pawis | Creative Full-Stack Developer",
  description: "I'm a Passionate Creative Full-Stack Dev, driven by creativity. Exploring the intersection of design and code through high-performance web applications.",
  keywords: "frontend developer, full-stack developer, react portfolio, next.js portfolio, pawis.xyz, web design Thailand, Korat developer",
  authors: [{ name: "Pawis" }],
  alternates: {
    canonical: "https://www.pawis.xyz",
  },
  openGraph: {
    title: "Pawis | Creative Full-Stack Developer",
    description: "Welcome to my portfolio website showcasing my projects and skills.",
    url: "https://www.pawis.xyz",
    siteName: "Pawis Portfolio",
    images: [
      {
        url: "https://www.pawis.xyz/Homepage.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawis | Creative Full-Stack Developer",
    description: "Explore my latest web development projects and creative experiments.",
    creator: "@boomiebehumble",
    images: ["https://www.pawis.xyz/Homepage.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="https://i.postimg.cc/Nj630DBT/logo1.png" />
        <meta name="theme-color" content="#000000" />

        {/* SEO Meta Tags */}
        <meta name="title" content="Boomieindahouse — Portfolio" />
        <meta
          name="description"
          content="Welcome to my portfolio website showcasing my projects and skills."
        />
        <meta
          name="keywords"
          content="frontend developer, frontend developer and ux/ui designer, react portfolio, next.js portfolio, portfolio, boomieindahouse, elboomie, prawitsanat prapananyosanan, ux/ui designer, pawitsanat, pawitsanat papananyosanan"
        />
        <meta name="author" content="Boomieindahouse" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Boomieindahouse — Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my portfolio website showcasing my projects and skills."
        />
        <meta
          property="og:image"
          content="https://elboomie.vercel.app/Homepage1.png"
        />
        <meta property="og:url" content="https://elboomie.vercel.app/" />
        <meta property="og:site_name" content="Boomies Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boomieindahouse | Portfolio" />
        <meta
          name="twitter:description"
          content="Welcome to my portfolio website showcasing my projects and skills."
        />
        <meta
          name="twitter:image"
          content="https://elboomie.vercel.app/Homepage1.png"
        />
        <meta name="twitter:site" content="@boomiebehumble" />
        <meta name="twitter:creator" content="@boomiebehumble" />
      </head>
      <body className={`${albertSans.className} min-h-screen bg-black`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}