export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="px-8 lg:px-16 bg-gradient-to-br from-purple-50 to-blue-100">
      {children}
    </main>
  );
}
