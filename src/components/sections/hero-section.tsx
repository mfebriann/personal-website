'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { baseProfile } from '@/utils/baseProfile';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '@/components/sections/projects-section';

const HERO_VARIANTS = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0 },
};

const contactLink = baseProfile.email ? `mailto:${baseProfile.email}` : baseProfile.website;

const TOTAL_PROJECTS = FEATURED_PROJECTS.length + OTHER_PROJECTS.length;
const projectCountLabel = TOTAL_PROJECTS > 25 ? '25+' : `${TOTAL_PROJECTS}`;

export function HeroSection() {
	return (
		<section id="profile" className="relative overflow-hidden">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:py-24">
				<motion.div className="flex-1 space-y-8 text-center md:text-left" initial="hidden" animate="visible" transition={{ duration: 0.8, ease: 'easeOut' }} variants={HERO_VARIANTS}>
					<span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-400 backdrop-blur-md">{baseProfile.title}</span>
					<div className="space-y-4">
						<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-[3.25rem] sm:leading-[1.05]">I&apos;m {baseProfile.name}, crafting human-centered digital experiences that feel effortless.</h1>
						<p className="text-base leading-7 text-slate-600">{baseProfile.about}</p>
					</div>
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
						{contactLink && (
							<a
								href={contactLink}
								className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900/0"
							>
								Work With Me
							</a>
						)}
						<a
							href="#projects"
							className="inline-flex items-center justify-center rounded-full border border-slate-300/60 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
						>
							View Projects
						</a>
					</div>
					<div className="grid w-full grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/20 p-6 text-left shadow-xl backdrop-blur lg:w-3/4">
						<div className="flex flex-col justify-between">
							<p className="text-xs uppercase tracking-wide text-slate-500">Years Experience</p>
							<p className="mt-2 text-2xl font-semibold text-slate-900">3+</p>
						</div>
						<div className="flex flex-col justify-between">
							<p className="text-xs uppercase tracking-wide text-slate-500">Projects</p>
							<p className="mt-2 text-2xl font-semibold text-slate-900">{projectCountLabel}</p>
						</div>
					</div>
				</motion.div>

				<motion.div className="relative flex flex-1 items-center justify-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}>
					<div className="relative isolate">
						<div className="absolute -inset-6 rounded-[32px] bg-sky-400/40 blur-3xl" aria-hidden />
						<div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-4 backdrop-blur-xl shadow-[0_25px_60px_-25px_rgba(14,165,233,0.6)]">
							<div className="overflow-hidden rounded-[24px] bg-slate-900/80">
								<Image src="/photo.jpg" alt="It's me." width={420} height={420} className="h-auto w-[320px] sm:w-[360px]" priority />
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
