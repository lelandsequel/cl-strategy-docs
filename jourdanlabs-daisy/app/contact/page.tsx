import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-serif">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-medium tracking-tight">JourdanLabs</Link>
          <div className="flex gap-8 text-sm font-sans tracking-wide">
            <Link href="/work" className="hover:text-gray-600">Work</Link>
            <Link href="/about" className="hover:text-gray-600">About</Link>
            <Link href="/contact" className="hover:text-gray-600">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">Contact</p>
          <h1 className="text-5xl font-normal mb-8">Let{"'"}s Talk</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Interested in working together? Tell us about your project.
          </p>
          
          <a 
            href="mailto:hello@jourdanlabs.com" 
            className="inline-block font-sans text-sm tracking-wide bg-[#1A1A1A] text-[#FDFBF7] px-10 py-4 hover:bg-gray-800 transition-colors"
          >
            HELLO@JOURDANLABS.COM
          </a>
        </div>
      </section>
    </div>
  )
}
