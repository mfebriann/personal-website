import { Github, Globe, Instagram, Linkedin, Mail } from 'lucide-react';

import { baseProfile } from '@/utils/baseProfile';

const toUrl = (value?: string) => {
	if (!value) {
		return undefined;
	}
	return value.startsWith('http') ? value : `https://${value}`;
};

const SOCIAL_LINKS = [
	baseProfile.github && {
		href: `https://github.com/${baseProfile.github}`,
		label: 'GitHub',
		icon: Github,
	},
	baseProfile.linkedin && {
		href: `https://www.linkedin.com/in/${baseProfile.linkedin}`,
		label: 'LinkedIn',
		icon: Linkedin,
	},
	baseProfile.instagram && {
		href: `https://www.instagram.com/${baseProfile.instagram}`,
		label: 'Instagram',
		icon: Instagram,
	},
	baseProfile.email && {
		href: `mailto:${baseProfile.email}`,
		label: 'Email',
		icon: Mail,
	},
].filter(Boolean) as {
	href: string;
	label: string;
	icon: typeof Github;
	newTab?: boolean;
}[];

export function SiteFooter() {
	return (
		<footer id="contact" className="relative border-t border-white/10 bg-white/10 py-12 backdrop-blur">
			<div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
				<div className="space-y-2">
					<p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{baseProfile.name}</p>
					<p className="text-sm text-slate-600">{baseProfile.title}</p>
					<p className="text-xs text-slate-500">
						Copyright {new Date().getFullYear()} {baseProfile.name}. All rights reserved.
					</p>
				</div>
				<div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
					{SOCIAL_LINKS.map(({ href, label, icon: Icon, newTab }) => (
						<a
							key={label}
							href={href}
							target={newTab || href.startsWith('http') ? '_blank' : undefined}
							rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
							className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/20 text-slate-900 transition hover:-translate-y-0.5 hover:text-sky-500"
							aria-label={label}
						>
							<Icon className="h-5 w-5" />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
