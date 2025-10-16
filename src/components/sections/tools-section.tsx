'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { SiGit, SiGithub, SiGitlab, SiLaragon } from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';

const TOOLS = [
	{
		name: 'Git',
		icon: SiGit,
	},
	{
		name: 'GitHub',
		icon: SiGithub,
	},
	{
		name: 'GitLab',
		icon: SiGitlab,
	},
	{
		name: 'VSCode',
		icon: BiLogoVisualStudio,
	},
	{
		name: 'Laragon',
		icon: SiLaragon,
	},
	{
		name: 'Tabby',
		icon: Terminal,
	},
];

export function ToolsSection() {
	return (
		<section id="tools" className="relative py-12 sm:py-20">
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Tools</h2>
					<p className="mx-auto max-w-2xl text-base text-slate-600">Platforms and utilities I lean on daily to keep shipping smooth and dependable.</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
					{TOOLS.map(({ name, icon: Icon }, index) => (
						<motion.div
							key={name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/20 p-6 text-center shadow-lg backdrop-blur"
						>
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 via-sky-400/10 to-transparent text-slate-900 transition group-hover:-translate-y-1 group-hover:text-sky-500">
								<Icon className="h-8 w-8" />
							</div>
							<h3 className="mt-4 text-sm font-semibold text-slate-700 transition group-hover:text-slate-900">{name}</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
