'use client';

import { motion } from 'framer-motion';
import { SiBootstrap, SiCss3, SiFigma, SiHtml5, SiJavascript, SiTypescript, SiJquery, SiMysql, SiPhp, SiReact, SiSass, SiTailwindcss, SiWordpress, SiLaravel, SiNodedotjs } from 'react-icons/si';

const TECHNOLOGIES = [
	{ name: 'HTML5', icon: SiHtml5 },
	{ name: 'CSS3', icon: SiCss3 },
	{ name: 'JavaScript', icon: SiJavascript },
	{ name: 'TypeScript', icon: SiTypescript },
	{ name: 'Node.js', icon: SiNodedotjs },
	{ name: 'TailwindCSS', icon: SiTailwindcss },
	{ name: 'Bootstrap', icon: SiBootstrap },
	{ name: 'PHP', icon: SiPhp },
	{ name: 'Laravel', icon: SiLaravel },
	{ name: 'MySQL', icon: SiMysql },
	{ name: 'ReactJS', icon: SiReact },
	{ name: 'React Native', icon: SiReact },
	{ name: 'WordPress', icon: SiWordpress },
	{ name: 'jQuery', icon: SiJquery },
	{ name: 'Sass', icon: SiSass },
	{ name: 'Figma', icon: SiFigma },
];

export function TechStackSection() {
	return (
		<section id="tech" className="relative py-12 sm:py-20">
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Tech Stack</h2>
					<p className="mx-auto max-w-2xl text-base text-slate-600">Tools I rely on to architect, iterate, and ship modern products that scale gracefully.</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
					{TECHNOLOGIES.map(({ name, icon: Icon }, index) => (
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
							<p className="mt-4 text-sm font-semibold text-slate-700 transition group-hover:text-slate-900">{name}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
