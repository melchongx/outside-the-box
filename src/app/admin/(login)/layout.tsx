import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Outside the Box Administrator',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen justify-center flex-col bg-otb-yellow`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
