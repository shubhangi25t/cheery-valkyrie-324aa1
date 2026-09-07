import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2, Clock3, MonitorPlay, UsersRound } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'
import { courseBundles, subjects } from '@/data/education'

export const Route = createFileRoute('/courses')({ component: CoursesPage })

function CoursesPage() {
  return (
    <>
      <PageIntro eyebrow="All programmes" title="A course for the goal in front of you." copy="Choose a structured programme for school, entrance exams, or professional growth. Every course includes live teaching, guided practice and measurable checkpoints." aside={<div className="mini-poster"><span>Study Sessions</span><strong>Learn. Practise.<br />Progress.</strong><small>One dependable weekly rhythm.</small></div>} />
      <section className="wrap route-section course-grid">
        {courseBundles.map((course, index) => <article className="course-card" key={course.title}><div className="course-index">0{index + 1}</div><course.icon /><span className="eyebrow">{course.label}</span><h2>{course.title}</h2><p>{course.copy}</p><div className="pill-row">{course.modules.map((module) => <span key={module}>{module}</span>)}</div><Link to={index === 2 ? '/exams' : index < 2 ? '/school' : '/pricing'}>View programme <ArrowRight size={18} /></Link></article>)}
      </section>
      <section className="route-section soft-section"><div className="wrap"><div className="section-heading split-heading"><div><span className="eyebrow">The session format</span><h2>Made to fit real weeks.</h2></div><p>A steady system keeps learners moving even when school, college or work gets busy.</p></div><div className="format-grid"><div><MonitorPlay /><strong>Live concept class</strong><span>90 focused minutes</span></div><div><Clock3 /><strong>Practice window</strong><span>Daily 30-minute sheet</span></div><div><UsersRound /><strong>Doubt room</strong><span>Small-group support</span></div><div><CheckCircle2 /><strong>Weekly checkpoint</strong><span>Test + action report</span></div></div></div></section>
      <section className="wrap route-section"><div className="section-heading"><span className="eyebrow">Subjects</span><h2>Depth across every key discipline.</h2></div><div className="subject-tile-grid">{subjects.map((subject) => <article key={subject.name}><subject.icon /><h3>{subject.name}</h3><p>{subject.text}</p></article>)}</div></section>
    </>
  )
}
