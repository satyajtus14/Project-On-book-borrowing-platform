import Link from "next/link";
import Image from "next/image";
import facebook from "../../../public/images/facebook.png"
import instagram from "../../../public/images/instagram.png"
import twitter from "../../../public/images/twitter.png"

const Footer = () => {
  return (
    <footer className="relative mt-16 md:mt-24">
      {/* top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#131356]" />

      {/* Glow */}
      <div
        className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-tr
        from-purple-500/5 via-transparent to-blue-500/5
        dark:from-purple-500/10 dark:to-blue-500/10"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Image
                src="/images/logo.png"
                alt="BookNest logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                BookNest
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs mx-auto sm:mx-0">
              Create your library at home with BookNest. Built for speed,
              convenience, and endless reading.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/generate">Generate</Link></li>
              <li><Link href="/all-books">Gallery</Link></li>
              <li><Link href="/order">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Start borrowing books
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Borrow your first book today.
            </p>

            <Link
              href="/register"
              className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 rounded-full
              bg-black text-white dark:bg-white dark:text-black
              text-sm font-medium transition-all duration-200
              hover:scale-[1.02]"
            >
              Get Started
            </Link>
              <div >
              <h3 className="text-white font-semibold mb-3 text-lg">Social Links</h3>
              <ul className="space-y-2 text-zinc-400 flex justify-start gap-3">
                <li>
                 <Link href="https://www.facebook.com/">
                  <Image 
                  src={facebook} 
                  alt="Facebook Image"
                  width={30}
                  height={30}/>
                 </Link>
                </li>
                <li>

                 <Link href="https://www.instagram.com/">
                <Image 
                src={instagram} 
                alt="Instagram Image"
                width={30}
                height={30}
                />
                 </Link>
                </li>

                <li>
                 <Link href="https://x.com/">
                <Image 
                src={twitter} 
                alt="Twitter Image" 
                width={30}
                height={30}/>
                 </Link>
                </li>
        
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 md:mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
          <p>© {new Date().getFullYear()} BookNest. All rights reserved.</p>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;