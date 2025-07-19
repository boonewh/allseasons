import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us - All Season Construction',
  description: 'Get in touch for your construction project quote.',
}

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Ready to start your project? Get in touch today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">CONTACT INFO</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">Placeholder</p>
              </div>
              <div>
                <h3 className="font-semibold">Main Office</h3>
                <p className="text-gray-600">Placeholder</p>
              </div>
              <div>
                <h3 className="font-semibold">Field Office</h3>
                <p className="text-gray-600">Placeholder</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}