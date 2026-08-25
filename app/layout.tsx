import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = 'Forest Ridge Innovation & Emerging Technology Pathway';
const description =
  'A one-page interactive Grades 5-12 pathway showing Forest Ridge innovation, technology, robotics, AI, design, and leadership experiences.';

function getTrustedOrigin(host: string | null) {
  if (!host) {
    return 'http://localhost:3000';
  }

  if (host === 'localhost:3000' || host.endsWith('.openai.site')) {
    return `${host.startsWith('localhost') ? 'http' : 'https'}://${host}`;
  }

  return 'http://localhost:3000';
}

export async function generateMetadata(): Promise<Metadata> {
  const origin = getTrustedOrigin((await headers()).get('host'));
  const image = new URL('/og.png', origin).toString();

  return {
    title,
    description,
    openGraph: {
      title,
      description:
        'Explore the complete Grades 5-12 innovation journey from making and coding to AI, robotics, neurotechnology, and student leadership.',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description:
        'Explore the complete Grades 5-12 innovation journey from making and coding to student-led leadership.',
      images: [image],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
