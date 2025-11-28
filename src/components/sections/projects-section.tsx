'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type FeaturedProject = {
	title: string;
	description: string;
	image: string;
	link?: string;
	github?: string;
	tags: string[];
};

type Project = {
	title: string;
	description: string;
	tags: string[];
	link?: string;
	github?: string;
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
	{
		title: 'Youtz Media',
		description:
			'YoutzMedia is a digital media platform that delivers articles, information, and educational content through a modern and accessible interface. Developed in collaboration with a backend team to ensure a fast, stable, and well-structured system.',
		image: '/projects/youtzmedia.png',
		link: 'https://youtzmedia.id/',
		github: '',
		tags: ['Laravel', 'TailwindCSS'],
	},
	{
		title: 'MARS Law Firm',
		description: 'Mars Law Firm Office is a law-firm website presenting its services, firm profile and contact information in a professional layout. Built with a backend team for a robust, well-structured, and responsive system.',
		image: '/projects/marslawfirm.png',
		link: 'https://marslawfirmoffice.com/',
		github: '',
		tags: ['Laravel', 'TailwindCSS'],
	},
	{
		title: 'MCKY Studio Labs',
		description:
			"A creative studio dedicated to developing original games. Focus on strong storytelling and striking visuals, believing that games can convey extraordinary messages, emotions, and experiences. The game includes 'Echoes Of Paur' and 'PARMAN'.",
		image: '/projects/mckystudiolabs.webp',
		link: 'https://www.mckystudiolabs.com/',
		tags: ['ReactJS', 'Typescript', 'TailwindCSS', 'Vite'],
	},
];

export const OTHER_PROJECTS: Project[] = [
	{
		title: 'FYP Media',
		description:
			'FYP Media is a digital media platform offering articles, news, and educational content through a clean and user-friendly interface. Developed in collaboration with a backend team to ensure performance, structure, and reliability.',
		link: 'https://fypmedia.id/',
		github: '',
		tags: ['Laravel', 'TailwindCSS'],
	},
	{
		title: 'Harly Law',
		description: 'A law-firm website presenting the firm’s brand identity, services, team, articles, gallery, and contact information in a clean and professional layout for clients and visitors.',
		link: 'https://harlylaw.com/',
		github: '',
		tags: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
	},
	{
		title: 'Sopwerhos',
		description: 'Company profile website built with modern Next.js stack. Showcasing services, clean design, and responsive layout optimized for businesses in Indonesia.',
		link: 'https://sopwerhos.vercel.app/',
		github: '',
		tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Redux', 'Radix', 'Framer Motion', 'Vibe Coding'],
	},
	{
		title: 'Gemilang Taruna',
		description:
			"A modern website for Gemilang Taruna, a local food stall established in 2023. It showcases the brand's identity, menu offerings, and story with a clean design. Key features include a responsive layout, product gallery, and contact section, making it easy for customers to explore the menu and connect with the business.",
		link: 'https://gemilang-taruna-website.vercel.app/',
		github: 'https://github.com/mfebriann/GemilangTaruna_Website',
		tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Redux', 'Framer Motion', 'Vibe Coding'],
	},
	{
		title: 'Practice Vocabulary',
		description: 'A simple website to practice English singular & plural nouns with randomized quizzes and saved progress-built as a learning project for React + TypeScript, Vite, React Router, localStorage, and Tailwind CSS.',
		link: 'https://practice-vocabulary-theta.vercel.app/',
		github: 'https://github.com/mfebriann/Practice_Vocabulary',
		tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'React Router', 'LocalStorage', 'Vibe Coding'],
	},
	{
		title: 'Cari FilmNyok',
		description: 'A simple website for search movies and know about the details of the movie. This website just for me to learn about Javascript async/await, Module Bundler (Webpack), LocalStorage and TailwindCSS.',
		link: 'https://mfebriann.github.io/Cari-FilmNyok/',
		github: 'https://github.com/mfebriann/Cari-FilmNyok',
		tags: ['HTML5', 'TailwindCSS', 'Javascript', 'Webpack', 'OMDb API'],
	},
	{
		title: 'Pokedek',
		description: 'Simple website about finding pokemon and learning about API. API used is PokeAPI and this website inspired by Pokemon Pokedex Ebon',
		tags: ['ReactJS', 'TailwindCSS', 'PokeAPI'],
		github: 'https://github.com/mfebriann/pokemon-pokedekV2',
		link: 'https://pokemon-pokedek-v2.netlify.app/',
	},
	{
		title: 'Mechabot',
		description: 'Simple website for showcasing and exploring NFT collections. The site serves as a gallery to display digital artworks and connects to OpenSea for trading.',
		tags: ['HTML', 'TailwindCSS', 'Javascript'],
		github: 'https://github.com/mfebriann/Mechabot',
		link: 'https://mechabot.vercel.app/',
	},
];

