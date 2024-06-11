import type { Metadata } from "next";
import { Inconsolata } from "@next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inconsolata({ 
  subsets: ["latin"] ,
  weight:'400',
});

export const metadata: Metadata = {
  title: "Akshay",
  description: "Portfolio project built with nextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>


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
