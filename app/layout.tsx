import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/themeProvider";
// import DarkModeButton from "@/components/ui/darkModeButton";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
// import {ClerkProvider} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <div className=" grid col-start-2 grid-rows-[0.1fr_0.9fr] max-h-screen">
                {/* Navbar */}
                <div className="sticky top-0  flex items-center justify-between p-2 border-b-2 shadow-lg dark:shadow-gray-800/50 dark:shadow-md">
                  <Navbar/>
                </div>
                {/* children */}
                <div className="grid  rounded-3xl row-start-2 h-[calc(120vh)] md:max-h-[calc(92vh)] lg:max-h-[calc(85vh)]  m-5 p-5 md:p-0 space-y-2">
                  {children}
                </div>
            </div>
            </ThemeProvider>      </body>
      </html>
    </ClerkProvider>
  );
}
