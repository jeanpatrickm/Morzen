import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Morzen - Desenvolvimento de Software",
  description:
    "Transformamos suas ideias em soluções digitais inovadoras, com foco em performance, escalabilidade e experiência do usuário.",
  keywords: [
    "Desenvolvimento de software",
    "Aplicativos web",
    "Soluções digitais",
    "Agência de tecnologia",
    "Desenvolvimento personalizado",
    "Morzen",
  ],
  authors: [{ name: "Morzen", url: "https://morzen.com.br" }],
  creator: "Morzen",
  publisher: "Morzen",
  metadataBase: new URL("https://morzen.com.br"),
  alternates: {
    canonical: "https://morzen.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://morzen.com.br",
    title: "Morzen - Desenvolvimento de Software",
    description:
      "Transformamos suas ideias em soluções digitais inovadoras, com foco em performance, escalabilidade e experiência do usuário.",
    siteName: "Morzen",
    images: [
      {
        url: "https://morzen.com.br/og.png",
        width: 1200,
        height: 630,
        alt: "Logo da Morzen com fundo escuro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morzen - Desenvolvimento de Software",
    description:
      "Transformamos suas ideias em soluções digitais inovadoras, com foco em performance, escalabilidade e experiência do usuário.",
    images: ["https://morzen.com.br/og.png"],
    site: "@morzen.zenmor",
    creator: "@morzen.zenmor",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
