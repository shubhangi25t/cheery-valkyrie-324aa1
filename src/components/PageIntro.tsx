import type { ReactNode } from 'react'

export function PageIntro({ eyebrow, title, copy, aside }: { eyebrow: string; title: string; copy: string; aside?: ReactNode }) {
  return (
    <section className="page-intro wrap">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
      {aside && <div className="page-intro-aside">{aside}</div>}
    </section>
  )
}
