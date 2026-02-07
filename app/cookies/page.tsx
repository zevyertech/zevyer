import { FuturisticFooter } from "@/components/ui/futuristic-footer"

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600">How and why we use cookies on Zevyer.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8 text-gray-700 leading-relaxed">
          <p>
            We use cookies and similar technologies to improve site performance, analyze usage, and personalize your
            experience. You can control cookies through your browser settings.
          </p>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Essential Cookies</h2>
            <p>These cookies are required for core site functionality and security.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Analytics Cookies</h2>
            <p>These help us understand how visitors use the site so we can improve performance and usability.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Manage Preferences</h2>
            <p>
              You can disable cookies in your browser, though some features may not function properly without them.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact</h2>
            <p>
              Questions about cookies? Email{" "}
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
