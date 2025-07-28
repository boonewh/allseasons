import { PaintBrushIcon, BeakerIcon, WrenchScrewdriverIcon, ClockIcon, TruckIcon, CheckIcon, ExclamationTriangleIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Industrial Painting Services - All Seasons Foam Coatings & Services',
  description: 'Professional industrial painting for oil and gas operations. High-performance coatings for tanks, vessels, pipes, and equipment. Oilfield tough quality.',
}

export default function PaintingPage() {
  const paintingServices = [
    {
      title: "Tanks & Vessels",
      description: "Internal linings and exterior coatings for maximum corrosion and chemical resistance in demanding environments.",
      icon: ShieldCheckIcon,
      features: ["Internal linings", "Exterior protection", "Chemical resistance", "Corrosion prevention"],
      image: "tanks.jpg"
    },
    {
      title: "Pipe Spools & Racks", 
      description: "Shop or field-applied protective coatings designed to withstand abrasion and harsh weather conditions.",
      icon: WrenchScrewdriverIcon,
      features: ["Shop application", "Field coating", "Weather protection", "Abrasion resistance"],
      image: "pipe-spools.jpg"
    },
    {
      title: "Rigs & Platforms",
      description: "Heavy-duty coatings engineered to perform in the harshest oilfield environments with constant use.",
      icon: CogIcon,
      features: ["Harsh environment coating", "Constant use durability", "Weather resistance", "Long-term protection"],
      image: "oil-rig.jpg"
    },
    {
      title: "Equipment Skids",
      description: "Professional finishes that enhance equipment longevity while improving visibility and safety identification.",
      icon: TruckIcon,
      features: ["Longevity enhancement", "Visibility improvement", "Safety identification", "Professional finish"],
      image: "skid.jpg"
    },
    {
      title: "Trailers & Support Equipment",
      description: "Clean, protective coatings that keep your mobile equipment field-ready and deployment-prepared.",
      icon: ClockIcon,
      features: ["Mobile equipment", "Field-ready finish", "Deployment prep", "Professional appearance"],
      image: "trailers.jpg"
    },
    {
      title: "Structural Steel & More",
      description: "From containment walls to compressor stations—comprehensive coating solutions for any industrial structure.",
      icon: BeakerIcon,
      features: ["Containment walls", "Compressor stations", "Custom applications", "Complete coverage"],
      image: "steel.jpg"
    }
  ];

  const qualityStandards = [
    "Industry-approved materials only",
    "Proven application techniques", 
    "Certified professional applicators",
    "Quality control at every stage",
    "Environmental compliance standards",
    "Long-term performance guarantee"
  ];

  const paintingBenefits = [
    {
      title: "Asset Protection",
      description: "Shield your valuable equipment from corrosion, chemicals, and environmental damage.",
      icon: ShieldCheckIcon
    },
    {
      title: "Extended Service Life",
      description: "Professional coatings significantly extend the operational life of your equipment.",
      icon: ClockIcon
    },
    {
      title: "Improved Safety",
      description: "Enhanced visibility and identification through professional color coding and marking.",
      icon: ExclamationTriangleIcon
    },
    {
      title: "Professional Appearance",
      description: "Maintain a professional image that reflects your commitment to quality operations.",
      icon: PaintBrushIcon
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Industrial Painting Services Built for Oil & Gas
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                At All Seasons Foam Coatings & Services, we provide professional industrial painting services that protect your assets, extend service life, and keep your site looking sharp. With decades of experience in the oil and gas sector, our crews are trained to handle high-performance coatings on a wide range of surfaces and structures—safely and efficiently.
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
            <div className="relative">
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/painting.jpg"
                  alt="Industrial painting crew working on oil and gas equipment"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-4 rounded-xl font-bold text-lg transform -rotate-12">
                  Oilfield Tough!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner with Paint Theme */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-12 border-t-8 border-b-8 border-black">
        <div className="max-w-10xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-4xl font-semibold text-white leading-relaxed">
            Quality coatings. Professional crews. Oilfield tough. That&apos;s the All Seasons way.
          </h2>
        </div>
      </section>

      {/* What We Paint Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-600 mb-6">What We Paint</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From tanks to trailers, pipes to platforms—if it needs coating, we cover it with industry-approved materials and proven techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintingServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-orange-500 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/images/${service.image}`}
                    alt={`${service.title} painting service`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-2 rounded-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-600 mb-8 leading-tight">Industry-Approved Materials & Proven Techniques</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We use only the highest quality, industry-approved coating materials and time-tested application methods to ensure your equipment gets the protection it deserves—and the finish that lasts.
              </p>
              <div className="space-y-4">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/images/painting2.jpg"
                    alt="Professional painting equipment and materials"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                  <Image
                    src="/images/allseasons_spray.jpg"
                    alt="Coating application in progress"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-xl">
                <h3 className="text-xl font-bold mb-2">Quality Promise</h3>
                <p className="text-blue-100 text-sm">
                  Every coating application meets or exceeds industry standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 border-t-4 border-b-4 border-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Why Professional Painting Matters</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Quality industrial painting isn&apos;t just about appearance—it&apos;s about protection, performance, and profitability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paintingBenefits.map((benefit, index) => (
              <div key={index} className="text-center group h-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 h-full flex flex-col transform hover:scale-105">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-xl inline-block mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed flex-grow">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="pt-10 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-600 mb-6">The All Seasons Difference</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See the transformation that professional industrial painting brings to oilfield equipment
            </p>
          </div>
          
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="relative group">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/photo9.jpg"
                  alt="Equipment before professional painting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                  BEFORE
                </div>
              </div>
              <p className="text-center mt-4 text-gray-600">Weathered, unprotected equipment</p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-full shadow-xl">
                <PaintBrushIcon className="h-16 w-16" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/photo10.jpg"
                  alt="Equipment after professional painting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                  AFTER
                </div>
              </div>
              <p className="text-center mt-4 text-gray-600">Protected, professional finish</p>
            </div>
          </div>*/}
        </div> 
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background with paint splash effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full opacity-30 transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full opacity-30 transform -translate-x-24 translate-y-24"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready for Professional Industrial Painting?</h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t let your equipment suffer from inadequate protection. Contact All Seasons today for industrial painting that&apos;s built to last in the toughest oilfield conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg border-2 border-black hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Painting Quote
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