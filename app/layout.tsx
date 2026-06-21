import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  // Replace with your actual domain once live, e.g. "https://ankushsrivastava.dev"
  // This is what makes Open Graph image URLs absolute (required by social platforms)
  metadataBase: new URL("https://ankushsrivastava.com"),
  title: "Ankush Srivastava — Software Architect",
  description:
    "Software Architect with 9+ years building distributed systems, real-time platforms, and cloud-native APIs. Specialising in Golang, Java, Kafka, and high-throughput backend architecture.",
  keywords: [
    "Software Architect",
    "Golang",
    "Java",
    "Distributed Systems",
    "Microservices",
    "Kafka",
    "Backend Engineer",
    "Ankush Srivastava",
  ],
  authors: [{ name: "Ankush Srivastava" }],
  openGraph: {
    title: "Ankush Srivastava — Software Architect",
    description:
      "Software Architect with 9+ years building distributed systems, real-time platforms, and cloud-native APIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
