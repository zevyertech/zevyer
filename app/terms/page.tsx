import { FuturisticFooter } from "@/components/ui/futuristic-footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">The terms governing use of Zevyer services and website.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8 text-gray-700 leading-relaxed">
          <p>
            By accessing or using our website and services, you agree to these terms. Please read them carefully before
            using the site.
          </p>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Use of Services</h2>
            <p>
              You agree to use the website lawfully and not to misuse, disrupt, or attempt unauthorized access to any
              part of the service.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Intellectual Property</h2>
            <p>
              All content, branding, and materials on this site are owned by Zevyer unless otherwise noted. You may not
              use them without written permission.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
            <p>
              We strive for accuracy, but we do not guarantee the site will always be error-free. We are not liable for
              damages arising from use of the website.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact</h2>
            <p>
              For questions regarding these terms, email{" "}
              <a href="mailto:hello@zevyer.com" className="text-indigo-600 hover:text-indigo-700">
                hello@zevyer.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </main>
  )
}
