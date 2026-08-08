import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Morzen - Construindo um legado, com você",
  description:
    "A Morzen constrói produtos digitais lado a lado com seus clientes e compartilha cada etapa do caminho com transparência.",
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
    title: "Morzen - Construindo um legado, com você",
    description:
      "A Morzen constrói produtos digitais lado a lado com seus clientes e compartilha cada etapa do caminho com transparência.",
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
    title: "Morzen - Construindo um legado, com você",
    description: "A Morzen constrói produtos digitais lado a lado com seus clientes e compartilha cada etapa do caminho com transparência.",
    images: ["https://morzen.com.br/og.png"],
    site: "@morzen.zenmor",
    creator: "@morzen.zenmor",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
