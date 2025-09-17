'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';

import { baseProfile } from '@/utils/baseProfile';
import Image from 'next/image';

const NAV_ITEMS = [
	{ href: '#profile', label: 'About' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#tech', label: 'Tech' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#contact', label: 'Contact' },
];

const contactLink = baseProfile.email ? `mailto:${baseProfile.email}` : baseProfile.website;
const resumeLink = baseProfile.resumeUrl;
const githubLink = baseProfile.github && baseProfile.github.length > 0 ? (baseProfile.github.startsWith('http') ? baseProfile.github : `https://github.com/${baseProfile.github}`) : undefined;

export function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const initials = useMemo(() => {
		return baseProfile.name
			.split(' ')
			.filter(Boolean)
			.map((part) => part[0]?.toUpperCase())
			.join('')
			.slice(0, 2);
	}, []);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [mobileOpen]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const closeMobile = () => setMobileOpen(false);

	return (
		<>
			<Head>
				<title>{`${baseProfile.name} - ${baseProfile.title}`}</title>
				<meta name="description" content={baseProfile.about} />
			</Head>

			<header
				className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'border-white/20 bg-white/80 backdrop-blur-xl shadow-sm' : 'border-transparent bg-transparent shadow-none'}`}
			>
				<div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
					<Link href="#profile" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
						<Image src={'/logo.png'} alt="logo" width={36} height={36} />
						<span>{baseProfile.name}</span>
					</Link>

					<nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 transition md:flex">
						{NAV_ITEMS.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="relative transition hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
							>
								{item.label}
							</a>
						))}
					</nav>

					<div className="flex items-center gap-3">
						{resumeLink && (
							<a
								href={resumeLink}
								target="_blank"
								rel="noopener noreferrer"
								className="hidden items-center justify-center rounded-full border border-slate-300/60 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 md:inline-flex"
							>
								Resume
							</a>
						)}
						{contactLink && (
							<a
								href={contactLink}
								className="hidden items-center justify-center rounded-full border border-sky-200/60 bg-sky-500/90 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 md:inline-flex"
							>
								Hire Me
							</a>
						)}
						{githubLink && (
							<Link
								href={githubLink}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Open GitHub profile"
								className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-300/60 text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 md:flex"
							>
								<Github className="h-5 w-5" />
							</Link>
						)}
						<button
							type="button"
							className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-slate-900 shadow transition hover:border-slate-300 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:hidden"
							onClick={() => setMobileOpen((open) => !open)}
							aria-label="Toggle navigation"
							aria-expanded={mobileOpen}
						>
							{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</button>
					</div>
				</div>
			</header>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden" onClick={closeMobile}>
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', stiffness: 260, damping: 30 }}
							className="absolute right-0 top-0 flex h-full w-72 flex-col gap-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-slate-200 shadow-xl"
							onClick={(event) => event.stopPropagation()}
						>
							<div className="flex items-center justify-between">
								<span className="text-lg font-semibold">Navigation</span>
								<button type="button" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-100 transition hover:bg-white/10" onClick={closeMobile} aria-label="Close navigation">
									<X className="h-4 w-4" />
								</button>
							</div>
							<div className="flex flex-col gap-4 text-base">
								{NAV_ITEMS.map((item) => (
									<a key={item.href} href={item.href} onClick={closeMobile} className="rounded-md px-2 py-1 transition hover:bg-white/10">
										{item.label}
									</a>
								))}
								{githubLink && (
									<a
										href={githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center rounded-full border border-slate-200/60 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 shadow-lg transition hover:border-slate-100/80 hover:bg-white/15"
									>
										GitHub
									</a>
								)}
								{resumeLink && (
									<a
										href={resumeLink}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center rounded-full border border-slate-200/60 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 shadow-lg transition hover:border-slate-100/80 hover:bg-white/15"
									>
										Resume
									</a>
								)}
								{contactLink && (
									<a href={contactLink} className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-400">
										Hire Me
									</a>
								)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
