import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
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
            <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  By accessing and using this website and services provided by Obed Makori ("we," "us," or "our"), 
                  you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Description of Services</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We provide professional data analytics and business intelligence services including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Data analysis and statistical modeling</li>
                  <li>Business intelligence dashboard development</li>
                  <li>Machine learning model development and deployment</li>
                  <li>Database design and ETL pipeline implementation</li>
                  <li>Data visualization and reporting solutions</li>
                  <li>Consulting and strategic advisory services</li>
                  <li>Training and educational content</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. User Responsibilities</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Use the services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not use the services to transmit harmful or malicious content</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Intellectual Property Rights</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  All content, materials, and intellectual property on this website and in our services 
                  are owned by or licensed to us. This includes but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Website design, layout, and functionality</li>
                  <li>Written content, articles, and blog posts</li>
                  <li>Code, algorithms, and technical implementations</li>
                  <li>Graphics, images, and visual elements</li>
                  <li>Trademarks, service marks, and logos</li>
                  <li>Proprietary methodologies and processes</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Service Level Agreement</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We strive to provide high-quality services and commit to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Timely project delivery according to agreed schedules</li>
                  <li>Professional communication and regular updates</li>
                  <li>Quality assurance and testing of deliverables</li>
                  <li>Post-delivery support and maintenance (as agreed)</li>
                  <li>Confidentiality and data security measures</li>
                  <li>Industry best practices and standards compliance</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Payment Terms</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>For professional services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment terms will be specified in individual service agreements</li>
                  <li>Invoices are typically due within 30 days of issuance</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refunds are handled on a case-by-case basis</li>
                  <li>Disputed charges must be reported within 30 days</li>
                  <li>All prices are subject to applicable taxes</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Confidentiality and Data Protection</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We understand the sensitive nature of business data and commit to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintaining strict confidentiality of client information</li>
                  <li>Implementing appropriate security measures for data protection</li>
                  <li>Using client data only for agreed-upon purposes</li>
                  <li>Returning or destroying client data upon project completion</li>
                  <li>Complying with relevant data protection regulations</li>
                  <li>Signing additional NDAs when required</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Limitation of Liability</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, we shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Business interruption or system downtime</li>
                  <li>Third-party claims or damages</li>
                  <li>Errors or omissions in deliverables</li>
                  <li>Delays due to circumstances beyond our control</li>
                </ul>
                <p className="mt-3">
                  Our total liability shall not exceed the amount paid for the specific service 
                  that gave rise to the claim.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Termination</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>Either party may terminate services under the following conditions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Material breach of terms that remains uncured after 30 days notice</li>
                  <li>Insolvency or bankruptcy of either party</li>
                  <li>Mutual agreement to terminate</li>
                  <li>Completion of project deliverables</li>
                </ul>
                <p className="mt-3">
                  Upon termination, all outstanding invoices become immediately due, 
                  and each party shall return confidential information.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Disclaimer of Warranties</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Our services are provided "as is" without warranties of any kind. We disclaim all 
                  warranties, express or implied, including but not limited to warranties of 
                  merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  While we strive for accuracy and reliability, we do not guarantee that our 
                  services will be error-free, uninterrupted, or meet all specific requirements.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Indemnification</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  You agree to indemnify and hold harmless Obed Makori from and against any claims, 
                  liabilities, damages, losses, and expenses arising out of or in any way connected 
                  with your use of our services or violation of these terms.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Governing Law</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  These terms shall be governed by and construed in accordance with the laws of Kenya. 
                  Any disputes arising from these terms or our services shall be subject to the 
                  exclusive jurisdiction of the courts of Kenya.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. Modifications to Terms</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted on 
                  this page with an updated revision date. Continued use of our services after 
                  changes constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">14. Contact Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  If you have any questions about these terms of service, please contact us:
                </p>
                <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                  <p><strong>Email:</strong> makori.obed@example.com</p>
                  <p><strong>Phone:</strong> +254 951 227 778</p>
                  <p><strong>Address:</strong> Nairobi, Kenya</p>
                  <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/obed-makori/</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">15. Severability</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  If any provision of these terms is found to be unenforceable or invalid, 
                  such provision shall be limited or eliminated to the minimum extent necessary 
                  so that these terms shall otherwise remain in full force and effect.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;