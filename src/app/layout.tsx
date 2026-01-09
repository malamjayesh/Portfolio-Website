import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ClientProvider from "./client-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Flexa Digital - Digital Product Studio",
  description: "We build digital products that grow businesses. Product-led design, scalable engineering, clear results.",
  keywords: "web development, mobile apps, UI/UX design, digital marketing, cloud solutions",
  authors: [{ name: "Flexa Digital" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Flexa Digital - Digital Product Studio",
    description: "We build digital products that grow businesses",
    url: "https://flexadigital.com",
    siteName: "Flexa Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexa Digital - Digital Product Studio",
    description: "We build digital products that grow businesses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`} suppressHydrationWarning>
        <ClientProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ClientProvider>
      </body>
    </html>
  );
}