import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inclusivemarket.com"),
  title: {
    default: "Inclusive Market Limited (IML) | Corporate Platform",
    template: "%s | Inclusive Market Limited",
  },
  description:
    "Inclusive Market Limited (IML) is a diversified Nigerian commercial enterprise operating across Commerce & Trading, Logistics, Warehousing, Technology & ICT, Marketing, and Consulting.",
  keywords: [
    "Inclusive Market Limited",
    "IML Nigeria",
    "Commercial Trading Nigeria",
    "Logistics and Distribution",
    "Warehousing and Cold Storage",
    "Technology and ICT Services",
    "Nigerian Corporate Enterprise",
    "B2B Supply Chain Nigeria",
  ],
  authors: [{ name: "Inclusive Market Limited" }],
  creator: "Inclusive Market Limited",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://inclusivemarket.com",
    siteName: "Inclusive Market Limited",
    title: "Inclusive Market Limited | Commerce, Logistics & Technology",
    description:
      "Official corporate website of Inclusive Market Limited. Discover our integrated capabilities in commerce, warehousing, logistics, technology, and business consulting.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
