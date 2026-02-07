import { FuturisticFooter } from "@/components/ui/futuristic-footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">How we collect, use, and protect your information.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8 text-gray-700 leading-relaxed">
          <p>
            We respect your privacy. This policy explains what data we collect, why we collect it, and how we keep it
            secure when you interact with Zevyer.
          </p>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
            <p>
              We collect information you provide directly (such as name, email, and company details) and standard usage
              data used to improve site performance and user experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Data</h2>
            <p>
              We use data to respond to inquiries, deliver requested services, improve the website, and communicate with
              you about updates or services you request.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Protection</h2>
            <p>
              We apply security best practices to protect your data. Access is limited to authorized personnel and
              trusted service providers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact</h2>
            <p>
              Questions about privacy? Email{" "}
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
