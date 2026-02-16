import Link from 'next/link'
import { enterprisePrototypes, solutionsArchitecture, proposalSites } from '@/lib/portfolio'
import { PortfolioItem } from '@/types/project'

function ProjectCard({ project }: { project: PortfolioItem }) {
  return (
    <article className="border-b border-[#E5E5E5] pb-8 mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-sans tracking-wider text-gray-500 uppercase">
          {project.company || 'JourdanLabs'}
        </span>
        {project.year && (
          <span className="text-xs text-gray-400">{project.year}</span>
        )}
      </div>
      <h3 className="text-xl font-normal mb-2">{project.title}</h3>
      {project.tagline && (
        <p className="text-gray-600 mb-4">{project.tagline}</p>
      )}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 5).map((t) => (
            <span key={t} className="text-xs font-sans bg-gray-100 px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-4 text-sm">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="underline">
            View Live
          </a>
        )}
        <Link href={`/projects/${project.slug}`} className="underline">
          Details
        </Link>
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="underline">
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default function Work() {
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
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">Work</p>
          <h1 className="text-5xl font-normal mb-8">Selected Projects</h1>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-normal mb-8">Enterprise Prototypes</h2>
          {enterprisePrototypes.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          
          <h2 className="text-2xl font-normal mt-16 mb-8">Solutions Architecture</h2>
          {solutionsArchitecture.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          
          <h2 className="text-2xl font-normal mt-16 mb-8">Proposal Sites</h2>
          {proposalSites.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
