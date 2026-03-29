import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | HVAC Rescue LLC',
  description: 'Privacy Policy for HVAC Rescue LLC — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
          <p className="mt-2 text-blue-100">Last updated: March 29, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            When you use our website contact forms, we collect the following personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address (optional)</li>
            <li>Service type(s) you are interested in</li>
            <li>Any additional message details you provide</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information you provide solely to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Respond to your service inquiry</li>
            <li>Schedule HVAC service appointments</li>
            <li>Contact you regarding your request</li>
            <li>Provide customer support</li>
          </ul>
          <p className="text-gray-700 mb-6">
            We do <strong>not</strong> sell, trade, or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">3. How We Protect Your Information</h2>
          <p className="text-gray-700 mb-6">
            Your form submissions are transmitted securely and delivered to our business email. We take reasonable measures to protect your personal information from unauthorized access or disclosure.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">4. Cookies</h2>
          <p className="text-gray-700 mb-6">
            Our website uses only essential cookies required for the site to function properly. We do not use tracking cookies, analytics cookies, or advertising cookies.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">5. Third-Party Services</h2>
          <p className="text-gray-700 mb-6">
            We use <Link href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Resend</Link> to deliver form submission emails. Your submitted data is processed through their service solely for email delivery purposes.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-6">
            You may request to view, update, or delete any personal information we have collected from you by contacting us directly at{' '}
            <a href="mailto:hvacrescues@gmail.com" className="text-[var(--color-accent)] hover:underline">hvacrescues@gmail.com</a> or by calling{' '}
            <a href="tel:2054719474" className="text-[var(--color-accent)] hover:underline">205-471-9474</a>.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">7. Changes to This Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">8. Contact Us</h2>
          <p className="text-gray-700 mb-2">If you have questions about this privacy policy, contact us at:</p>
          <div className="text-gray-700 mb-8">
            <p><strong>HVAC Rescue LLC</strong></p>
            <p>1507 Josephine St, Jasper, AL 35501</p>
            <p>Phone: <a href="tel:2054719474" className="text-[var(--color-accent)] hover:underline">205-471-9474</a></p>
            <p>Email: <a href="mailto:hvacrescues@gmail.com" className="text-[var(--color-accent)] hover:underline">hvacrescues@gmail.com</a></p>
          </div>

        </div>
      </section>
    </>
  );
}
