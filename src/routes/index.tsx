import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check, Play, Sparkles } from 'lucide-react'
import type { CSSProperties } from 'react'
import { examTracks, resources, schoolClasses, subjects, testimonials } from '@/data/education'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy reveal">
          <span className="eyebrow">Learning that stays with you</span>
          <h1>One focused session can change your <em>whole week.</em></h1>
          <p>Structured live classes, complete modules, practice sheets, question banks and test series for Classes 8–12, JEE, NEET and working professionals.</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/pricing">Start at ₹4,000 <ArrowRight size={18} /></Link>
            <Link className="text-link" to="/courses"><span className="play-icon"><Play size={15} fill="currentColor" /></span> Explore programmes</Link>
          </div>
          <div className="trust-row"><span><Check size={16} /> Live doubt support</span><span><Check size={16} /> Bilingual teaching</span><span><Check size={16} /> Progress reports</span></div>
        </div>
        <div className="hero-visual reveal delay-1">
          <div className="hero-photo-frame"><img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85" alt="Students learning together on a university campus" /></div>
          <div className="poster-card poster-jee"><span>2026</span><strong>JEE + NEET</strong><small>Power revision sessions</small><div className="poster-line" /><b>Admissions open</b></div>
          <div className="score-note"><Sparkles size={18} /><div><strong>92% learners</strong><span>finish their weekly study plan</span></div></div>
        </div>
      </section>

      <section className="ticker" aria-label="Included learning resources"><div>LIVE CLASSES <span>✦</span> MODULES <span>✦</span> PRACTICE SHEETS <span>✦</span> QUESTION BANK <span>✦</span> TEST SERIES <span>✦</span> DOUBT ROOMS</div></section>

      <section className="section wrap">
        <div className="section-heading split-heading"><div><span className="eyebrow">Choose your classroom</span><h2>Built for every serious learner.</h2></div><p>School foundations, competitive exam depth, and professional skills—all taught through a plan you can actually follow.</p></div>
        <div className="grade-ribbon">
          {schoolClasses.map((item) => <Link to="/school" className={`grade-card ${item.tone}`} key={item.grade}><span>{item.grade}</span><strong>{item.title}</strong><small>{item.subjects}</small><ArrowRight size={20} /></Link>)}
        </div>
      </section>

      <section className="section section-ink">
        <div className="wrap">
          <div className="section-heading light split-heading"><div><span className="eyebrow">Competitive preparation</span><h2>Train for the paper.<br />Think beyond it.</h2></div><Link className="button button-yellow" to="/exams">Compare exam tracks <ArrowRight size={18} /></Link></div>
          <div className="exam-feature-grid">
            {examTracks.map((track) => <article className="exam-feature" key={track.name}><img src={track.image} alt={`${track.name} learning environment`} /><div className="exam-overlay"><track.icon /><span>{track.eyebrow}</span><h3>{track.name}</h3><p>{track.description}</p><div className="stat-row">{track.stats.map((stat) => <b key={stat}>{stat}</b>)}</div></div></article>)}
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="learning-layout">
          <div className="learning-copy"><span className="eyebrow">The complete package</span><h2>Everything between “I don’t get it” and “I can solve it.”</h2><p>Each chapter moves through a deliberate loop: understand, practise, test, review and repeat.</p><Link className="text-link arrow-link" to="/resources">See all learning resources <ArrowRight size={18} /></Link></div>
          <div className="resource-stack">{resources.map((resource, index) => <article key={resource.title} style={{ '--stack-index': index } as CSSProperties}><resource.icon /><div><span>{resource.count}</span><h3>{resource.title}</h3><p>{resource.copy}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section yellow-panel">
        <div className="wrap subjects-layout">
          <div><span className="eyebrow">From school to the workplace</span><h2>Strong concepts.<br />Useful skills.</h2><p>Experienced educators turn difficult ideas into memorable explanations, then help learners apply them independently.</p></div>
          <div className="subject-list">{subjects.map((subject, index) => <div key={subject.name}><span>{String(index + 1).padStart(2, '0')}</span><subject.icon /><div><h3>{subject.name}</h3><p>{subject.text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-heading"><span className="eyebrow">Learner notes</span><h2>Progress, in their own words.</h2></div>
        <div className="testimonial-grid">{testimonials.map((item, index) => <blockquote key={item.name} className={index === 1 ? 'featured-quote' : ''}><span>“</span><p>{item.quote}</p><footer><strong>{item.name}</strong><small>{item.meta}</small></footer></blockquote>)}</div>
      </section>

      <section className="cta-band wrap"><div><span className="eyebrow">Your study plan starts here</span><h2>Premium learning, without the premium confusion.</h2></div><div><span className="price-kicker">Plans from</span><strong>₹4,000</strong><small>Premium complete plan ₹10,000</small></div><Link className="button button-dark" to="/pricing">Choose your plan <ArrowRight size={18} /></Link></section>
    </>
  )
}
