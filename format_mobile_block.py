from pathlib import Path
path = Path('src/components/navbar.tsx')
text = path.read_text()
mobile_start = text.find('              <div className="flex flex-col gap-4 text-base">')
if mobile_start == -1:
    raise SystemExit('mobile start not found')
motion_div = '            </motion.div>'
mobile_end = text.find(motion_div, mobile_start)
if mobile_end == -1:
    raise SystemExit('motion div not found')
mobile_block = '''              <div className="flex flex-col gap-4 text-base">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    className="rounded-md px-2 py-1 transition hover:bg-white/10"
                  >
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
                  <a
                    href={contactLink}
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-400"
                  >
                    Hire Me
                  </a>
                )}
              </div>\n'''
text = text[:mobile_start] + mobile_block + text[mobile_end:]
path.write_text(text)
