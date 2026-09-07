import { createFileRoute } from '@tanstack/react-router'
import { Check, ShieldCheck, Sparkles } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'

export const Route = createFileRoute('/pricing')({ component: PricingPage })

const plans = [
  { name: 'Starter Trial', price: '₹4,000', note: '4-week guided start', description: 'Experience the Study Sessions rhythm before joining a complete batch.', features: ['Live classes for one selected track', 'Digital chapter modules', 'Weekly practice sheets', 'One progress test', 'Doubt-room access'], featured: false },
  { name: 'Premium Complete', price: '₹10,000', note: 'Complete academic package', description: 'The full learning and practice system for one school or exam programme.', features: ['Complete live course access', 'All subject modules and sheets', 'Full question bank access', 'Complete test series', 'Recorded revision library', 'Doubt support and progress reports'], featured: true },
]

function PricingPage() {
  return (
    <>
      <PageIntro eyebrow="Simple pricing" title="Choose the support your goal needs." copy="Start with a focused four-week trial or join the complete premium programme. Clear inclusions, no confusing add-on packs." aside={<div className="price-stamp"><Sparkles /><span>Complete package</span><strong>₹10,000</strong></div>} />
      <section className="wrap route-section pricing-grid">{plans.map((plan) => <article className={plan.featured ? 'pricing-card featured-plan' : 'pricing-card'} key={plan.name}>{plan.featured && <span className="popular-tag">Most complete</span>}<span className="eyebrow">{plan.note}</span><h2>{plan.name}</h2><div className="plan-price">{plan.price}<small>one-time programme fee</small></div><p>{plan.description}</p><a className={plan.featured ? 'button button-yellow' : 'button button-dark'} href="mailto:admissions@studysessions.in?subject=Study Sessions plan enquiry">Enquire for admission</a><ul>{plan.features.map((feature) => <li key={feature}><Check /> {feature}</li>)}</ul></article>)}</section>
      <section className="wrap pricing-note"><ShieldCheck /><div><strong>Responsible learning promise</strong><p>Study Sessions does not promise ranks or marks. We promise qualified teaching, complete materials, regular practice and honest progress feedback.</p></div></section>
      <section className="route-section yellow-panel"><div className="wrap comparison"><div><span className="eyebrow">What is included</span><h2>The complete learning package.</h2></div><div className="comparison-grid"><span>Live interactive classes <Check /></span><span>Complete subject modules <Check /></span><span>Daily practice sheets <Check /></span><span>26,000+ question bank <Check /></span><span>Chapter + full tests <Check /></span><span>Doubt-solving rooms <Check /></span><span>Progress analytics <Check /></span><span>Revision recordings <Check /></span></div></div></section>
    </>
  )
}
