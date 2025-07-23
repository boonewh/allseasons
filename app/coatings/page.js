import { ShieldCheckIcon, BeakerIcon, WrenchScrewdriverIcon, ClockIcon, TruckIcon, CheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Protective Coatings - All Seasons Foam Coatings & Services',
  description: 'High-performance protective coatings for oil and gas industry. Over 20 years of expertise in polyurea, epoxy, urethane, and specialty coating systems.',
}

export default function CoatingsPage() {
  const coatingTypes = [
    {
      title: "Polyurea Coatings",
      description: "Fast-set, high-build systems ideal for secondary containment, tank linings, and abrasion protection.",
      icon: ShieldCheckIcon,
      features: ["Rapid cure times", "High abrasion resistance", "Seamless application", "Chemical resistance"]
    },
    {
      title: "Epoxy Systems", 
      description: "Durable, chemical-resistant solutions for floors, vessels, and processing equipment.",
      icon: BeakerIcon,
      features: ["Chemical resistance", "High durability", "Floor applications", "Vessel protection"]
    },
    {
      title: "Urethane Coatings",
      description: "Flexible, UV-stable options for exterior surfaces and high-movement environments.",
      icon: WrenchScrewdriverIcon,
      features: ["UV stability", "Flexibility", "Exterior durability", "Movement tolerance"]
    },
    {
      title: "Zinc-Rich Primers",
      description: "Long-term corrosion protection for structural steel and critical infrastructure.",
      icon: ShieldCheckIcon,
      features: ["Corrosion protection", "Steel compatibility", "Long-term performance", "Infrastructure grade"]
    },
    {
      title: "Tank & Vessel Linings",
      description: "Full internal and external coating systems designed to withstand harsh chemicals and high pressures.",
      icon: TruckIcon,
      features: ["Internal/external systems", "Chemical resistance", "Pressure tolerance", "Complete protection"]
    },
    {
      title: "Specialty Coatings",
      description: "Custom solutions for high-heat, immersion, and other challenging applications.",
      icon: ClockIcon,
      features: ["High-heat tolerance", "Immersion applications", "Custom formulations", "Challenging environments"]
    }
  ];

  const benefits = [
    "Over 20 years of coating expertise",
    "Certified professional applicators", 
    "Proven systems and materials",
    "Turnkey application services",
    "Regulatory compliance support",
    "Extended asset service life"
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 border-b-4 border-black">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Protective Coating Solutions
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                At All Seasons Foam Coatings & Services, we specialize in delivering high-performance protective coatings tailored to the demanding conditions of the oil and gas industry. With over 20 years of experience, our team has the expertise to apply a wide range of coatings that protect your assets, extend service life, and ensure regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <button className="bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg border-2 border-black hover:bg-black transition-all duration-300 shadow-lg">
                      Request Quote
                    </button>
                  </Link>
                </div>
                <a href="tel:+14324385806">
                  <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
                    Call 432-438-5806
                  </button>
                </a>
              </div>
            </div>
            <div className="relative min-h-[700px]">
            <Image
                src="/images/prot-coating.jpg"
                alt="All Season Construction foam coating operation"
                fill
                className="rounded-2xl object-cover w-full h-[250px] md:h-[350px] lg:h-[450px]"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Coating Systems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-600 mb-6">Our Capabilities Include</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive coating solutions engineered for the most demanding oilfield environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coatingTypes.map((coating, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-100 hover:border-blue-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-xl">
                    <coating.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{coating.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                  {coating.description}
                </p>
                <div className="space-y-2">
                  {coating.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-600 mb-8 leading-tight">Turnkey Application Services</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Whether you&apos;re protecting new infrastructure or extending the life of existing equipment, we provide turnkey application services backed by certified professionals and proven systems.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg border-l-4 border-blue-700 shadow-sm">
                    <CheckIcon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
            <div className="relative min-h-[300px]">
              <Image
                  src="/images/protective-coatings.jpg"
                  alt="All Season Construction foam coating operation"
                  fill
                  className="rounded-2xl object-contain"
              />
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Quality Guarantee</h3>
                <p className="text-blue-100 leading-relaxed">
                  Every coating application is backed by our commitment to quality and decades of proven performance in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 border-t-4 border-b-4 border-black text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-8 leading-tight">Why All Seasons?</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Two decades of oilfield experience means we understand your challenges and deliver solutions that work in the real world.
              </p>
              <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                <div className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl text-left">
                  <ShieldCheckIcon className="h-8 w-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">Industry Expertise</h4>
                    <p className="text-blue-100">Deep understanding of oilfield conditions and requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl text-left">
                  <WrenchScrewdriverIcon className="h-8 w-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">Proven Systems</h4>
                    <p className="text-blue-100">Time-tested coating solutions with documented performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl text-left">
                  <TruckIcon className="h-8 w-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">Mobile Teams</h4>
                    <p className="text-blue-100">Ready to respond quickly to projects nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Protect Your Investment. Perform with Confidence.</h2>
          <h3 className="text-3xl font-bold mb-8">Partner with All Seasons.</h3>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Ready to protect your assets with proven coating solutions? Contact our team for a consultation on your specific application needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg border-2 border-black hover:bg-black transition-all duration-300 shadow-lg">
                  Request Quote
                </button>
              </Link>
            </div>
            <a href="tel:+14324385806">
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
                Call 432-438-5806
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}