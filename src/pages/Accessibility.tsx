import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Accessibility = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-6 pb-16 md:pb-24 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl text-gold mb-8 pt-16 md:pt-24">
            Accessibility Statement
          </h1>

          <div className="space-y-8 text-lg leading-relaxed text-foreground/90">
          <p>
            Yuki is committed to providing an inclusive and accessible experience to everyone, including those with disabilities.
          </p>

          <p>
            Our commitment is guided by our accessibility policy to ensure that people with disabilities have full and equal opportunity to access and benefit from its products and information provided on the website using the Web Content Accessibility Guidelines (WCAG) version 2.2 AA.
          </p>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-gold mb-4">
              Support / Feedback
            </h2>
            <p className="mb-4">
              <strong>How can we provide support and improve accessibility?</strong>
            </p>
            <p className="mb-4">
              We welcome your questions and feedback on the accessibility of our website. Please let us know how we can assist you if you encounter any barriers to access:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Accessibility Support Phone: Tel: 212-580-5900</li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7xTzEswwTkNwvNCsChiDKFbhl2tDJEruPyKGjX7i4pmoLpQ/viewform" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 underline">
                  Visit this page to Report a web accessibility issue
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-gold mb-4">
              Compatibility
            </h2>
            <p className="mb-4">
              Yuki is designed to be compatible with assistive technologies using current operating systems, and the last two versions of major browsers including Chrome, Safari, FireFox, and Edge. Assistive technologies include NVDA, JAWS, VoiceOver, and mobile screen readers.
            </p>
            <p>
              The website may not display optimally in older browsers or older operating systems.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-gold mb-4">
              Expertise
            </h2>
            <p>
              Our website platform provider Menusifu has retained EcomBack as an independent third-party website and digital accessibility specialist to provide consultation and periodic audits for usability and WCAG 2.2 AA conformance. EcomBack prepares a written report based on the evaluation, which helps to identify any barriers and provides remediation and recommendations to enhance the accessibility of the website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-gold mb-4">
              Testing
            </h2>
            <p>
              Automated tools and manual user testing by professionals with disabilities are utilized to continually assess and improve the usability and accessibility of the website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-gold mb-4">
              Training
            </h2>
            <p>
              We further invest in training on accessibility for our digital team to ensure our web content personnel, developers, designers, and other team members are knowledgeable and follow best practices for accessibility.
            </p>
          </section>

          <section>
            <p className="mt-4 text-sm text-foreground/70">
              <a href="https://www.ecomback.com/accessibility-shortcuts-guide-for-screen-readers-and-browsers" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 underline">
                Read this helpful Accessibility Shortcuts Guide for Screen Readers and Browsers
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-gold/20">
            <p className="text-sm text-foreground/60">
              <strong>Last updated:</strong> January 30th, 2026
            </p>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Accessibility;
