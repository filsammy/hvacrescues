export const metadata = {
  title: 'Terms of Service | HVAC Rescue LLC',
  description: 'Terms of Service for HVAC Rescue LLC website.',
};

export default function TermsOfService() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold">Terms of Service</h1>
          <p className="mt-2 text-blue-100">Last updated: March 29, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing and using the HVAC Rescue LLC website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">2. Services</h2>
          <p className="text-gray-700 mb-6">
            HVAC Rescue LLC provides HVAC repair, replacement, maintenance, and related services in Walker and Cullman Counties, Alabama. Information on this website is for general informational purposes and does not constitute a binding service agreement.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">3. Contact Form Submissions</h2>
          <p className="text-gray-700 mb-6">
            Submitting a contact or service request form on our website does not guarantee service. It is a request for us to contact you. All service agreements are made separately between you and HVAC Rescue LLC.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">4. Accuracy of Information</h2>
          <p className="text-gray-700 mb-6">
            We make reasonable efforts to ensure the information on this website is accurate and up to date. However, we do not guarantee the completeness or accuracy of all content, including pricing, service availability, or descriptions.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            HVAC Rescue LLC shall not be held liable for any damages arising from the use of this website. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-700 mb-6">
            All content on this website, including text, images, logos, and design, is the property of HVAC Rescue LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any content without prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">7. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">8. Contact Us</h2>
          <p className="text-gray-700 mb-2">If you have questions about these terms, contact us at:</p>
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
