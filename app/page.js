import VideoHero from '@/components/VideoHero'
import { CheckIcon, ShieldCheckIcon, TruckIcon, ClockIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const services = [
    {
      title: "Secondary Containment Systems",
      description: "Critical spill prevention and environmental protection systems designed for oilfield operations.",
      icon: ShieldCheckIcon
    },
    {
      title: "Industrial Coatings & Linings", 
      description: "Protective coatings engineered for harsh oilfield environments and demanding conditions.",
      icon: WrenchScrewdriverIcon
    },
    {
      title: "Pipe & Valve Coatings",
      description: "Specialized protective coatings that extend equipment life in challenging environments.",
      icon: TruckIcon
    },
    {
      title: "Tank Coatings",
      description: "Complete protection systems for storage vessels and processing equipment.",
      icon: ClockIcon
    },
    {
      title: "Containment & Equipment Rentals",
      description: "Flexible rental solutions for temporary containment and project-specific requirements.",
      icon: ShieldCheckIcon
    }
  ];

  return (
    <main>
      <VideoHero />
      
      <section className="bg-gradient-to-r from-primary via-secondary to-primary py-12 border-t-8 border-b-8 border-blue-700">
        <div className="max-w-10xl mx-auto px-4 text-center">
          <h1 className="text-xl md:text-4xl font-semibold text-gray-600 leading-relaxed">
            Nationwide service backed by 20+ years of proven experience in the oil and gas industry.
          </h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-600 mb-8 leading-tight">Who We Are</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              With over 20 years of experience, All Seasons Foam Coatings & Services has been a trusted partner to the oil and gas industry, delivering reliable, long-lasting solutions that protect critical infrastructure and keep operations running safely and efficiently.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-700">
                <ShieldCheckIcon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Trusted Partner</h4>
                  <p className="text-gray-700">Over two decades serving the oil and gas industry</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-700">
                <TruckIcon className="h-8 w-8 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Mobile & Ready</h4>
                  <p className="text-gray-700">Field-ready teams responding quickly nationwide</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/allseasons_spray.jpg"
              alt="All Season Construction foam coating operation"
              width={800}
              height={600}
              className="rounded-2xl object-cover w-full h-[250px] md:h-[350px] lg:h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Legacy & Mission Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-400 to-blue-700 border-t-4 border-b-4 border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/allseasons_after.jpg"
                alt="All Season Construction foam coating operation"
                width={800}
                height={600}
                className="rounded-2xl object-cover w-full h-[250px] md:h-[350px] lg:h-[450px]"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-bold text-black mb-8 leading-tight">A Legacy of Performance</h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              For more than two decades, we have built our reputation on quality work, honest communication, and dependable service. From the Permian Basin to projects nationwide, our clients count on us to show up, get the job done, and stand behind our work.
            </p>
            <div className="bg-gradient-to-r from-primary to-secondary text-black p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                To protect, preserve, and extend the life of oilfield assets with proven coatings, containment, and service—backed by 20+ years of know-how and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-600 mb-6">What We Offer</h2>
          <p className="text-xl text-gray-600 mx-auto leading-relaxed">
            Every service we offer is built specifically for the demanding environments of oilfield operations, bringing unmatched industry knowledge to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-100 hover:border-primary">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Focused on Oil & Gas Section */}
      <section className="py-20 px-8 bg-primary relative overflow-hidden border-t-4 border-b-4 border-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-grey-600 mb-8 leading-tight">Focused on Oil & Gas</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Every service we offer is built specifically for the demanding environments of oilfield operations. Whether it is a containment system, tank and pipe coatings, or equipment rentals, we bring unmatched industry knowledge to every project.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <CheckIcon className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="text-white text-lg">Permian Basin expertise</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <CheckIcon className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="text-white text-lg">Nationwide project capability</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <CheckIcon className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="text-white text-lg">Mobile, experienced teams</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                  <iframe
                    src="https://www.youtube.com/embed/Y2Fbiufr4xQ"
                    title="All Season Construction Equipment in Action"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Field-Ready and Nationwide</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Our teams are experienced, mobile, and ready to respond quickly to the needs of operators, midstream companies, and service providers across the country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/painting-services.jpg')"
            }}
          />
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Gradient overlay (optional - can adjust opacity) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-blue-800/30 to-blue-900/30 z-10" />
        
        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Protect Your Assets?</h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a consultation on your foam coating and containment needs. Let our 20+ years of experience work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg border-2 border-black hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
              Call 940-458-9078
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}