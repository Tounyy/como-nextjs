export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>COMO Python - COMO</title>
      <body>{children}</body>
    </html>
  );
}