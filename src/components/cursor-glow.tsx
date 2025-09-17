'use client';

import { useEffect, useState } from 'react';

export function CursorGlow() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updatePosition = (event: PointerEvent) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('pointermove', updatePosition, { passive: true });
		return () => window.removeEventListener('pointermove', updatePosition);
	}, []);

	return (
		<div className="pointer-events-none fixed inset-0 z-0">
			<div
				className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(148,197,255,0.08),_transparent_70%)] blur-3xl transition-opacity duration-500"
				aria-hidden
			/>
			<div
				className="absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[110px] transition-transform duration-300 ease-out md:h-80 md:w-80"
				style={{
					transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
					background: 'radial-gradient(circle at center, rgba(180,219,255,0.7) 0%, rgba(125,211,252,0.45) 40%, rgba(14,165,233,0.22) 65%, transparent 85%)',
					mixBlendMode: 'screen',
				}}
			/>
		</div>
	);
}
