import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check, Crosshair, FlaskConical, Gauge, ScanSearch } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'
import { examTracks } from '@/data/education'

export const Route = createFileRoute('/exams')({ component: ExamsPage })

function ExamsPage() {
  return (
    <>
      <PageIntro eyebrow="JEE & NEET" title="Preparation built around questions, not promises." copy="A rigorous learning and testing system for students targeting engineering and medical entrance exams, with clear chapter sequencing and personal performance analysis." aside={<div className="rank-card"><span>Target</span><strong>2027</strong><small>Early-start and dropper batches</small></div>} />
      <section className="wrap route-section exam-track-list">
        {examTracks.map((track, index) => <article key={track.name} className={index % 2 ? 'reverse' : ''}><div className="exam-track-image"><img src={track.image} alt={`${track.name} students studying`} /><span><track.icon /> {track.eyebrow}</span></div><div><span className="eyebrow">Track 0{index + 1}</span><h2>{track.name}</h2><p>{track.description}</p><ul><li><Check /> Full syllabus live classes</li><li><Check /> Chapter DPPs and PYQ banks</li><li><Check /> Part and full syllabus test series</li><li><Check /> Recorded revision library</li></ul><div className="stat-row ink-stats">{track.stats.map((stat) => <b key={stat}>{stat}</b>)}</div><Link className="button button-dark" to="/pricing">View batch plans <ArrowRight size={18} /></Link></div></article>)}
      </section>
      <section className="yellow-panel route-section"><div className="wrap"><div className="section-heading split-heading"><div><span className="eyebrow">The rank-building loop</span><h2>Learn. Attempt. Diagnose. Repair.</h2></div><p>Every test should change the way the next week is studied. Our reports convert scores into specific revision tasks.</p></div><div className="exam-loop"><div><FlaskConical /><span>01</span><h3>Concept lab</h3><p>Build intuition before memorising methods.</p></div><div><Crosshair /><span>02</span><h3>Timed attempt</h3><p>Practise selection, speed and accuracy.</p></div><div><ScanSearch /><span>03</span><h3>Error diagnosis</h3><p>Separate concept, calculation and strategy gaps.</p></div><div><Gauge /><span>04</span><h3>Repair plan</h3><p>Receive a focused seven-day revision list.</p></div></div></div></section>
    </>
  )
}
