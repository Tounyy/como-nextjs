export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>COMO Data - COMO</title>
      <body>{children}</body>
    </html>
  );
}