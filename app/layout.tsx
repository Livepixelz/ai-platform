import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { CrispProvider } from '@/components/CrispProvider';
import type { Metadata } from 'next';
import { ModalProvider } from '@/components/ModalProvider';
import { Montserrat } from 'next/font/google';
import { ToasterProvider } from '@/components/ToasterProvider';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Livepixelz',
  description: 'AI Platform for Developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link
          rel="icon"
          href="/images/logo.svg"
          sizes="any"
        />
        <CrispProvider />
        <body className={font.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
