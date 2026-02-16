import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-serif">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-medium tracking-tight">
            JourdanLabs
          </Link>
          <div className="flex gap-8 text-sm font-sans tracking-wide">
            <Link href="/work" className="hover:text-gray-600 transition-colors">Work</Link>
            <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
            Applied AI for Real Operations
          </p>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] mb-8">
            We build AI systems that <span className="italic">actually work</span> in production.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto mb-12">
            Independent applied AI lab. We design, test, and deploy production-ready systems for complex business workflows.
          </p>
          <Link 
            href="/contact" 
            className="inline-block font-sans text-sm tracking-wide border border-[#1A1A1A] px-8 py-3 hover:bg-[#1A1A1A] hover:text-[#FDFBF7] transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="h-px bg-[#E5E5E5]"></div>
      </div>

      {/* What We Do */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-16">
            Capabilities
          </p>
          
          <div className="space-y-16">
            <article className="group cursor-pointer">
              <h2 className="text-3xl font-normal mb-4 group-hover:italic transition-all">
                AI Workflow Automation
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                We design autonomous systems that handle complex business processes end-to-end. 
                No demos, no proofs of concept—just systems that run.
              </p>
            </article>
            
            <article className="group cursor-pointer">
              <h2 className="text-3xl font-normal mb-4 group-hover:italic transition-all">
                Custom AI Agents
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                Domain-specific agents trained on your business context. They understand your 
                operations and can act on your behalf.
              </p>
            </article>
            
            <article className="group cursor-pointer">
              <h2 className="text-3xl font-normal mb-4 group-hover:italic transition-all">
                Integration & Deployment
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                We integrate AI into your existing infrastructure and deploy with proper 
                monitoring, alerting, and maintenance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="h-px bg-[#E5E5E5]"></div>
      </div>

      {/* Approach */}
      <section className="py-32 px-6 bg-[#1A1A1A] text-[#FDFBF7]">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-16">
            Our Approach
          </p>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-4xl font-serif italic text-gray-600">01</span>
              <h3 className="text-xl font-normal mt-4 mb-4">We listen first.</h3>
              <p className="text-gray-400 leading-relaxed">
                We spend time understanding your operations before proposing solutions. 
                Often, the best AI solution is none at all.
              </p>
            </div>
            
            <div>
              <span className="text-4xl font-serif italic text-gray-600">02</span>
              <h3 className="text-xl font-normal mt-4 mb-4">We ship increments.</h3>
              <p className="text-gray-400 leading-relaxed">
                Instead of big-bang deployments, we ship working systems that improve 
                over time. You see results from day one.
              </p>
            </div>
            
            <div>
              <span className="text-4xl font-serif italic text-gray-600">03</span>
              <h3 className="text-xl font-normal mt-4 mb-4">We stay for the long haul.</h3>
              <p className="text-gray-400 leading-relaxed">
                Deployment is just the beginning. We maintain and improve systems 
                for years, not just until launch day.
              </p>
            </div>
            
            <div>
              <span className="text-4xl font-serif italic text-gray-600">04</span>
              <h3 className="text-xl font-normal mt-4 mb-4">We measure outcomes.</h3>
              <p className="text-gray-400 leading-relaxed">
                Success is measured in results: time saved, errors reduced, revenue 
                impacted. Not "engagement metrics."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
            Get in Touch
          </p>
          <h2 className="text-4xl font-normal mb-8">
            Let{"'"}s talk about your workflow.
          </h2>
          <p className="text-gray-600 mb-12">
            We{"'"}ll tell you what{"'"}s possible and what makes sense.
          </p>
          <Link 
            href="/contact" 
            className="inline-block font-sans text-sm tracking-wide bg-[#1A1A1A] text-[#FDFBF7] px-10 py-4 hover:bg-gray-800 transition-colors"
          >
            SCHEDULE A CALL
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>JourdanLabs</p>
          <p>Remote-first</p>
        </div>
      </footer>
    </div>
  )
}
