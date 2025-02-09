import Image from "next/image"
import Link from "next/link"

const menuLinks = [
  { name: "All Items", href: "/menu" },
  { name: "Bowls", href: "/menu/bowls" },
  { name: "Sides", href: "/menu/sides" },
  { name: "Drinks", href: "/menu/drinks" },
]

const locationLinks = [
  { name: "Find a Store", href: "/locations" },
  { name: "Delivery", href: "/delivery" },
  { name: "Catering", href: "/catering" },
]

const Footer = () => {
  return (
    <footer className="w-full px-6 py-12 text-[#2d1609]">
        <div className="bg-[#efe5d9] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Brand Section */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  <Image src="/images/logo.png" alt="덮밥장사장 Logo" fill className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-2xl font-bold">덮밥장사장</span>
                  <span className="text-sm md:text-base text-[#2d1609]/80">Jangsajang Deobap</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#2d1609]/70 max-w-sm">
                Authentic Korean bowls made with fresh ingredients and served with love.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Connect With Us</h3>
                  <div className="flex items-center gap-3">
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <Image
                        src="/icons/instagram.svg"
                        alt="Follow us on Instagram"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </Link>
                    <Link
                      href="https://xiaohongshu.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <Image
                        src="/icons/xiaohongshu.svg"
                        alt="Follow us on Xiaohongshu"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </Link>
                  </div>
                </div>

                {/* Menu Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Menu</h3>
                  <ul className="space-y-2">
                    {menuLinks.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-[#2d1609]/70 hover:text-[#2d1609] transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Location Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Locations</h3>
                  <ul className="space-y-2">
                    {locationLinks.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-[#2d1609]/70 hover:text-[#2d1609] transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-[#2d1609]/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-[#2d1609]/70">
                © {new Date().getFullYear()} 덮밥장사장. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-[#2d1609]/70">
                <Link href="/privacy" className="hover:text-[#2d1609] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-[#2d1609] transition-colors">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="hover:text-[#2d1609] transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>

    </footer>
  )
}

export default Footer

