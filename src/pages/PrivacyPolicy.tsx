import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal information such as your name, email address, and contact details</li>
                  <li>Professional information including your company, job title, and industry</li>
                  <li>Technical information such as IP address, browser type, and device information</li>
                  <li>Usage data including pages visited, time spent on site, and interaction patterns</li>
                  <li>Communication data when you contact us via email, contact forms, or social media</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and provide customer service</li>
                  <li>Communicate with you about products, services, offers, and events</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Information Sharing and Disclosure</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With service providers who assist us in operating our website and conducting business</li>
                  <li>When required by law or to respond to legal process</li>
                  <li>To protect our rights, property, or safety, or that of our users or others</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                  <li>With your explicit consent for any other purpose</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Data Security</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure hosting environments and backup procedures</li>
                  <li>Employee training on data protection and privacy</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Cookies and Tracking Technologies</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We use cookies and similar tracking technologies to collect and track information about 
                  your use of our services. You can control cookies through your browser settings:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand user behavior</li>
                  <li>Performance cookies to improve website speed and reliability</li>
                  <li>Marketing cookies for personalized content and advertisements</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Data Retention</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We retain personal information for as long as necessary to fulfill the purposes outlined 
                  in this privacy policy, unless a longer retention period is required or permitted by law. 
                  Factors we consider include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The nature and sensitivity of the information</li>
                  <li>Legal and regulatory requirements</li>
                  <li>Business and operational needs</li>
                  <li>User account status and activity</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Your Rights and Choices</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access: Request access to your personal information</li>
                  <li>Correction: Request correction of inaccurate information</li>
                  <li>Deletion: Request deletion of your personal information</li>
                  <li>Portability: Request transfer of your information to another service</li>
                  <li>Restriction: Request limitation of processing of your information</li>
                  <li>Objection: Object to processing of your personal information</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. International Data Transfers</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your information in accordance 
                  with applicable data protection laws.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Children's Privacy</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly 
                  collect personal information from children under 13. If we become aware that we have 
                  collected personal information from a child under 13, we will take steps to delete such information.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Changes to This Policy</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new privacy policy on this page and updating the "Last updated" date. 
                  We encourage you to review this policy periodically.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Contact Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  If you have any questions about this privacy policy or our data practices, 
                  please contact us at:
                </p>
                <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                  <p><strong>Email:</strong> makori.obed@example.com</p>
                  <p><strong>Phone:</strong> +254 951 227 778</p>
                  <p><strong>Address:</strong> Nairobi, Kenya</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;