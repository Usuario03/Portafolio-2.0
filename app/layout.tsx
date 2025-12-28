import "./globals.css";
import Providers from "./components/Providers";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || !theme) {
                  document.documentElement.classList.add('dark');
                } else if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
