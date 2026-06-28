import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Muhammad Maaz Bin Imtiaz | SQA Engineer",
  description:
    "SQA Engineer specializing in test automation, API testing, and performance testing. Based in Karachi, Pakistan.",
  keywords: ["SQA", "QA Engineer", "Playwright", "Selenium", "K6", "Postman", "Test Automation"],
};

import { ThemeProvider } from "./components/ThemeProvider";
import ClientParticles from "./components/ClientParticles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ClientParticles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
