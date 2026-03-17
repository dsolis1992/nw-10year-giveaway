import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NW Window Tinting | 10-Year Anniversary Giveaway — Win Free Tint',
  description:
    'Enter to win one of 10 anniversary tint prizes from Clark County\'s most trusted tint shop. NW Window Tinting is celebrating 10 years with a giveaway for local drivers in Vancouver, WA.',
  openGraph: {
    title: 'NW Window Tinting | 10-Year Anniversary Giveaway',
    description:
      'Win one of 10 tint prizes. Enter now — Clark County\'s most trusted shop is celebrating a decade.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
