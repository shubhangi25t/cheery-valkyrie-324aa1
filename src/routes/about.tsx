import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About Study Sessions" title="Education should create confidence, not dependency." copy="Study Sessions is a responsible learning platform for school students, entrance-exam aspirants and professionals who want strong fundamentals and a repeatable way to improve." aside={<div className="manifesto-card"><span>OUR BELIEF</span><strong>Clarity<br />before speed.</strong><small>Practice before prediction.</small></div>} />
      <section className="wrap route-section story-layout"><div className="story-image"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85" alt="A diverse group of students discussing their studies" /><span>Built for learners across India</span></div><div><span className="eyebrow">Why we exist</span><h2>A calmer alternative to chaotic preparation.</h2><p>Students often collect more material than they can use. Professionals save courses they never finish. We built Study Sessions around a simpler idea: a clear weekly plan, excellent teaching, deliberate practice and feedback that tells you what to do next.</p><p>Our role is not to make learners study forever. It is to help them become increasingly independent.</p></div></section>
      <section className="route-section section-ink"><div className="wrap"><div className="section-heading light"><span className="eyebrow">Our principles</span><h2>Responsible by design.</h2></div><div className="principle-grid"><article><Lightbulb /><span>01</span><h3>Explain deeply</h3><p>We teach the reason behind methods, not only shortcuts.</p></article><article><BookOpen /><span>02</span><h3>Use less, better</h3><p>We organise material into one coherent learning path.</p></article><article><ShieldCheck /><span>03</span><h3>Report honestly</h3><p>We never guarantee ranks, marks, jobs or promotions.</p></article><article><HeartHandshake /><span>04</span><h3>Support respectfully</h3><p>We encourage discipline without fear-based pressure.</p></article></div></div></section>
      <section className="wrap route-section impact-strip"><div><strong>8–12</strong><span>School classes covered</span></div><div><strong>2</strong><span>Major entrance tracks</span></div><div><strong>26K+</strong><span>Practice questions</span></div><div><strong>1</strong><span>Clear weekly plan</span></div></section>
    </>
  )
}
