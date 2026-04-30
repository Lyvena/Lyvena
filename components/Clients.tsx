import Image from 'next/image'

export default function Clients() {
  const clients = [
    {
      name: 'NEAR Protocol',
      logo: '/logos/near-protocol.svg',
      url: 'https://near.org'
    },
    {
      name: 'SuperWorldapp',
      logo: '/logos/superworldapp.svg',
      url: 'https://superworldapp.com'
    }
  ]

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent/80">
            Products and ecosystem
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 items-center justify-items-center md:grid-cols-2">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full h-32 flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  priority
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
