import { createFileRoute } from '@tanstack/react-router'
import { ArrowDownToLine, Check, Files, Highlighter, Search, SlidersHorizontal } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'
import { resources } from '@/data/education'

export const Route = createFileRoute('/resources')({ component: ResourcesPage })

function ResourcesPage() {
  return (
    <>
      <PageIntro eyebrow="Learning library" title="The right material, in the right order." copy="No random PDF folders. Every module, practice sheet and question set sits inside a chapter path and supports a specific learning outcome." aside={<div className="paper-stack"><span>MODULE</span><span>DPP</span><span>TEST</span></div>} />
      <section className="wrap route-section resource-library-grid">{resources.map((resource, index) => <article key={resource.title}><div className="resource-top"><resource.icon /><span>0{index + 1}</span></div><strong>{resource.count}</strong><h2>{resource.title}</h2><p>{resource.copy}</p><ul><li><Check /> Downloadable and print-ready</li><li><Check /> Solutions with key steps</li><li><Check /> Updated chapter sequence</li></ul></article>)}</section>
      <section className="section-ink route-section"><div className="wrap library-preview"><div><span className="eyebrow">Question bank preview</span><h2>Find the exact practice you need.</h2><p>Filter by subject, chapter, difficulty, exam, question type and previous-year source.</p><div className="preview-tools"><span><Search /> Search 26,000+ questions</span><span><SlidersHorizontal /> 12 active filters</span><span><ArrowDownToLine /> Save as a practice set</span></div></div><div className="question-sheet"><div className="sheet-bar"><span>Physics · Electrostatics</span><b>JEE Main</b></div><h3>Two identical charged particles are released from rest...</h3><div className="answer-lines"><span>A</span><i /><span>B</span><i /><span>C</span><i /><span>D</span><i /></div><footer><span><Highlighter /> Medium</span><span><Files /> PYQ 2024</span></footer></div></div></section>
      <section className="wrap route-section"><div className="module-spread"><div className="module-cover"><span>STUDY SESSIONS / BIOLOGY</span><strong>Human<br />Physiology</strong><small>Concept module 07 · NEET UG</small></div><div className="module-content"><span className="eyebrow">Inside each module</span><h2>Designed for active reading.</h2><p>Short explanations, clear diagrams, worked examples and retrieval checkpoints keep every page useful.</p><ol><li><span>01</span>Chapter map and prerequisites</li><li><span>02</span>Concept explanations and diagrams</li><li><span>03</span>Solved examples and common errors</li><li><span>04</span>Checkpoint questions and summary</li></ol></div></div></section>
    </>
  )
}
