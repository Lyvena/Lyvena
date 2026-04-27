import Link from 'next/link'

const navItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Proof', href: '/#proof' },
  { label: 'About', href: '/about' },
  { label: 'Notes', href: '/stories' },
  { label: 'Contact', href: '/#contact' },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-charcoal/10 bg-neutral-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-12 lg:px-24">
        <Link href="/" className="text-2xl font-display font-bold text-primary transition-opacity hover:opacity-80">
          Lyvena
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-charcoal/80 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/#contact" className="btn-primary px-5 py-3 text-sm">
          Book a Strategy Call
        </Link>
      </div>
    </header>
  )
}
