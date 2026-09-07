import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BarChart3, CheckCircle2, Clock, Medal, TrendingUp } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'
import { testSeries } from '@/data/education'

export const Route = createFileRoute('/test-series')({ component: TestSeriesPage })

function TestSeriesPage() {
  return (
    <>
      <PageIntro eyebrow="Test series" title="Tests that teach after the timer stops." copy="Attempt exam-pattern papers, compare topic performance and receive a precise revision list after every submission." aside={<div className="timer-poster"><Clock /><strong>03:00:00</strong><span>Focus mode on</span></div>} />
      <section className="wrap route-section test-grid">{testSeries.map((test, index) => <article key={test.name}><div><test.icon /><span>Series 0{index + 1}</span></div><h2>{test.name}</h2><p>{test.for}</p><dl><div><dt>Tests</dt><dd>{test.tests}</dd></div><div><dt>Practice</dt><dd>{test.questions}</dd></div></dl><Link to="/pricing">Get this series <ArrowRight size={18} /></Link></article>)}</section>
      <section className="route-section soft-section"><div className="wrap analytics-layout"><div className="analytics-card"><div className="analytics-head"><div><span>Mock 12 performance</span><strong>JEE Main · PCM</strong></div><Medal /></div><div className="score-ring"><span><strong>186</strong>/300</span></div><div className="bar-row"><span>Physics</span><i><b style={{ width: '74%' }} /></i><strong>74%</strong></div><div className="bar-row"><span>Chemistry</span><i><b style={{ width: '68%' }} /></i><strong>68%</strong></div><div className="bar-row"><span>Maths</span><i><b style={{ width: '56%' }} /></i><strong>56%</strong></div></div><div><span className="eyebrow">Actionable analytics</span><h2>See more than a score.</h2><p>Track accuracy, time per question, subject balance and repeated error types. Each report ends with a seven-day repair plan.</p><ul className="check-list"><li><CheckCircle2 /> Topic-level strength map</li><li><BarChart3 /> Time and accuracy trends</li><li><TrendingUp /> Batch percentile movement</li></ul><Link className="button button-dark" to="/pricing">Start testing <ArrowRight size={18} /></Link></div></div></section>
    </>
  )
}
