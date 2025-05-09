import Image from "next/image";
import { assets } from "@/components/assets";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={assets.logoImage}
              alt="HealthCheck Annual logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <nav className={styles.navigation}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="#upload" className={styles.primary}>
              Upload Records
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1>Track Your Health Journey Over Time</h1>
              <p>
                Upload your annual physical exam PDFs and visualize your health
                progress over 5 years. Make informed decisions with personalized
                health analytics.
              </p>
              <div className={styles.ctas}>
                <a href="#upload" className={styles.primary}>
                  Upload Your Records
                </a>
                <a href="#learn-more" className={styles.secondary}>
                  See How It Works
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src={assets.boyngirl}
                alt="Health tracking dashboard"
                width={500}
                height={400}
                className={styles.doctorImage}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={styles.features}>
          <div className={styles.container}>
            <h2>Powerful Health Tracking Tools</h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src={assets.schedulesvg}
                    alt="PDF icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h3>Easy PDF Uploads</h3>
                <p>
                  Simply upload your annual physical exam PDFs and our system
                  will automatically extract and organize your health data.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src={assets.timesvg}
                    alt="Graph icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h3>Interactive Visualizations</h3>
                <p>
                  View your 5-year health trends with intuitive bar graphs and
                  charts that make it easy to spot changes in key health
                  metrics.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src={assets.caresvg}
                    alt="Shield icon"
                    width={48}
                    height={48}
                  />
                </div>
                <h3>Secure Storage</h3>
                <p>
                  All your health records are encrypted and securely stored with
                  HIPAA-compliant technology for complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={styles.howItWorks}>
          <div className={styles.container}>
            <h2>How It Works</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3>Upload</h3>
                <p>Upload your physical exam PDFs from the past 5 years.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3>Process</h3>
                <p>
                  Our system extracts key health metrics from your documents.
                </p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3>Visualize</h3>
                <p>
                  See your health trends displayed in easy-to-understand bar
                  graphs and charts.
                </p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3>Monitor</h3>
                <p>
                  Track changes over time and receive personalized insights
                  about your health journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={styles.testimonials}>
          <div className={styles.container}>
            <h2>What Our Users Say</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.testimonialAvatar}>
                    <Image
                      src="/avatar-1.jpg"
                      alt="User avatar"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4>Sarah M.</h4>
                    <p>User since 2022</p>
                  </div>
                </div>
                <blockquote>
                  &ldquo;Being able to see my cholesterol levels trending down
                  over the past 3 years has been incredibly motivating. The
                  visual progress keeps me committed to my health goals.&rdquo;
                </blockquote>
              </div>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.testimonialAvatar}>
                    <Image
                      src="/avatar-2.jpg"
                      alt="User avatar"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4>Michael T.</h4>
                    <p>User since 2021</p>
                  </div>
                </div>
                <blockquote>
                  &ldquo;As someone with a family history of diabetes, tracking
                  my glucose levels over time has been invaluable. The bar
                  graphs make it easy to discuss trends with my doctor.&rdquo;
                </blockquote>
              </div>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.testimonialAvatar}>
                    <Image
                      src="/avatar-3.jpg"
                      alt="User avatar"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4>Jennifer L.</h4>
                    <p>User since 2023</p>
                  </div>
                </div>
                <blockquote>
                  &ldquo;I love having all my health records in one place.
                  Uploading the PDFs was simple, and now I can actually see how
                  my lifestyle changes have impacted my blood pressure.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={styles.faq}>
          <div className={styles.container}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h3>What types of health metrics can the system track?</h3>
                <p>
                  Our system extracts and tracks key metrics including blood
                  pressure, cholesterol levels, glucose, BMI, vitamin levels,
                  and other standard measurements from your annual physical
                  exams.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h3>How secure is my health data?</h3>
                <p>
                  We use HIPAA-compliant encryption and secure storage systems.
                  Your data is never shared with third parties without your
                  explicit consent.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h3>
                  Can I upload other medical documents besides annual physicals?
                </h3>
                <p>
                  Currently, our system is optimized for annual physical exam
                  reports, but we&apos;re working to expand compatibility with
                  other medical document types.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h3>How far back can I track my health data?</h3>
                <p>
                  Our platform is designed to visualize up to 5 years of health
                  data, allowing you to see meaningful long-term trends in your
                  health metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="upload" className={styles.cta}>
          <div className={styles.container}>
            <h2>Start Tracking Your Health Journey Today</h2>
            <p>
              Upload your physical exam PDFs and gain valuable insights into
              your health trends over time.
            </p>
            <div className={styles.ctaForm}>
              <input
                type="email"
                placeholder="Enter your email to get started"
                className={styles.emailInput}
              />
              <button className={styles.primary}>Create Account</button>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <Image
                  src="/check-icon.svg"
                  alt="Check icon"
                  width={18}
                  height={18}
                />
                <span>Free basic account available</span>
              </div>
              <div className={styles.ctaFeature}>
                <Image
                  src="/check-icon.svg"
                  alt="Check icon"
                  width={18}
                  height={18}
                />
                <span>Cancel anytime</span>
              </div>
              <div className={styles.ctaFeature}>
                <Image
                  src="/check-icon.svg"
                  alt="Check icon"
                  width={18}
                  height={18}
                />
                <span>HIPAA compliant</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <h3>HealthCheck Annual</h3>
              <p>
                Empowering you to track, understand, and improve your health
                with data-driven insights.
              </p>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Technology</a>
                </li>
                <li>
                  <a href="#">Data Privacy</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Health Blog</a>
                </li>
                <li>
                  <a href="#">User Guide</a>
                </li>
                <li>
                  <a href="#">API Documentation</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Contact</h4>
              <ul>
                <li className={styles.contactItem}>
                  <Image
                    src="/phone-icon.svg"
                    alt="Phone icon"
                    width={16}
                    height={16}
                  />
                  <span>1-800-HEALTH-CHECK</span>
                </li>
                <li>
                  <a href="mailto:support@healthcheck.com">
                    support@healthcheck.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 HealthCheck Annual. All rights reserved.</p>
            <div className={styles.footerLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
