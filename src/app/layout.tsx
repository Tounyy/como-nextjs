import "@/styles/globals.css";
import "@/styles/style.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Home - COMO</title>
      <link rel="icon" href="/img/favicon.ico" />
      <body>{children}</body>
    </html>
  );
}