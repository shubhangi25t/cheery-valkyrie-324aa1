import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BookOpenCheck, CalendarCheck2, MessageCircleQuestion, Presentation } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'
import { schoolClasses } from '@/data/education'

export const Route = createFileRoute('/school')({ component: SchoolPage })

function SchoolPage() {
  return (
    <>
      <PageIntro eyebrow="Classes 8–12" title="School learning that builds, not rushes." copy="Complete CBSE-aligned preparation with concept classes, subject modules, answer-writing practice and regular parent updates." aside={<div className="grade-seal"><span>8</span><i>to</i><span>12</span><small>Complete school programme</small></div>} />
      <section className="wrap route-section school-path">
        {schoolClasses.map((item, index) => <article key={item.grade}><div className="path-number">{item.grade}</div><div><span className="eyebrow">Class {item.grade}</span><h2>{item.title}</h2><p>{item.subjects}</p><ul><li>Live subject classes</li><li>Chapter modules + DPP sheets</li><li>Monthly tests and reports</li></ul></div><Link to="/pricing" aria-label={`See pricing for Class ${item.grade}`}><ArrowRight /></Link>{index < schoolClasses.length - 1 && <span className="path-line" />}</article>)}
      </section>
      <section className="section-ink route-section"><div className="wrap school-highlight"><div><span className="eyebrow">Board years, handled carefully</span><h2>Class 10 and 12 get a separate exam rhythm.</h2><p>Pre-boards, chapter revision, timed writing and mistake analysis sit alongside regular concept learning.</p><Link className="button button-yellow" to="/test-series">Explore board tests <ArrowRight size={18} /></Link></div><div className="board-poster"><span>BOARD<br />READY</span><strong>90-day revision map</strong><div>Sample papers / answer frameworks / weekly analysis</div></div></div></section>
      <section className="wrap route-section"><div className="section-heading"><span className="eyebrow">Included in every class</span><h2>A dependable support system.</h2></div><div className="four-feature-grid"><article><Presentation /><h3>Live teaching</h3><p>Concept-first lessons with worked examples and classroom interaction.</p></article><article><BookOpenCheck /><h3>Complete study material</h3><p>Modules, short notes, solved examples and chapter practice.</p></article><article><MessageCircleQuestion /><h3>Doubt support</h3><p>Scheduled rooms and question support between live classes.</p></article><article><CalendarCheck2 /><h3>Progress calendar</h3><p>Weekly goals, test records and clear next actions for families.</p></article></div></section>
    </>
  )
}
