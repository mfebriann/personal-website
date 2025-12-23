'use client';

import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';

const EXPERIENCES = [
	{
		role: 'IT Developer',
		company: 'PT Kreasi Potensi Indonesia',
		period: 'May 2025 - Present',
		location: '',
		type: 'work' as const,
		highlights: ['Make website company profile', 'Make website about agency', 'Maintenance company profile website'],
	},
	{
		role: 'Fullstack Web & Mobile Developer',
		company: 'PT XRUN Metaverse Indonesia',
		period: 'September 2022 - May 2025',
		location: '',
		type: 'work' as const,
		highlights: ['Make website company profile', 'Make layouting games with Unreal Engine 5', 'Make Metahint App', 'Make XRUN App', 'Make Afterlife App'],
	},
	{
		role: 'WordPress Developer',
		company: 'Zalepik Studio',
		period: 'August 2022 - September 2022',
		location: '',
		type: 'work' as const,
		highlights: ['Slicing design from Figma', 'Create a display for a medical buying and selling website WordPress, and custom HTML, CSS and JavaScript'],
	},
	{
		role: 'Volunteer Frontend Developer',
		company: 'Youth Ranger Indonesia',
		period: 'March - August 2022',
		location: 'Banten, South Tangerang',
		type: 'work' as const,
		highlights: [
			'Collaborate create a design for a Company Profile website using Figma',
			'Website repair according to design',
			'Improve website SEO',
			'Communicate and collaborate with Backend Developer, UI/UX, Copywriting and Graphic Designer',
		],
	},
	{
		role: 'Internship Frontend Developer',
		company: 'Boosternesia',
		period: 'January - March 2022',
		location: 'Bandung, West Java',
		type: 'work' as const,
		highlights: [
			'Create a design for a Company Profile website using Figma',
			'Slicing from design company profile become a website using HTML, CSS, JavaScript, SwiperJS and AOS',
			'Create a design dashboard for Employee Management using Figma',
			'Slicing from design dashboard employee management become a website using HTML, CSS and JavaScript',
			'Communicate and collaborate with Backend Developer',
		],
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0 },
};

export function ExperienceSection() {
	return (
		<section id="experience" className="relative py-12 sm:py-20">
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
				<div className="space-y-4 text-center md:text-left">
					<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Experience</h2>
					<p className="text-base text-slate-600 md:max-w-2xl">A snapshot of hands-on roles where I delivered web, mobile, and product experiences end-to-end.</p>
				</div>

				<div className="relative">
					<div className="absolute left-[23px] top-4 bottom-4 hidden w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent md:block" aria-hidden />
					<div className="flex flex-col gap-8">
						{EXPERIENCES.map((experience, index) => (
							<motion.article
								key={`${experience.role}-${experience.company}`}
								className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/30 p-6 shadow-xl backdrop-blur md:flex-row md:items-start md:gap-8"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								variants={cardVariants}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="hidden md:flex">
									<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500">
										<Briefcase className="h-6 w-6" />
									</div>
								</div>
								<div className="flex justify-center md:hidden">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500">
										<Briefcase className="h-5 w-5" />
									</div>
								</div>

								<div className="space-y-4">
									<div className="flex flex-col gap-2 text-center md:text-left">
										<span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
											{experience.period}
											{experience.location ? ` // ${experience.location}` : ''}
										</span>
										<h3 className="text-xl font-semibold text-slate-900">
											{experience.role} @ {experience.company}
										</h3>
									</div>

									<ul className="grid gap-2 text-sm text-slate-600">
										{experience.highlights.map((highlight) => (
											<li key={highlight} className="flex items-start gap-3 text-left">
												<ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-sky-500" aria-hidden />
												<span>{highlight}</span>
											</li>
										))}
									</ul>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
