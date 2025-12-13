import Marquee from '../homepage/Marquee'
import Nav from '../homepage/Nav'
import Footer from '../homepage/Footer'

/**
 * Contact Page
 * Displays contact information and contact form
 */
function Contact() {
  return (
    <>
      <Marquee />
      <Nav />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow mt-12 px-12 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center text-4xl font-['Arapey',serif] mb-8">Contact Us</h1>
            <div className="text-center">
              <p className="product-grid-text">Contact form and information coming soon...</p>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;

