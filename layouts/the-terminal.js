// THE TERMINAL - CLI aesthetic
export default function TheTerminal({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-[#0d1117] text-green-400 font-mono p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-1 text-sm">
          <p><span className="text-blue-400">$</span> ./about.sh</p>
          <p className="text-white text-2xl font-bold">{businessName}</p>
          <p className="text-neutral-400 mb-4">{tagline}</p>
          <p><span className="text-blue-400">$</span> cat services.txt</p>
          {services?.map((s, i) => (<p key={i} className="pl-4"><span className="text-yellow-400">{i+1}.</span> {s.title} - {s.description}</p>))}
          <p className="mt-4"><span className="text-blue-400">$</span> contact</p>
          <p className="pl-4">phone: {phone}</p>
          <p className="pl-4">email: {contactEmail}</p>
          <p className="mt-4"><span className="text-blue-400">$</span> <span className="animate-pulse">_</span></p>
        </div>
      </div>
    </div>
  )
}
