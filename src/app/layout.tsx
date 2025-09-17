import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { CursorGlow } from '@/components/cursor-glow';
import { Navbar } from '@/components/navbar';
import { SiteFooter } from '@/components/site-footer';
import { ThemeProvider } from '@/components/theme-provider';
import { baseProfile } from '@/utils/baseProfile';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const pageTitle = `${baseProfile.name} — ${baseProfile.title}`;
const description = baseProfile.about;
const websiteUrl = baseProfile.website ? (baseProfile.website.startsWith('http') ? baseProfile.website : `https://${baseProfile.website}`) : undefined;
const metadataBase = websiteUrl ? new URL(websiteUrl) : undefined;

export const metadata: Metadata = {
	title: pageTitle,
	description,
	metadataBase,
	icons: { icon: '/logo.png', shortcut: '/logo.png', apple: '/logo.png' },
	openGraph: {
		title: pageTitle,
		description,
		url: websiteUrl,
		siteName: baseProfile.name,
		images: [{ url: '/profile.svg', width: 1200, height: 630, alt: baseProfile.name }],
	},
	twitter: {
		card: 'summary_large_image',
		title: pageTitle,
		description,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-100 text-slate-900 antialiased transition-colors`}>
				<ThemeProvider>
					<div className="relative flex min-h-screen flex-col overflow-hidden">
						<div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(140deg,_rgba(248,250,252,1)_0%,_rgba(224,242,254,0.5)_45%,_rgba(191,219,254,0.5)_70%)]" aria-hidden />
						<CursorGlow />
						<Navbar />
						<main className="relative z-10 flex-1 pt-24">{children}</main>
						<SiteFooter />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
