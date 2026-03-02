import Marquee from '../../components/homepage/Marquee'
import Nav from '../../components/homepage/Nav'
import Footer from '../../components/homepage/Footer'

export default function ContactPage() {
  return (
    <>
      <Marquee />
      <Nav />
      <div className="flex min-h-screen flex-col">
        <div className="mt-12 flex-grow px-12 py-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="contact-title mb-8 text-center">Contact Us</h1>
            <div className="text-center">
              <p className="contact-body text-black">Contact form and information coming soon...</p>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  )
}