export function ProjectsSection() {
	const [visibleProjects, setVisibleProjects] = useState(6);

	const showMore = () => {
		setVisibleProjects((previous) => Math.min(previous + 6, OTHER_PROJECTS.length));
	};

	const hasMore = visibleProjects < OTHER_PROJECTS.length;

	return (
		<section id="projects" className="relative py-12 sm:py-20">
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Selected Work</h2>
					<p className="mx-auto max-w-2xl text-base text-slate-600">A snapshot of recent collaborations and experiments across product, platform, and design ecosystems.</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-3">
					{FEATURED_PROJECTS.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/20 shadow-xl backdrop-blur"
						>
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 33vw, 100vw" priority={index === 0} />
							</div>
							<div className="flex flex-1 flex-col gap-4 p-8">
								<div className="flex items-start flex-wrap justify-between gap-4">
									<div>
										<h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
									</div>
									<div className="flex flex-shrink-0 items-center gap-2">
										{project.github && (
											<Link
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/20 text-slate-900 transition hover:text-sky-500"
												aria-label={`View ${project.title} on GitHub`}
											>
												<Github className="h-4 w-4" />
											</Link>
										)}
										{project.link && (
											<Link
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/20 text-slate-900 transition hover:text-sky-500"
												aria-label={`Open ${project.title}`}
											>
												<ExternalLink className="h-4 w-4" />
											</Link>
										)}
									</div>
								</div>
								<p className="mt-2 text-sm text-slate-600">{project.description}</p>
								<div className="mt-auto flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
									{project.tags.map((tag) => (
										<span key={tag} className="rounded-full bg-slate-900/5 px-3 py-1">
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<div className="space-y-6">
					<h3 className="text-lg font-semibold text-slate-900">Other Projects</h3>
					<div className="grid gap-6 md:grid-cols-2">
						<AnimatePresence>
							{OTHER_PROJECTS.slice(0, visibleProjects).map((project) => (
								<motion.article
									key={project.title}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 10 }}
									transition={{ duration: 0.3 }}
									className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/15 p-6 shadow-lg backdrop-blur"
								>
									<div>
										<h4 className="text-lg font-semibold text-slate-900">{project.title}</h4>
										<p className="mt-2 text-sm text-slate-600">{project.description}</p>
									</div>
									{(project.link || project.github) && (
										<div className="flex items-center gap-2">
											{project.github && (
												<Link
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/20 text-slate-900 transition hover:text-sky-500"
													aria-label={`View ${project.title} on GitHub`}
												>
													<Github className="h-4 w-4" />
												</Link>
											)}
											{project.link && (
												<Link
													href={project.link}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/20 text-slate-900 transition hover:text-sky-500"
													aria-label={`Open ${project.title}`}
												>
													<ExternalLink className="h-4 w-4" />
												</Link>
											)}
										</div>
									)}
									<div className="mt-auto flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
										{project.tags.map((tag) => (
											<span key={tag} className="rounded-full bg-slate-900/5 px-3 py-1">
												{tag}
											</span>
										))}
									</div>
								</motion.article>
							))}
						</AnimatePresence>
					</div>
					{hasMore && (
						<div className="flex justify-center">
							<button
								type="button"
								onClick={showMore}
								className="inline-flex items-center gap-2 rounded-full border border-slate-300/40 bg-white/30 px-6 py-3 text-sm font-semibold text-slate-800 shadow-md transition hover:border-sky-400/60 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
							>
								Show More
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
